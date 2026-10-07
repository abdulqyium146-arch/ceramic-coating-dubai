#!/usr/bin/env node
/**
 * seo-lint.mjs — SEO quality gate for ceramic-my-car.com
 *
 * Text-based checks over the repo source (no build required):
 *  1. Banned unverified claims must not appear in rendered pages/content
 *  2. Title lengths stay within Google's display limits
 *  3. Meta descriptions stay within a healthy range
 *  4. Dynamic routes set canonicals
 *  5. Sitemap index children all have route files
 *  6. Noindex tail stays out of the sitemap
 *  7. Required SEO assets exist
 *  8. Speakable selectors stay narrow
 *
 * Exit 0 = pass, 1 = failures. Warnings never fail the gate.
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const failures = []
const warnings = []
const fail = (msg) => failures.push(msg)
const warn = (msg) => warnings.push(msg)

// Recursively list files under dirs, filtered by extension.
function walk(dir, exts) {
  const out = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) {
      if (name === 'node_modules' || name === '.next') continue
      out.push(...walk(p, exts))
    } else if (exts.some((e) => name.endsWith(e))) {
      out.push(p)
    }
  }
  return out
}

const appFiles = walk(join(ROOT, 'app'), ['.tsx', '.ts'])
const contentFiles = walk(join(ROOT, 'content'), ['.ts'])
const libFiles = walk(join(ROOT, 'lib'), ['.ts'])
const srcFiles = [...appFiles, ...contentFiles, ...libFiles]
const read = (p) => readFileSync(p, 'utf8')
const rel = (p) => relative(ROOT, p)

// --- 1. Banned unverified claims -------------------------------------------
// Phrases that must not appear in anything that renders to users/crawlers.
// seo-data/ docs are allowed to DISCUSS them (audit trail).
// "Near Me" is only banned in titles/metadata — natural body copy like
// "looking for coating near me?" is legitimate user language.
const BANNED_EVERYWHERE = [
  '4.9★',
  '847 reviews',
  '847+ verified reviews',
  "Dubai's highest-rated",
  "Dubai's #1",
  '15–25 minutes',
  '15-25 minutes',
  '10–25 minutes',
  '10-25 minutes',
  'Industrial Area 1', // wrong address; correct is Area 4
  'VIN number', // invented warranty claim
  'only credentials that matter',
  'highest-rated PPF',
]
const BANNED_IN_TITLES = ['Near Me']
for (const f of srcFiles) {
  const text = read(f)
  for (const phrase of BANNED_EVERYWHERE) {
    if (text.includes(phrase)) {
      fail(`Banned phrase "${phrase}" found in ${rel(f)}`)
    }
  }
}
const titleLineRe = /(?:seoTitle|title):\s*(?:\{\s*absolute:\s*)?[`'"]([^`'"]+)[`'"]/g
for (const f of srcFiles) {
  const text = read(f)
  let m
  while ((m = titleLineRe.exec(text))) {
    for (const phrase of BANNED_IN_TITLES) {
      if (m[1].includes(phrase)) {
        fail(`Banned phrase "${phrase}" in title in ${rel(f)}: "${m[1].slice(0, 60)}…"`)
      }
    }
  }
}

// --- 2. Title lengths -------------------------------------------------------
const titleRe = /(?:seoTitle|title):\s*(?:\{\s*absolute:\s*)?[`'"]([^`'"]+)[`'"]/g
for (const f of [...appFiles, ...contentFiles]) {
  const text = read(f)
  let m
  while ((m = titleRe.exec(text))) {
    const t = m[1]
    if (t.length > 62) warn(`Title ${t.length} chars (>62) in ${rel(f)}: "${t.slice(0, 60)}…"`)
    if (t.length < 25) warn(`Title suspiciously short (${t.length}) in ${rel(f)}: "${t}"`)
  }
}

// --- 3. Meta description lengths --------------------------------------------
const descRe = /(?:seoDescription|description):\s*[`'"]([^`'"]{20,})[`'"]/g
for (const f of [...appFiles, ...contentFiles]) {
  const text = read(f)
  let m
  while ((m = descRe.exec(text))) {
    const d = m[1]
    if (d.length > 165) warn(`Description ${d.length} chars (>165) in ${rel(f)}`)
    if (d.length < 90) warn(`Description short (${d.length}) in ${rel(f)}`)
  }
}

// --- 4. Dynamic routes must set canonicals ----------------------------------
// Admin routes are not public SEO pages and are excluded.
const dynamicRoutes = appFiles.filter(
  (f) => f.includes('[') && f.endsWith('page.tsx') && !f.includes('/admin/')
)
for (const f of dynamicRoutes) {
  const text = read(f)
  if (!text.includes('canonical')) {
    fail(`Dynamic route ${rel(f)} has no canonical URL in metadata`)
  }
  if (!text.includes('generateStaticParams')) {
    fail(`Dynamic route ${rel(f)} is missing generateStaticParams`)
  }
}

// --- 5. Sitemap index children have route files ------------------------------
const indexPath = join(ROOT, 'app/sitemap.xml/route.ts')
if (!existsSync(indexPath)) {
  fail('app/sitemap.xml/route.ts is missing')
} else {
  const indexText = read(indexPath)
  const ids = [...indexText.matchAll(/\{\s*id:\s*'([^']+)'/g)].map((m) => m[1])
  if (ids.length === 0) fail('No child sitemaps registered in sitemap index')
  for (const id of ids) {
    const child = join(ROOT, `app/sitemaps/${id}.xml/route.ts`)
    if (!existsSync(child)) fail(`Sitemap child "${id}" registered but ${rel(child)} is missing`)
  }
  // The static image sitemap must also be referenced.
  if (!indexText.includes('sitemap-images.xml')) {
    warn('sitemap-images.xml not referenced in sitemap index')
  }
}

// --- 6. Noindex tail stays out of the sitemap ---------------------------------
const sitemapData = join(ROOT, 'lib/seo/sitemap-data.ts')
if (existsSync(sitemapData)) {
  const text = read(sitemapData)
  if (!text.includes('INDEXED_SERVICE_LOCATIONS')) {
    fail('INDEXED_SERVICE_LOCATIONS missing from lib/seo/sitemap-data.ts')
  }
  if (!/serviceLocationUrls[\s\S]*?INDEXED_SERVICE_LOCATIONS/.test(text)) {
    fail('serviceLocationUrls() does not restrict output to INDEXED_SERVICE_LOCATIONS')
  }
  const comboPage = join(ROOT, 'app/locations/[slug]/[service]/page.tsx')
  if (existsSync(comboPage)) {
    const comboText = read(comboPage)
    if (!comboText.includes('isIndexedCombo') || !comboText.includes('index: false')) {
      fail('Location×service template does not apply noindex to tail combos')
    }
  }
}

// --- 7. Required SEO assets ---------------------------------------------------
const requiredAssets = [
  'public/images/og-default.jpg',
  'public/images/og-home.jpg',
  'public/llms.txt',
  'public/sitemap-images.xml',
]
for (const a of requiredAssets) {
  if (!existsSync(join(ROOT, a))) fail(`Required SEO asset missing: ${a}`)
}
const robotsTs = join(ROOT, 'app/robots.ts')
if (existsSync(robotsTs)) {
  const rt = read(robotsTs)
  if (!rt.includes('sitemap')) warn('app/robots.ts does not reference a sitemap')
}

// --- 8. Speakable selectors stay narrow ---------------------------------------
for (const f of appFiles) {
  const text = read(f)
  if (/cssSelector:\s*\[[^\]]*'h1'/.test(text)) {
    fail(`Broad speakable selector (h1) in ${rel(f)} — narrow to .speakable`)
  }
}

// --- Report -------------------------------------------------------------------
for (const w of warnings) console.log(`WARN  ${w}`)
for (const e of failures) console.log(`FAIL  ${e}`)
console.log(`\n${failures.length} failure(s), ${warnings.length} warning(s)`)
process.exit(failures.length ? 1 : 0)

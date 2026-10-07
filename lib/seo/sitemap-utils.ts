// Build-time helper: honest <lastmod> values for sitemaps.
// Prefers the last git commit touching the content source files; falls back to
// file mtime. Never returns "now" — identical lastmods erode Google's trust.

import { execSync } from 'node:child_process'
import { statSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()

function gitLastModified(paths: string[]): Date | null {
  try {
    const args = paths.map((p) => `"${p}"`).join(' ')
    const out = execSync(`git log -1 --format=%cI -- ${args}`, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    if (out) {
      const d = new Date(out)
      if (!Number.isNaN(d.getTime())) return d
    }
  } catch {
    // git unavailable (e.g. shallow export) — fall through to mtime
  }
  return null
}

function mtimeLastModified(paths: string[]): Date | null {
  let latest: Date | null = null
  for (const p of paths) {
    try {
      const m = statSync(join(ROOT, p)).mtime
      if (!latest || m > latest) latest = m
    } catch {
      // missing file — ignore
    }
  }
  return latest
}

/** ISO date (YYYY-MM-DD) of the last real edit to any of the given repo-relative source files. */
export function lastModified(paths: string[]): string {
  const d = gitLastModified(paths) ?? mtimeLastModified(paths) ?? new Date()
  return d.toISOString().split('T')[0]
}

export interface SitemapUrl {
  loc: string
  lastmod: string
}

export function urlsetXml(urls: SitemapUrl[]): string {
  const body = urls
    .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`
}

export function sitemapIndexXml(children: { loc: string; lastmod: string }[]): string {
  const body = children
    .map((c) => `  <sitemap>\n    <loc>${c.loc}</loc>\n    <lastmod>${c.lastmod}</lastmod>\n  </sitemap>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>`
}

export function xmlResponse(xml: string): Response {
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

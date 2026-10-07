// Single source of truth for sitemap URL inventories.
// Each URL group maps to the repo files whose edits genuinely change those pages,
// so <lastmod> reflects real edits (see lib/seo/sitemap-utils.ts).

import { SITE_CONFIG, DUBAI_LOCATIONS } from '@/lib/constants'
import { SERVICE_SLUGS } from '@/content/services'
import { PRICE_PAGE_SLUGS } from '@/content/price-pages'
import { GUIDE_SLUGS } from '@/content/guides'
import { BRAND_PAGE_SLUGS } from '@/content/brands'
import { lastModified, type SitemapUrl } from './sitemap-utils'

const abs = (path: string) => `${SITE_CONFIG.url}${path}`

const SERVICE_TEMPLATE = ['app/services/[slug]/page.tsx', 'content/services.ts', 'lib/constants.ts']
const LOCATION_TEMPLATE = ['app/locations/[slug]/page.tsx', 'lib/constants.ts']
const COMBO_TEMPLATE = [
  'app/locations/[slug]/[service]/page.tsx',
  'content/services.ts',
  'lib/constants.ts',
]
const PRICE_PAGE_TEMPLATE = ['app/pricing/[slug]/page.tsx', 'content/price-pages.ts', 'content/pricing.ts']
const GUIDE_TEMPLATE = ['app/guides/[slug]/page.tsx', 'content/guides.ts']
const BRAND_TEMPLATE = ['app/brands/[slug]/page.tsx', 'content/brands.ts']

export function staticPageUrls(): SitemapUrl[] {
  const defs: [string, string[]][] = [
    ['/', ['app/page.tsx', 'components/sections/Hero.tsx', 'content/services.ts', 'content/faqs.ts']],
    ['/services', ['app/services/page.tsx', 'content/services.ts']],
    ['/pricing', ['app/pricing/page.tsx', 'content/pricing.ts']],
    ['/gallery', ['app/gallery/page.tsx']],
    ['/reviews', ['app/reviews/page.tsx', 'content/testimonials.ts']],
    ['/faq', ['app/faq/page.tsx', 'content/faqs.ts']],
    ['/about', ['app/about/page.tsx']],
    ['/contact', ['app/contact/page.tsx']],
    ['/book', ['app/book/page.tsx']],
    ['/locations', ['app/locations/page.tsx', 'lib/constants.ts']],
  ]
  return defs.map(([path, files]) => ({ loc: abs(path), lastmod: lastModified(files) }))
}

export function servicePageUrls(): SitemapUrl[] {
  const lm = lastModified(SERVICE_TEMPLATE)
  return SERVICE_SLUGS.map((slug) => ({ loc: abs(`/services/${slug}`), lastmod: lm }))
}

export function locationPageUrls(): SitemapUrl[] {
  const lm = lastModified(LOCATION_TEMPLATE)
  return DUBAI_LOCATIONS.map((loc) => ({ loc: abs(`/locations/${loc.slug}`), lastmod: lm }))
}

export function serviceLocationUrls(): SitemapUrl[] {
  // Only the 9 ranking combos stay in the sitemap; the tail is noindex
  // (see INDEXED_SERVICE_LOCATIONS). Re-adding a combo here re-indexes it.
  const lm = lastModified(COMBO_TEMPLATE)
  return INDEXED_SERVICE_LOCATIONS.map((c) => ({
    loc: abs(`/locations/${c.location}/${c.service}`),
    lastmod: lm,
  }))
}

export function priceDetailUrls(): SitemapUrl[] {
  const lm = lastModified(PRICE_PAGE_TEMPLATE)
  return PRICE_PAGE_SLUGS.map((slug) => ({ loc: abs(`/pricing/${slug}`), lastmod: lm }))
}

export function guideUrls(): SitemapUrl[] {
  const lm = lastModified(GUIDE_TEMPLATE)
  return GUIDE_SLUGS.map((slug) => ({ loc: abs(`/guides/${slug}`), lastmod: lm }))
}

export function brandUrls(): SitemapUrl[] {
  const lm = lastModified(BRAND_TEMPLATE)
  return BRAND_PAGE_SLUGS.map((slug) => ({ loc: abs(`/brands/${slug}`), lastmod: lm }))
}

/** Newest lastmod across a child sitemap's URLs — used for the index entry. */
export function newestLastmod(urls: SitemapUrl[]): string {
  return urls.reduce((max, u) => (u.lastmod > max ? u.lastmod : max), '1970-01-01')
}

/**
 * Location x service combos that stay indexed (Phase 3 audit): these 9 already
 * rank on page 1–2 in GSC and are worth protecting. All other combos are
 * `noindex,follow` until they get genuinely unique local content — see
 * seo-data/AUDIT.md §2.3. Reversible: add a combo here to re-index it.
 */
export const INDEXED_SERVICE_LOCATIONS: { location: string; service: string }[] = [
  { location: 'jvc', service: 'window-tinting' }, // pos 3.4
  { location: 'deira', service: 'interior-detailing' }, // pos 3.6
  { location: 'deira', service: 'ppf' }, // pos 3.0
  { location: 'mirdif', service: 'window-tinting' }, // pos 3.6
  { location: 'deira', service: 'window-tinting' }, // pos 6.3
  { location: 'motor-city', service: 'window-tinting' }, // pos 7.8
  { location: 'al-quoz', service: 'ppf' }, // pos 9.5
  { location: 'al-quoz', service: 'ceramic-coating' }, // pos 3.0
  { location: 'jvc', service: 'ppf' }, // pos 3.0
]

export function isIndexedCombo(locationSlug: string, serviceSlug: string): boolean {
  return INDEXED_SERVICE_LOCATIONS.some(
    (c) => c.location === locationSlug && c.service === serviceSlug
  )
}

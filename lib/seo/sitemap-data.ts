// Single source of truth for sitemap URL inventories.
// Each URL group maps to the repo files whose edits genuinely change those pages,
// so <lastmod> reflects real edits (see lib/seo/sitemap-utils.ts).

import { SITE_CONFIG, DUBAI_LOCATIONS } from '@/lib/constants'
import { SERVICE_SLUGS } from '@/content/services'
import { lastModified, type SitemapUrl } from './sitemap-utils'

const abs = (path: string) => `${SITE_CONFIG.url}${path}`

const SERVICE_TEMPLATE = ['app/services/[slug]/page.tsx', 'content/services.ts', 'lib/constants.ts']
const LOCATION_TEMPLATE = ['app/locations/[slug]/page.tsx', 'lib/constants.ts']
const COMBO_TEMPLATE = [
  'app/locations/[slug]/[service]/page.tsx',
  'content/services.ts',
  'lib/constants.ts',
]

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
  const lm = lastModified(COMBO_TEMPLATE)
  const urls: SitemapUrl[] = []
  for (const loc of DUBAI_LOCATIONS) {
    for (const slug of SERVICE_SLUGS) {
      urls.push({ loc: abs(`/locations/${loc.slug}/${slug}`), lastmod: lm })
    }
  }
  return urls
}

/** Newest lastmod across a child sitemap's URLs — used for the index entry. */
export function newestLastmod(urls: SitemapUrl[]): string {
  return urls.reduce((max, u) => (u.lastmod > max ? u.lastmod : max), '1970-01-01')
}

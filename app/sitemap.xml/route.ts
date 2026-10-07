import { SITE_CONFIG } from '@/lib/constants'
import {
  staticPageUrls,
  servicePageUrls,
  locationPageUrls,
  serviceLocationUrls,
  priceDetailUrls,
  guideUrls,
  brandUrls,
  vehicleUrls,
  newestLastmod,
} from '@/lib/seo/sitemap-data'
import { sitemapIndexXml, xmlResponse, lastModified } from '@/lib/seo/sitemap-utils'

// Sitemap index: child sitemaps by section + the static image sitemap.
export async function GET() {
  const base = SITE_CONFIG.url
  const children = [
    { id: 'pages', urls: staticPageUrls() },
    { id: 'services', urls: servicePageUrls() },
    { id: 'locations', urls: locationPageUrls() },
    { id: 'service-locations', urls: serviceLocationUrls() },
    { id: 'pricing', urls: priceDetailUrls() },
    { id: 'guides', urls: guideUrls() },
    { id: 'brands', urls: brandUrls() },
    { id: 'vehicles', urls: vehicleUrls() },
  ]
  const entries = children.map((c) => ({
    loc: `${base}/sitemaps/${c.id}.xml`,
    lastmod: newestLastmod(c.urls),
  }))
  entries.push({
    loc: `${base}/sitemap-images.xml`,
    lastmod: lastModified(['public/sitemap-images.xml']),
  })
  return xmlResponse(sitemapIndexXml(entries))
}

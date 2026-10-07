import { staticPageUrls } from '@/lib/seo/sitemap-data'
import { urlsetXml, xmlResponse } from '@/lib/seo/sitemap-utils'

export async function GET() {
  return xmlResponse(urlsetXml(staticPageUrls()))
}

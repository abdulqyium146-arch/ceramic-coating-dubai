import { NextResponse } from 'next/server'
import { SITE_CONFIG, DUBAI_LOCATIONS } from '@/lib/constants'
import { SERVICE_SLUGS } from '@/content/services'

// IndexNow key — must match the file at /public/[INDEXNOW_KEY].txt
const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? 'ceramicmycar-indexnow-key'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

function buildAllUrls(): string[] {
  const base = SITE_CONFIG.url
  const staticUrls = [
    base,
    `${base}/services`,
    `${base}/pricing`,
    `${base}/gallery`,
    `${base}/reviews`,
    `${base}/faq`,
    `${base}/about`,
    `${base}/contact`,
    `${base}/locations`,
  ]

  const serviceUrls = SERVICE_SLUGS.map((s) => `${base}/services/${s}`)

  const locationUrls = DUBAI_LOCATIONS.map((loc) => `${base}/locations/${loc.slug}`)

  const serviceLocationUrls = DUBAI_LOCATIONS.flatMap((loc) =>
    SERVICE_SLUGS.map((s) => `${base}/locations/${loc.slug}/${s}`)
  )

  return [...staticUrls, ...serviceUrls, ...locationUrls, ...serviceLocationUrls]
}

// GET /api/indexnow — submit all URLs to IndexNow (Bing, Yandex, Seznam)
// Call this endpoint once after deployment to force immediate crawl discovery
export async function GET(request: Request) {
  // Simple auth guard — require ?secret= matching INDEXNOW_KEY or env secret
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const expectedSecret = process.env.INDEXNOW_SECRET ?? INDEXNOW_KEY

  if (secret !== expectedSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const urls = buildAllUrls()

  const payload = {
    host: new URL(SITE_CONFIG.url).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_CONFIG.url}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  }

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    })

    return NextResponse.json({
      success: res.ok,
      status: res.status,
      urlCount: urls.length,
      message: res.ok
        ? `Successfully submitted ${urls.length} URLs to IndexNow`
        : `IndexNow returned ${res.status}`,
    })
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to reach IndexNow API', detail: String(err) },
      { status: 500 }
    )
  }
}

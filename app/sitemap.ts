import { MetadataRoute } from 'next'
import { SITE_CONFIG, DUBAI_LOCATIONS } from '@/lib/constants'
import { SERVICE_SLUGS } from '@/content/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const locationPages: MetadataRoute.Sitemap = DUBAI_LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // 7 services × 14 locations = 98 service × location pages
  const serviceLocationPages: MetadataRoute.Sitemap = DUBAI_LOCATIONS.flatMap((loc) =>
    SERVICE_SLUGS.map((slug) => ({
      url: `${baseUrl}/locations/${loc.slug}/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    }))
  )

  return [...staticPages, ...servicePages, ...locationPages, ...serviceLocationPages]
}

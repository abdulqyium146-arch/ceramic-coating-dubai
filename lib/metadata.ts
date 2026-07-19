import { Metadata } from 'next'
import { SITE_CONFIG } from './constants'

interface MetaOptions {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
}

export function generateMetadata({
  title,
  description,
  path = '',
  image = '/images/og-default.jpg',
  keywords = [],
}: MetaOptions): Metadata {
  const url = `${SITE_CONFIG.url}${path}`
  const defaultKeywords = [
    'ceramic coating Dubai',
    'car detailing Dubai',
    'PPF Dubai',
    'paint protection Dubai',
    'graphene coating Dubai',
    'car polish Dubai',
    'ceramic my car',
    'best detailing Dubai',
    'paint correction Dubai',
    'window tinting Dubai',
  ]

  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_AE',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [image],
    },
  }
}

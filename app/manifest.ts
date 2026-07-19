import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ceramic My Car — Premium Ceramic Coating Dubai',
    short_name: 'Ceramic My Car',
    description:
      "Dubai's #1 ceramic coating, PPF & graphene coating studio. Serving all Dubai areas since 2018.",
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0f',
    theme_color: '#f59e0b',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    categories: ['automotive', 'business', 'lifestyle'],
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}

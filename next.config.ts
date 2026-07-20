import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'ceramic-my-car.com' },
    ],
  },
  compress: true,
  poweredByHeader: false,
  // Generate ETags for cache validation
  generateEtags: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Tell Googlebot it can follow all links (max crawl budget efficiency)
          { key: 'X-Robots-Tag', value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        ],
      },
      // Immutable cache for hashed static assets
      {
        source: '/_next/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // Long cache for images in public/
      {
        source: '/images/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // Gallery images — immutable (WebP, content-hashed via Next.js optimizer)
      {
        source: '/gallery/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // Medium cache for favicons
      {
        source: '/:file(favicon.*|apple-icon.*|android-chrome.*|favicon-.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
      // IndexNow key served quickly
      {
        source: '/indexnow-key.txt',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400' }],
      },
      // HTML pages — short cache, fast revalidation for crawlers
      {
        source: '/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800' }],
      },
    ]
  },
  async redirects() {
    return [
      // Canonical trailing-slash redirect (no duplicate content)
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

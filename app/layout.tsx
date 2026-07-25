import type { Metadata, Viewport } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/conversion/FloatingCTA'
import { generateLocalBusinessSchema, generateWebsiteSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    { media: '(prefers-color-scheme: light)', color: '#f59e0b' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Premium Ceramic Coating & Car Detailing Dubai`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'ceramic coating Dubai',
    'car detailing Dubai',
    'PPF Dubai',
    'paint protection Dubai',
    'graphene coating Dubai',
    'paint correction Dubai',
    'window tinting Dubai',
    'best detailing studio Dubai',
    'luxury car detailing Dubai',
    'ceramic my car',
    'car coating Dubai',
    'auto detailing Dubai UAE',
    'nano ceramic coating Dubai',
    'best ceramic coating Dubai',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: 'Automotive Services',
  classification: 'Automotive, Car Detailing, Ceramic Coating',
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
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    alternateLocale: ['ar_AE'],
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Premium Ceramic Coating Dubai`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — Premium Ceramic Coating & Car Detailing Dubai`,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | Premium Ceramic Coating Dubai`,
    description: SITE_CONFIG.description,
    images: ['/images/og-default.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  verification: {
    google: 'G8tZhzPhwZAyUmPivabys9efnK58ghfOWvGWI6b9xMU',
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = generateLocalBusinessSchema()
  const websiteSchema = generateWebsiteSchema()

  return (
    <html lang="en-AE" className={`${inter.variable} ${dmSans.variable} dark`} suppressHydrationWarning>
      <head>
        {/* Critical resource hints — paint LCP early */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-dark-950 font-sans">
        {/* Skip to main — accessibility + crawlability */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-gold-500 focus:text-dark-950 focus:font-bold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}

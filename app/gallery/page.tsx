import type { Metadata } from 'next'
import Link from 'next/link'
import { Camera, Star, Car, Award } from 'lucide-react'
import { CTABanner } from '@/components/sections/CTABanner'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Ceramic Coating Results Dubai | Before & After | BMW, Porsche, Ferrari',
  description:
    'Real car ceramic coating services Dubai before & after results. BMW, Porsche, Mercedes, Ferrari, Range Rover, Tesla & more. See why Dubai trusts Ceramic My Car. 4.9★ Google.',
  keywords: [
    'car ceramic coating Dubai before after',
    'ceramic coating results Dubai',
    'car ceramic coating Dubai photos',
    'PPF results Dubai',
    'paint correction results Dubai',
    'BMW car ceramic coating Dubai',
    'Porsche car ceramic coating Dubai',
    'Mercedes car ceramic coating Dubai',
    'Ferrari ceramic coating Dubai',
    'car detailing gallery Dubai',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/gallery` },
  openGraph: {
    title: 'Car Ceramic Coating Services Dubai Results | Before & After Photos | Ceramic My Car',
    description: 'Browse real results on BMWs, Porsches, Mercedes, Teslas and more. 4.9★ Google rated ceramic coating studio in Dubai.',
    images: [{ url: '/gallery/bmw-xm-ceramic-coating-dubai.webp', width: 900, height: 1200, alt: 'BMW XM ceramic coating Dubai — Ceramic My Car' }],
    url: `${SITE_CONFIG.url}/gallery`,
  },
}

const GALLERY_IMAGES = [
  { url: `${SITE_CONFIG.url}/gallery/porsche-718-boxster-ceramic-coating-dubai.webp`, name: 'Porsche 718 Boxster Ceramic Coating Dubai', description: 'Porsche 718 Boxster Miami Blue ceramic coating at Ceramic My Car Dubai studio — mirror gloss finish' },
  { url: `${SITE_CONFIG.url}/gallery/bmw-xm-ceramic-coating-dubai.webp`, name: 'BMW XM Ceramic Coating Dubai', description: 'BMW XM dark green ceramic coating paint protection at Ceramic My Car Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/mercedes-s-class-ceramic-coating-workshop-dubai.webp`, name: 'Mercedes S-Class Ceramic Coating Dubai', description: 'Mercedes S-Class black ceramic coating gloss enhancement and paint protection Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/bmw-x5-ceramic-coating-dubai.webp`, name: 'BMW X5 Ceramic Coating Dubai', description: 'BMW X5 M Sport dark navy blue ceramic coating showroom finish Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/lexus-rx-ceramic-coating-dubai.webp`, name: 'Lexus RX Ceramic Coating Dubai', description: 'Lexus RX white ceramic coating hydrophobic paint protection Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/tesla-model3-ceramic-coating-dubai.webp`, name: 'Tesla Model 3 Ceramic Coating Dubai', description: 'Tesla Model 3 dark blue ceramic coating installation Ceramic My Car Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/mercedes-c200-ceramic-coating-rear-dubai.webp`, name: 'Mercedes C200 Ceramic Coating Dubai', description: 'Mercedes C200 black ceramic coating perfect gloss rear panels Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/mazda-cx5-ceramic-coating-dubai.webp`, name: 'Mazda CX-5 Ceramic Coating Dubai', description: 'Mazda CX-5 red ceramic coating deep gloss paint protection Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/chery-suv-ceramic-coating-dubai.webp`, name: 'Chery Tiggo Ceramic Coating Dubai', description: 'Chery Tiggo SUV dark blue ceramic coating showroom presentation Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/mercedes-e-class-ceramic-coating-showroom.webp`, name: 'Mercedes E-Class Ceramic Coating Dubai', description: 'Mercedes E-Class black ceramic coating showroom result Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/toyota-rav4-ceramic-coating-dubai.webp`, name: 'Toyota RAV4 Ceramic Coating Dubai', description: 'Toyota RAV4 white ceramic coating paint protection Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/mercedes-s-class-rear-ceramic-coating-dubai.webp`, name: 'Mercedes S-Class Rear Ceramic Coating', description: 'Mercedes S-Class rear deep black gloss ceramic coating finish Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/gmc-sierra-pickup-ceramic-coating-dubai.webp`, name: 'GMC Sierra Ceramic Coating Dubai', description: 'GMC Sierra pickup truck red ceramic coating paint protection Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/ppf-installation-hood-masking-dubai.webp`, name: 'PPF Installation Dubai', description: 'PPF paint protection film installation masking process on car hood Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/ceramic-coating-application-process-dubai.webp`, name: 'Ceramic Coating Application Process Dubai', description: 'Professional ceramic coating application process at Ceramic My Car Dubai workshop' },
  { url: `${SITE_CONFIG.url}/gallery/ceramic-coating-application-dropper-closeup.webp`, name: 'Ceramic Coating Application Closeup', description: 'Ceramic coating dropper application on applicator pad — professional process Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/gtechniq-exo-crystal-serum-ultra-products.webp`, name: 'Gtechniq EXO Crystal Serum Ultra Products', description: 'Gtechniq EXO and Crystal Serum Ultra professional ceramic coating products used at Ceramic My Car Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/gtechniq-crystal-serum-exo-kit-dubai.webp`, name: 'Gtechniq Professional Ceramic Coating Kit', description: 'Gtechniq Crystal Serum Ultra and EXO V5 professional kit — ceramic coating products Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/gtechniq-crystal-serum-light-product.webp`, name: 'Gtechniq Crystal Serum Light', description: 'Gtechniq Crystal Serum Light professional grade ceramic coating product Dubai' },
  { url: `${SITE_CONFIG.url}/gallery/chery-suv-ceramic-coating-studio-dubai.webp`, name: 'Chery SUV Ceramic Coating Studio Dubai', description: 'Chery Tiggo SUV wide angle ceramic coating studio result at Ceramic My Car Dubai' },
]

export default function GalleryPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Gallery', url: `${SITE_CONFIG.url}/gallery` },
  ])

  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Ceramic My Car — Ceramic Coating & Detailing Gallery Dubai',
    description: 'Real results: ceramic coating, PPF, graphene coating and paint correction on luxury and everyday vehicles in Dubai.',
    url: `${SITE_CONFIG.url}/gallery`,
    author: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      address: { '@type': 'PostalAddress', addressLocality: 'Al Quoz', addressRegion: 'Dubai', addressCountry: 'AE' },
    },
    image: GALLERY_IMAGES.map((img) => ({
      '@type': 'ImageObject',
      url: img.url,
      contentUrl: img.url,
      name: img.name,
      description: img.description,
      author: { '@type': 'Organization', name: SITE_CONFIG.name },
      copyrightHolder: { '@type': 'Organization', name: SITE_CONFIG.name },
      license: `${SITE_CONFIG.url}/terms`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.1)_0%,transparent_65%)]" />
        <div className="section-container relative">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Gallery</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <span className="badge-gold mb-5 inline-flex">
              <Camera className="h-3 w-3" />
              Real Results. Real Cars.
            </span>
            <h1 className="heading-lg mb-5">
              Our <span className="text-gradient-gold">Work Gallery</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Every photo is a real vehicle protected at our Al Quoz studio.
              Browse ceramic coating, PPF, paint correction and detailing results
              on BMWs, Porsches, Mercedes, Teslas and more — across Dubai and UAE.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { icon: Car, value: '2,400+', label: 'Cars Protected' },
                { icon: Star, value: '4.9★', label: 'Google Rating' },
                { icon: Award, value: 'GYEON', label: 'Certified' },
                { icon: Camera, value: '20+', label: 'Gallery Photos' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="glass-card p-4 text-center">
                  <Icon className="h-4 w-4 text-gold-400 mx-auto mb-2" />
                  <p className="text-xl font-black text-white">{value}</p>
                  <p className="text-2xs font-medium uppercase tracking-wider text-white/40">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <GalleryGrid />
        </div>
      </section>

      {/* Instagram + services cross-link */}
      <section className="section-py bg-dark-900 border-t border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Instagram */}
            <div className="glass-card p-8 text-center">
              <div className="text-3xl mb-4">📸</div>
              <h2 className="text-lg font-bold text-white mb-2">See More Daily Results</h2>
              <p className="text-white/50 text-sm mb-6">
                Follow us on Instagram for daily before/after transformations,
                coating applications, and PPF installs on Dubai&apos;s most exciting cars.
              </p>
              <a
                href={SITE_CONFIG.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                @ceramicmycar on Instagram
              </a>
            </div>

            {/* Services link */}
            <div className="glass-card p-8 text-center">
              <div className="text-3xl mb-4">🛡️</div>
              <h2 className="text-lg font-bold text-white mb-2">Want Results Like These?</h2>
              <p className="text-white/50 text-sm mb-6">
                Every result you see above started with a free paint inspection.
                Book yours today and get an honest recommendation for your vehicle.
              </p>
              <Link href="/contact" className="btn-primary w-full justify-center">
                Book Free Inspection
              </Link>
            </div>
          </div>

          {/* SEO service links */}
          <div className="mt-10 text-center">
            <p className="text-xs text-white/25 leading-relaxed">
              Gallery includes results for{' '}
              {[
                ['Ceramic Coating', '/services/ceramic-coating'],
                ['Paint Protection Film', '/services/ppf'],
                ['Graphene Coating', '/services/graphene-coating'],
                ['Paint Correction', '/services/paint-correction'],
                ['Exterior Detailing', '/services/exterior-detailing'],
                ['Interior Detailing', '/services/interior-detailing'],
                ['Window Tinting', '/services/window-tinting'],
              ].map(([label, href], i, arr) => (
                <span key={href}>
                  <Link href={href} className="hover:text-white/50 transition-colors">{label}</Link>
                  {i < arr.length - 1 ? ' · ' : ''}
                </span>
              ))}
              {' '}— Al Quoz, Dubai, UAE.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Want Results Like These on Your Car?"
        subtitle="Book a free paint inspection at our Al Quoz studio. We'll assess your vehicle and recommend the perfect protection package."
      />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { DUBAI_LOCATIONS } from '@/lib/constants'
import { CTABanner } from '@/components/sections/CTABanner'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Ceramic Coating Near Me Dubai | All Areas Covered',
  description:
    'Ceramic coating and car detailing serving all Dubai areas: Dubai Marina, JVC, Business Bay, Palm Jumeirah, Downtown Dubai, Dubai Hills, Al Quoz, Motor City, and more.',
  keywords: [
    'ceramic coating near me Dubai',
    'ceramic coating Dubai Marina',
    'ceramic coating JVC',
    'ceramic coating Business Bay',
    'ceramic coating Palm Jumeirah',
    'ceramic coating Downtown Dubai',
    'car detailing near me Dubai',
  ],
}

export default function LocationsPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Locations', url: `${SITE_CONFIG.url}/locations` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Header */}
      <section className="relative pt-32 pb-16 bg-dark-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
        <div className="section-container relative text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Locations</span>
          </nav>
          <h1 className="heading-lg mb-4">
            Ceramic Coating{' '}
            <span className="text-gradient-gold">Across Dubai</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            We serve customers from every corner of Dubai. Visit our centrally located Al Quoz
            studio or browse local pages for your area.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {DUBAI_LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="glass-card p-6 group hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 group-hover:bg-gold-500/20 transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white group-hover:text-gold-400 transition-colors mb-1">
                      Ceramic Coating {location.name}
                    </h2>
                    <p className="text-xs text-white/40">{location.area}, Dubai</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-gold-400">
                  View page
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map embed section */}
      <section className="section-py bg-dark-900">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="heading-md mb-4">
              Find Us in <span className="text-gradient-gold">Al Quoz, Dubai</span>
            </h2>
            <p className="text-white/60">
              Centrally located in Al Quoz Industrial Area — easily accessible from all Dubai
              communities via Sheikh Zayed Road and Al Khail Road.
            </p>
          </div>

          <div className="glass-card overflow-hidden h-80 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 text-gold-400 mx-auto mb-4" />
              <p className="text-white font-bold mb-2">
                {SITE_CONFIG.address.street}
              </p>
              <p className="text-white/60 text-sm">
                {SITE_CONFIG.address.area}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}
              </p>
              <a
                href={`https://maps.google.com/?q=${SITE_CONFIG.address.lat},${SITE_CONFIG.address.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 inline-flex"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { DUBAI_LOCATIONS, SITE_CONFIG } from '@/lib/constants'
import { SERVICES } from '@/content/services'
import { CTABanner } from '@/components/sections/CTABanner'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Ceramic Coating Near Me Dubai | All Areas Covered | Ceramic My Car',
  description:
    'Ceramic coating, PPF, graphene coating & car detailing serving all Dubai areas: Dubai Marina, JVC, Business Bay, Palm Jumeirah, Downtown Dubai, Dubai Hills, Motor City, Al Quoz & more. 4.9★ rated.',
  keywords: [
    'ceramic coating near me Dubai',
    'ceramic coating Dubai Marina',
    'ceramic coating JVC',
    'ceramic coating Business Bay',
    'ceramic coating Palm Jumeirah',
    'ceramic coating Downtown Dubai',
    'PPF Dubai',
    'graphene coating Dubai',
    'car detailing near me Dubai',
    'paint correction near me Dubai',
    'window tinting near me Dubai',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/locations` },
}

export default function LocationsPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Locations', url: `${SITE_CONFIG.url}/locations` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-dark-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
        <div className="section-container relative text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Locations</span>
          </nav>
          <h1 className="heading-lg mb-4">
            Ceramic Coating Near Me —{' '}
            <span className="text-gradient-gold">All Dubai Areas</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Professional ceramic coating, PPF, graphene coating, paint correction, detailing and
            window tinting for every Dubai community. Pickup available. 4.9★ Google rated.
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
                title={`Ceramic coating & car detailing in ${location.name}, Dubai`}
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
                  View local page
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Topical authority matrix — all services × all locations */}
      <section className="section-py bg-dark-900">
        <div className="section-container">
          <h2 className="heading-md text-center mb-4">
            All Services ×{' '}
            <span className="text-gradient-gold">All Dubai Locations</span>
          </h2>
          <p className="text-white/50 text-sm text-center mb-10 max-w-2xl mx-auto">
            Every service, every Dubai community. Click any cell to view dedicated pricing,
            FAQs, and local information for your area.
          </p>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-white/40 font-medium p-3 border-b border-white/5 min-w-[120px]">
                    Area
                  </th>
                  {SERVICES.map((svc) => (
                    <th
                      key={svc.slug}
                      className="text-center text-white/60 font-semibold p-3 border-b border-white/5 min-w-[110px] leading-tight"
                    >
                      {svc.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DUBAI_LOCATIONS.map((loc, locIdx) => (
                  <tr
                    key={loc.slug}
                    className={locIdx % 2 === 0 ? 'bg-white/[0.01]' : ''}
                  >
                    <td className="p-3 border-b border-white/5">
                      <Link
                        href={`/locations/${loc.slug}`}
                        className="font-semibold text-white/70 hover:text-gold-400 transition-colors"
                      >
                        {loc.name}
                      </Link>
                    </td>
                    {SERVICES.map((svc) => (
                      <td key={svc.slug} className="p-3 border-b border-white/5 text-center">
                        <Link
                          href={`/locations/${loc.slug}/${svc.slug}`}
                          className="inline-flex items-center justify-center px-2 py-1 rounded-md bg-gold-500/5 text-gold-400/70 hover:bg-gold-500/15 hover:text-gold-300 transition-all font-medium"
                          title={`${svc.title} in ${loc.name}, Dubai`}
                        >
                          AED {svc.startingPrice.toLocaleString()}+
                        </Link>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile — stacked cards per location */}
          <div className="lg:hidden space-y-6">
            {DUBAI_LOCATIONS.map((loc) => (
              <div key={loc.slug} className="glass-card p-5">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-sm font-bold text-white hover:text-gold-400 transition-colors flex items-center gap-2 mb-4"
                >
                  <MapPin className="h-3.5 w-3.5 text-gold-400" />
                  {loc.name}
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICES.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/locations/${loc.slug}/${svc.slug}`}
                      className="text-xs text-white/60 hover:text-gold-400 transition-colors py-1 border-b border-white/5 last:border-0"
                      title={`${svc.title} in ${loc.name}, Dubai`}
                    >
                      {svc.title}
                      <span className="text-gold-400/60 ml-1">AED {svc.startingPrice.toLocaleString()}+</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="section-py bg-dark-950 border-t border-white/5" aria-label="Studio location map">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="badge-gold mb-4 inline-flex">
                <MapPin className="h-3 w-3" />
                Our Studio
              </span>
              <h2 className="text-2xl font-bold text-white mb-4">
                Find Us in{' '}
                <span className="text-gradient-gold">Al Quoz, Dubai</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Centrally located in Al Quoz Industrial Area — 10–25 minutes from any Dubai
                community via Sheikh Zayed Road or Al Khail Road.
              </p>

              <address className="not-italic space-y-3 text-sm mb-6">
                <div className="flex items-start gap-2.5 text-white/70">
                  <MapPin className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Al Quoz Industrial Area 4</span>
                    <br />Dubai, United Arab Emirates
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-white/70">
                  <span className="text-gold-400 font-bold text-xs mt-0.5">MON–THU</span>
                  <span>8:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-start gap-2.5 text-white/70">
                  <span className="text-gold-400 font-bold text-xs mt-0.5">FRI</span>
                  <span>2:00 PM – 8:00 PM</span>
                </div>
                <div className="flex items-start gap-2.5 text-white/70">
                  <span className="text-gold-400 font-bold text-xs mt-0.5">SAT–SUN</span>
                  <span>9:00 AM – 6:00 PM</span>
                </div>
              </address>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/maps?q=Ceramic+My+Car+Dubai+Al+Quoz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Get Directions
                </a>
                <Link href="/contact" className="btn-ghost text-sm">
                  Book Pickup
                </Link>
              </div>
            </div>

            <div
              className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/20"
              style={{ height: '420px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac5a5ed97cd28ab9%3A0x6a3cc5ff15ccf54!2sCeramic%20My%20Car%20%7C%20Best%20Detailing%20Studio%20in%20Dubai!5e0!3m2!1sen!2s!4v1784538548445!5m2!1sen!2s"
                title="Ceramic My Car studio — Al Quoz, Dubai. Serving all Dubai locations with ceramic coating, PPF, graphene coating, detailing and window tinting."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dense crawler anchor text */}
      <section className="section-py bg-dark-900 border-t border-white/5">
        <div className="section-container max-w-4xl">
          <h2 className="text-sm font-semibold text-white/60 mb-4 text-center">
            Ceramic Coating Near Me — All Dubai Communities
          </h2>
          <p className="text-xs text-white/25 leading-relaxed text-center">
            {DUBAI_LOCATIONS.map((loc, i) => (
              <span key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="hover:text-white/50 transition-colors"
                >
                  Ceramic Coating {loc.name}
                </Link>
                {i < DUBAI_LOCATIONS.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
          <p className="text-xs text-white/20 leading-relaxed text-center mt-3">
            {SERVICES.map((svc, i) => (
              <span key={svc.slug}>
                <Link
                  href={`/services/${svc.slug}`}
                  className="hover:text-white/40 transition-colors"
                >
                  {svc.title} Dubai
                </Link>
                {i < SERVICES.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
        </div>
      </section>

      <CTABanner
        title="Get a Free Quote for Your Area"
        subtitle="Serving all Dubai communities. Free paint inspection. Pickup available from your location."
      />
    </>
  )
}

import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { DUBAI_LOCATIONS } from '@/lib/constants'

/**
 * Koray Semantic SEO — Service × Location Internal Link Matrix
 *
 * Renders all 14 Dubai location pages from within a service page.
 * Anchor text = "[service] in [location]" — entity-rich, locally relevant.
 * This builds the service→location topical authority signal for Local SEO.
 */

interface Props {
  serviceTitle: string
  serviceSlug: string
}

export function ServiceAreaLinks({ serviceTitle, serviceSlug }: Props) {
  return (
    <section
      className="section-py bg-dark-900 border-t border-white/5"
      aria-label={`${serviceTitle} service areas in Dubai`}
    >
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="heading-md mb-3">
            {serviceTitle} Near You —{' '}
            <span className="text-gradient-gold">All Dubai Areas</span>
          </h2>
          <p className="text-white/50 text-sm max-w-xl mx-auto">
            We provide professional {serviceTitle.toLowerCase()} to customers from every
            community in Dubai. Click your area for a local page with specific information.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {DUBAI_LOCATIONS.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="glass-card p-3 group hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-200 text-center"
              title={`${serviceTitle} in ${location.name}, Dubai`}
            >
              <MapPin className="h-3.5 w-3.5 text-gold-400/60 mx-auto mb-1.5 group-hover:text-gold-400 transition-colors" />
              <p className="text-xs font-medium text-white/60 group-hover:text-white transition-colors leading-tight">
                {serviceTitle.split(' ')[0]}{' '}
                <span className="block text-white/40 group-hover:text-gold-300 transition-colors">
                  {location.name}
                </span>
              </p>
            </Link>
          ))}
        </div>

        {/* Entity-dense link paragraph for NLP crawlers */}
        <div className="mt-8 glass-card p-5 border-white/5">
          <p className="text-xs text-white/30 leading-relaxed text-center">
            {serviceTitle} service areas:{' '}
            {DUBAI_LOCATIONS.map((loc, i) => (
              <span key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-white/40 hover:text-gold-400 transition-colors"
                >
                  {serviceTitle} {loc.name}
                </Link>
                {i < DUBAI_LOCATIONS.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}

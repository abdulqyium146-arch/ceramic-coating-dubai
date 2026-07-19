import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/content/services'

/**
 * Koray Semantic SEO — Location × Service Matrix
 *
 * Renders all 7 services from within a location page with
 * location+service entity-rich anchor text and context.
 * Builds the location→service topical authority for Local SEO.
 */

interface Props {
  locationName: string
  locationArea: string
}

export function LocationServiceMatrix({ locationName, locationArea }: Props) {
  return (
    <section
      className="section-py bg-dark-950 border-t border-white/5"
      aria-label={`Car protection services in ${locationName}`}
    >
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="heading-md mb-3">
            All Car Protection Services
            <br />
            <span className="text-gradient-gold">Available in {locationName}</span>
          </h2>
          <p className="text-white/50 text-sm max-w-xl mx-auto">
            Ceramic My Car provides the complete range of professional paint protection
            and detailing services to {locationArea} residents from our Al Quoz studio.
          </p>
        </div>

        {/* Full service grid with entity-rich anchors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="glass-card p-5 group hover:border-gold-500/30 hover:bg-gold-500/[0.03] transition-all duration-300"
              title={`${service.title} in ${locationName}, Dubai`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-sm font-bold text-white group-hover:text-gold-400 transition-colors">
                  {service.title} — {locationName}
                </h3>
                <ArrowRight className="h-3.5 w-3.5 text-white/20 group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
              </div>
              <p className="text-xs text-white/40 leading-relaxed mb-3">
                {service.shortDescription}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gold-400">
                  From AED {service.startingPrice.toLocaleString()}
                </span>
                <span className="text-xs text-white/30">{service.warranty}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Semantic prose paragraph — entity-rich for NLP / AI Overviews */}
        <div className="glass-card p-6 border-gold-500/10 max-w-3xl mx-auto">
          <p className="text-sm text-white/50 leading-relaxed">
            {locationName} residents can book{' '}
            {SERVICES.map((s, i) => (
              <span key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-gold-400/80 hover:text-gold-400 transition-colors underline underline-offset-2 decoration-gold-500/30"
                  title={`${s.title} in ${locationName}`}
                >
                  {s.title.toLowerCase()}
                </Link>
                {i < SERVICES.length - 2 ? ', ' : i === SERVICES.length - 2 ? ', and ' : ' '}
              </span>
            ))}
            at Ceramic My Car — {locationArea}&apos;s most trusted paint protection studio,
            located in Al Quoz with complimentary pickup from {locationName} for qualifying packages.
          </p>
        </div>
      </div>
    </section>
  )
}

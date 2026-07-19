import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { DUBAI_LOCATIONS } from '@/lib/constants'

export function LocationsSection() {
  return (
    <section className="section-py bg-dark-950" aria-labelledby="locations-heading">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="badge-gold mb-4 inline-flex">
            <MapPin className="h-3 w-3" />
            Service Areas
          </span>
          <h2 id="locations-heading" className="heading-lg mb-4">
            Ceramic Coating Across{' '}
            <span className="text-gradient-gold">All of Dubai</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            We serve customers from every corner of Dubai and the UAE. Our Al Quoz studio is
            centrally located, and we offer complimentary pickup and drop-off for select packages.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {DUBAI_LOCATIONS.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="glass-card p-4 text-center hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-300 group"
            >
              <MapPin className="h-4 w-4 text-gold-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-semibold text-white group-hover:text-gold-400 transition-colors">
                {location.name}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/locations" className="btn-ghost text-sm">
            View All Service Areas
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

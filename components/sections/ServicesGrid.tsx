'use client'

import Link from 'next/link'
import { Shield, Layers, Hexagon, Sparkles, Car, Zap, Sun, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/content/services'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ElementType> = {
  Shield,
  Layers,
  Hexagon,
  Sparkles,
  Car,
  Zap,
  Sun,
}

export function ServicesGrid() {
  return (
    <section className="section-py bg-dark-950 relative" aria-labelledby="services-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.04)_0%,transparent_70%)]" />

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge-gold mb-4 inline-flex">Our Services</span>
          <h2 id="services-heading" className="heading-lg mb-4">
            Complete{' '}
            <span className="text-gradient-gold">Paint Protection</span>
            <br />
            Solutions in Dubai
          </h2>
          <p className="mx-auto max-w-2xl text-white/60 text-lg">
            From nano-ceramic coating to full paint protection film, we offer the complete range
            of premium automotive protection services Dubai demands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] ?? Shield
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="service-card group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-3">
                  {service.shortDescription}
                </p>

                {/* Starting Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xs font-medium uppercase tracking-wider text-white/30">
                      From
                    </p>
                    <p className="text-sm font-bold text-gold-400">
                      AED {service.startingPrice.toLocaleString()}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link href="/services" className="btn-secondary">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

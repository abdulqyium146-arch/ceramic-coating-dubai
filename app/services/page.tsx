import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Layers, Hexagon, Sparkles, Car, Zap, Sun, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/content/services'
import { CTABanner } from '@/components/sections/CTABanner'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: 'Car Ceramic Coating Services Dubai | PPF, Graphene, Paint Correction & Tinting' },
  description:
    'All car ceramic coating services in Dubai: nano ceramic coating, PPF, graphene coating, paint correction, interior & exterior detailing, window tinting. GYEON & Ceramic Pro certified installers.',
  keywords: [
    'car ceramic coating Dubai services',
    'ceramic coating Dubai',
    'PPF Dubai',
    'graphene coating Dubai',
    'paint correction Dubai',
    'interior detailing Dubai',
    'exterior detailing Dubai',
    'window tinting Dubai',
    'car protection services Dubai',
    'nano ceramic coating Dubai',
  ],
}

const ICON_MAP: Record<string, React.ElementType> = {
  Shield, Layers, Hexagon, Sparkles, Car, Zap, Sun,
}

export default function ServicesPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-dark-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
        <div className="section-container relative text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Services</span>
          </nav>
          <h1 className="heading-lg mb-4">
            Our <span className="text-gradient-gold">Car Protection Services</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From nano-ceramic coating to full paint protection film, graphene coating to
            complete detailing — every service your car needs under one roof in Dubai.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.iconName] ?? Shield
              return (
                <article key={service.id} className="glass-card p-8 group hover:border-gold-500/30 hover:bg-gold-500/[0.03] transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-400 group-hover:bg-gold-500/20 transition-colors">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-4 text-xs">
                        <span className="flex items-center gap-1.5 text-white/50">
                          <span className="h-1 w-1 rounded-full bg-gold-400" />
                          From AED {service.startingPrice.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1.5 text-white/50">
                          <span className="h-1 w-1 rounded-full bg-gold-400" />
                          {service.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-white/50">
                          <span className="h-1 w-1 rounded-full bg-gold-400" />
                          Warranty: {service.warranty}
                        </span>
                      </div>

                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

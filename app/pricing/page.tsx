import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Star } from 'lucide-react'
import { PRICING_PACKAGES } from '@/content/pricing'
import { CTABanner } from '@/components/sections/CTABanner'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Car Ceramic Coating Services Dubai Price | How Much Does It Cost? From AED 1,500',
  description:
    'Car ceramic coating services Dubai prices from AED 1,500. PPF from AED 2,500. Graphene coating from AED 2,500. Transparent pricing, no hidden fees. Free paint inspection included. All vehicle types.',
  keywords: [
    'car ceramic coating Dubai price',
    'ceramic coating cost Dubai',
    'how much does ceramic coating cost in Dubai',
    'ceramic coating price Dubai',
    'PPF price Dubai',
    'graphene coating cost Dubai',
    'car detailing price Dubai',
    'nano ceramic coating price Dubai',
    'ceramic coating packages Dubai',
  ],
}

export default function PricingPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Pricing', url: `${SITE_CONFIG.url}/pricing` },
  ])

  const ceramicPackages = PRICING_PACKAGES.filter((p) => p.service === 'ceramic-coating')
  const ppfPackages = PRICING_PACKAGES.filter((p) => p.service === 'ppf')
  const otherPackages = PRICING_PACKAGES.filter((p) => !['ceramic-coating', 'ppf'].includes(p.service))

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
            <span className="text-white/80">Pricing</span>
          </nav>
          <h1 className="heading-lg mb-4">
            Transparent{' '}
            <span className="text-gradient-gold">Pricing</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Honest, no-hidden-fee pricing for all our services. Every package includes a free
            paint inspection. Prices vary by vehicle size — get an exact quote via WhatsApp or phone.
          </p>
        </div>
      </section>

      {/* Ceramic Coating Packages */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <h2 className="heading-md text-center mb-12">
            Ceramic Coating <span className="text-gradient-gold">Packages</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ceramicPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={cn(
                  'glass-card p-8 relative transition-all duration-300',
                  pkg.recommended
                    ? 'border-gold-500/50 bg-gold-500/5 scale-105'
                    : 'hover:border-white/20'
                )}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge-gold text-xs px-4 py-1">{pkg.badge}</span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">
                    {pkg.tier.toUpperCase()}
                  </p>
                  <h3 className="text-xl font-black text-white mb-4">{pkg.name}</h3>

                  <div className="space-y-1">
                    <div>
                      <span className="text-xs text-white/40">Sedan from </span>
                      <span className="text-2xl font-black text-gradient-gold">
                        AED {pkg.price.sedan.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-sm text-white/50">
                      SUV from AED {pkg.price.suv.toLocaleString()}
                    </div>
                    {pkg.price.exotic && (
                      <div className="text-sm text-white/50">
                        Exotic from AED {pkg.price.exotic.toLocaleString()}
                      </div>
                    )}
                  </div>

                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                    {pkg.warranty} Warranty
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className={cn(
                    'block w-full text-center rounded-xl py-3 text-sm font-bold transition-all',
                    pkg.recommended
                      ? 'btn-primary'
                      : 'btn-secondary'
                  )}
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PPF Packages */}
      <section className="section-py bg-dark-900">
        <div className="section-container">
          <h2 className="heading-md text-center mb-12">
            PPF <span className="text-gradient-gold">Packages</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {ppfPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={cn(
                  'glass-card p-8 relative',
                  pkg.recommended && 'border-gold-500/40'
                )}
              >
                {pkg.badge && (
                  <span className="badge-gold text-xs mb-4 inline-flex">{pkg.badge}</span>
                )}
                <h3 className="text-xl font-black text-white mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-black text-gradient-gold">
                    AED {pkg.price.sedan.toLocaleString()}
                  </span>
                  <span className="text-sm text-white/40"> (sedan)</span>
                </div>
                <p className="text-xs text-white/40 mb-1">SUV: AED {pkg.price.suv.toLocaleString()}</p>
                {pkg.price.exotic && (
                  <p className="text-xs text-white/40 mb-4">Exotic: AED {pkg.price.exotic.toLocaleString()}</p>
                )}
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book" className="btn-primary w-full justify-center">
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Pricing */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <h2 className="heading-md text-center mb-12">
            Other Service <span className="text-gradient-gold">Pricing</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {otherPackages.map((pkg) => (
              <div key={pkg.id} className="glass-card p-6">
                {pkg.badge && (
                  <span className="badge-gold text-xs mb-3 inline-flex">{pkg.badge}</span>
                )}
                <h3 className="text-base font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-xl font-black text-gradient-gold mb-1">
                  AED {pkg.price.sedan.toLocaleString()}
                </p>
                <p className="text-xs text-white/40 mb-4">
                  SUV: AED {pkg.price.suv.toLocaleString()}
                  {pkg.price.exotic ? ` • Exotic: AED ${pkg.price.exotic.toLocaleString()}` : ''}
                </p>
                <ul className="space-y-1.5 mb-4">
                  {pkg.includes.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0 mt-1.5" />
                      <span className="text-xs text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book" className="btn-ghost text-xs w-full justify-center border border-white/10">
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price FAQs */}
      <section className="section-py bg-dark-900">
        <div className="section-container max-w-3xl">
          <h2 className="heading-md text-center mb-10">
            Pricing <span className="text-gradient-gold">FAQs</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Are there any hidden fees?',
                a: 'No. Our pricing is fully transparent. The quote you receive covers everything in the package description. The only additions would be optional extras you specifically request, such as wheel coating or engine bay detailing.',
              },
              {
                q: 'Why is there a price range between sedan, SUV, and exotic?',
                a: "Larger vehicles require more product, more time, and more labour. Exotic vehicles (Ferraris, Lamborghinis, McLarens) require specialised handling, greater care around aerodynamic components, and additional time. The price reflects the additional material and expertise required.",
              },
              {
                q: 'Do you offer payment plans?',
                a: 'Yes, we accept all major credit cards and can arrange payment plans for packages over AED 5,000 through our banking partners. Contact us to discuss options.',
              },
              {
                q: 'What is included in the "free inspection"?',
                a: "A free paint inspection includes: paint thickness gauge measurement across all panels, paint condition assessment under inspection lighting, swirl mark and scratch evaluation, contamination check, and a personalised written recommendation for the best protection package for your specific vehicle and budget.",
              },
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-sm font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Get Your Exact Quote"
        subtitle="Send us your car details and we'll provide a precise, no-obligation quote within minutes."
      />
    </>
  )
}

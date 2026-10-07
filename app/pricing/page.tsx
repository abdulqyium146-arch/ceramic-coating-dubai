import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Star } from 'lucide-react'
import { PRICING_PACKAGES } from '@/content/pricing'
import { CTABanner } from '@/components/sections/CTABanner'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: { absolute: 'Car Detailing Price List Dubai | Ceramic My Car' },
  description:
    'Transparent car detailing price list Dubai: ceramic coating, PPF, graphene, tinting & detailing packages. No hidden fees — get an exact quote today.',
}

const PRICING_FAQS = [
  {
    question: 'Are there any hidden fees?',
    answer:
      'No. Our pricing is fully transparent. The quote you receive covers everything in the package description. The only additions would be optional extras you specifically request, such as wheel coating or engine bay detailing.',
  },
  {
    question: 'Why is there a price range between sedan, SUV, and exotic?',
    answer:
      'Larger vehicles require more product, more time, and more labour. Exotic vehicles require specialised handling, greater care around aerodynamic components, and additional time. The price reflects the additional material and expertise required.',
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      'Yes, we accept all major credit cards and can arrange payment plans for packages over AED 5,000 through our banking partners. Contact us to discuss options.',
  },
  {
    question: 'What is included in the "free inspection"?',
    answer:
      'A free paint inspection includes: paint thickness gauge measurement across all panels, paint condition assessment under inspection lighting, swirl mark and scratch evaluation, contamination check, and a personalised written recommendation for the best protection package for your specific vehicle and budget.',
  },
  {
    question: 'How much does ceramic coating cost in Dubai?',
    answer:
      'Ceramic coating in Dubai starts from AED 1,500 for a 2-year package on a standard sedan. The exact price depends on your vehicle size, paint condition and the warranty tier you choose — use our package cards above as a guide and get a free exact quote via WhatsApp.',
  },
  {
    question: 'How much does PPF cost in Dubai?',
    answer:
      'Paint protection film in Dubai starts from AED 2,500 for partial-front coverage and ranges to AED 8,000–15,000 for full-body coverage on a luxury vehicle. Book a free inspection for an exact quote for your car.',
  },
]

export default function PricingPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Pricing', url: `${SITE_CONFIG.url}/pricing` },
  ])
  const faqSchema = generateFAQSchema(PRICING_FAQS)

  const ceramicPackages = PRICING_PACKAGES.filter((p) => p.service === 'ceramic-coating')
  const ppfPackages = PRICING_PACKAGES.filter((p) => p.service === 'ppf')
  const otherPackages = PRICING_PACKAGES.filter((p) => !['ceramic-coating', 'ppf'].includes(p.service))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            <span className="text-gradient-gold">Pricing in Dubai</span>
          </h1>
          <p className="speakable text-white/60 max-w-2xl mx-auto text-lg">
            Car protection pricing in Dubai: ceramic coating from AED 1,500, PPF from AED 2,500,
            graphene coating from AED 2,500, paint correction from AED 800 and detailing from
            AED 250. Honest, no-hidden-fee packages — every one includes a free paint inspection.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/pricing/ceramic-coating-price-dubai"
              className="btn-ghost text-xs"
            >
              Ceramic coating cost guide
            </Link>
            <Link href="/pricing/ppf-price-dubai" className="btn-ghost text-xs">
              PPF cost guide
            </Link>
          </div>
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
            {PRICING_FAQS.map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-sm font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-white/40">
              Want the full detail on a service? See{' '}
              <Link href="/services/ceramic-coating" className="text-gold-400 hover:text-gold-300 underline underline-offset-2">
                ceramic coating
              </Link>
              ,{' '}
              <Link href="/services/ppf" className="text-gold-400 hover:text-gold-300 underline underline-offset-2">
                PPF
              </Link>
              ,{' '}
              <Link href="/services/graphene-coating" className="text-gold-400 hover:text-gold-300 underline underline-offset-2">
                graphene coating
              </Link>{' '}
              and{' '}
              <Link href="/services/window-tinting" className="text-gold-400 hover:text-gold-300 underline underline-offset-2">
                window tinting
              </Link>
              .
            </p>
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

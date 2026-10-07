import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { PRICE_PAGES, PRICE_PAGE_SLUGS } from '@/content/price-pages'
import { PRICING_PACKAGES } from '@/content/pricing'
import { CTABanner } from '@/components/sections/CTABanner'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

export const revalidate = 86400

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PRICE_PAGE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = PRICE_PAGES.find((p) => p.slug === slug)
  if (!page) return {}
  return {
    title: { absolute: page.seoTitle },
    description: page.seoDescription,
    alternates: { canonical: `${SITE_CONFIG.url}/pricing/${slug}` },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: `${SITE_CONFIG.url}/pricing/${slug}`,
      type: 'website',
    },
  }
}

export default async function PriceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const page = PRICE_PAGES.find((p) => p.slug === slug)
  if (!page) notFound()

  const packages = PRICING_PACKAGES.filter((pkg) => pkg.service === page.serviceSlug)

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Pricing', url: `${SITE_CONFIG.url}/pricing` },
    { name: page.h1, url: `${SITE_CONFIG.url}/pricing/${slug}` },
  ])
  const faqSchema = generateFAQSchema(page.faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-dark-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
        <div className="section-container relative text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <span>/</span>
            <span className="text-white/80">{page.serviceName}</span>
          </nav>
          <h1 className="heading-lg mb-6">{page.h1}</h1>
          <p className="speakable text-white/60 max-w-2xl mx-auto text-lg">{page.answer}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-py bg-dark-950">
        <div className="section-container max-w-4xl">
          <div className="space-y-5 text-white/70 leading-relaxed">
            {page.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Price table */}
      <section className="section-py bg-dark-900">
        <div className="section-container">
          <h2 className="heading-md text-center mb-4">
            {page.serviceName} <span className="text-gradient-gold">Packages & Prices</span>
          </h2>
          <p className="text-white/50 text-sm text-center mb-10 max-w-2xl mx-auto">
            Fixed, transparent pricing — the quote you get is the price you pay.
          </p>
          <div className={cn('grid gap-6 max-w-5xl mx-auto', packages.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2 max-w-3xl')}>
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={cn(
                  'glass-card p-8 relative',
                  pkg.recommended && 'border-gold-500/50 bg-gold-500/5'
                )}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge-gold text-xs px-4 py-1">{pkg.badge}</span>
                  </div>
                )}
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1 text-center">
                  {pkg.tier}
                </p>
                <h3 className="text-xl font-black text-white mb-4 text-center">{pkg.name}</h3>
                <div className="text-center space-y-1 mb-2">
                  <p>
                    <span className="text-xs text-white/40">Sedan </span>
                    <span className="text-2xl font-black text-gradient-gold">
                      AED {pkg.price.sedan.toLocaleString()}
                    </span>
                  </p>
                  <p className="text-sm text-white/50">SUV AED {pkg.price.suv.toLocaleString()}</p>
                  {pkg.price.exotic && (
                    <p className="text-sm text-white/50">Exotic AED {pkg.price.exotic.toLocaleString()}</p>
                  )}
                </div>
                <p className="text-center text-xs text-green-400 font-semibold mb-6">
                  {pkg.warranty} warranty
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book" className="btn-primary w-full justify-center text-sm">
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-white/40 mt-8">
            Need a different service? See our{' '}
            <Link href="/pricing" className="text-gold-400 hover:text-gold-300 underline underline-offset-2">
              full price list
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Cost factors */}
      <section className="section-py bg-dark-950">
        <div className="section-container max-w-4xl">
          <h2 className="heading-md mb-8">
            What Drives the <span className="text-gradient-gold">Price</span>
          </h2>
          <ul className="space-y-3" role="list">
            {page.costFactors.map((factor) => (
              <li key={factor} className="glass-card px-5 py-3.5 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
                <span className="text-sm text-white/80">{factor}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-py bg-dark-900">
        <div className="section-container max-w-3xl">
          <h2 className="heading-md text-center mb-10">
            {page.serviceName} Pricing <span className="text-gradient-gold">FAQ</span>
          </h2>
          <div className="space-y-4">
            {page.faqs.map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-sm font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={`/services/${page.serviceSlug}`}
              className="btn-ghost text-sm"
            >
              Learn more about {page.serviceName.toLowerCase()}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Get Your Exact ${page.serviceName} Quote`}
        subtitle="Free paint inspection. Precise quote for your car within minutes via WhatsApp."
      />
    </>
  )
}

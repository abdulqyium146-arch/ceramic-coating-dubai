import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { VEHICLE_PAGES, VEHICLE_PAGE_PARAMS } from '@/content/vehicles'
import { CTABanner } from '@/components/sections/CTABanner'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'

export const revalidate = 86400

interface PageProps {
  params: Promise<{ brand: string; service: string }>
}

export async function generateStaticParams() {
  return VEHICLE_PAGE_PARAMS
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { brand, service } = await params
  const page = VEHICLE_PAGES.find((v) => v.brand === brand && v.service === service)
  if (!page) return {}
  return {
    title: { absolute: page.seoTitle },
    description: page.seoDescription,
    alternates: { canonical: `${SITE_CONFIG.url}/vehicles/${brand}/${service}` },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: `${SITE_CONFIG.url}/vehicles/${brand}/${service}`,
      type: 'website',
    },
  }
}

export default async function VehicleServicePage({ params }: PageProps) {
  const { brand, service } = await params
  const page = VEHICLE_PAGES.find((v) => v.brand === brand && v.service === service)
  if (!page) notFound()

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: page.brandName, url: `${SITE_CONFIG.url}/vehicles/${brand}` },
    { name: page.serviceName, url: `${SITE_CONFIG.url}/vehicles/${brand}/${service}` },
  ])
  const faqSchema = generateFAQSchema(page.faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-dark-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
        <div className="section-container relative">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">{page.brandName}</span>
          </nav>
          <div className="max-w-3xl">
            <span className="badge-gold mb-4 inline-flex">For {page.brandName} Owners</span>
            <h1 className="text-4xl sm:text-5xl font-black font-display text-white mb-6">{page.h1}</h1>
            <p className="speakable text-white/60 text-lg leading-relaxed">{page.answer}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/book" className="btn-primary">Book Free Inspection</Link>
              <Link href="/pricing" className="btn-ghost">See Pricing</Link>
            </div>
          </div>
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

      {/* Deep sections */}
      {page.sections.map((section) => (
        <section key={section.heading} className="section-py bg-dark-900">
          <div className="section-container max-w-4xl">
            <h2 className="heading-md mb-6">{section.heading}</h2>
            <div className="space-y-5 text-white/70 leading-relaxed">
              {section.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQs */}
      <section className="section-py bg-dark-950">
        <div className="section-container max-w-3xl">
          <h2 className="heading-md text-center mb-10">
            {page.brandName} {page.serviceName} <span className="text-gradient-gold">FAQ</span>
          </h2>
          <div className="space-y-4">
            {page.faqs.map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-sm font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="section-py bg-dark-900">
        <div className="section-container max-w-4xl">
          <h2 className="heading-md text-center mb-8">
            Keep <span className="text-gradient-gold">Exploring</span>
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="glass-card p-5 group hover:border-gold-500/30 transition-all flex items-center justify-between"
              >
                <span className="text-sm font-semibold text-white/80 group-hover:text-white">{link.label}</span>
                <ArrowRight className="h-4 w-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`${page.serviceName} for Your ${page.brandName}`}
        subtitle="Free paint inspection. Exact quote for your model within minutes via WhatsApp."
      />
    </>
  )
}

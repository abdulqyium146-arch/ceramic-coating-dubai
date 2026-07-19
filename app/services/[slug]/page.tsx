import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2, Clock, Shield, ArrowRight, Phone } from 'lucide-react'
import { SERVICES, SERVICE_SLUGS } from '@/content/services'
import { CTABanner } from '@/components/sections/CTABanner'
import { FAQSection } from '@/components/sections/FAQSection'
import { Testimonials } from '@/components/sections/Testimonials'
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      images: [{ url: service.image, width: 1200, height: 630 }],
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3)

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Services', url: `${SITE_CONFIG.url}/services` },
    { name: service.title, url: `${SITE_CONFIG.url}/services/${slug}` },
  ])

  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.description,
    url: `${SITE_CONFIG.url}/services/${slug}`,
    image: `${SITE_CONFIG.url}${service.image}`,
    price: service.startingPrice,
  })

  const faqSchema = generateFAQSchema(service.faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-dark-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
        <div className="section-container relative">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-gold mb-4 inline-flex">
                From AED {service.startingPrice.toLocaleString()}
              </span>
              <h1 className="text-4xl sm:text-5xl font-black font-display text-white mb-4">
                {service.title}{' '}
                <span className="text-gradient-gold">Dubai</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="glass-card px-4 py-3 text-center">
                  <Clock className="h-4 w-4 text-gold-400 mx-auto mb-1" />
                  <p className="text-2xs font-medium uppercase tracking-wider text-white/40">Duration</p>
                  <p className="text-sm font-semibold text-white">{service.duration}</p>
                </div>
                <div className="glass-card px-4 py-3 text-center">
                  <Shield className="h-4 w-4 text-gold-400 mx-auto mb-1" />
                  <p className="text-2xs font-medium uppercase tracking-wider text-white/40">Warranty</p>
                  <p className="text-sm font-semibold text-white">{service.warranty}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary">
                  Get Free Quote
                </Link>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi, I'd like to know more about ${service.title} in Dubai`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp for Quote
                </a>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden glass-card">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-dark-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚗</div>
                  <p className="text-white/50 text-sm">{service.title}</p>
                  <p className="text-white/30 text-xs">Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-py bg-dark-900">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Benefits List */}
            <div>
              <h2 className="heading-md mb-8">
                Why Choose{' '}
                <span className="text-gradient-gold">{service.title}</span>?
              </h2>
              <ul className="space-y-4" role="list">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="heading-md mb-8">
                {"What's"} <span className="text-gradient-gold">Included</span>
              </h2>
              <ul className="space-y-3" role="list">
                {service.features.map((feature) => (
                  <li key={feature} className="glass-card px-5 py-3 flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 glass-card p-6 border-gold-500/20">
                <p className="text-sm font-semibold text-gold-400 mb-2">Starting from</p>
                <p className="text-3xl font-black text-white">
                  AED {service.startingPrice.toLocaleString()}
                </p>
                <p className="text-xs text-white/40 mt-1">Price varies by vehicle size and condition</p>
                <Link href="/contact" className="btn-primary mt-4 w-full justify-center">
                  Get Exact Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for this service */}
      {service.faqs.length > 0 && (
        <section className="section-py bg-dark-950">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="heading-md mb-4">
                {service.title}{' '}
                <span className="text-gradient-gold">FAQ</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {service.faqs.map((faq, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="text-sm font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Services */}
      <section className="section-py bg-dark-900">
        <div className="section-container">
          <h2 className="heading-md text-center mb-10">
            Other <span className="text-gradient-gold">Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="glass-card p-6 group hover:border-gold-500/30 transition-all"
              >
                <h3 className="text-sm font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-white/50 mb-3 line-clamp-2">{s.shortDescription}</p>
                <span className="text-xs font-semibold text-gold-400">
                  From AED {s.startingPrice.toLocaleString()} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Lightbulb } from 'lucide-react'
import { GUIDES, GUIDE_SLUGS } from '@/content/guides'
import { CTABanner } from '@/components/sections/CTABanner'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'

export const revalidate = 86400

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = GUIDES.find((g) => g.slug === slug)
  if (!guide) return {}
  return {
    title: { absolute: guide.seoTitle },
    description: guide.seoDescription,
    alternates: { canonical: `${SITE_CONFIG.url}/guides/${slug}` },
    openGraph: {
      title: guide.seoTitle,
      description: guide.seoDescription,
      url: `${SITE_CONFIG.url}/guides/${slug}`,
      type: 'article',
    },
  }
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params
  const guide = GUIDES.find((g) => g.slug === slug)
  if (!guide) notFound()

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Guides', url: `${SITE_CONFIG.url}/guides` },
    { name: guide.h1, url: `${SITE_CONFIG.url}/guides/${slug}` },
  ])
  const faqSchema = generateFAQSchema(guide.faqs)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.h1,
    description: guide.seoDescription,
    url: `${SITE_CONFIG.url}/guides/${slug}`,
    author: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    publisher: { '@id': `${SITE_CONFIG.url}/#business` },
    inLanguage: 'en-AE',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-dark-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
        <div className="section-container relative">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Guides</span>
          </nav>
          <div className="max-w-3xl">
            <span className="badge-gold mb-4 inline-flex">Honest Guide</span>
            <h1 className="text-4xl sm:text-5xl font-black font-display text-white mb-6">{guide.h1}</h1>
            <div className="space-y-4 text-white/70 text-lg leading-relaxed">
              {guide.intro.map((para, i) => (
                <p key={i} className={i === 0 ? 'speakable' : undefined}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key takeaways */}
      <section className="bg-dark-900 border-y border-white/5">
        <div className="section-container py-10 max-w-4xl">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold-400 mb-5">
            <Lightbulb className="h-4 w-4" /> Key takeaways
          </h2>
          <ul className="grid gap-3 md:grid-cols-2" role="list">
            {guide.takeaways.map((t) => (
              <li key={t} className="glass-card px-5 py-4 flex items-start gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0 mt-2" />
                <span className="text-sm text-white/80 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deep sections */}
      {guide.sections.map((section) => (
        <section key={section.heading} className="section-py bg-dark-950">
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

      {/* Comparison table */}
      {guide.table && (
        <section className="section-py bg-dark-900">
          <div className="section-container max-w-4xl">
            <h2 className="heading-md mb-8">{guide.table.caption}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <caption className="sr-only">{guide.table.caption}</caption>
                <thead>
                  <tr className="border-b border-white/10">
                    {guide.table.headers.map((h) => (
                      <th key={h} scope="col" className="text-left py-3 px-4 font-bold text-white">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {guide.table.rows.map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <th scope="row" className="text-left py-3 px-4 font-semibold text-white/80">
                        {row[0]}
                      </th>
                      <td className="py-3 px-4 text-white/60">{row[1]}</td>
                      <td className="py-3 px-4 text-white/60">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-py bg-dark-900">
        <div className="section-container max-w-3xl">
          <h2 className="heading-md text-center mb-10">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <div className="space-y-4">
            {guide.faqs.map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-sm font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="section-py bg-dark-950">
        <div className="section-container max-w-4xl">
          <h2 className="heading-md text-center mb-8">
            Keep <span className="text-gradient-gold">Exploring</span>
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {guide.relatedLinks.map((link) => (
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
        title="Still Have Questions?"
        subtitle="Talk to a specialist — free advice, no sales pressure, via WhatsApp or phone."
      />
    </>
  )
}

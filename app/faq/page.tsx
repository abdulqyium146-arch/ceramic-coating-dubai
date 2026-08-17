import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'
import { FAQS } from '@/content/faqs'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Ceramic Coating Dubai FAQ | How Much? How Long? Is It Worth It?',
  description:
    'Expert answers to all car ceramic coating services Dubai questions. How much does it cost? How long does it last? Ceramic coating vs PPF vs graphene? Certified detailer answers.',
  keywords: [
    'car ceramic coating Dubai FAQ',
    'how much does car ceramic coating cost in Dubai',
    'how long does ceramic coating last Dubai',
    'is car ceramic coating worth it Dubai',
    'ceramic coating vs PPF Dubai',
    'graphene coating vs ceramic coating Dubai',
    'car ceramic coating questions Dubai',
    'nano ceramic coating FAQ Dubai',
  ],
}

export default function FAQPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'FAQ', url: `${SITE_CONFIG.url}/faq` },
  ])
  const faqSchema = generateFAQSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer })))

  const categories = Array.from(new Set(FAQS.map((f) => f.category)))

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
            <span className="text-white/80">FAQ</span>
          </nav>
          <h1 className="heading-lg mb-4">
            Frequently Asked{' '}
            <span className="text-gradient-gold">Questions</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Expert answers to the most common questions about ceramic coating, PPF, graphene
            coating, and car detailing in Dubai. Updated regularly by our certified technicians.
          </p>
        </div>
      </section>

      {/* FAQ by Category */}
      <section className="section-py bg-dark-950">
        <div className="section-container max-w-4xl">
          {categories.map((category) => {
            const categoryFAQs = FAQS.filter((f) => f.category === category)
            return (
              <div key={category} className="mb-16">
                <h2 className="text-xl font-bold text-white mb-6 pb-3 border-b border-white/10">
                  <span className="text-gradient-gold">{category}</span>
                </h2>
                <div className="space-y-4">
                  {categoryFAQs.map((faq) => (
                    <div key={faq.id} className="glass-card p-6">
                      <h3 className="text-sm font-bold text-white mb-3">{faq.question}</h3>
                      <p className="text-sm text-white/60 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Still have questions */}
          <div className="glass-card p-8 text-center border-gold-500/20">
            <h2 className="text-xl font-bold text-white mb-3">
              Still Have Questions?
            </h2>
            <p className="text-white/60 mb-6">
              Our team is happy to answer any questions about ceramic coating, PPF, or any of
              our services. Contact us via WhatsApp for the fastest response.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi, I have a question about ceramic coating`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp Question
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

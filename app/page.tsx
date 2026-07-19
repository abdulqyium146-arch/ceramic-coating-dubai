import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyUs } from '@/components/sections/WhyUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { LocationsSection } from '@/components/sections/LocationsSection'
import { generateFAQSchema, generateLocalBusinessSchema } from '@/lib/schema'
import { FAQS } from '@/content/faqs'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | #1 Ceramic Coating & Car Detailing Dubai`,
  description:
    "Dubai's premier ceramic coating, PPF, graphene coating and car detailing studio. 4.9★ on Google. 2,400+ cars protected. Serving Dubai Marina, Business Bay, JVC, Palm Jumeirah. Free inspection.",
  keywords: [
    'ceramic coating Dubai',
    'best ceramic coating Dubai',
    'PPF Dubai',
    'graphene coating Dubai',
    'car detailing Dubai',
    'paint correction Dubai',
    'window tinting Dubai',
    'paint protection Dubai',
    'nano ceramic coating Dubai',
    'luxury car detailing Dubai',
    'best detailing studio Dubai',
    'ceramic coating near me',
    'ceramic my car Dubai',
  ],
  openGraph: {
    title: `${SITE_CONFIG.name} | Premium Ceramic Coating & Car Detailing Dubai`,
    description:
      "Dubai's #1 ceramic coating, PPF & graphene coating studio. 4.9★ Google rated. 2,400+ cars protected. Free inspection.",
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  const faqSchema = generateFAQSchema(FAQS.slice(0, 10).map((f) => ({ question: f.question, answer: f.answer })))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <Hero />

      {/* Services */}
      <ServicesGrid />

      {/* Why Us */}
      <WhyUs />

      {/* Comparison Section — semantic SEO entity coverage */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Ceramic vs Graphene vs PPF —{' '}
              <span className="text-gradient-gold">Which is Right for You?</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Choosing the right paint protection depends on your priorities. Here is how
              the three main options compare for{"Dubai's"} specific conditions.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left p-4 text-white/40 font-medium text-xs uppercase tracking-wider border-b border-white/10">
                    Feature
                  </th>
                  {['Ceramic Coating', 'Graphene Coating', 'Paint Protection Film'].map((h) => (
                    <th
                      key={h}
                      className="text-center p-4 text-white font-bold border-b border-white/10"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Rock chip protection', '✗', '✗', '✓'],
                  ['UV protection', '✓✓', '✓✓', '✓'],
                  ['Hydrophobic effect', '✓✓', '✓✓✓', '✓'],
                  ['Anti-static (dust repel)', '✗', '✓✓✓', '✗'],
                  ['Heat resistance', '✓', '✓✓✓', '✓'],
                  ['Water spotting resistance', '✓', '✓✓✓', '✓'],
                  ['Gloss enhancement', '✓✓', '✓✓✓', '✓'],
                  ['Self-healing', '✗', '✗', '✓✓'],
                  ['Warranty', '2–10 yrs', '5–10 yrs', '10 yrs'],
                  ['Starting Price (AED)', '1,500', '2,500', '2,500'],
                ].map(([feature, ceramic, graphene, ppf]) => (
                  <tr key={feature as string} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-white/60 font-medium">{feature}</td>
                    <td className="p-4 text-center text-white/80">{ceramic}</td>
                    <td className="p-4 text-center text-gold-400 font-medium">{graphene}</td>
                    <td className="p-4 text-center text-white/80">{ppf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />

      {/* Testimonials */}
      <Testimonials />

      {/* Locations */}
      <LocationsSection />

      {/* FAQ */}
      <FAQSection limit={8} />

      {/* Final CTA */}
      <CTABanner
        title="Book Your Free Paint Inspection"
        subtitle="Visit our studio in Al Quoz, or call us now. We'll assess your car and recommend the perfect protection package."
      />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Hero } from '@/components/sections/Hero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyUs } from '@/components/sections/WhyUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { LocationsSection } from '@/components/sections/LocationsSection'
import { GalleryPreview } from '@/components/gallery/GalleryPreview'
import { generateFAQSchema } from '@/lib/schema'
import { FAQS } from '@/content/faqs'
import { SERVICES } from '@/content/services'
import { DUBAI_LOCATIONS, SITE_CONFIG } from '@/lib/constants'

// ISR: rebuild home every hour
export const revalidate = 3600

export const metadata: Metadata = {
  title: { absolute: 'Car Ceramic Coating Services Dubai | Near Me | From AED 1,500 | 4.9★ 847 Reviews' },
  description:
    "#1 car ceramic coating services in Dubai from AED 1,500. Nano ceramic coating, PPF near me, graphene coating & interior detailing. 4.9★ Google · 2,400+ cars · Free inspection · All Dubai areas.",
  keywords: [
    'car ceramic coating Dubai',
    'ceramic coating Dubai',
    'car ceramic coating near me',
    'best car ceramic coating Dubai',
    'nano ceramic coating Dubai',
    'ceramic coating near me',
    'PPF Dubai',
    'PPF near me',
    'graphene coating Dubai',
    'car detailing Dubai',
    'paint correction Dubai',
    'window tinting Dubai',
    'interior car ceramic coating',
    'ceramic coating inside car',
    'ceramic coating price Dubai',
    'car paint protection Dubai',
    'auto ceramic coating Dubai',
    'car coating Dubai',
    'ceramic my car Dubai',
    'car ceramic coating Abu Dhabi',
    'best ceramic coating UAE',
  ],
  alternates: { canonical: SITE_CONFIG.url },
  openGraph: {
    title: 'Car Ceramic Coating Dubai | From AED 1,500 | Ceramic My Car',
    description:
      "Best car ceramic coating in Dubai from AED 1,500. PPF, graphene coating, nano ceramic & interior car ceramic coating. 4.9★ Google · 2,400+ cars. Free inspection.",
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  const faqSchema = generateFAQSchema(
    FAQS.slice(0, 10).map((f) => ({ question: f.question, answer: f.answer }))
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero />
      <ServicesGrid />
      <WhyUs />

      {/* Comparison table — Koray entity coverage */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Ceramic vs Graphene vs PPF —{' '}
              <span className="text-gradient-gold">Which is Right for You?</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Choosing the right paint protection depends on your priorities. Here is how
              the three main options compare for Dubai&apos;s specific conditions.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" aria-label="Paint protection comparison">
              <thead>
                <tr>
                  <th className="text-left p-4 text-white/40 font-medium text-xs uppercase tracking-wider border-b border-white/10">Feature</th>
                  {[
                    { label: 'Ceramic Coating', slug: 'ceramic-coating' },
                    { label: 'Graphene Coating', slug: 'graphene-coating' },
                    { label: 'Paint Protection Film', slug: 'ppf' },
                  ].map((h) => (
                    <th key={h.slug} className="text-center p-4 border-b border-white/10">
                      <Link href={`/services/${h.slug}`} className="text-white font-bold hover:text-gold-400 transition-colors">
                        {h.label}
                      </Link>
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
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/services/ceramic-coating" className="btn-ghost text-xs border border-white/10">Ceramic Coating →</Link>
            <Link href="/services/graphene-coating" className="btn-ghost text-xs border border-white/10">Graphene Coating →</Link>
            <Link href="/services/ppf" className="btn-ghost text-xs border border-white/10">Paint Protection Film →</Link>
            <Link href="/pricing" className="btn-ghost text-xs border border-white/10">Full Pricing →</Link>
          </div>
        </div>
      </section>

      {/* ── Ceramic Coating Price Dubai — Quick Reference ─────────────────── */}
      {/* Targets: ceramic coating price dubai, ceramic coating price in dubai,
          ceramic coating dubai price, car interior ceramic coating, ppf near me */}
      <section className="section-py bg-dark-900 border-t border-white/5" aria-labelledby="pricing-heading">
        <div className="section-container">
          <div className="text-center mb-10">
            <span className="badge-gold mb-3 inline-flex">Transparent Pricing</span>
            <h2 id="pricing-heading" className="heading-md mb-3">
              Ceramic Coating Price in Dubai —{' '}
              <span className="text-gradient-gold">From AED 1,500</span>
            </h2>
            <p className="text-white/50 text-sm max-w-2xl mx-auto">
              No hidden fees. All packages include professional decontamination wash, paint
              depth gauge inspection, and a warranty certificate registered to your VIN.
              Prices vary by vehicle size and paint condition.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { service: 'Ceramic Coating', from: '1,500', warranty: '2–10 yr warranty', slug: 'ceramic-coating', note: 'Standard to Elite', hot: false },
              { service: 'Graphene Coating', from: '2,500', warranty: '5–10 yr warranty', slug: 'graphene-coating', note: 'Best for Dubai dust', hot: true },
              { service: 'PPF — Full Body', from: '2,500', warranty: '10 yr warranty', slug: 'ppf', note: 'Xpel / SunTek film', hot: false },
              { service: 'Interior Ceramic', from: '800', warranty: '2–5 yr warranty', slug: 'interior-detailing', note: 'Leather, dash & fabric', hot: false },
            ].map((p) => (
              <Link
                key={p.slug}
                href={`/services/${p.slug}`}
                className={`glass-card p-5 group hover:border-gold-500/30 transition-all ${p.hot ? 'border-gold-500/20 bg-gold-500/[0.02]' : ''}`}
              >
                {p.hot && <span className="badge-gold text-2xs mb-2 inline-flex">Most Popular</span>}
                <p className="text-sm font-bold text-white group-hover:text-gold-400 transition-colors mb-2">
                  {p.service}
                </p>
                <p className="text-2xl font-black text-gradient-gold mb-0.5">AED {p.from}</p>
                <p className="text-xs text-white/40 mb-1">Starting price · {p.warranty}</p>
                <p className="text-xs text-white/30">{p.note}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/pricing" className="btn-ghost text-sm">
              View Full Price List — All Packages &amp; Vehicle Sizes
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────── */}

      <CTABanner />
      <GalleryPreview />
      <Testimonials />
      <LocationsSection />

      {/* ── Koray Topical Authority Hub ──────────────────────────────────── */}
      {/* Every page in the site is linked from the home page with semantic context */}
      <section className="section-py bg-dark-900 border-t border-white/5" aria-label="Topical authority hub">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="badge-gold mb-4 inline-flex">Complete Protection Guide</span>
            <h2 className="heading-lg mb-4">
              Everything You Need to Know About{' '}
              <span className="text-gradient-gold">Car Protection in Dubai</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Explore our complete range of paint protection services, pricing, FAQ, and
              local guides for every Dubai community.
            </p>
          </div>

          {/* Row 1 — Services hub */}
          <div className="mb-12">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-5">
              Paint Protection Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="glass-card p-4 group hover:border-gold-500/30 hover:bg-gold-500/[0.03] transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-gold-400 transition-colors mb-1">
                        {service.title}
                      </p>
                      <p className="text-xs text-white/40">From AED {service.startingPrice.toLocaleString()}</p>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-white/20 group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all mt-0.5 shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Row 2 — Location hub (Koray: every location reachable from home) */}
          <div className="mb-12">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-5">
              Ceramic Coating &amp; PPF Near Me — All Dubai Locations
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {DUBAI_LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="glass-card p-3 group hover:border-gold-500/30 hover:bg-gold-500/5 transition-all text-center"
                  title={`Ceramic coating near me in ${loc.name}, Dubai`}
                >
                  <p className="text-xs font-medium text-white/60 group-hover:text-white transition-colors">
                    {loc.name}
                  </p>
                </Link>
              ))}
            </div>
            {/* UAE-wide service note — targets Abu Dhabi / Ajman keywords */}
            <p className="mt-4 text-center text-xs text-white/30 leading-relaxed">
              Also serving{' '}
              <span className="text-white/50 font-medium">Abu Dhabi</span>,{' '}
              <span className="text-white/50 font-medium">Sharjah</span>,{' '}
              <span className="text-white/50 font-medium">Ajman</span> &amp;{' '}
              <span className="text-white/50 font-medium">Ras Al Khaimah</span>{' '}
              — complimentary collection for UAE-wide orders over AED 5,000.{' '}
              <Link href="/contact" className="text-gold-400/70 hover:text-gold-400 transition-colors">
                Contact us →
              </Link>
            </p>
          </div>

          {/* Row 3 — Resource hub */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-5">
              Resources &amp; Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { href: '/pricing', label: 'Ceramic Coating Prices Dubai', desc: 'Transparent pricing for all packages' },
                { href: '/faq', label: 'Ceramic Coating FAQ Dubai', desc: 'Expert answers to common questions' },
                { href: '/reviews', label: 'Customer Reviews Dubai', desc: '847 verified Google reviews at 4.9★' },
                { href: '/gallery', label: 'Before & After Gallery', desc: 'Real results on Dubai vehicles' },
                { href: '/about', label: 'About Ceramic My Car', desc: 'Certified studio since 2018' },
                { href: '/contact', label: 'Get Free Quote', desc: 'Free paint inspection available' },
                { href: '/services', label: 'All Services', desc: 'Complete car protection range' },
                { href: '/locations', label: 'All Dubai Locations', desc: 'We serve every Dubai community' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="glass-card p-4 group hover:border-gold-500/30 transition-all"
                >
                  <p className="text-sm font-bold text-white group-hover:text-gold-400 transition-colors mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-white/40">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Dense semantic paragraph — entity-rich for NLP crawlers & AI models (GEO/AIO) */}
          <div className="mt-10 glass-card p-6 border-white/5">
            <p className="text-xs text-white/30 leading-relaxed text-center">
              Ceramic My Car — best ceramic coating Dubai, nano ceramic coating Dubai,
              car ceramic coating near me, auto ceramic coating, ceramic paint protection Dubai,
              car paint protection services, ceramic protection for car, car interior ceramic
              coating, ceramic coating inside car, PPF near me Dubai, paint protection film
              near me, car film protection near me — for{' '}
              {SERVICES.map((s, i) => (
                <span key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white/50 transition-colors">
                    {s.title.toLowerCase()}
                  </Link>
                  {i < SERVICES.length - 1 ? ', ' : '. '}
                </span>
              ))}
              Ceramic coating price Dubai from AED 1,500. Serving{' '}
              {DUBAI_LOCATIONS.map((loc, i) => (
                <span key={loc.slug}>
                  <Link href={`/locations/${loc.slug}`} className="hover:text-white/50 transition-colors">
                    {loc.name}
                  </Link>
                  {i < DUBAI_LOCATIONS.length - 1 ? ', ' : '. '}
                </span>
              ))}
              Also serving Abu Dhabi, Sharjah, Ajman &amp; UAE.
              GYEON Certified · Xpel Authorized · 4.9★ Google · Al Quoz, Dubai, UAE.
              Детейлинг студия Дубай / {' '}
              <span lang="ar">تلميع السيارات دبي</span>.
            </p>
          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────── */}

      <FAQSection limit={12} />
      <CTABanner
        title="Book Your Free Paint Inspection"
        subtitle="Visit our studio in Al Quoz, or call us now. We'll assess your car and recommend the perfect protection package."
      />
    </>
  )
}

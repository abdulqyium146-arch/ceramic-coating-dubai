import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, CheckCircle2, Phone, Star, ArrowRight } from 'lucide-react'
import { DUBAI_LOCATIONS, SITE_CONFIG } from '@/lib/constants'
import { SERVICES } from '@/content/services'
import { CTABanner } from '@/components/sections/CTABanner'
import { LocationServiceMatrix } from '@/components/seo/LocationServiceMatrix'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'

// ISR: rebuild location pages every 24 hours
export const revalidate = 86400

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return DUBAI_LOCATIONS.map((loc) => ({ slug: loc.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const location = DUBAI_LOCATIONS.find((l) => l.slug === slug)
  if (!location) return {}
  return {
    title: `Ceramic Coating ${location.name} Dubai | #1 Car Detailing ${location.area}`,
    description: `Best ceramic coating, PPF & car detailing in ${location.name}, Dubai. Certified installers serving ${location.area}. 4.9★ Google rated. Free inspection & pickup available.`,
    keywords: [
      `ceramic coating ${location.name}`,
      `car detailing ${location.name}`,
      `PPF ${location.name}`,
      `paint protection ${location.name}`,
      `graphene coating ${location.area} Dubai`,
      `best detailing ${location.name}`,
      `ceramic coating near me ${location.name}`,
      `window tinting ${location.name}`,
      `paint correction ${location.name} Dubai`,
    ],
    alternates: { canonical: `${SITE_CONFIG.url}/locations/${slug}` },
    openGraph: {
      title: `Ceramic Coating ${location.name} Dubai | Ceramic My Car`,
      description: `Professional ceramic coating, PPF & car detailing in ${location.name}. Free inspection. Pickup available.`,
      url: `${SITE_CONFIG.url}/locations/${slug}`,
    },
  }
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params
  const location = DUBAI_LOCATIONS.find((l) => l.slug === slug)
  if (!location) notFound()

  const nearbyLocations = DUBAI_LOCATIONS.filter((l) => l.slug !== slug)

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Locations', url: `${SITE_CONFIG.url}/locations` },
    { name: location.name, url: `${SITE_CONFIG.url}/locations/${slug}` },
  ])

  const locationFaqs = [
    {
      question: `Do you offer ceramic coating in ${location.name}?`,
      answer: `Yes. We provide professional ceramic coating, PPF, graphene coating, paint correction, and car detailing to ${location.name} and ${location.area} customers. Visit our Al Quoz studio or request a pickup — we collect vehicles from ${location.name} for qualifying packages.`,
    },
    {
      question: `How long does the drive from ${location.name} to your studio take?`,
      answer: `Most ${location.area} customers reach our Al Quoz studio in 15–25 minutes via Sheikh Zayed Road or Al Khail Road. We also offer a complimentary vehicle pickup and drop-off service from ${location.name} — simply book in advance.`,
    },
    {
      question: `What is the best ceramic coating for ${location.name} cars?`,
      answer: `For vehicles in ${location.name}, we recommend our Graphene Premium package. ${location.area}'s environment — dusty desert winds, extreme UV, and hard irrigation water — makes graphene coating's anti-static properties and superior water-spot resistance particularly valuable compared to standard ceramic coating.`,
    },
    {
      question: `Do you offer PPF installation for ${location.name} customers?`,
      answer: `Yes. We are an Xpel Authorized Dealer and offer full-body and partial PPF installation for ${location.name} vehicles. Computer-cut patterns ensure a perfect fit on all vehicle makes and models. Combined with ceramic coating over the PPF, this gives the best possible protection.`,
    },
    {
      question: `How much does ceramic coating cost for ${location.name} residents?`,
      answer: `Ceramic coating for ${location.name} customers starts from AED 1,500 for a 2-year package on a standard sedan, up to AED 8,500 for a 10-year elite package on a luxury or exotic vehicle. We offer free paint inspections to provide an exact quote based on your vehicle's size and condition.`,
    },
  ]

  const faqSchema = generateFAQSchema(locationFaqs)

  // Speakable for AI Overviews / voice search
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Ceramic Coating ${location.name} Dubai`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.speakable'],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-dark-950 overflow-hidden">
        {/* Real studio car photo at low opacity — establishes premium context */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.webp"
            alt=""
            fill
            className="object-cover object-center"
            style={{ opacity: 0.14 }}
            priority
            quality={60}
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 via-dark-950/40 to-dark-950/80" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
        <div className="section-container relative">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-white/80">{location.name}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="badge-gold mb-4 inline-flex">
              <MapPin className="h-3 w-3" />
              {location.area}, Dubai
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-display text-white mb-6">
              Ceramic Coating{' '}
              <span className="text-gradient-gold">{location.name}</span>
              <br />
              <span className="text-3xl sm:text-4xl text-white/70">Dubai — Car Detailing &amp; PPF</span>
            </h1>
            {/* Speakable summary */}
            <p className="speakable text-white/70 text-lg leading-relaxed mb-8">
              Professional ceramic coating, paint protection film (PPF), graphene coating,
              paint correction, interior detailing, exterior detailing, and window tinting for{' '}
              {location.area} residents. Certified installers. 4.9★ Google rated. Free paint
              inspection. Pickup from {location.name} available.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
                4.9 Google Rating
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-gold-400" />
                Serving {location.area} since 2018
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-gold-400" />
                Free pickup from {location.name}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Book Free Inspection
              </Link>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi, I'm from ${location.name} and I'd like to get a ceramic coating quote for my car`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp from {location.name}
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="btn-ghost">
                <Phone className="h-4 w-4 text-gold-400" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Koray — Location × Service matrix (all 7 services for this location) */}
      <LocationServiceMatrix locationName={location.name} locationArea={location.area} />

      {/* Local authority content — entity-rich, AEO optimised */}
      <section className="section-py bg-dark-900">
        <div className="section-container max-w-4xl">
          <article>
            <h2 className="text-2xl font-bold text-white mb-6">
              The Best Ceramic Coating Studio Near{' '}
              <span className="text-gradient-gold">{location.name}</span>
            </h2>
            <div className="space-y-4 text-white/65 text-sm leading-relaxed">
              <p>
                {location.name} is home to some of Dubai&apos;s most discerning vehicle owners —
                from daily drivers to Lamborghinis, Ferraris, and Rolls-Royces. Our{' '}
                <Link href="/services/ceramic-coating" className="text-gold-400 hover:text-gold-300 transition-colors underline-offset-2 underline decoration-gold-500/30">
                  professional ceramic coating in {location.name}
                </Link>{' '}
                delivers the exact level of protection that {location.area}&apos;s vehicles demand,
                using GYEON, Ceramic Pro, and IGL professional-grade products.
              </p>
              <p>
                The combination of Dubai&apos;s UV Index (regularly reaching 11+), desert sand,
                hard water mineral deposits, and industrial fallout makes professional paint
                protection essential — not optional. Our{' '}
                <Link href="/services/graphene-coating" className="text-gold-400 hover:text-gold-300 transition-colors underline-offset-2 underline decoration-gold-500/30">
                  graphene coating service
                </Link>{' '}
                is especially popular with {location.name} customers due to its anti-static
                dust-repelling properties, critical in Dubai&apos;s dusty environment.
              </p>
              <p>
                For maximum paint protection, many {location.area} customers combine{' '}
                <Link href="/services/ppf" className="text-gold-400 hover:text-gold-300 transition-colors underline-offset-2 underline decoration-gold-500/30">
                  Xpel paint protection film (PPF)
                </Link>{' '}
                with ceramic coating — the PPF handles physical impacts (rock chips, scratches)
                while the ceramic coating provides chemical resistance, UV protection, and
                hydrophobic gloss on top.
              </p>
              <p>
                Before any coating application, our{' '}
                <Link href="/services/paint-correction" className="text-gold-400 hover:text-gold-300 transition-colors underline-offset-2 underline decoration-gold-500/30">
                  professional paint correction service
                </Link>{' '}
                removes swirl marks, light scratches, and oxidation to ensure the coating bonds
                to a flawless surface — the difference between a good result and a perfect one.
              </p>

              <h3 className="text-lg font-bold text-white mt-8 mb-4">
                Why {location.name} Residents Trust Ceramic My Car
              </h3>
              <ul className="space-y-2">
                {[
                  `GYEON Certified and Xpel Authorized — the only credentials that matter in Dubai`,
                  `Complimentary vehicle collection from ${location.name} for packages over AED 3,000`,
                  `Climate-controlled Al Quoz studio — 15–25 min from ${location.area}`,
                  `Free paint depth gauge inspection before every job`,
                  `Warranty certificates registered to your VIN number`,
                  `4.9★ from 847 verified Google reviews — Dubai's highest-rated detailing studio`,
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Location FAQ — entity-dense for AI Overviews */}
      <section className="section-py bg-dark-950">
        <div className="section-container max-w-3xl">
          <h2 className="heading-md text-center mb-10">
            {location.name} Ceramic Coating{' '}
            <span className="text-gradient-gold">FAQ</span>
          </h2>
          <div className="space-y-4">
            {locationFaqs.map((faq, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-sm font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="btn-ghost text-sm">
              View All FAQs
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Koray — Nearby locations internal linking */}
      <section className="section-py bg-dark-900">
        <div className="section-container">
          <h2 className="heading-md text-center mb-4">
            We Also Serve{' '}
            <span className="text-gradient-gold">Nearby Areas</span>
          </h2>
          <p className="text-white/50 text-sm text-center mb-10">
            In addition to {location.name}, Ceramic My Car serves all Dubai communities.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {nearbyLocations.slice(0, 12).map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="glass-card p-4 group hover:border-gold-500/30 hover:bg-gold-500/5 transition-all text-center"
                title={`Ceramic coating in ${loc.name}, Dubai`}
              >
                <MapPin className="h-3.5 w-3.5 text-gold-400/50 mx-auto mb-1.5 group-hover:text-gold-400 transition-colors" />
                <p className="text-xs font-medium text-white/60 group-hover:text-white transition-colors">
                  {loc.name}
                </p>
              </Link>
            ))}
          </div>

          {/* Dense anchor text block for crawlers */}
          <div className="mt-8 glass-card p-5 border-white/5">
            <p className="text-xs text-white/25 leading-relaxed text-center">
              Ceramic coating near me:{' '}
              {nearbyLocations.map((loc, i) => (
                <span key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="hover:text-white/50 transition-colors"
                  >
                    Ceramic Coating {loc.name}
                  </Link>
                  {i < nearbyLocations.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* ── Studio Map — geo-signal for Local SEO ───────────────────────── */}
      {/* Embedding the map on every location page strengthens Google's
          understanding that this business serves [location] from Al Quoz */}
      <section className="section-py bg-dark-950 border-t border-white/5" aria-label={`How to reach Ceramic My Car from ${location.name}`}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Text — NAP + travel context for this specific location */}
            <div>
              <span className="badge-gold mb-4 inline-flex">
                <MapPin className="h-3 w-3" />
                Our Studio
              </span>
              <h2 className="text-2xl font-bold text-white mb-4">
                Serving{' '}
                <span className="text-gradient-gold">{location.name}</span>{' '}
                from Al Quoz
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Our climate-controlled studio is located in Al Quoz Industrial Area,
                just 15–25 minutes from {location.name} via Sheikh Zayed Road or
                Al Khail Road. We also offer complimentary vehicle pickup from{' '}
                {location.name} for qualifying packages over AED 3,000.
              </p>

              <address className="not-italic space-y-3 text-sm mb-6">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
                  <div className="text-white/70">
                    <span className="font-semibold text-white">Al Quoz Industrial Area 1</span>
                    <br />Dubai, United Arab Emirates
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-gold-400 shrink-0" />
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-white/70 hover:text-gold-400 transition-colors font-medium">
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
              </address>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/maps?q=Ceramic+My+Car+Dubai+Al+Quoz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Get Directions
                </a>
                <Link href="/contact" className="btn-ghost text-sm">
                  Request Pickup from {location.name}
                </Link>
              </div>
            </div>

            {/* Google Map */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/20"
                 style={{ height: '380px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac5a5ed97cd28ab9%3A0x6a3cc5ff15ccf54!2sCeramic%20My%20Car%20%7C%20Best%20Detailing%20Studio%20in%20Dubai!5e0!3m2!1sen!2s!4v1784538548445!5m2!1sen!2s"
                title={`Ceramic My Car studio location — serving ${location.name}, Dubai`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

          </div>
        </div>
      </section>
      {/* ──────────────────────────────────────────────────────────────────── */}

      <CTABanner
        title={`Book Ceramic Coating in ${location.name}`}
        subtitle={`Serving ${location.area} since 2018. Free paint inspection. Pickup from ${location.name} available.`}
      />
    </>
  )
}

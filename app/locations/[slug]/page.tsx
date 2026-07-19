import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, CheckCircle2, Phone, Star } from 'lucide-react'
import { DUBAI_LOCATIONS, SITE_CONFIG } from '@/lib/constants'
import { SERVICES } from '@/content/services'
import { CTABanner } from '@/components/sections/CTABanner'
import { FAQSection } from '@/components/sections/FAQSection'
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema'

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
    title: `Ceramic Coating ${location.name} Dubai | Best Car Detailing ${location.area}`,
    description: `Professional ceramic coating, PPF, and car detailing in ${location.name}, Dubai. Best rated detailing studio serving ${location.area} and surrounding areas. Free inspection.`,
    keywords: [
      `ceramic coating ${location.name}`,
      `car detailing ${location.name}`,
      `PPF ${location.name}`,
      `paint protection ${location.name}`,
      `ceramic coating ${location.area} Dubai`,
      `best detailing ${location.name}`,
      `ceramic coating near me ${location.name}`,
    ],
  }
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params
  const location = DUBAI_LOCATIONS.find((l) => l.slug === slug)
  if (!location) notFound()

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Locations', url: `${SITE_CONFIG.url}/locations` },
    { name: location.name, url: `${SITE_CONFIG.url}/locations/${slug}` },
  ])

  const locationFaqs = [
    {
      question: `Do you offer ceramic coating in ${location.name}?`,
      answer: `Yes! We serve customers from ${location.name} and ${location.area} at our Al Quoz studio. We also offer complimentary vehicle pickup and drop-off for select ceramic coating packages. Call or WhatsApp us to arrange.`,
    },
    {
      question: `How far is your studio from ${location.name}?`,
      answer: `Our Al Quoz studio is centrally located and easily accessible from ${location.name} via Sheikh Zayed Road and Al Khail Road. Most ${location.area} customers reach us in 15–25 minutes. We also offer pickup and drop-off.`,
    },
    {
      question: `What is the best ceramic coating package for ${location.name} residents?`,
      answer: `For ${location.name} residents in Dubai's climate, we recommend our Ceramic Premium (5-year) or Graphene Premium package. The graphene option is particularly effective for Dubai's dusty conditions, offering anti-static protection that repels dust — a common concern near ${location.area}.`,
    },
    {
      question: `Do you offer car detailing in ${location.name}?`,
      answer: `Yes. We offer mobile exterior washing in ${location.name} for regular maintenance. Full detailing, ceramic coating, and PPF installation are performed at our climate-controlled Al Quoz studio to ensure the highest quality results.`,
    },
  ]

  const faqSchema = generateFAQSchema(locationFaqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-dark-950">
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
            <div className="flex items-center gap-2 mb-4">
              <span className="badge-gold">
                <MapPin className="h-3 w-3" />
                {location.area}, Dubai
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black font-display text-white mb-6">
              Ceramic Coating{' '}
              <span className="text-gradient-gold">{location.name}</span>{' '}
              Dubai
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Professional ceramic coating, paint protection film (PPF), graphene coating, and
              car detailing services for {location.area} residents. Our Al Quoz studio is
              easily accessible from {location.name}, and we offer vehicle pickup and drop-off
              for select packages.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
                <span>4.9 Google Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 className="h-4 w-4 text-gold-400" />
                <span>Serving {location.area} since 2018</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="h-4 w-4 text-gold-400" />
                <span>Pickup & drop-off available</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Book Free Inspection
              </Link>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi, I'm from ${location.name} and I'd like to get a quote for my car`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp from {location.name}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services for this location */}
      <section className="section-py bg-dark-900">
        <div className="section-container">
          <h2 className="heading-md mb-10 text-center">
            Services Available in{' '}
            <span className="text-gradient-gold">{location.name}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="glass-card p-5 group hover:border-gold-500/30 transition-all"
              >
                <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-gold-400 transition-colors">
                  {service.title} — {location.name}
                </h3>
                <p className="text-xs text-white/50 mb-3 line-clamp-2">{service.shortDescription}</p>
                <p className="text-xs font-bold text-gold-400">
                  From AED {service.startingPrice.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local content block — AEO & entity-rich */}
      <section className="section-py bg-dark-950">
        <div className="section-container max-w-4xl">
          <article className="prose prose-invert prose-sm max-w-none">
            <h2 className="text-2xl font-bold text-white mb-6">
              The Best Ceramic Coating in {location.name}, Dubai
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              {location.name} is one of Dubai&apos;s most prestigious residential and commercial
              areas, home to luxury vehicles that deserve the finest protection. Our ceramic
              coating service for {location.area} customers delivers professional-grade paint
              protection that Dubai&apos;s extreme UV, heat, and sand demand.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              Vehicles in {location.name} face one of the most challenging environments in the
              world for paintwork: UV Index levels regularly reaching 11+ (extreme), sand and
              dust from desert winds, bird droppings that etch paint within minutes in the heat,
              and hard water from irrigation that leaves mineral deposits. Professional ceramic
              coating addresses all of these challenges.
            </p>
            <h3 className="text-xl font-bold text-white mt-8 mb-4">
              Why {location.name} Car Owners Choose Ceramic My Car
            </h3>
            <ul className="space-y-2">
              {[
                `GYEON and Ceramic Pro certified installers trusted by ${location.area} residents`,
                'Complimentary vehicle collection from ' + location.name + ' for qualifying packages',
                'Professional climate-controlled studio in Al Quoz — 15–25 minutes from ' + location.name,
                'Free paint inspection and personalised recommendation',
                'Warranty certificates registered to your vehicle VIN',
                '4.9★ Google rating from 847 verified Dubai car owners',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Location FAQ */}
      <section className="section-py bg-dark-900">
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
        </div>
      </section>

      {/* Other locations */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <h2 className="heading-md text-center mb-10">
            Other <span className="text-gradient-gold">Service Areas</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {DUBAI_LOCATIONS.filter((l) => l.slug !== slug).slice(0, 7).map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="glass-card p-4 text-center hover:border-gold-500/30 transition-all group"
              >
                <MapPin className="h-4 w-4 text-gold-400 mx-auto mb-2" />
                <p className="text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                  {loc.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Book Ceramic Coating in ${location.name}`}
        subtitle={`We serve ${location.area} residents. Free paint inspection. Pickup available. Call or WhatsApp now.`}
      />
    </>
  )
}

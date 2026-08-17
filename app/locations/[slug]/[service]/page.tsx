import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, CheckCircle2, Phone, Star, ArrowRight } from 'lucide-react'
import { DUBAI_LOCATIONS, SITE_CONFIG } from '@/lib/constants'
import { SERVICES, type Service } from '@/content/services'
import { CTABanner } from '@/components/sections/CTABanner'
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/schema'

export const revalidate = 86400

interface PageProps {
  params: Promise<{ slug: string; service: string }>
}

export async function generateStaticParams() {
  const combos: { slug: string; service: string }[] = []
  for (const loc of DUBAI_LOCATIONS) {
    for (const svc of SERVICES) {
      combos.push({ slug: loc.slug, service: svc.slug })
    }
  }
  return combos
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, service: serviceSlug } = await params
  const location = DUBAI_LOCATIONS.find((l) => l.slug === slug)
  const service = SERVICES.find((s) => s.slug === serviceSlug)
  if (!location || !service) return {}

  const shortLabel: Record<string, string> = {
    'ceramic-coating': 'Ceramic Coating',
    'ppf': 'PPF',
    'graphene-coating': 'Graphene Coating',
    'paint-correction': 'Paint Correction',
    'interior-detailing': 'Interior Detailing',
    'exterior-detailing': 'Exterior Detailing',
    'window-tinting': 'Window Tinting',
  }
  const label = shortLabel[serviceSlug] ?? service.title
  const title = `${label} ${location.name} Dubai | Near Me From AED ${service.startingPrice.toLocaleString()} | 4.9★`
  const description = `Professional ${label.toLowerCase()} in ${location.name}, Dubai from AED ${service.startingPrice.toLocaleString()}. GYEON certified installers. 4.9★ Google (847 reviews). Free paint inspection. Free pickup from ${location.area}. Same-week appointments.`

  const canonicalUrl = `${SITE_CONFIG.url}/locations/${slug}/${serviceSlug}`
  return {
    title: { absolute: title },
    description,
    keywords: [
      `${label.toLowerCase()} ${location.name}`,
      `${label.toLowerCase()} near me ${location.name}`,
      `${label.toLowerCase()} ${location.area} Dubai`,
      `best ${label.toLowerCase()} ${location.name}`,
      `${label.toLowerCase()} ${location.name} price`,
      `car detailing ${location.name}`,
      `${label.toLowerCase()} Dubai`,
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${label} in ${location.name}, Dubai | Ceramic My Car`,
      description: `${service.shortDescription} Serving ${location.area}. Starting from AED ${service.startingPrice.toLocaleString()}. Free inspection.`,
      url: canonicalUrl,
    },
  }
}

type LocationType = (typeof DUBAI_LOCATIONS)[number]

function getServiceLocationFAQs(service: Service, location: LocationType) {
  const s = service.slug
  const locName = location.name
  const locArea = location.area
  const price = `AED ${service.startingPrice.toLocaleString()}`

  if (s === 'ceramic-coating') {
    return [
      {
        question: `How much does ceramic coating cost in ${locName}?`,
        answer: `Ceramic coating for ${locName} customers starts from ${price} for a standard sedan with a 2-year package, up to AED 8,500 for a 10-year elite package on a luxury vehicle. The final price depends on vehicle size, paint condition, and coating tier. We offer free paint inspections for all ${locArea} customers.`,
      },
      {
        question: `How long does ceramic coating last in ${locName}?`,
        answer: `In Dubai's harsh climate, a professionally applied ceramic coating lasts 2–5 years for standard packages and up to 7–10 years for our premium GYEON or Ceramic Pro elite coatings. ${locArea}'s environment — UV Index 11+, desert sand, and hard irrigation water — makes the coating's hydrophobic and UV-blocking properties essential for ${locName} vehicles.`,
      },
      {
        question: `Do you offer ceramic coating pickup from ${locName}?`,
        answer: `Yes. We offer complimentary vehicle pickup and drop-off from ${locName} for ceramic coating packages over AED 3,000. Simply book your appointment online or via WhatsApp, and we will collect your vehicle from ${locArea}, deliver it to our Al Quoz climate-controlled studio, and return it to you fully coated and cured.`,
      },
    ]
  }

  if (s === 'ppf') {
    return [
      {
        question: `Where can I get PPF near ${locName}?`,
        answer: `Ceramic My Car is an Xpel Authorized Dealer located in Al Quoz, approximately 15–25 minutes from ${locName}. We are the nearest certified PPF installer to ${locArea} offering Xpel Ultimate Plus, SunTek Ultra, and 3M Pro Series with computer-cut patterns. We also offer vehicle collection from ${locName}.`,
      },
      {
        question: `How much does PPF cost for ${locName} customers?`,
        answer: `PPF (Paint Protection Film) installation starts from AED 2,500 for partial coverage (front bumper + hood strip) and ranges to AED 8,000–15,000 for full-body coverage on a luxury or exotic vehicle. ${locArea} customers with qualifying packages over AED 5,000 qualify for complimentary vehicle collection service.`,
      },
      {
        question: `Is PPF worth it for ${locName} vehicles?`,
        answer: `Absolutely. ${locName} vehicles face rock chips from Sheikh Zayed Road, industrial fallout, and sandstorm debris that physically scratch paint. PPF is the only protection that absorbs these physical impacts. Xpel Ultimate Plus PPF is self-healing — minor scratches from ${locArea}'s daily driving conditions disappear with ambient heat.`,
      },
    ]
  }

  if (s === 'graphene-coating') {
    return [
      {
        question: `Is graphene coating worth it for ${locName} cars?`,
        answer: `Graphene coating is the best choice for ${locName} vehicles. ${locArea}'s dusty environment is where graphene coating's anti-static properties deliver maximum benefit — the coating generates a negative charge that actively repels dust particles. Combined with superior water-spot resistance for Dubai's hard water, graphene coating outperforms standard ceramic in every metric that matters for ${locName} conditions.`,
      },
      {
        question: `What is the price of graphene coating in ${locName}?`,
        answer: `Graphene coating for ${locName} customers starts from AED 2,500 for a standard package and ranges to AED 6,000+ for a full correction + premium 10-year graphene coating on a luxury vehicle. We offer free paint inspections to all ${locArea} customers. Vehicle collection from ${locName} available for packages over AED 3,000.`,
      },
      {
        question: `How is graphene coating different from ceramic coating for ${locName} drivers?`,
        answer: `Both protect your paint, but graphene coating adds several advantages critical for ${locArea}: anti-static properties that dramatically reduce dust adhesion (dust is a constant issue in Dubai), superior heat dissipation (paint temperatures in ${locName} parking can exceed 80°C in summer), lower water contact angle for reduced hard water spotting, and generally longer lifespan. For ${locName} drivers who want the best, graphene is the upgrade.`,
      },
    ]
  }

  if (s === 'paint-correction') {
    return [
      {
        question: `Do I need paint correction before ceramic coating in ${locName}?`,
        answer: `Yes, paint correction is essential before ceramic coating. Ceramic coating locks in whatever is on the paint surface — if swirl marks, water etching, or oxidation are present, they will be sealed under the coating forever. Our technicians perform a free paint inspection for all ${locName} customers to assess paint condition and recommend the appropriate correction stage.`,
      },
      {
        question: `How much does paint correction cost in ${locName}?`,
        answer: `Paint correction for ${locName} customers starts from AED 800 for a single-stage enhancement polish on a small car, up to AED 3,000+ for a full 3-stage correction on a large luxury vehicle with heavy defects. We always assess paint depth before and after correction to ensure safe material removal.`,
      },
      {
        question: `How long does paint correction take for ${locArea} vehicles?`,
        answer: `Paint correction takes 1–3 days depending on the vehicle size and the number of correction stages required. For ${locArea} customers, we recommend dropping off the vehicle in the morning and collecting it the following day, allowing full inspection lighting and proper IPA wipedown between stages. We offer vehicle pickup from ${locName} if preferred.`,
      },
    ]
  }

  if (s === 'interior-detailing') {
    return [
      {
        question: `What's included in interior detailing for ${locName} cars?`,
        answer: `Our interior detailing service for ${locName} customers includes deep vacuum of all surfaces, leather seat cleaning and conditioning with Leather Master products, steam cleaning of carpets and upholstery, dashboard and plastic trim cleaning with UV protectant dressing, air vent sanitisation, glass cleaning with anti-fog treatment, door jamb cleaning, and optional fabric protection spray. Ozone odour treatment available on request.`,
      },
      {
        question: `How often should ${locName} vehicles get interior detailing?`,
        answer: `For Dubai's conditions — desert dust enters cabins constantly, UV fades leather and plastics, and cabin temperatures reach 70°C+ in ${locArea} summer parking — we recommend interior detailing every 3–4 months. Regular conditioning keeps leather supple, prevents UV cracking on the dashboard, and removes the fine sand abrasion that degrades all interior surfaces over time.`,
      },
      {
        question: `How much does interior detailing cost for ${locName} customers?`,
        answer: `Interior detailing for ${locName} customers starts from AED 400 for a standard interior clean on a small car, up to AED 1,500 for a comprehensive detail including leather reconditioning, ozone treatment, fabric protection, and ceramic interior coating on a large SUV or luxury vehicle. We offer free vehicle collection from ${locArea} for orders over AED 600.`,
      },
    ]
  }

  if (s === 'exterior-detailing') {
    return [
      {
        question: `What does exterior detailing include for ${locName} vehicles?`,
        answer: `Exterior detailing for ${locName} customers includes a safe two-bucket pH-neutral hand wash, iron decontamination spray to remove embedded brake dust and fallout, clay bar to remove bonded contaminants from ${locArea}'s roads, wheel deep clean, glass water spot treatment, and finishing with premium carnauba wax or synthetic paint sealant for protection and gloss. Engine bay cleaning available as an add-on.`,
      },
      {
        question: `How much does exterior detailing cost in ${locName}?`,
        answer: `Exterior detailing for ${locName} vehicles starts from AED 250 for a standard decontamination wash and wax on a small car, up to AED 700 for a comprehensive full exterior detail with clay bar, iron removal, and premium sealant on a large SUV. For ${locArea} customers, vehicle collection is available for orders over AED 500.`,
      },
      {
        question: `How is exterior detailing different from a regular car wash in ${locName}?`,
        answer: `A car wash removes surface dirt only. Exterior detailing removes bonded contamination — iron fallout from ${locArea}'s roads, tar spots, industrial dust, and sand particles embedded in the clear coat — that a regular wash cannot touch. The result is genuinely clean paint, not just surface clean, with real protection from a wax or sealant layer. It also lasts weeks versus hours for a car wash.`,
      },
    ]
  }

  // window-tinting
  return [
    {
      question: `Is window tinting legal in Dubai for ${locName} residents?`,
      answer: `Yes, within RTA limits. UAE law requires a minimum 30% VLT (Visible Light Transmission) for front side windows. Rear windows and the rear windshield can be darker. All our installations for ${locName} customers comply with RTA regulations — we will not install illegal tint levels regardless of customer preference. Our films include RTA-compliant options from Xpel, SunTek, and 3M.`,
    },
    {
      question: `How much does window tinting cost for ${locName} customers?`,
      answer: `Window tinting for ${locName} vehicles starts from AED 800 for a standard 5-window install with quality film, up to AED 3,000 for premium nano-ceramic Xpel or 3M Crystalline film on a large SUV including the windshield. Nano-ceramic film is our top recommendation for ${locArea} — it blocks 99% UV and 70% infrared heat with zero signal interference.`,
    },
    {
      question: `Which window tint film is best for Dubai's heat in ${locName}?`,
      answer: `For ${locArea}'s extreme sun, nano-ceramic window film (Xpel Prime, SunTek CXP, or 3M Crystalline) is the best investment. Unlike dyed or metalised films, nano-ceramic blocks up to 99% of UV and 70% of infrared heat without interfering with GPS, phone signals, or radar detectors — critical for Dubai drivers. Cabin temperatures in ${locName} parking can drop noticeably with quality ceramic tint.`,
    },
  ]
}

function getServiceContextParagraphs(service: Service, location: LocationType): string[] {
  const locName = location.name
  const locArea = location.area
  const s = service.slug

  if (s === 'ceramic-coating') {
    return [
      `${locName} is one of Dubai's most prestigious communities — home to luxury and exotic vehicles that deserve the best paint protection available. Our professional ceramic coating service delivers a permanent SiO2 (silicon dioxide) molecular bond to your vehicle's clear coat, creating a 9H-hard hydrophobic layer that repels water, UV rays, chemical contaminants, and the fine abrasive sand particles that are a constant challenge for ${locArea} vehicles.`,
      `Dubai's UV Index regularly reaches 11+ (classified as "extreme"), and ${locArea}'s ambient temperatures can cause painted surfaces to exceed 80°C in direct summer sun. This extreme UV exposure degrades unprotected paint within months, causing oxidation, fading, and micro-cracking. Ceramic coating's UV-blocking chemistry prevents this degradation — the coating absorbs the UV rather than allowing it to penetrate the clear coat.`,
      `${locName} vehicles also encounter hard mineral water from irrigation, bird droppings that etch at 45°C ambient temperatures, and desert sand that acts as abrasive. Our ceramic coating creates a surface that is chemically resistant to bird dropping acid, mineral water spotting, and industrial fallout — exactly the threats ${locArea} vehicles face daily.`,
    ]
  }

  if (s === 'ppf') {
    return [
      `${locName} residents use some of Dubai's busiest arterial roads daily — Sheikh Zayed Road, Al Khail Road, and Mohammed Bin Zayed Road — where high-speed lorries and construction vehicles kick up rock chips and road debris at speeds exceeding 120 km/h. Paint Protection Film (PPF) is the only protection that physically absorbs these impacts before they reach your paint.`,
      `As an Xpel Authorized Dealer, we install Xpel Ultimate Plus — the highest-rated PPF film globally with a clear self-healing top coat. Minor scratches from ${locArea}'s parking lots, door dings, and road debris disappear when the film is exposed to heat (even Dubai's ambient temperature is usually sufficient). Our computer-cut patterns ensure zero film overlap or gaps for a factory-perfect look.`,
      `The combination of PPF plus ceramic coating over the top is the ultimate protection package for ${locName} vehicles. The PPF handles physical impacts; the ceramic coating provides chemical resistance, UV protection, and the deep hydrophobic gloss that makes the car easier to maintain in ${locArea}'s dusty conditions.`,
    ]
  }

  if (s === 'graphene-coating') {
    return [
      `Graphene coating is the best coating choice for ${locName} vehicles, and here's why: Dubai's dusty environment is where graphene coating's anti-static properties deliver the most noticeable real-world benefit. Standard ceramic coating is electrically neutral — dust simply settles on it. Graphene coating generates a slight negative electrostatic charge that actively repels airborne dust particles. For ${locArea} vehicles, this means dramatically less dust accumulation between washes.`,
      `Dubai's hard mineral water from desalination creates water spots on every vehicle surface within minutes of washing. Graphene coating achieves a lower water contact angle than standard ceramic, meaning water sheets off faster and in smaller droplets — leaving fewer mineral deposits behind when they evaporate. For ${locName} residents who hand-wash with Dubai tap water, this difference is visible immediately.`,
      `Graphene's inherent heat dissipation properties also mean the coating stays cooler under ${locArea}'s extreme sun, reducing the thermal stress that degrades coating chemistry over time. The result is a coating that lasts longer, performs better daily, and requires less maintenance than standard ceramic — making graphene coating the premium choice for discerning ${locName} vehicle owners.`,
    ]
  }

  if (s === 'paint-correction') {
    return [
      `${locName} vehicles suffer from a specific combination of defects: automatic car washes leave swirl marks (circular micro-scratches visible in direct light), Dubai's hard water leaves mineral etching on the clear coat, and fine desert sand creates random scratching across all painted surfaces. Our multi-stage machine polishing removes these defects systematically using professional DA and rotary polishers with GYEON and Koch-Chemie compounds selected for the specific defect type.`,
      `Paint correction is not optional before ceramic coating — it is essential. Applying ceramic coating over swirl marks permanently seals those imperfections under the coating, making them invisible to further correction. Our free paint inspection for ${locArea} customers includes a clay bar test, paint thickness gauge measurement, and inspection light assessment to determine the correct correction stage required (single-stage, dual-stage, or full 3-stage).`,
      `For ${locName} vehicles with heavy defects — paint that has oxidised from sun exposure, deep water etching from irrigation, or scratching from improper previous washes — our full 3-stage paint correction can restore clarity beyond the original factory finish, creating the perfect base for our premium ceramic or graphene coating packages.`,
    ]
  }

  if (s === 'interior-detailing') {
    return [
      `${locName} cabin interiors face some of the harshest conditions of any global city: summer temperatures reach 70°C+ inside parked vehicles, causing leather to fade, crack, and dry out; UV rays penetrate windshields and side glass to bleach dashboards and plastics; and fine desert sand infiltrates cabin air systems, settling into every surface. Our professional interior detailing reverses this damage and prevents it from recurring.`,
      `Our interior detailing process for ${locArea} vehicles uses professional steam cleaning equipment at controlled temperatures to sanitise all fabrics without saturation, Leather Master professional leather cleaning and conditioning products (the same used by Rolls-Royce and Bentley), ozone treatment to eliminate odours at the molecular level, and UV-protectant dressing on all plastics and trim surfaces to prevent future fading.`,
      `We also offer interior ceramic coating — applied to leather, plastics, glass, and fabric surfaces — which creates a hydrophobic protective layer that resists staining, repels liquid spills, and makes routine cleaning dramatically easier. This is particularly valuable for ${locName} families with children, pet owners, or luxury vehicle owners who want showroom-standard protection for their cabin investment.`,
    ]
  }

  if (s === 'exterior-detailing') {
    return [
      `${locName} vehicles face a unique combination of contaminants that standard car washes cannot address: iron fallout from brake dust and construction activity bonds to painted surfaces invisibly but causes the micro-oxidation that makes paint look dull; tar spots from freshly resurfaced ${locArea} roads bond chemically to clear coat; and desert sand particles embed into soft paint wax layers. Our exterior detailing process addresses all of these with targeted decontamination chemistry.`,
      `Our safe wash process starts with a pre-rinse and citrus pre-wash to loosen loose contamination before a single wash mitt touches the paint — eliminating the swirl marks that automatic brushes and improper hand washes cause. Iron decontamination spray then dissolves bonded iron particles (they turn purple on contact, revealing invisible contamination). Clay bar removes any remaining bonded surface contamination. The paint is then genuinely clean for the first time in months.`,
      `After decontamination, we finish with premium carnauba wax (up to 3 months protection) or synthetic paint sealant (up to 6 months) to restore gloss and provide a protective layer against ${locArea}'s UV, dust, and hard water. For ${locName} customers wanting longer-lasting protection, we recommend booking exterior detailing as preparation for our ceramic coating or graphene coating services.`,
    ]
  }

  // window-tinting
  return [
    `${locName} averages over 300 days of intense sunshine annually, with UV Index readings regularly exceeding 11 (classified "extreme" by the World Health Organization). Without quality window film, UV rays penetrate glass to damage skin (even on short commutes), fade leather and fabric interiors, and overheat cabins to temperatures that shorten the lifespan of every electronic system and material surface inside your vehicle.`,
    `Our nano-ceramic window films from Xpel, SunTek, and 3M block up to 99% of UV rays and reject up to 70% of infrared heat — dramatically reducing cabin temperature and air-conditioning load. Unlike metalised films that interfere with GPS, phone, and radar signals (a serious practical issue for ${locArea} drivers), nano-ceramic technology achieves superior heat rejection without any signal interference.`,
    `All our ${locName} window tinting installations comply with UAE RTA regulations: minimum 30% VLT for front side windows. We will not install illegal tint levels. Our computer-cut film patterns are pre-cut to your vehicle's exact specifications, eliminating the seams and bubbles associated with hand-cutting. Installation is completed in 4–6 hours with a lifetime warranty on the film.`,
  ]
}

export default async function ServiceLocationPage({ params }: PageProps) {
  const { slug, service: serviceSlug } = await params
  const location = DUBAI_LOCATIONS.find((l) => l.slug === slug)
  const service = SERVICES.find((s) => s.slug === serviceSlug)
  if (!location || !service) notFound()

  const otherServices = SERVICES.filter((s) => s.slug !== serviceSlug)
  const otherLocations = DUBAI_LOCATIONS.filter((l) => l.slug !== slug)
  const contextParagraphs = getServiceContextParagraphs(service, location)
  const locationFaqs = getServiceLocationFAQs(service, location)

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Locations', url: `${SITE_CONFIG.url}/locations` },
    { name: location.name, url: `${SITE_CONFIG.url}/locations/${slug}` },
    { name: service.title, url: `${SITE_CONFIG.url}/locations/${slug}/${serviceSlug}` },
  ])

  const serviceSchema = generateServiceSchema({
    name: `${service.title} ${location.name} Dubai`,
    description: `${service.shortDescription} Serving ${location.area} customers from our Al Quoz studio.`,
    url: `${SITE_CONFIG.url}/locations/${slug}/${serviceSlug}`,
    image: `${SITE_CONFIG.url}${service.image}`,
    price: service.startingPrice,
  })

  const faqSchema = generateFAQSchema(locationFaqs)

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${service.title} ${location.name} Dubai`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.speakable'],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-dark-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover object-center"
            style={{ opacity: 0.12 }}
            priority
            quality={60}
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-950/50 to-dark-950/90" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_60%)]" />

        <div className="section-container relative">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span>/</span>
            <Link href={`/locations/${slug}`} className="hover:text-white transition-colors">{location.name}</Link>
            <span>/</span>
            <span className="text-white/80">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="badge-gold mb-4 inline-flex">
              <MapPin className="h-3 w-3" />
              {location.area}, Dubai
            </span>

            <h1 className="text-4xl sm:text-5xl font-black font-display text-white mb-6">
              {service.title}{' '}
              <span className="text-gradient-gold">{location.name}</span>
              <br />
              <span className="text-3xl sm:text-4xl text-white/70">Dubai — Professional {service.title} Near Me</span>
            </h1>

            <p className="speakable text-white/70 text-lg leading-relaxed mb-8">
              {service.shortDescription} Serving {location.area} and all Dubai communities.
              Certified installers. 4.9★ Google rated. Starting from AED {service.startingPrice.toLocaleString()}.
              Free paint inspection. Vehicle pickup from {location.name} available.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
                4.9★ Google Rating
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-gold-400" />
                From AED {service.startingPrice.toLocaleString()}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-gold-400" />
                Pickup from {location.name}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Book Free Inspection
              </Link>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi, I'm from ${location.name} and I need ${service.title} for my car`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp Quote
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`} className="btn-ghost">
                <Phone className="h-4 w-4 text-gold-400" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service context — entity-rich AEO content */}
      <section className="section-py bg-dark-900">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text content */}
            <article>
              <h2 className="text-2xl font-bold text-white mb-6">
                {service.title} in{' '}
                <span className="text-gradient-gold">{location.name}</span>{' '}
                — What You Need to Know
              </h2>
              <div className="space-y-4 text-white/65 text-sm leading-relaxed">
                {contextParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Key benefits */}
              <div className="mt-8">
                <h3 className="text-base font-bold text-white mb-4">
                  {service.title} Benefits for {location.area} Vehicles
                </h3>
                <ul className="space-y-2">
                  {service.benefits.slice(0, 6).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-white/65">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Service image + price card */}
            <div className="space-y-6">
              <div className="relative h-72 lg:h-80 rounded-3xl overflow-hidden border border-white/[0.08]">
                <Image
                  src={service.image}
                  alt={`${service.title} in ${location.name}, Dubai — professional result at Ceramic My Car studio`}
                  fill
                  className="object-cover object-center"
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="badge-gold text-xs">{service.title}</span>
                  <p className="text-xs text-white/50 mt-1.5">{location.name} · Dubai, UAE</p>
                </div>
              </div>

              {/* Price + info card */}
              <div className="glass-card p-6 space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Starting From</p>
                    <p className="text-3xl font-black text-gold-400">
                      AED {service.startingPrice.toLocaleString()}
                    </p>
                  </div>
                  <Link href="/contact" className="btn-primary text-sm">
                    Get Quote
                  </Link>
                </div>
                <div className="border-t border-white/5 pt-4 grid grid-cols-2 gap-4 text-xs text-white/50">
                  <div>
                    <p className="font-semibold text-white/70 mb-0.5">Duration</p>
                    <p>{service.duration}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white/70 mb-0.5">Warranty</p>
                    <p>{service.warranty}</p>
                  </div>
                </div>
                <div className="border-t border-white/5 pt-4 space-y-2">
                  {[
                    `Free paint inspection before every job`,
                    `GYEON Certified + Xpel Authorized installers`,
                    `Pickup from ${location.name} available`,
                    `Warranty registered to your VIN`,
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold-400 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location-specific FAQ */}
      <section className="section-py bg-dark-950">
        <div className="section-container max-w-3xl">
          <h2 className="heading-md text-center mb-10">
            {service.title} {location.name}{' '}
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
              View All FAQs <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Other services in this location — Koray internal linking dimension 1 */}
      <section className="section-py bg-dark-900">
        <div className="section-container">
          <h2 className="heading-md text-center mb-4">
            More Services in{' '}
            <span className="text-gradient-gold">{location.name}</span>
          </h2>
          <p className="text-white/50 text-sm text-center mb-10">
            Ceramic My Car offers the full range of professional automotive protection services to {location.area} customers.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/locations/${slug}/${svc.slug}`}
                className="glass-card p-4 group hover:border-gold-500/30 hover:bg-gold-500/5 transition-all text-center"
                title={`${svc.title} in ${location.name}, Dubai`}
              >
                <p className="text-xs font-semibold text-white/60 group-hover:text-white transition-colors leading-tight">
                  {svc.title}
                </p>
                <p className="text-xs text-gold-400/60 mt-1.5 group-hover:text-gold-400 transition-colors">
                  From AED {svc.startingPrice.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>

          {/* Canonical internal link to location hub page */}
          <div className="mt-6 text-center">
            <Link href={`/locations/${slug}`} className="btn-ghost text-sm">
              All Services in {location.name}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* This service in other locations — Koray internal linking dimension 2 */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <h2 className="heading-md text-center mb-4">
            {service.title} in{' '}
            <span className="text-gradient-gold">Other Dubai Areas</span>
          </h2>
          <p className="text-white/50 text-sm text-center mb-10">
            Ceramic My Car serves all Dubai communities with professional {service.title.toLowerCase()}.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}/${serviceSlug}`}
                className="glass-card p-4 group hover:border-gold-500/30 hover:bg-gold-500/5 transition-all text-center"
                title={`${service.title} in ${loc.name}, Dubai`}
              >
                <MapPin className="h-3.5 w-3.5 text-gold-400/50 mx-auto mb-1.5 group-hover:text-gold-400 transition-colors" />
                <p className="text-xs font-medium text-white/60 group-hover:text-white transition-colors">
                  {loc.name}
                </p>
              </Link>
            ))}
          </div>

          {/* Dense anchor text for crawlers */}
          <div className="mt-8 glass-card p-5 border-white/5">
            <p className="text-xs text-white/25 leading-relaxed text-center">
              {service.title} near me:{' '}
              {otherLocations.map((loc, i) => (
                <span key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}/${serviceSlug}`}
                    className="hover:text-white/50 transition-colors"
                  >
                    {service.title} {loc.name}
                  </Link>
                  {i < otherLocations.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Book ${service.title} in ${location.name}`}
        subtitle={`Serving ${location.area} since 2018. Free paint inspection. Pickup from ${location.name} available. 4.9★ Google rated.`}
      />
    </>
  )
}

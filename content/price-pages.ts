// Phase 4: dedicated price pages for the top price-intent clusters.
// Prices come from the already-published PRICING_PACKAGES — no new claims.

export interface PricePage {
  slug: string
  serviceSlug: string // matches PRICING_PACKAGES service + SERVICES slug
  serviceName: string
  h1: string
  seoTitle: string
  seoDescription: string
  answer: string // 40-60 word AEO block
  intro: string[]
  costFactors: string[]
  faqs: { question: string; answer: string }[]
}

export const PRICE_PAGES: PricePage[] = [
  {
    slug: 'ceramic-coating-price-dubai',
    serviceSlug: 'ceramic-coating',
    serviceName: 'Ceramic Coating',
    h1: 'Ceramic Coating Price in Dubai',
    seoTitle: 'Ceramic Coating Price Dubai | Cost Guide | Ceramic My Car',
    seoDescription:
      'How much does ceramic coating cost in Dubai? Packages from AED 1,500. See exact prices by car size, what drives the cost & get a free quote.',
    answer:
      'Ceramic coating in Dubai costs from AED 1,500 for a 2-year package on a sedan, up to AED 8,500+ for a 10-year elite package on a luxury car. The price depends on vehicle size, paint condition and warranty tier \u2014 and every package below includes a free paint inspection.',
    intro: [
      'Ceramic coating prices in Dubai span a wide range, and the spread confuses a lot of car owners: quotes from AED 900 to AED 10,000+ all claim to be "ceramic coating". The difference is what you\u2019re actually buying \u2014 the coating chemistry, the warranty length, and above all the preparation work underneath it.',
      'Below are our transparent package prices \u2014 the same prices you\u2019ll be quoted in person. No hidden fees, no "from" prices that evaporate on arrival. Every package starts with a free paint inspection so the quote matches your car\u2019s actual condition.',
    ],
    costFactors: [
      'Vehicle size \u2014 sedans need less product and labour than SUVs and exotics',
      'Paint condition \u2014 swirled or oxidised paint needs machine correction first',
      'Warranty tier \u2014 2-year, 5-year and 10-year coatings sit at very different prices',
      'Coating brand and chemistry \u2014 professional SiO2 vs consumer-grade products',
      'Panels covered \u2014 paint only, or paint plus wheels, glass and trim',
      'Add-on services \u2014 interior ceramic, PPF on impact zones, engine bay',
    ],
    faqs: [
      {
        question: 'How much does ceramic coating cost in Dubai?',
        answer:
          'From AED 1,500 for a 2-year package on a standard sedan, AED 2,500 for a 5-year package, and AED 4,500+ for a 10-year elite package. SUVs add roughly 30\u201340% and exotics more \u2014 see the exact package table above. A free paint inspection gives you the precise quote for your car.',
      },
      {
        question: 'Why do ceramic coating prices vary so much between shops?',
        answer:
          'Three reasons: preparation (a proper job includes 1\u20133 days of decontamination and machine polishing; a cheap job skips it), product (professional coatings with real warranties vs spray "ceramics"), and honesty (some shops quote a loss-leader then upsell). Always ask what preparation is included and demand the warranty terms in writing.',
      },
      {
        question: 'Is the cheapest ceramic coating package worth it?',
        answer:
          'A 2-year package from AED 1,500 is genuinely good value if your paint is in decent shape and you maintain it \u2014 you get real SiO2 protection, easier washing and UV defence. What isn\u2019t worth it is a suspiciously cheap "lifetime coating" with no brand name and no written warranty.',
      },
      {
        question: 'Does the price include paint correction?',
        answer:
          'Our packages include the correction stage appropriate to the tier \u2014 single-stage polish on Essential, dual-stage on Premium. Heavily defected paint needing full multi-stage correction is quoted separately after the free inspection, so you never pay for correction you don\u2019t need.',
      },
      {
        question: 'How much more does ceramic coating cost for an SUV?',
        answer:
          'Roughly 30\u201340% more than a sedan for the same package \u2014 more paint area means more product and more machine-polishing time. Exotics cost more again due to complex curves and the extra care they demand. Exact figures are in the package table above.',
      },
      {
        question: 'Are there any hidden fees?',
        answer:
          'No. The package price covers everything listed \u2014 inspection, preparation, coating, and curing. The only way the price changes is if you add optional extras like wheel coating or interior ceramic, which are always quoted separately before any work begins.',
      },
    ],
  },
  {
    slug: 'ppf-price-dubai',
    serviceSlug: 'ppf',
    serviceName: 'Paint Protection Film',
    h1: 'PPF Price in Dubai',
    seoTitle: 'PPF Price Dubai | Cost Guide | Ceramic My Car',
    seoDescription:
      'How much does PPF cost in Dubai? Partial front from AED 2,500, full body to AED 15,000. Compare coverage options & get a free exact quote.',
    answer:
      'PPF in Dubai costs from AED 2,500 for partial-front coverage, AED 4,000\u20137,000 for a full front end, and AED 8,000\u201315,000 for full-body coverage on a luxury car. The film brand \u2014 XPEL, SunTek or 3M \u2014 and how much of the car you cover are the two biggest price drivers.',
    intro: [
      'Paint protection film is the most expensive \u2014 and most protective \u2014 option in car care, so understanding what drives the price matters. Two cars can get quotes thousands of dirhams apart for "PPF" because one quote is partial-front in a mid-tier film and the other is full-body in XPEL Ultimate Plus.',
      'Our pricing below is transparent and fixed: choose your coverage, choose your film, and the price is the price. Every installation includes full paint decontamination and correction first \u2014 film locks in defects, so preparation is never skipped.',
    ],
    costFactors: [
      'Coverage area \u2014 partial front vs full front vs full body is the biggest driver',
      'Film brand \u2014 XPEL Ultimate Plus, SunTek Ultra and 3M Pro Series differ in price',
      'Vehicle size and complexity \u2014 more panels and trickier curves mean more labour',
      'Paint correction needed \u2014 defected paint must be corrected before film goes on',
      'Ceramic coating over the PPF \u2014 the popular add-on for hydrophobics and easy washing',
      'Old film removal \u2014 replacing bubbled or yellowed film adds labour time',
    ],
    faqs: [
      {
        question: 'How much does PPF cost in Dubai?',
        answer:
          'From AED 2,500 for partial-front coverage (bumper, hood strip, mirrors, headlights) on a sedan. Full-front coverage typically runs AED 4,000\u20137,000; full-body ranges from AED 7,500 on a sedan to AED 15,000 on an exotic. See the exact package table above.',
      },
      {
        question: 'Why does PPF cost so much more than ceramic coating?',
        answer:
          'Material and labour. A full-body PPF job uses AED thousands in film alone \u2014 premium urethane is expensive to manufacture \u2014 plus 3\u20135 days of skilled installation. Ceramic coating is a liquid applied in hours. You\u2019re paying for 150\u2013200 microns of physical armour versus microns of chemical protection.',
      },
      {
        question: 'Is cheap PPF worth it?',
        answer:
          'Almost never in Dubai. Budget film yellows within 1\u20132 summers here, and removal of failed cheap film can cost more than the original install. A mid-tier job in a proven film (XPEL, SunTek, 3M) with a 10-year warranty is the minimum worth buying.',
      },
      {
        question: 'Does PPF installation include paint correction?',
        answer:
          'Yes \u2014 proper installation always does. Film magnifies every defect underneath it, so we decontaminate and machine-polish before wrapping. Any quote that skips prep is a red flag, not a bargain.',
      },
      {
        question: 'Can I just PPF the front bumper to save money?',
        answer:
          'Yes \u2014 partial-front packages exist exactly for this. The bumper, hood leading edge, mirrors and headlights take ~90% of stone chips, so covering just these gives most of the protection at a fraction of full-body cost. It\u2019s our most popular option for daily drivers.',
      },
      {
        question: 'Does ceramic coating over PPF cost extra?',
        answer:
          'Yes, it\u2019s an add-on \u2014 but a popular one. Ceramic over PPF adds hydrophobics, UV protection and much easier washing on top of the film\u2019s physical protection. Ask for a bundle quote; combined packages cost less than booking the two services separately.',
      },
    ],
  },
]

export const PRICE_PAGE_SLUGS = PRICE_PAGES.map((p) => p.slug)

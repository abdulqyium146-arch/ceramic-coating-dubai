// Phase 4: informational guide/FAQ hubs for question-intent clusters.

export interface Guide {
  slug: string
  h1: string
  seoTitle: string
  seoDescription: string
  intro: string[]
  takeaways: string[]
  sections: { heading: string; paragraphs: string[] }[]
  faqs: { question: string; answer: string }[]
  relatedLinks: { label: string; href: string }[]
}

export const GUIDES: Guide[] = [
  {
    slug: 'ppf-faq-hub',
    h1: 'Paint Protection Film (PPF): The Complete Dubai FAQ Guide',
    seoTitle: 'PPF FAQs Answered | Dubai Guide | Ceramic My Car',
    seoDescription:
      'Every PPF question answered: cost in Dubai, how long it lasts, yellowing, brands, PPF vs ceramic. The honest guide before you buy.',
    intro: [
      'Paint protection film is the biggest investment in car care most Dubai drivers will ever make \u2014 and the most misunderstood. This guide answers the questions we hear every week at our Al Quoz studio, honestly: what PPF does, what it costs in Dubai, which films survive our sun, and when it\u2019s not worth buying.',
      'No sales pitch. If PPF isn\u2019t right for your car or budget, we\u2019d rather tell you than sell you film.',
    ],
    takeaways: [
      'PPF is the only protection that physically stops rock chips \u2014 ceramic coatings can\u2019t.',
      'In Dubai, expect AED 2,500 (partial front) to AED 15,000 (full body, exotic).',
      'Quality film (XPEL, SunTek, 3M) lasts ~10 years; cheap film yellows in 1\u20132 summers.',
      'Self-healing means light scratches vanish with heat \u2014 not that the film is indestructible.',
      'Film must go over corrected paint: preparation is part of every proper installation.',
    ],
    sections: [
      {
        heading: 'What PPF Actually Is',
        paragraphs: [
          'Paint protection film is a thermoplastic urethane sheet, 150\u2013200 microns thick, bonded to your car\u2019s painted panels. Think of it as a transparent, sacrificial skin: stones, sand and shopping carts hit the film instead of your clear coat. The top layer is elastomeric \u2014 it flows back when warmed, which is why light scratches "heal" in sunlight.',
          'It is not a coating, not a wrap, and not invisible armour. Understanding those boundaries is the difference between loving your PPF and resenting the invoice.',
        ],
      },
      {
        heading: 'What PPF Can and Cannot Do',
        paragraphs: [
          'Can: absorb stone chips and road rash, resist light scratches and scuffs, prevent paint fade under the film, and be removed years later revealing factory-fresh paint. On a new car, it\u2019s the single best resale-value protection you can buy.',
          'Cannot: stop deep dents, survive neglect (contamination still bonds to the film), or look good over uncorrected paint \u2014 film magnifies swirls and water spots underneath it. It also won\u2019t make washing unnecessary; it just makes the paint underneath irrelevant to wash swirls.',
        ],
      },
      {
        heading: 'Choosing a Film in Dubai\u2019s Climate',
        paragraphs: [
          'Dubai is the harshest test a film will face: UV Index 11+, 50\u00b0C heat, and airborne sand. The three films with a genuine track record here are XPEL Ultimate Plus, SunTek Ultra and 3M Pro Series \u2014 all with self-healing top coats and 10-year warranties covering yellowing, cracking and peeling.',
          'Ask every installer two questions: which exact film (not "premium German film"), and will you put the manufacturer\u2019s warranty in writing? Vague answers to either mean walk away.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does it cost to PPF a car in Dubai?',
        answer:
          'From AED 2,500 for partial-front coverage on a sedan, AED 4,000\u20137,000 for a full front end, and AED 7,500\u201315,000 for full-body depending on vehicle size. See our detailed PPF price guide for exact package prices.',
      },
      {
        question: 'How long does PPF last?',
        answer:
          'Quality film lasts around 10 years \u2014 that\u2019s what the manufacturer warranties cover. Cheap unbranded film can yellow, crack or peel in 1\u20132 Dubai summers. Lifespan depends on film quality first, installation quality second, and maintenance a distant third.',
      },
      {
        question: 'Does PPF yellow over time?',
        answer:
          'Premium films don\u2019t \u2014 their top coats include UV inhibitors and the 10-year warranty explicitly covers yellowing. Yellowing is what happens to cheap urethane without UV protection. In Dubai\u2019s sun the difference shows fast, which is why film choice matters more here than anywhere.',
      },
      {
        question: 'Can you see PPF on the car?',
        answer:
          'Not on a proper installation. Modern premium film is optically clear; from a metre away it\u2019s invisible. Visible edges, texture or haze signal cheap film or poor installation \u2014 not an inherent PPF trait.',
      },
      {
        question: 'Does PPF need maintenance?',
        answer:
          'Yes, but easy maintenance. Wash normally (no pressure washer directly on edges for the first week), and the self-healing top coat erases wash swirls by itself. An annual inspection keeps edges sealed. Ceramic coating over the PPF makes washing easier still.',
      },
      {
        question: 'PPF vs ceramic coating \u2014 which should I get?',
        answer:
          'Different jobs: PPF stops physical damage (chips, scratches); ceramic stops chemical/UV damage and adds gloss and easy washing. Budget for one? Highway drivers: PPF. Garage-kept cars: ceramic. Budget for both? PPF first, ceramic over the top \u2014 the benchmark Dubai setup.',
      },
      {
        question: 'Will PPF damage my paint when removed?',
        answer:
          'Quality film removed professionally comes off cleanly with heat, even after years. Damage stories involve budget films with aggressive adhesives or paint that was already failing underneath. Professional removal takes a few hours and leaves factory paint untouched.',
      },
      {
        question: 'Is PPF worth it on an older car?',
        answer:
          'Depends on the paint. PPF locks in whatever\u2019s underneath, so an older car needs paint correction first \u2014 factor that into the cost. On a 5-year-old car with good paint, PPF still makes sense to freeze its condition; on tired, thin clear coat, correction plus ceramic is usually the smarter spend.',
      },
      {
        question: 'How long does PPF installation take?',
        answer:
          'Partial front: 1\u20132 days. Full front: 2\u20133 days. Full body: 3\u20135 days. Then 24\u201348 hours for edges to set \u2014 no pressure washers or automatic washes in the first week.',
      },
      {
        question: 'What\u2019s the difference between XPEL, SunTek and 3M?',
        answer:
          'All three are top-tier self-healing films with 10-year warranties; differences are in clarity, stain resistance and installer preference rather than dramatic quality gaps. We install all three and recommend based on your car and budget. The film to avoid isn\u2019t any of these \u2014 it\u2019s the unbranded roll with no warranty.',
      },
    ],
    relatedLinks: [
      { label: 'PPF service page', href: '/services/ppf' },
      { label: 'PPF price guide', href: '/pricing/ppf-price-dubai' },
      { label: 'XPEL PPF in Dubai', href: '/brands/xpel-ppf' },
      { label: 'Full price list', href: '/pricing' },
    ],
  },
  {
    slug: 'ceramic-coating-faq-hub',
    h1: 'Ceramic Coating: The Complete Dubai FAQ Guide',
    seoTitle: 'Ceramic Coating FAQs Answered | Dubai Guide',
    seoDescription:
      'Every ceramic coating question answered: cost in Dubai, how long it lasts, PPF vs ceramic, myths. The honest guide before you buy.',
    intro: [
      'Ceramic coating is Dubai\u2019s most searched car-care service \u2014 and its most mythologised. This guide answers the real questions: what it costs here, how long it genuinely lasts in 50\u00b0C heat, what it can\u2019t do, and how to spot the cowboys.',
      'We apply ceramic coatings every day at our Al Quoz studio. We\u2019d rather you buy informed \u2014 even if informed means buying elsewhere.',
    ],
    takeaways: [
      'Ceramic coating = chemical/UV protection + gloss + easy washing. It does NOT stop rock chips.',
      'Dubai pricing: AED 1,500 (2-year) to AED 8,500+ (10-year elite). Below AED 1,000, be suspicious.',
      'Real durability here: 2\u20135 years standard, up to 10 premium \u2014 with maintenance.',
      'Preparation (decontamination + machine polishing) is ~80% of the result.',
      '"Lifetime coating" with no brand name and no written warranty is a red flag.',
    ],
    sections: [
      {
        heading: 'What Ceramic Coating Actually Is',
        paragraphs: [
          'A liquid polymer based on silicon dioxide (SiO2) that cross-links and cures into a rigid, transparent layer bonded to your clear coat at a molecular level. Harder than the paint beneath it (up to 9H), extremely flat at a microscopic level \u2014 which is why water beads violently and dirt struggles to stick.',
          'It is a chemical shield, not physical armour. That single distinction explains 90% of buyer disappointment: people who wanted chip protection bought the wrong product.',
        ],
      },
      {
        heading: 'What It Does in Dubai Specifically',
        paragraphs: [
          'Dubai\u2019s UV Index regularly hits 11+ \u2014 unprotected clear coat oxidises within months. Ceramic coating\u2019s UV-blocking chemistry absorbs that punishment instead. The hydrophobic layer means Dubai\u2019s mineral-heavy water spots release instead of etching, and bird droppings \u2014 which etch paint in hours at 45\u00b0C \u2014 get chemical resistance buying you cleanup time.',
          'What it won\u2019t do: stop stone chips on Sheikh Zayed Road, survive without washing, or fix paint that\u2019s already swirled. Coating over defects seals them in permanently \u2014 which is why every honest quote includes machine polishing.',
        ],
      },
      {
        heading: 'How to Choose an Installer',
        paragraphs: [
          'Judge the process, not the bottle. Ask: what decontamination is included? How many polishing stages? Do you measure paint depth? What\u2019s the written warranty and what voids it? A good installer answers precisely; a bad one changes the subject to the brand name on the bottle.',
          'Price signals: a proper 2-year coating job cannot be done profitably much under AED 1,500 in Dubai \u2014 the labour and product cost more. Quotes far below that are skipping preparation, using consumer-grade product, or both.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does ceramic coating cost in Dubai?',
        answer:
          'From AED 1,500 for a 2-year package on a sedan to AED 8,500+ for a 10-year elite package on a luxury car. SUVs run 30\u201340% more. See our ceramic coating price guide for the exact package breakdown.',
      },
      {
        question: 'What is ceramic coating, exactly?',
        answer:
          'A liquid SiO2-based polymer that chemically bonds to your car\u2019s clear coat and cures into a hard, glass-like layer. Unlike wax, which sits on top and washes away, it becomes part of the surface \u2014 delivering years of UV protection, chemical resistance and hydrophobic behaviour.',
      },
      {
        question: 'How long does ceramic coating last in Dubai?',
        answer:
          '2\u20135 years for standard packages, up to 7\u201310 for premium ones \u2014 in Dubai\u2019s heat and UV, the top of the range demands proper maintenance washes and annual inspections. Anyone promising "lifetime" without a written warranty defining it is selling marketing, not chemistry.',
      },
      {
        question: 'Is ceramic coating worth it?',
        answer:
          'In Dubai, usually yes \u2014 the UV alone justifies it for cars parked outdoors. You get easier washing, lasting gloss, UV and chemical protection, and better resale. It\u2019s not worth it if you wanted rock-chip protection (that\u2019s PPF) or if you never wash the car (neglect kills coatings).',
      },
      {
        question: 'Ceramic coating vs wax \u2014 what\u2019s the difference?',
        answer:
          'Durability and chemistry. Wax lasts weeks in Dubai heat \u2014 it literally melts off. Sealants last months. Ceramic coating lasts years, bonds molecularly, and resists chemicals and UV far beyond either. If you wax quarterly, ceramic pays for itself in under two years.',
      },
      {
        question: 'Does ceramic coating need maintenance?',
        answer:
          'Yes \u2014 less than uncoated paint, but it\u2019s not fit-and-forget. Wash every 2\u20134 weeks with pH-neutral shampoo, avoid automatic brush washes, and get an annual inspection. A neglected coating clogs with bonded contamination and underperforms within a year.',
      },
      {
        question: 'Can ceramic coating be applied over PPF?',
        answer:
          'Yes, and it\u2019s an excellent combination: PPF handles physical impacts while the ceramic adds hydrophobics, UV protection and easier washing on top of the film. Many of our customers do exactly this on new cars.',
      },
      {
        question: 'Will ceramic coating hide my swirl marks?',
        answer:
          'No \u2014 it preserves them. Coating is transparent; it locks in whatever\u2019s underneath permanently. Swirls must be machine-polished out first, which is why paint correction is part of every proper coating job we do.',
      },
      {
        question: 'How long does application take?',
        answer:
          '1\u20133 days including preparation and curing: decontamination and machine polishing first (the bulk of the work), then panel-by-panel application, then 12\u201324 hours of curing. Same-day "ceramic coating" skips the preparation \u2014 the part that makes it last.',
      },
      {
        question: 'What\u2019s the difference between 9H ceramic and graphene coating?',
        answer:
          'Graphene coating is ceramic chemistry plus graphene nanostructure \u2014 adding anti-static dust repellence, better heat dissipation and reduced water spotting. In Dubai\u2019s dust and heat the difference is noticeable; for garage-kept cars, standard ceramic is the value pick.',
      },
    ],
    relatedLinks: [
      { label: 'Ceramic coating service', href: '/services/ceramic-coating' },
      { label: 'Ceramic coating price guide', href: '/pricing/ceramic-coating-price-dubai' },
      { label: 'Graphene coating', href: '/services/graphene-coating' },
      { label: 'Paint correction', href: '/services/paint-correction' },
    ],
  },
]

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug)

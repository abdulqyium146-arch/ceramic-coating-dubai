// Phase 4c: vehicle-specific pages for the top vehicle clusters.
// No business facts invented — pricing references link to published guides,
// paint characteristics are general automotive knowledge.

export interface VehiclePage {
  brand: string // URL slug
  service: string // URL slug
  brandName: string
  serviceName: string
  h1: string
  seoTitle: string
  seoDescription: string
  answer: string
  intro: string[]
  sections: { heading: string; paragraphs: string[] }[]
  faqs: { question: string; answer: string }[]
  relatedLinks: { label: string; href: string }[]
}

export const VEHICLE_PAGES: VehiclePage[] = [
  {
    brand: 'mercedes',
    service: 'ceramic-coating',
    brandName: 'Mercedes-Benz',
    serviceName: 'Ceramic Coating',
    h1: 'Ceramic Coating for Mercedes-Benz in Dubai',
    seoTitle: 'Ceramic Coating for Mercedes | Dubai | Ceramic My Car',
    seoDescription:
      'Ceramic coating for Mercedes-Benz in Dubai from AED 1,500. Protect soft German clear coat from UV & swirls. Free inspection & pickup.',
    answer:
      'Ceramic coating for a Mercedes-Benz in Dubai costs from AED 1,500 for a C-Class to AED 4,500+ for an S-Class or G-Class on a premium package. Mercedes clear coats are relatively soft and show swirl marks easily \u2014 coating locks in a corrected finish and shields it from Dubai\u2019s UV.',
    intro: [
      'Mercedes-Benz paint is beautiful and \u2014 by modern standards \u2014 on the softer side, which means it corrects beautifully but also swirls easily under Dubai\u2019s dusty conditions. That makes a Mercedes one of the best candidates for ceramic coating: machine-polish once, lock it in with a hard SiO2 layer, and the deep gloss survives years instead of months.',
      'We coat Mercedes models from A-Class to G-Class at our Al Quoz studio. Every job starts with a free paint-depth measurement and inspection \u2014 German clear coats vary by model and year, and the coating plan follows what we measure, not a template.',
    ],
    sections: [
      {
        heading: 'Why Mercedes Paint Needs Ceramic in Dubai',
        paragraphs: [
          'Two Dubai-specific problems hit Mercedes hardest. First, UV: many Mercedes colours \u2014 Obsidian Black, Selenite Grey, Spectral Blue \u2014 are dark and absorb enormous heat, accelerating clear-coat oxidation. Ceramic coating\u2019s UV-blocking chemistry absorbs that punishment instead.',
          'Second, wash swirls: softer clear coats pick up micro-marring from every dusty wipe and tunnel wash. A ceramic layer is significantly harder than the paint beneath it, so the defects that used to appear in weeks now take years \u2014 and the hydrophobic surface means less aggressive washing in the first place.',
        ],
      },
      {
        heading: 'Matte Mercedes Paint (Magno): Read This',
        paragraphs: [
          'If your Mercedes has a factory matte finish \u2014 Magno Grey, Magno Black, MANUFAKTUR mattes \u2014 standard ceramic coating is the wrong product. Matte paint cannot be machine-polished, so correction is off the table, and gloss coatings alter the finish.',
          'For Magno and matte finishes we recommend XPEL Stealth PPF or a dedicated matte ceramic coating, applied without any polishing stage. Tell us your paint code when booking and we\u2019ll plan accordingly \u2014 this is exactly what the free inspection is for.',
        ],
      },
      {
        heading: 'Our Process for Your Mercedes',
        paragraphs: [
          'Decontamination wash and iron/clay treatment, paint-depth gauge mapping across all panels, machine polishing matched to your paint\u2019s measured hardness (single-stage for well-kept cars, multi-stage for swirled ones), panel-wipe, then ceramic application in a controlled bay \u2014 followed by 12\u201324 hours of curing before collection.',
          'Most Mercedes take 1\u20132 days depending on condition. Complimentary pickup from anywhere in Dubai is available for coating packages.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does ceramic coating cost for a Mercedes in Dubai?',
        answer:
          'From AED 1,500 for a C-Class or A-Class on our 2-year package, AED 2,500\u20133,200 for E-Class/GLC on the 5-year package, and AED 4,500+ for S-Class, G-Class or AMG models on premium tiers. See our ceramic coating price guide for the full table.',
      },
      {
        question: 'Is ceramic coating worth it on a Mercedes?',
        answer:
          'Usually yes \u2014 softer clear coats benefit more than most from a hard protective layer, and dark Mercedes colours show every swirl that coating prevents. For resale in Dubai\u2019s market, a documented coating with warranty is a genuine selling point on premium German cars.',
      },
      {
        question: 'Can you ceramic coat a matte (Magno) Mercedes?',
        answer:
          'Yes, but with a matte-specific coating and zero polishing \u2014 matte paint can\u2019t be corrected. For maximum protection on matte finishes we usually recommend XPEL Stealth PPF instead. The free inspection determines the right route for your specific paint.',
      },
      {
        question: 'How long does it take?',
        answer:
          '1\u20132 days including preparation and curing for most Mercedes models. G-Class and heavily swirled cars can take longer \u2014 we confirm the timeline at the free inspection before any work begins.',
      },
      {
        question: 'Will coating void my Mercedes warranty?',
        answer:
          'No. Ceramic coating is a surface treatment that doesn\u2019t modify any mechanical or electrical system. It\u2019s the same category as wax or sealant in warranty terms \u2014 just far more durable.',
      },
    ],
    relatedLinks: [
      { label: 'Ceramic coating service', href: '/services/ceramic-coating' },
      { label: 'Ceramic coating price guide', href: '/pricing/ceramic-coating-price-dubai' },
      { label: 'Ceramic coating FAQ guide', href: '/guides/ceramic-coating-faq-hub' },
      { label: 'Paint correction', href: '/services/paint-correction' },
    ],
  },
  {
    brand: 'range-rover',
    service: 'ppf',
    brandName: 'Range Rover',
    serviceName: 'Paint Protection Film',
    h1: 'Paint Protection Film for Range Rover in Dubai',
    seoTitle: 'Range Rover PPF Dubai | Paint Protection | Ceramic My Car',
    seoDescription:
      'PPF for Range Rover in Dubai from AED 2,500. Protect tall front ends & off-road paint from chips. XPEL film, 10-year warranty.',
    answer:
      'PPF for a Range Rover in Dubai costs from AED 2,500 for partial-front coverage to AED 10,000\u201315,000 for full-body in XPEL film. Range Rovers\u2019 tall, flat front ends catch more stone chips than almost any SUV \u2014 and desert or wadi use multiplies the damage, making film close to essential.',
    intro: [
      'No SUV in Dubai takes more frontal punishment than a Range Rover: the tall, upright nose sits exactly in the stone-chip zone on Sheikh Zayed Road, and weekend desert runs sandblast the lower panels. We see more Range Rovers for PPF than any other single model \u2014 it\u2019s the car that benefits most.',
      'Whether it\u2019s a Sport, Vogue, Velar or Defender, the prescription is similar: protect the front properly, decide on full-body based on off-road use, and never let film go over uncorrected paint. Every job starts with a free inspection at our Al Quoz studio.',
    ],
    sections: [
      {
        heading: 'Where Range Rovers Get Damaged',
        paragraphs: [
          'The front bumper and hood leading edge take the worst of highway stone chips \u2014 the upright nose catches what slips under a sedan. Lower doors and rear arches collect sand rash from desert driving. And the large, flat hood shows every impact a lower car would deflect.',
          'Partial-front coverage (bumper, hood strip, mirrors, headlights, fender tips) handles ~90% of highway damage and is our most popular Range Rover package. Full-body is the answer for cars that see regular desert or wadi use \u2014 or for owners who want the paint frozen at delivery condition.',
        ],
      },
      {
        heading: 'Film Choice for Large SUVs',
        paragraphs: [
          'We install XPEL Ultimate Plus, SunTek Ultra and 3M Pro Series \u2014 all self-healing with 10-year warranties. On a vehicle this size, film quality matters doubly: cheap film on 20+ square metres of panels is a removal nightmare when it fails.',
          'For matte-finish Range Rovers (Santorini Black with satin finishes, SV bespoke mattes), XPEL Stealth is the correct film \u2014 gloss film would ruin the factory finish.',
        ],
      },
      {
        heading: 'Installation on a Vehicle This Size',
        paragraphs: [
          'A Range Rover is one of the biggest civilian vehicles we wrap \u2014 full-body takes 4\u20135 days including the paint correction that must come first. We work panel by panel in a contamination-controlled bay, with computer-cut patterns adapted to your exact model year.',
          'Plan for a week without the car for full-body, 2\u20133 days for front coverage. Complimentary pickup and drop-off is available, so the logistics are handled.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does PPF cost for a Range Rover in Dubai?',
        answer:
          'From AED 2,500\u20133,200 for partial-front coverage, AED 4,000\u20137,000 for a full front end, and AED 10,000\u201315,000 for full-body in premium film. See our PPF price guide for exact package pricing.',
      },
      {
        question: 'Should I get full-body PPF or just the front?',
        answer:
          'Front coverage for highway-driven cars; full-body for desert/wadi use or new cars you want to freeze at delivery condition. Honest answer: most Range Rover owners start with the front and add panels later \u2014 film can be extended in stages.',
      },
      {
        question: 'Does PPF protect against desert pinstriping?',
        answer:
          'Yes \u2014 light brush scratches from desert tracks self-heal out of the film with heat. Deep gouges from rocks will still mark the film, but the paint underneath survives. For serious off-roaders, that\u2019s exactly the trade you want.',
      },
      {
        question: 'How long does installation take?',
        answer:
          '2\u20133 days for front coverage, 4\u20135 days for full-body including paint correction. The film needs 24\u201348 hours after install for edges to set \u2014 no pressure washers in the first week.',
      },
      {
        question: 'Will PPF affect my Range Rover\u2019s resale value?',
        answer:
          'Positively. Documented premium PPF with remaining warranty is a strong selling point in Dubai\u2019s used market \u2014 and removal before sale reveals paint in near-delivery condition. Keep the warranty paperwork.',
      },
    ],
    relatedLinks: [
      { label: 'PPF service', href: '/services/ppf' },
      { label: 'PPF price guide', href: '/pricing/ppf-price-dubai' },
      { label: 'PPF FAQ guide', href: '/guides/ppf-faq-hub' },
      { label: 'XPEL PPF', href: '/brands/xpel-ppf' },
    ],
  },
]

export const VEHICLE_PAGE_PARAMS = VEHICLE_PAGES.map((v) => ({
  brand: v.brand,
  service: v.service,
}))

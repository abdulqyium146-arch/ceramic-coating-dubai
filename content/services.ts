export interface Service {
  id: string
  title: string
  slug: string
  shortDescription: string
  description: string
  iconName: string
  image: string
  benefits: string[]
  duration: string
  warranty: string
  startingPrice: number
  features: string[]
  faqs: Array<{ question: string; answer: string }>
  seoTitle: string
  seoDescription: string
  keywords: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    slug: 'ceramic-coating',
    shortDescription:
      'Professional nano-ceramic coating that creates an ultra-hard, hydrophobic layer protecting your paint for years.',
    description:
      "Our professional-grade nano-ceramic coating creates a permanent bond with your vehicle's paintwork, forming an ultra-hard, 9H-rated protective layer. This advanced silicon dioxide (SiO2) formula delivers unmatched hydrophobic properties, UV protection, chemical resistance, and an incredible depth of gloss that transforms how your car looks and feels.",
    iconName: 'Shield',
    image: '/images/services/ceramic-coating.webp',
    benefits: [
      'Up to 9H hardness rating — harder than factory paint',
      'Extreme hydrophobic effect — water beads and rolls off instantly',
      'UV protection prevents paint fade and oxidation',
      'Chemical resistance against bird droppings, tree sap, and road grime',
      'Self-cleaning properties reduce washing frequency',
      'Depth of gloss that surpasses factory finish',
      'Long-term cost savings vs regular waxing',
      'Enhances resale value of your vehicle',
    ],
    duration: '1–3 days (including prep and curing)',
    warranty: '2–10 years depending on package',
    startingPrice: 1500,
    features: [
      'GYEON, Ceramic Pro, or IGL Coatings products',
      'Full paint decontamination included',
      'Clay bar treatment',
      'Single-stage polish before application',
      'Window coating optional add-on',
      'Wheel coating optional add-on',
    ],
    faqs: [
      {
        question: 'What is ceramic coating and how does it work?',
        answer:
          "Ceramic coating is a liquid polymer made from silicon dioxide (SiO2) that chemically bonds with your car's factory paint. Once cured, it creates a permanent layer of protection that's harder than the paint itself. Unlike wax or sealants that sit on top of paint, ceramic coating bonds at a molecular level for lasting protection.",
      },
      {
        question: "How long does ceramic coating last in Dubai's climate?",
        answer:
          "In Dubai's harsh climate with extreme UV, sand, and heat, a professionally applied ceramic coating lasts 2–5 years for standard packages and up to 7–10 years for premium coatings. Dubai's UV intensity makes professional ceramic coating especially valuable for protecting your investment.",
      },
      {
        question: 'Is ceramic coating worth it in Dubai?',
        answer:
          "Absolutely. Dubai's intense UV radiation (one of the highest in the world), sand storms, bird droppings, and extreme heat are some of the most paint-damaging conditions globally. Ceramic coating provides critical protection that preserves paint condition, maintains gloss, and enhances your vehicle's resale value significantly.",
      },
      {
        question: 'How much does ceramic coating cost in Dubai?',
        answer:
          'Ceramic coating in Dubai starts from AED 1,500 for small cars with a basic 2-year package, up to AED 8,000+ for luxury vehicles with a premium 10-year coating. The price depends on vehicle size, paint condition, coating brand, and warranty level.',
      },
      {
        question: 'Can I wash my car after ceramic coating?',
        answer:
          'You should avoid washing for 7 days after application to allow full curing. After that, you can wash normally — in fact, washing becomes much easier! We recommend hand washing or touchless car washes, and avoiding automatic brush car washes that can create micro-scratches.',
      },
    ],
    seoTitle: 'Ceramic Coating Dubai | Professional Nano Ceramic Coating | Ceramic My Car',
    seoDescription:
      'Professional ceramic coating in Dubai from AED 1,500. 9H hardness, hydrophobic protection, UV shield. Serving all Dubai areas. Free inspection available.',
    keywords: [
      'ceramic coating Dubai',
      'nano ceramic coating Dubai',
      'ceramic coating cost Dubai',
      'best ceramic coating Dubai',
      'ceramic coating near me Dubai',
    ],
  },
  {
    id: 'ppf',
    title: 'Paint Protection Film (PPF)',
    slug: 'ppf',
    shortDescription:
      'Virtually invisible urethane film that physically shields your paint from rock chips, scratches, and road damage.',
    description:
      "Paint Protection Film (PPF) is the ultimate physical barrier for your vehicle's paintwork. Our self-healing urethane film is virtually invisible, absorbing the impact of rock chips, scratches, road debris, and minor abrasions. With Xpel, SunTek, and 3M film options, we provide computer-cut, precision-fit protection that preserves your paint's perfection.",
    iconName: 'Layers',
    image: '/images/services/ppf.webp',
    benefits: [
      'Self-healing technology — minor scratches disappear with heat',
      'Physical protection from rock chips and road debris',
      "Virtually invisible — preserves factory paint appearance",
      'Hydrophobic top coat repels water and contaminants',
      'Anti-yellowing technology — stays clear for years',
      'Computer-cut patterns for perfect fit',
      'Removable without paint damage',
      'Compatible with ceramic coating for maximum protection',
    ],
    duration: '2–5 days depending on coverage',
    warranty: '10 years manufacturer warranty',
    startingPrice: 2500,
    features: [
      'Xpel, SunTek, or 3M film options',
      'Full front, partial, or full-body coverage',
      'Computer-cut precision patterns',
      'Self-healing urethane technology',
      'Hydrophobic top coat',
      'Professional installation with lifetime film support',
    ],
    faqs: [
      {
        question: 'What is Paint Protection Film (PPF)?',
        answer:
          "PPF is a thick, self-healing thermoplastic urethane film applied to your vehicle's painted surfaces. It physically absorbs impacts from rock chips, scratches, and road debris that would otherwise damage your paint. Modern PPF is virtually invisible and has a self-healing top coat that removes minor scratches when exposed to heat.",
      },
      {
        question: 'PPF vs Ceramic Coating — which is better?',
        answer:
          'PPF provides physical impact protection while ceramic coating provides chemical protection, UV resistance, and hydrophobic properties. The ideal solution is both — PPF first, then ceramic coated over the top for maximum protection. PPF alone is best if rock chip protection is the priority; ceramic alone is best for UV and gloss enhancement.',
      },
      {
        question: 'How long does PPF last in Dubai?',
        answer:
          "Quality PPF from brands like Xpel or SunTek typically lasts 10 years in Dubai with proper care. The extreme UV can cause inferior films to yellow over time, which is why we only use premium films with advanced anti-yellowing technology.",
      },
    ],
    seoTitle: 'PPF Dubai | Paint Protection Film | Xpel & SunTek | Ceramic My Car',
    seoDescription:
      'Premium Paint Protection Film (PPF) in Dubai. Self-healing Xpel, SunTek, 3M film. Computer-cut precision fit. Full body or partial coverage. Free quote.',
    keywords: [
      'PPF Dubai',
      'paint protection film Dubai',
      'Xpel PPF Dubai',
      'clear bra Dubai',
      'rock chip protection Dubai',
    ],
  },
  {
    id: 'graphene-coating',
    title: 'Graphene Coating',
    slug: 'graphene-coating',
    shortDescription:
      'Next-generation graphene-infused coating offering superior hardness, anti-static properties, and unmatched durability.',
    description:
      "Graphene coating represents the next evolution in paint protection technology. By infusing graphene — the world's strongest material — into the ceramic coating formula, we achieve superior hardness, reduced water spotting, anti-static properties, and unmatched heat resistance. Ideal for Dubai's extreme conditions.",
    iconName: 'Hexagon',
    image: '/images/services/graphene-coating.webp',
    benefits: [
      'Superior hardness beyond standard ceramic',
      'Anti-static properties repel dust and contamination',
      "Reduced water spotting — critical in Dubai's hard water",
      'Higher heat resistance for desert conditions',
      'Enhanced flexibility reduces crack risk',
      'Longer lifespan than standard ceramic',
      'Deeper, more metallic gloss finish',
      'Self-cleaning effect in rain',
    ],
    duration: '2–3 days',
    warranty: '5–10 years',
    startingPrice: 2500,
    features: [
      'Carbon-based nano graphene technology',
      'Anti-static charge protection',
      'Heat dissipation technology',
      'Full paint correction included',
      'Window and wheel coating optional',
    ],
    faqs: [
      {
        question: 'What is graphene coating and how is it different from ceramic?',
        answer:
          "Graphene coating uses graphene — a single layer of carbon atoms arranged in a hexagonal lattice — combined with ceramic SiO2. This creates a coating that's stronger, more flexible, more heat-resistant, and more anti-static than standard ceramic. It's particularly effective in Dubai for reducing water spots from hard water.",
      },
      {
        question: 'Is graphene coating worth the extra cost over ceramic?',
        answer:
          "For Dubai's specific conditions — extreme heat, hard water, sand — graphene coating's anti-static and heat-resistant properties make it worth the premium. The reduced water spotting alone can save significant time and effort maintaining your vehicle in Dubai.",
      },
    ],
    seoTitle: 'Graphene Coating Dubai | Next-Gen Paint Protection | Ceramic My Car',
    seoDescription:
      "Graphene coating in Dubai — superior to ceramic coating with anti-static properties, heat resistance, and reduced water spotting. Perfect for Dubai's climate.",
    keywords: [
      'graphene coating Dubai',
      'graphene ceramic coating Dubai',
      'best coating Dubai',
      'graphene vs ceramic Dubai',
    ],
  },
  {
    id: 'paint-correction',
    title: 'Paint Correction',
    slug: 'paint-correction',
    shortDescription:
      'Professional multi-stage machine polishing to eliminate swirl marks, scratches, oxidation, and restore factory gloss.',
    description:
      "Paint correction is the art and science of restoring your vehicle's paintwork to a flawless finish. Using professional machine polishers, cutting compounds, and finishing polishes, our certified detailers eliminate swirl marks, light scratches, water etching, oxidation, and hazing to restore — and often exceed — the original factory gloss.",
    iconName: 'Sparkles',
    image: '/images/services/paint-correction.webp',
    benefits: [
      'Eliminates up to 95% of swirl marks and light scratches',
      'Removes water etching and mineral deposits',
      'Restores clarity and depth of gloss',
      'Essential preparation before ceramic coating',
      'Increases paint value and resale price',
      'Machine polishing with professional-grade compounds',
      'Single, dual, or multi-stage correction available',
      'Paint depth gauge monitoring throughout',
    ],
    duration: '1–3 days',
    warranty: 'N/A (prep service)',
    startingPrice: 800,
    features: [
      'Paint depth measurement before and after',
      'Professional DA and rotary polishers',
      'GYEON, Koch-Chemie compound selection',
      'Single, dual, or 3-stage correction',
      'IPA wipedown for true paint inspection',
      'Panel-by-panel documentation',
    ],
    faqs: [
      {
        question: 'What is paint correction and do I need it?',
        answer:
          "Paint correction is professional machine polishing that removes imperfections in your clear coat — swirl marks from improper washing, light scratches, water spots, and oxidation. If your car looks dull or shows swirl marks in direct sunlight, paint correction will transform it. It's also essential before ceramic coating to ensure a flawless base.",
      },
      {
        question: 'Can paint correction remove deep scratches?',
        answer:
          "Paint correction can remove scratches that exist within the clear coat layer. Scratches you can feel with your fingernail have typically gone through the clear coat into the base coat and cannot be removed by polishing — they require touch-up paint or panel repainting. During your free inspection, we'll assess which scratches are correctable.",
      },
    ],
    seoTitle: 'Paint Correction Dubai | Swirl Mark Removal | Machine Polishing | Ceramic My Car',
    seoDescription:
      'Professional paint correction in Dubai. Remove swirl marks, scratches, oxidation. Machine polishing by certified detailers. Book your free paint inspection.',
    keywords: [
      'paint correction Dubai',
      'swirl mark removal Dubai',
      'scratch removal Dubai',
      'machine polishing Dubai',
      'car polish Dubai',
    ],
  },
  {
    id: 'interior-detailing',
    title: 'Interior Detailing',
    slug: 'interior-detailing',
    shortDescription:
      'Deep interior cleaning, leather conditioning, fabric protection, odour elimination, and sanitization.',
    description:
      'Our premium interior detailing service transforms your cabin into showroom condition. From deep cleaning leather seats and conditioning them with premium products, to steam cleaning carpets, sanitizing air vents, and applying fabric protection — every surface is treated with care.',
    iconName: 'Car',
    image: '/images/services/interior-detailing.webp',
    benefits: [
      'Deep vacuum and extraction of all surfaces',
      'Leather cleaning, conditioning, and protection',
      'Steam cleaning of carpets and upholstery',
      'Dashboard and trim cleaning with UV protection',
      'Air vent sanitization and odour elimination',
      'Glass cleaning inside with anti-fog treatment',
      'Door jamb and sill cleaning',
      'Fabric protection spray application',
    ],
    duration: '4–8 hours',
    warranty: 'Satisfaction guaranteed',
    startingPrice: 400,
    features: [
      'Professional grade equipment',
      'Leather conditioning with Leather Master products',
      'Steam sanitization',
      'Ozone odour treatment available',
      'Fabric protection coating',
      'Ceramic interior trim coating',
    ],
    faqs: [
      {
        question: 'How often should I get interior detailing?',
        answer:
          "For Dubai's conditions — dust, sand, and extreme heat that degrades materials — we recommend interior detailing every 3–6 months. Regular maintenance keeps leather supple, prevents UV damage to the dash, and maintains a clean cabin environment.",
      },
    ],
    seoTitle: 'Interior Detailing Dubai | Leather Conditioning | Deep Clean | Ceramic My Car',
    seoDescription:
      'Premium interior detailing in Dubai. Leather conditioning, steam cleaning, sanitization, odour removal. Starting from AED 400. Book online today.',
    keywords: [
      'interior detailing Dubai',
      'car interior cleaning Dubai',
      'leather conditioning Dubai',
      'car deep clean Dubai',
    ],
  },
  {
    id: 'exterior-detailing',
    title: 'Exterior Detailing',
    slug: 'exterior-detailing',
    shortDescription:
      'Complete exterior transformation with decontamination, hand wash, clay bar, and protective wax or sealant.',
    description:
      "Our exterior detailing is more than a car wash — it's a complete paint care process. Starting with a safe two-bucket hand wash, followed by iron decontamination, clay bar treatment, and finished with a premium carnauba wax or paint sealant for protection and gloss.",
    iconName: 'Zap',
    image: '/images/services/exterior-detailing.webp',
    benefits: [
      'Two-bucket safe wash method prevents new scratches',
      'Iron decontamination removes embedded iron fallout',
      'Clay bar removes bonded contaminants',
      'Tyre and wheel deep cleaning',
      'Glass water spot treatment',
      'Engine bay cleaning (optional)',
      'Premium wax or sealant for protection',
      'Tyre dressing for showroom finish',
    ],
    duration: '3–5 hours',
    warranty: 'Satisfaction guaranteed',
    startingPrice: 250,
    features: [
      'pH-neutral shampoo safe wash',
      'Iron decontamination spray',
      'Clay bar decontamination',
      'Wheel acid treatment',
      'Premium Carnauba wax or synthetic sealant',
      'Tyre dressing and trim restoration',
    ],
    faqs: [
      {
        question: 'What is the difference between a car wash and exterior detailing?',
        answer:
          "A car wash only removes surface dirt. Exterior detailing goes much deeper — removing bonded contamination (iron fallout, tar, industrial fallout) that a wash cannot remove, then protecting the paint with wax or sealant. The result is a deeper, longer-lasting clean with actual paint protection.",
      },
    ],
    seoTitle: 'Exterior Detailing Dubai | Full Exterior Car Care | Ceramic My Car',
    seoDescription:
      'Professional exterior detailing in Dubai. Hand wash, clay bar, iron decontamination, wax/sealant. Starting from AED 250. Book your appointment today.',
    keywords: [
      'exterior detailing Dubai',
      'car detailing Dubai',
      'hand car wash Dubai',
      'clay bar Dubai',
      'car wax Dubai',
    ],
  },
  {
    id: 'window-tinting',
    title: 'Window Tinting',
    slug: 'window-tinting',
    shortDescription:
      "Premium window film installation for maximum UV rejection, heat reduction, privacy, and safety in Dubai's extreme sun.",
    description:
      "Dubai's intense UV radiation and heat make quality window tinting essential, not optional. Our nano-ceramic window films from Xpel, SunTek, and 3M reject up to 99% of UV rays and up to 70% of infrared heat, keeping your cabin cooler, protecting your interior, and reducing air conditioning load.",
    iconName: 'Sun',
    image: '/images/services/window-tinting.webp',
    benefits: [
      'Up to 99% UV rejection protects skin and interior',
      'Up to 70% infrared heat rejection — cooler cabin',
      'Reduced air conditioning load — better fuel economy',
      'Glare reduction for safer driving',
      'Enhanced privacy without compromising night visibility',
      'Shatter protection in accidents',
      'Interior fade prevention for leather and plastics',
      'Compliant with UAE RTA regulations',
    ],
    duration: '4–6 hours',
    warranty: 'Lifetime warranty on film',
    startingPrice: 800,
    features: [
      'Xpel, SunTek, and 3M film options',
      'Nano-ceramic technology (no signal interference)',
      'VLT options: 5%, 20%, 35%, 50%, 70%',
      'RTA-compliant tint levels',
      'All windows including windshield strip',
      'Lifetime manufacturer warranty',
    ],
    faqs: [
      {
        question: 'What VLT percentage is legal for window tint in Dubai?',
        answer:
          'In Dubai (UAE), the RTA requires a minimum 30% VLT (Visible Light Transmission) for front side windows. Rear windows and rear windshield can be darker. We ensure all our installations comply with RTA regulations.',
      },
      {
        question: 'How much does window tinting cost in Dubai?',
        answer:
          'Window tinting in Dubai starts from AED 800 for a standard 5-window application with a good-quality film. Premium nano-ceramic films from Xpel or 3M range from AED 1,500–3,000 depending on vehicle size.',
      },
    ],
    seoTitle: 'Window Tinting Dubai | Nano-Ceramic Window Film | RTA Compliant | Ceramic My Car',
    seoDescription:
      'Premium window tinting in Dubai. 99% UV rejection, 70% heat rejection. Xpel, SunTek, 3M films. RTA compliant. Starting from AED 800. Free quote.',
    keywords: [
      'window tinting Dubai',
      'car window film Dubai',
      'UV window tint Dubai',
      'Xpel tint Dubai',
      'car tinting Dubai',
    ],
  },
]

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug)

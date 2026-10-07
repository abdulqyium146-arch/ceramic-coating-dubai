export interface ProcessStep {
  title: string
  text: string
}

export interface MythFact {
  myth: string
  truth: string
}

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
  // Phase 3: deep content sections (optional — rendered only when present)
  answer?: string // 40-60 word AEO answer block (directly under H1)
  howItWorks?: string[] // what it is / how it works / what it is not
  dubaiFactors?: string[] // UAE-specific benefits (heat, UV, dust, hard water…)
  process?: ProcessStep[] // step-by-step process
  comparisonTitle?: string
  comparison?: string[] // honest comparison vs alternatives
  myths?: MythFact[] // common myths → truths
  costFactors?: string[] // what drives the price
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
      {
        question: 'How much does ceramic coating cost for an SUV in Dubai?',
        answer: 'Ceramic coating for an SUV or 4x4 in Dubai costs from AED 2,200 for a 2-year package up to AED 9,500 for a 10-year elite package. SUVs have larger surface areas than sedans. Examples: Ceramic coating for a Range Rover starts from AED 3,500; for a Toyota Land Cruiser from AED 3,000. All packages include free paint inspection and decontamination.'
      },
      {
        question: 'What is the best ceramic coating in Dubai?',
        answer:
          'The "best" ceramic coating depends on your car and how you use it — but look for three things: genuine SiO2 content (not a spray sealant labelled as ceramic), a written warranty of at least 2 years, and an installer who does full paint decontamination and machine polishing before application. We install professional-grade GYEON, Ceramic Pro and IGL coatings, each selected for Dubai\'s UV and heat after real-world testing.',
      },
      {
        question: 'Ceramic coating vs PPF — which is better for Dubai?',
        answer:
          'They solve different problems. Ceramic coating gives chemical resistance, UV protection, hydrophobic gloss and easier washing — but zero protection against rock chips. PPF physically absorbs impacts but costs 3–5x more. For Dubai highway driving, the ultimate setup is PPF on impact zones (front bumper, hood, mirrors) with ceramic coating over the entire car, including over the PPF.',
      },
      {
        question: 'How long does ceramic coating application take?',
        answer:
          'A proper ceramic coating job takes 1–3 days including preparation and curing. Day one is decontamination and machine polishing (this is 80% of the work), day two is panel-by-panel coating application, and the coating then needs 12–24 hours to cure before the car should get wet. Any "2-hour ceramic coating" skips the preparation — and the preparation is what makes it last.',
      },
      {
        question: 'Does ceramic coating protect against scratches and rock chips?',
        answer:
          'Ceramic coating resists light swirl marks and chemical etching, but it is only microns thin — it cannot stop rock chips or key scratches. Only paint protection film (PPF), at 150–200 microns thick, absorbs physical impacts. If stone chips on Sheikh Zayed Road are your main worry, choose PPF; if UV fade, gloss and easy washing matter most, ceramic coating is the answer.',
      },
    ],
    seoTitle: 'Ceramic Coating Dubai | 9H Protection | Ceramic My Car',
    seoDescription:
      'Ceramic coating in Dubai: 9H hardness, UV protection & hydrophobic gloss. Professional multi-year paint protection. Book a free inspection today.',
    answer:
      'Ceramic coating is a liquid SiO2 polymer that chemically bonds to your car\u2019s paint, forming a hard, hydrophobic layer that resists UV rays, chemicals and dirt. In Dubai it typically lasts 2\u20135 years \u2014 up to 10 for premium packages \u2014 keeping washing easier and protecting gloss and resale value in extreme heat.',
    howItWorks: [
      'Ceramic coating starts as a liquid polymer based on silicon dioxide (SiO2) \u2014 essentially liquid glass. When applied to properly prepared paint, it cross-links and cures into a rigid, transparent layer that bonds at a molecular level. This is the key difference from wax or sealant, which merely sit on top of the paint and wash away within weeks.',
      'The cured layer is rated up to 9H on the pencil hardness scale \u2014 harder than factory clear coat. It creates an extremely flat surface at a microscopic level, which is why water beads so aggressively and dirt struggles to stick. Contaminants sit on top of the coating rather than bonding to your paint.',
      'What ceramic coating does not do matters just as much: it is only a few microns thick, so it cannot absorb rock chips or deep scratches \u2014 that is paint protection film\u2019s job. It also doesn\u2019t make your car self-cleaning; you\u2019ll still wash it, just far less often and with far less effort.',
    ],
    dubaiFactors: [
      'Extreme UV (Index 11+): Dubai has some of the highest UV radiation on earth. Unprotected clear coat begins oxidising within months here \u2014 fading, chalking and micro-cracking. Ceramic coating\u2019s UV-blocking chemistry absorbs that radiation instead of letting it reach your paint.',
      '45\u201350\u00b0C heat and airborne sand: fine desert sand is mildly abrasive and settles on every horizontal panel daily. The coating\u2019s slick, hydrophobic surface means sand releases in a rinse instead of grinding into the clear coat during washing.',
      'Hard desalinated water: Dubai tap water is mineral-heavy. Droplets evaporate in minutes in summer, leaving mineral spots that etch into unprotected paint. Ceramic coating dramatically reduces water-spot bonding.',
      'Bird droppings and tree sap: at 45\u00b0C ambient, bird droppings etch paint in hours, not days. The coating\u2019s chemical resistance buys you critical time to remove contaminants before they burn through the clear coat.',
    ],
    process: [
      {
        title: 'Paint inspection and wash',
        text: 'We assess every panel under inspection lighting, measure paint depth with a digital gauge, and document existing defects. Then a safe two-bucket wash removes loose dirt without adding swirls.',
      },
      {
        title: 'Decontamination',
        text: 'Iron fallout remover dissolves embedded brake dust and industrial particles, tar remover lifts road tar, and a clay bar treatment removes anything still bonded to the surface. The paint must be surgically clean before polishing.',
      },
      {
        title: 'Machine polishing',
        text: 'Single to multi-stage machine polishing removes swirl marks, water etching and oxidation. This step is non-negotiable: ceramic coating locks in whatever is underneath it, so the paint must be flawless first.',
      },
      {
        title: 'Panel-by-panel coating application',
        text: 'The SiO2 coating is applied one panel at a time in a controlled, dust-free environment, levelled with microfibre to an even film. Edges, emblems and trim are masked for crisp lines.',
      },
      {
        title: 'Curing and quality control',
        text: 'The coating cures for 12\u201324 hours (infrared-assisted where needed). We re-inspect every panel under lighting, then walk you through aftercare: no washing for 7 days, then simple maintenance washes.',
      },
    ],
    comparisonTitle: 'Ceramic Coating vs PPF vs Wax \u2014 What\u2019s Right for You?',
    comparison: [
      'Versus wax and sealants: a quality carnauba wax lasts 4\u201312 weeks in Dubai \u2014 heat literally melts it off the paint. A synthetic sealant stretches to 4\u20136 months. Ceramic coating lasts years, not weeks, with far stronger chemical and UV resistance. If you\u2019re waxing quarterly, ceramic coating pays for itself in under two years.',
      'Versus PPF (paint protection film): ceramic coating wins on gloss, hydrophobics, UV protection and price; PPF wins on physical impact protection. They are complements, not competitors \u2014 the ultimate Dubai setup is PPF on the front end with ceramic coating over the whole car, including over the film.',
      'Versus graphene coating: graphene is essentially ceramic coating upgraded with carbon nanostructure \u2014 adding anti-static dust repellence, better heat dissipation and reduced water spotting. It costs more; for garage-kept cars the difference is subtle, for daily-driven cars parked outdoors in Dubai it is noticeable.',
    ],
    myths: [
      {
        myth: 'Ceramic coating makes paint scratch-proof.',
        truth:
          'No coating makes paint scratch-proof. Ceramic coating resists fine swirls and marring far better than bare clear coat, but keys, rock chips and shopping carts will still mark it. Scratch-proof claims are marketing fiction.',
      },
      {
        myth: 'You never need to wash a coated car again.',
        truth:
          'Coated cars still get dirty \u2014 they just clean dramatically easier. Expect to wash half as often, with dirt releasing in a simple rinse instead of aggressive scrubbing. Neglect it for a year and even a coating will clog with bonded contamination.',
      },
      {
        myth: 'The brand of coating is all that matters.',
        truth:
          'Preparation is roughly 80% of the result. A mid-tier coating over perfectly corrected paint will outperform a flagship coating slapped over swirls every time \u2014 and the defects get sealed in permanently. Judge the installer\u2019s prep process, not just the bottle.',
      },
      {
        myth: 'Ceramic coating lasts a lifetime.',
        truth:
          'No. Real-world durability is 2\u20135 years for standard packages and up to 7\u201310 for premium ones in Dubai\u2019s climate, depending on maintenance. "Lifetime coating" usually means a warranty with so many exclusions it is effectively meaningless \u2014 always read the terms.',
      },
    ],
    costFactors: [
      'Vehicle size and paint area \u2014 a compact sedan takes far less product and labour than a full-size SUV',
      'Paint condition \u2014 heavily swirled or oxidised paint needs multi-stage correction before coating',
      'Coating tier and warranty length \u2014 2-year packages vs 10-year flagship coatings',
      'Number of layers and panels coated \u2014 paint only, or paint plus wheels, glass and trim',
      'Add-on protection \u2014 interior ceramic, fabric protection or PPF on impact zones',
    ],
    keywords: [
      'ceramic coating Dubai',
      'nano ceramic coating Dubai',
      'ceramic coating cost Dubai',
      'best ceramic coating Dubai',
      'ceramic coating near me Dubai',
      'car ceramic coating services dubai',
      'ceramic coating near me',
      'best ceramic coating dubai',
      'ceramic coating price dubai',
      'interior ceramic coating',
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
      {
        question: 'How much does PPF cost in Dubai?',
        answer: 'PPF (Paint Protection Film) in Dubai starts from AED 2,500 for partial front coverage (hood, bumper, mirrors) and goes up to AED 8,000–15,000 for full-body coverage on a luxury vehicle. Xpel Ultimate Plus full-body coverage on a mid-size sedan typically costs AED 6,000–9,000. All quotes are free with no obligation.'
      },
      {
        question: 'PPF vs ceramic coating — which should I choose in Dubai?',
        answer: 'For Dubai driving, the best answer is both. PPF provides physical protection from rock chips and scratches that ceramic cannot prevent. Ceramic coating adds chemical resistance, UV protection, and a hydrophobic layer that makes PPF easier to clean. If budget allows, apply PPF first then ceramic coat over it. If choosing one: PPF for highway driving and rock chip risk; ceramic coating for UV protection, gloss, and maintenance ease.'
      },
      {
        question: 'What is the best PPF brand in Dubai?',
        answer:
          'The three proven premium films are Xpel (Ultimate Plus), SunTek (Ultra) and 3M (Pro Series) \u2014 all with self-healing top coats and 10-year warranties against yellowing, cracking and peeling. We install all three and recommend based on your car and budget rather than pushing one brand. Avoid no-name films: in Dubai\u2019s UV, cheap PPF yellows within 18 months and can be brutally expensive to remove.',
      },
      {
        question: 'How long does PPF installation take?',
        answer:
          'Partial front coverage (bumper, hood strip, mirrors, headlights) takes 1\u20132 days; a full front end takes 2\u20133 days; full-body coverage on a sedan takes 3\u20135 days. The film then needs 24\u201348 hours for edges to fully set \u2014 avoid pressure washers and automatic car washes for the first week.',
      },
      {
        question: 'Can PPF be removed without damaging the paint?',
        answer:
          'Yes \u2014 when it\u2019s a quality film removed professionally. Premium films use adhesives engineered to release cleanly with heat, even after years in Dubai\u2019s sun. Problems arise with cheap films whose adhesive bakes onto the paint, or DIY removal that pulls at edges. Professional removal takes 2\u20134 hours and leaves factory paint untouched.',
      },
      {
        question: 'Does PPF turn yellow in Dubai\u2019s sun?',
        answer:
          'Premium PPF (Xpel, SunTek, 3M) will not yellow \u2014 their top coats include UV inhibitors specifically engineered for high-sun climates, backed by 10-year anti-yellowing warranties. Yellowing is a cheap-film problem: unprotected urethane oxidises fast under UV Index 11+. If a quote seems too good to be true, ask which exact film is being installed and demand the manufacturer warranty in writing.',
      },
      {
        question: 'Is PPF worth it on a leased car?',
        answer:
          'Often yes. Lease-return inspections in the UAE charge for paint damage \u2014 stone chips, bumper scuffs and door dings add up to thousands of dirhams in end-of-lease penalties. A partial-front PPF package costs less than most penalty bills and peels off at return, revealing untouched factory paint. Many of our PPF customers are specifically protecting lease deposits.',
      },
    ],
    seoTitle: 'PPF Dubai | Paint Protection Film | Ceramic My Car',
    seoDescription:
      'Paint protection film in Dubai: self-healing, invisible rock-chip defence with computer-cut fit. 10-year film warranty. Get your free PPF quote today.',
    answer:
      'Paint protection film (PPF) is a clear, self-healing urethane film applied over your car\u2019s paintwork. It physically absorbs rock chips, scratches and road debris that ceramic coatings can\u2019t stop. In Dubai, quality PPF lasts about 10 years \u2014 minor scratches disappear with heat \u2014 making it ideal for highway driving.',
    howItWorks: [
      'PPF is a thermoplastic urethane film, typically 150\u2013200 microns thick \u2014 roughly 50 times thicker than a ceramic coating. Its top layer is an elastomeric "self-healing" coat: light scratches and swirl marks in the film reflow and vanish when exposed to heat, which in Dubai means most minor marks heal on their own in ambient temperatures.',
      'Installation is a wet-application craft. Patterns are computer-cut to your exact make and model (no blades on your paint), then laid with a slip solution and squeegeed into place in a dust-controlled bay. Edges are wrapped where possible so the film is genuinely hard to detect.',
      'Coverage is modular: most Dubai drivers choose partial-front (bumper, partial hood, mirrors, headlights) or full-front (entire hood and fenders) packages, with full-body for exotics and new luxury cars. You protect the impact zones without paying for panels that rarely get hit.',
    ],
    dubaiFactors: [
      'Highway rock chips: at 120 km/h on Sheikh Zayed Road, a pebble kicked up by a lorry hits with enough energy to chip straight through clear coat. Construction traffic across Dubai makes this a daily \u2014 not occasional \u2014 hazard. PPF is the only protection that absorbs these impacts.',
      'Sandstorm abrasion: fine wind-blown sand at speed acts like sandpaper on leading edges \u2014 bumpers, mirrors, hood lips. Film takes the abrasion; the paint underneath stays factory-fresh.',
      'UV yellowing (cheap films): Dubai\u2019s UV destroys unprotected urethane. Premium films carry UV inhibitors and 10-year anti-yellowing warranties; budget films can yellow visibly within two summers.',
      'Parking damage: tight mall and street parking means door dings and bumper scuffs. PPF won\u2019t stop a hard impact, but it absorbs the light contact that would otherwise mean a respray.',
    ],
    process: [
      {
        title: 'Coverage consultation',
        text: 'We inspect the car and map your driving: highway commuter, city runabout, or weekend exotic. That determines whether partial-front, full-front or full-body coverage makes sense \u2014 we won\u2019t sell you film you don\u2019t need.',
      },
      {
        title: 'Decontamination and paint correction',
        text: 'The paint is fully decontaminated and machine-polished first. Film magnifies whatever is underneath it, so swirls and water spots must be corrected before a single panel is wrapped.',
      },
      {
        title: 'Computer-cut patterns',
        text: 'Patterns are plotted from a digital database for your exact model and trim \u2014 cut on the plotter, never with a blade on your paint. Complex curves get custom bulk-cut pieces by our installers.',
      },
      {
        title: 'Film application',
        text: 'In a dust-controlled bay, each panel is laid with slip solution, positioned to the millimetre, and squeegeed with zero trapped air or fingers. Edges are wrapped around panel lips wherever the geometry allows.',
      },
      {
        title: 'Curing and handover',
        text: 'The car rests 24\u201348 hours while edges set. We re-inspect every edge and seam under lighting, then brief you on aftercare: no pressure washers near edges for a week, then wash normally.',
      },
    ],
    comparisonTitle: 'PPF vs Ceramic Coating vs Vinyl Wrap',
    comparison: [
      'Versus ceramic coating: PPF is armour, ceramic is sunscreen. PPF stops rock chips, scratches and scuffs; ceramic coating stops UV fade, chemical etching and makes washing easier. Neither replaces the other \u2014 the benchmark Dubai setup is PPF on impact zones with ceramic coating over the entire car, film included.',
      'Versus vinyl wrap: wraps change colour; PPF preserves it. Wrap vinyl is thinner (around 100 microns), has no self-healing top coat, and offers a fraction of the impact protection. Choose wrap for a new look, PPF for invisible protection of factory paint.',
      'Versus doing nothing: a front bumper respray in Dubai costs AED 1,500\u20133,000 and never quite matches factory orange-peel. One bad stone-chip season can exceed the cost of a partial-front PPF package \u2014 before counting the resale hit of repainted panels.',
    ],
    myths: [
      {
        myth: 'PPF is visible and ruins the car\u2019s looks.',
        truth:
          'Modern premium film is optically clear \u2014 on a correct install you cannot see it beyond a metre away. Visible edges, orange-peel texture and haze are signs of cheap film or poor installation, not of PPF itself.',
      },
      {
        myth: 'PPF will damage my paint when removed.',
        truth:
          'Quality films are engineered to release cleanly with heat after a decade in the sun. Damage stories almost always involve budget films with aggressive adhesives, or paint that was already failing (resprays, heavy oxidation) before the film went on.',
      },
      {
        myth: 'PPF needs no maintenance.',
        truth:
          'PPF still needs washing \u2014 contamination bonds to the film\u2019s top coat just like paint. The difference: it washes easier, and the self-healing layer erases the swirls that washing would otherwise leave. An annual inspection keeps edges sealed.',
      },
      {
        myth: 'All PPF yellows in Dubai within a couple of years.',
        truth:
          'Only cheap, UV-unprotected film does. Xpel, SunTek and 3M films carry 10-year warranties specifically covering yellowing, because their top coats include UV inhibitors. Ask for the film name and the written manufacturer warranty \u2014 that\u2019s the entire difference.',
      },
    ],
    costFactors: [
      'Coverage area \u2014 partial front vs full front vs full body is the single biggest price driver',
      'Film brand \u2014 Xpel Ultimate Plus, SunTek Ultra and 3M Pro Series sit at different price points',
      'Vehicle size and complexity \u2014 a compact sedan vs a Range Rover with complex curves',
      'Paint correction needed \u2014 film locks in defects, so correction comes first',
      'Ceramic coating over the PPF \u2014 the popular add-on for hydrophobics and easier maintenance',
    ],
    keywords: [
      'PPF Dubai',
      'paint protection film Dubai',
      'Xpel PPF Dubai',
      'clear bra Dubai',
      'rock chip protection Dubai',
      'ppf in dubai',
      'ppf near me dubai',
      'xpel ppf dubai',
      'paint protection film price dubai',
      'car ppf dubai',
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
      {
        question: 'How much does graphene coating cost in Dubai?',
        answer: 'Graphene coating in Dubai starts from AED 2,500 for a standard sedan and ranges to AED 6,000+ for luxury vehicles or full-correction packages. It costs slightly more than standard ceramic coating due to the advanced graphene technology, but the improved anti-static, heat resistance, and reduced water spotting make it worth the premium for Dubai conditions.'
      },
      {
        question: 'Is graphene coating worth it in Dubai?',
        answer: "Yes — graphene coating is especially worth it in Dubai for three reasons: (1) Dubai's hard water causes severe water spotting; graphene's anti-static properties dramatically reduce this. (2) Extreme heat (50°C+) can stress standard ceramic; graphene dissipates heat better. (3) Sand and dust stick to statically charged surfaces; graphene's anti-static charge repels them. For any car parked outdoors in Dubai, graphene is the better long-term investment."
      },
    ],
    seoTitle: 'Graphene Coating Dubai | Anti-Static | Ceramic My Car',
    seoDescription:
      'Graphene coating in Dubai: anti-static, heat-resistant paint protection that beats hard-water spotting. Premium durability. Book a free inspection.',
    keywords: [
      'graphene coating Dubai',
      'graphene ceramic coating Dubai',
      'best coating Dubai',
      'graphene vs ceramic Dubai',
      'graphene coating for cars in dubai',
      'is graphene coating worth it uae',
      'graphene coating vs ceramic dubai',
      'graphene paint protection dubai',
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
    seoTitle: 'Paint Correction Dubai | Swirl Removal | Ceramic My Car',
    seoDescription:
      'Paint correction in Dubai removes swirls, scratches & oxidation by machine polishing. The essential prep for ceramic coating. Free inspection available.',
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
    seoTitle: 'Interior Car Detailing Dubai | Ceramic My Car',
    seoDescription:
      'Interior car detailing in Dubai: deep steam clean, leather care & odour removal. Showroom-fresh cabin in a day. Book your interior detail now.',
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
    seoTitle: 'Exterior Car Detailing Dubai | Ceramic My Car',
    seoDescription:
      'Exterior car detailing in Dubai: safe hand wash, clay bar & iron decontamination with wax protection. Book your exterior detail today.',
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
      {
        question: 'Is ceramic window tint worth it in Dubai?',
        answer: "Absolutely. Ceramic window tint is significantly better than dyed or metallic film in Dubai's extreme heat. It rejects up to 99% of UV rays and 70% of infrared heat without interfering with GPS, phone signals, or satellite radio. While it costs more than basic film (AED 800 vs AED 1,500–3,000 for ceramic), the heat reduction alone reduces air conditioning load by up to 30%, improving fuel economy and protecting your interior."
      },
    ],
    seoTitle: 'Car Window Tinting Dubai | Ceramic My Car',
    seoDescription:
      'Window tinting in Dubai: nano-ceramic film blocking 99% UV & 70% heat. RTA-compliant, lifetime film warranty. Get a free tint quote.',
    keywords: [
      'window tinting Dubai',
      'car window film Dubai',
      'UV window tint Dubai',
      'Xpel tint Dubai',
      'car tinting Dubai',
      'car window tinting dubai',
      'window tinting near me',
      'ceramic window tint dubai',
      'window tinting dubai price',
    ],
  },
]

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug)

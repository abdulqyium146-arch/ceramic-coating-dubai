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
      {
        question: 'Is graphene coating better than ceramic coating?',
        answer:
          'Graphene coating is a ceramic coating with graphene added \u2014 so it does everything ceramic does, plus three extras: an anti-static charge that repels dust, better heat dissipation under extreme sun, and lower water-spotting from hard water. In mild climates the difference is subtle; in Dubai\u2019s dust, heat and mineral-heavy water, owners notice it within weeks. It costs more, but for daily-driven cars parked outdoors it earns the premium.',
      },
      {
        question: 'How long does graphene coating last in Dubai?',
        answer:
          'A professionally applied graphene coating lasts 5\u201310 years in Dubai depending on the product tier and maintenance \u2014 longer than standard ceramic because the graphene structure resists thermal breakdown better. Like all coatings it needs periodic maintenance washes and an annual inspection to reach the top of that range.',
      },
      {
        question: 'Does graphene coating really repel dust?',
        answer:
          'Yes, and this is its most visible real-world benefit in Dubai. Standard surfaces build a static charge that attracts airborne dust; graphene\u2019s structure creates a slight negative charge that repels it. The effect is most obvious on dark cars parked outdoors \u2014 they stay visibly cleaner between washes than ceramic-coated equivalents.',
      },
      {
        question: 'Can graphene coating be applied over PPF?',
        answer:
          'Yes \u2014 and it\u2019s an excellent combination. PPF provides the physical impact protection, while graphene coating adds hydrophobics, UV resistance, anti-static dust repellence and easier washing on top of the film. The coating bonds to the film\u2019s top coat just as it does to paint. This PPF-plus-graphene stack is our most popular package for new luxury cars in Dubai.',
      },
    ],
    seoTitle: 'Graphene Coating Dubai | Anti-Static | Ceramic My Car',
    seoDescription:
      'Graphene coating in Dubai: anti-static, heat-resistant paint protection that beats hard-water spotting. Premium durability. Book a free inspection.',
    answer:
      'Graphene coating is a ceramic coating infused with graphene \u2014 a single layer of carbon atoms \u2014 making it harder, more heat-resistant and anti-static than standard ceramic. In Dubai it excels at repelling dust and resisting hard-water spots, and typically lasts 5\u201310 years. It\u2019s the premium upgrade for cars parked outdoors.',
    howItWorks: [
      'Graphene is a sheet of carbon atoms arranged in a hexagonal lattice \u2014 the strongest material ever tested at a fraction of the weight of steel. Infused into a ceramic SiO2 base, it doesn\u2019t replace the ceramic chemistry; it reinforces it, adding mechanical strength, thermal conductivity and electrical properties the base coating lacks.',
      'The two properties that matter most are anti-static behaviour and heat dissipation. The graphene network gives the cured coating a slight negative electrostatic charge, so airborne dust is repelled rather than attracted. And graphene conducts heat around 10x better than copper, so the coating sheds thermal load instead of baking under 50\u00b0C sun.',
      'Application mirrors premium ceramic coating: full decontamination, machine polishing, panel-by-panel application in a controlled bay, and 12\u201324 hours of curing. The product costs more and demands the same meticulous prep \u2014 graphene over swirled paint is still a wasted investment.',
    ],
    dubaiFactors: [
      'Dust, dust, dust: Dubai\u2019s fine airborne dust settles on every car daily and clings via static charge. Graphene\u2019s anti-static surface is the only coating chemistry that actively fights this \u2014 dark-coloured cars show the difference most dramatically.',
      'Hard desalinated water: mineral-heavy tap water spots every panel within minutes of washing in summer. Graphene\u2019s lower water contact angle sheets water off faster in smaller droplets, leaving far fewer mineral deposits behind.',
      '50\u00b0C+ heat: painted panels can exceed 80\u00b0C in direct sun. Standard ceramic chemistry degrades faster under sustained thermal stress; graphene\u2019s heat dissipation keeps the coating cooler and extends its working life.',
      'Sand abrasion: wind-blown sand micro-scratches clear coat over time. Graphene\u2019s added surface hardness resists this slow sanding effect better than standard ceramic.',
    ],
    process: [
      {
        title: 'Paint inspection and wash',
        text: 'Panel-by-panel inspection under lighting plus digital paint-depth measurement, followed by a swirl-free two-bucket wash. We document every defect before touching the paint.',
      },
      {
        title: 'Decontamination',
        text: 'Iron fallout remover, tar remover and clay bar treatment strip every bonded contaminant. Graphene bonds best to surgically clean clear coat.',
      },
      {
        title: 'Machine polishing',
        text: 'Single to multi-stage correction removes swirls, water etching and oxidation. Graphene locks in the finish permanently \u2014 this step determines the final result.',
      },
      {
        title: 'Graphene application',
        text: 'Applied panel by panel in a dust-controlled bay and levelled to an even film. Flash times are monitored closely; graphene products are less forgiving of rushed application than standard ceramics.',
      },
      {
        title: 'Curing and handover',
        text: '12\u201324 hours of curing, then a full re-inspection under lighting. We brief you on aftercare: no washing for 7 days, then simple maintenance washes to protect your investment.',
      },
    ],
    comparisonTitle: 'Graphene Coating vs Ceramic vs PPF',
    comparison: [
      'Versus standard ceramic coating: graphene wins on dust repellence, heat resistance and water-spot resistance, and typically lasts longer. Standard ceramic wins on price \u2014 often 20\u201330% cheaper. For garage-kept cars the upgrade is a luxury; for daily drivers parked outdoors in Dubai, it\u2019s the rational choice.',
      'Versus PPF: different jobs. PPF stops rock chips and scratches physically; graphene stops UV, chemicals, dust and water spots chemically. The flagship combination \u2014 PPF on impact zones with graphene over everything \u2014 is what we recommend for new Range Rovers, G-Wagons and Porsches.',
      'Versus wax and sealants: there is no contest on durability. Wax survives weeks in Dubai heat; graphene survives years. The only reason to wax in 2026 is a concours show car where you want that last 2% of warm glow for a weekend.',
    ],
    myths: [
      {
        myth: 'Graphene coating is just a marketing gimmick.',
        truth:
          'Early "graphene" products deserved the scepticism \u2014 some contained barely any graphene. But established formulations from reputable manufacturers now show measurable gains in contact angle, heat resistance and hardness in independent testing. Ask which product is being applied and look for real technical data sheets, not just the word "graphene" on the bottle.',
      },
      {
        myth: 'Graphene is 200x stronger than steel, so the coating is indestructible.',
        truth:
          'The 200x figure describes a perfect single sheet of graphene in a lab, not a coating film on your bonnet. In a coating it translates to meaningfully better \u2014 not magical \u2014 hardness and chemical resistance. It still won\u2019t stop rock chips; that\u2019s PPF\u2019s job.',
      },
      {
        myth: 'You never need to wash a graphene-coated car.',
        truth:
          'You wash less often and far more easily, but Dubai\u2019s dust still settles. The advantage is that a rinse removes what would need scrubbing on uncoated paint \u2014 and the anti-static effect stretches the interval between washes noticeably.',
      },
      {
        myth: 'Graphene works fine over swirled, unprepared paint.',
        truth:
          'It bonds fine \u2014 and permanently seals the swirls underneath. Every coating, graphene included, is only as good as the preparation. Skipping machine polishing to save money is the most expensive mistake in paint protection.',
      },
    ],
    costFactors: [
      'Vehicle size and paint area \u2014 larger vehicles need more product and labour',
      'Paint condition \u2014 correction stages required before application',
      'Graphene product tier \u2014 professional 5-year vs flagship 10-year formulations',
      'Panels coated \u2014 paint only, or plus wheels, glass, trim and calipers',
      'Combination packages \u2014 graphene over PPF, or standalone coating',
    ],
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
      {
        question: 'How much does paint correction cost in Dubai?',
        answer:
          'Paint correction in Dubai starts from AED 800 for a single-stage enhancement polish on a small car, up to AED 3,000+ for a full multi-stage correction on a large vehicle with heavy defects. The price depends on defect severity, the number of correction stages required, and vehicle size. We always measure paint depth first so you only pay for the correction your paint actually needs.',
      },
      {
        question: 'Will paint correction damage or thin my car\u2019s paint?',
        answer:
          'Not when done professionally. Modern clear coats are 35\u201350 microns thick, and a proper correction removes only 1\u20133 microns \u2014 we verify this with a digital paint-depth gauge before and after, panel by panel. Damage happens with aggressive rotary work by untrained operators, which is why paint measurement and test spots are non-negotiable in our process.',
      },
      {
        question: 'Do new cars need paint correction?',
        answer:
          'Surprisingly often, yes. New cars arrive with wash-induced swirls from dealership prep, rail dust from transport, and holograms from rushed PDI polishing. We inspect every new car before coating \u2014 roughly 7 in 10 need at least a single-stage enhancement to reach a truly flawless base for ceramic coating or PPF.',
      },
      {
        question: 'How long does paint correction last?',
        answer:
          'The correction itself is permanent \u2014 removed defects don\u2019t come back. But new swirls accumulate with every improper wash, so longevity depends entirely on aftercare. With safe washing (two-bucket method, quality mitts, no automatic brushes), a correction stays flawless for years; with petrol-station brush washes, swirls return within months.',
      },
      {
        question: 'What\u2019s the difference between single-stage and multi-stage correction?',
        answer:
          'Single-stage uses one polish-and-pad combination to remove 50\u201370% of defects \u2014 ideal for light swirls and as coating prep on good paint. Two-stage adds a cutting step for moderate defects (80\u201390% removal). Multi-stage (3+) tackles heavy oxidation, deep water etching and severe swirling for near-perfect, better-than-factory results. We recommend the minimum stage your paint needs after inspection.',
      },
      {
        question: 'Is paint correction necessary before ceramic coating?',
        answer:
          'Yes \u2014 it\u2019s the most important step of the entire coating job. Ceramic coating is a transparent, permanent layer: it locks in every swirl, water spot and hologram underneath it. Coating over uncorrected paint preserves the defects forever. Every reputable installer corrects first; anyone offering to skip it is selling you a shiny problem.',
      },
    ],
    seoTitle: 'Paint Correction Dubai | Swirl Removal | Ceramic My Car',
    seoDescription:
      'Paint correction in Dubai removes swirls, scratches & oxidation by machine polishing. The essential prep for ceramic coating. Free inspection available.',
    answer:
      'Paint correction is machine polishing that removes swirl marks, light scratches, water etching and oxidation from your car\u2019s clear coat. In Dubai it typically takes 1\u20133 days and can restore gloss beyond factory condition \u2014 and it\u2019s the essential preparation before any ceramic coating or PPF.',
    howItWorks: [
      'Your paint\u2019s clear coat \u2014 the transparent layer over the colour \u2014 collects microscopic damage: circular swirls from improper washing, straight-line scratches, mineral etching from hard water, and oxidation from UV. Paint correction uses machine polishers with abrasive compounds to level the clear coat, shaving it microscopically flat until the defects disappear.',
      'Correction happens in stages. A cutting compound with a firm pad removes the defects; a refining polish with a soft pad then removes the haze the cutting stage leaves behind. Professionals use dual-action (DA) polishers for safety and rotary polishers for heavy defects, constantly checking paint depth so clear coat is never over-thinned.',
      'The result isn\u2019t just shinier paint \u2014 it\u2019s optically flat paint that reflects light cleanly instead of scattering it. That\u2019s the deep, wet gloss you see on show cars. And because the defects are physically removed (not filled with glazes that wash out), the result is permanent with proper aftercare.',
    ],
    dubaiFactors: [
      'Automatic car wash swirls: Dubai\u2019s ubiquitous automatic washes \u2014 brushes and dirty cloth \u2014 are the number one source of swirl marks we correct. Circular micro-scratches visible in direct sun are almost always wash-induced, not age.',
      'Hard-water etching: desalinated tap water is mineral-heavy. Droplets bake onto hot panels in minutes, and the minerals etch crescent-shaped marks into the clear coat that only machine polishing removes.',
      'Sand micro-scratching: wind-blown fine sand doesn\u2019t just sit on paint \u2014 at speed it leaves random-direction micro-scratches across bonnets and bumpers, dulling the finish over time.',
      'UV oxidation: extreme sun breaks down clear coat resins, leaving paint chalky and faded \u2014 especially on horizontal panels. Correction removes the oxidised layer to reveal fresh clear coat beneath.',
    ],
    process: [
      {
        title: 'Inspection and paint measurement',
        text: 'Every panel is examined under high-intensity inspection lighting and measured with a digital paint-depth gauge. We map defect types per panel and confirm there\u2019s enough clear coat to correct safely.',
      },
      {
        title: 'Decontamination',
        text: 'Iron fallout remover, tar remover and clay bar strip bonded contamination. Polishing over embedded grit would grind it into the paint \u2014 decon comes first, always.',
      },
      {
        title: 'Test spot',
        text: 'We polish a small, inconspicuous area with our planned compound-and-pad combination to prove the approach achieves the target defect removal before committing to the whole car.',
      },
      {
        title: 'Multi-stage correction',
        text: 'Panel by panel: cutting stage for defect removal, refining stage for clarity, with paint-depth checks throughout. Edges and high spots \u2014 where clear coat is thinnest \u2014 get reduced aggression.',
      },
      {
        title: 'IPA wipedown and final inspection',
        text: 'An isopropyl alcohol wipedown strips polishing oils to reveal the true finish \u2014 no fillers hiding remaining defects. Final inspection under multiple light sources, then handover with aftercare guidance.',
      },
    ],
    comparisonTitle: 'Paint Correction vs a Regular "Car Polish"',
    comparison: [
      'Versus the AED 100 "polish" at petrol stations: those are glaze-and-wax jobs \u2014 fillers that hide swirls for a few washes, then wash out revealing the same defects. True paint correction physically removes defects with measured, staged abrasion. One is makeup; the other is surgery.',
      'Versus touch-up paint and SMART repair: touch-up fills chips and deep scratches that correction can\u2019t fix (anything through the clear coat). They\u2019re complementary \u2014 we correct the overall finish, then address isolated deep damage with touch-up before coating.',
      'Versus wet sanding: sanding removes far more material and is reserved for severe orange peel or deep defects on cars with confirmed thick clear coat. For 95% of Dubai cars, machine polishing achieves the result with a fraction of the risk.',
    ],
    myths: [
      {
        myth: 'Polishing thins your paint dangerously.',
        truth:
          'A proper correction removes 1\u20133 microns from a 35\u201350 micron clear coat \u2014 verified by gauge before and after. The danger isn\u2019t polishing; it\u2019s unmeasured, aggressive rotary work by untrained hands. Measurement is what separates professionals from paint-burners.',
      },
      {
        myth: 'All scratches can be polished out.',
        truth:
          'Only defects within the clear coat. The fingernail test is definitive: if your nail catches, the scratch is through the clear coat and needs touch-up or repaint \u2014 no amount of polishing fixes it, and trying just thins surrounding paint.',
      },
      {
        myth: 'New cars don\u2019t need paint correction.',
        truth:
          'Dealership washes, transport rail dust and rushed PDI detailing mean most new cars arrive swirled. We\u2019d rather show you under inspection lights and correct only what\u2019s there \u2014 but skipping the inspection is how defects get sealed under a brand-new coating.',
      },
      {
        myth: 'Once corrected, paint stays perfect forever.',
        truth:
          'Correction removes existing defects permanently, but every future wash can add new ones. The correction lasts as long as your wash technique is safe \u2014 which is why we teach every customer the two-bucket method at handover.',
      },
    ],
    costFactors: [
      'Defect severity \u2014 light swirls vs heavy oxidation and deep etching',
      'Correction stages required \u2014 single-stage enhancement vs full multi-stage',
      'Vehicle size \u2014 more panels, more machine time',
      'Paint hardness \u2014 hard German clear coats take longer than soft Japanese ones',
      'Add-on goals \u2014 correction as standalone vs prep for coating or PPF',
    ],
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
      {
        question: 'How much does interior detailing cost in Dubai?',
        answer:
          'Interior detailing in Dubai starts from AED 400 for a standard clean on a small car, up to AED 1,500 for a comprehensive detail with leather reconditioning, ozone odour treatment, fabric protection and ceramic interior coating on a large SUV. Every job starts with an inspection so you only pay for what your cabin actually needs.',
      },
      {
        question: 'How long does interior detailing take?',
        answer:
          'A standard interior detail takes 4\u20138 hours depending on vehicle size and condition \u2014 a well-kept sedan is a half-day job, while a large SUV with stained fabrics, neglected leather and odour issues can take a full day. We\u2019ll give you an honest time estimate at inspection; most customers drop off in the morning and collect the same evening.',
      },
      {
        question: 'Can you remove stains and bad odours from my car?',
        answer:
          'Most, yes. Hot-water extraction lifts stains from fabrics that regular shampooing can\u2019t touch; leather is deep-cleaned and reconditioned; and ozone treatment neutralises odour molecules (smoke, milk spills, AC mustiness) rather than masking them with fragrance. Set-in dye transfer on light leather and years of smoke saturation are the hardest cases \u2014 we\u2019ll tell you honestly what\u2019s achievable before starting.',
      },
      {
        question: 'Is steam cleaning safe for car electronics and screens?',
        answer:
          'Yes, when done professionally. We use controlled-temperature dry steam \u2014 high heat, minimal moisture \u2014 and keep it away from sensitive electronics, using vacuum extraction and microfibre on screens and switchgear instead. The risk isn\u2019t steam itself but soaking: our process sanitises without saturating.',
      },
      {
        question: 'How often should I detail my car\u2019s interior in Dubai?',
        answer:
          'Every 3\u20134 months for daily drivers. Dubai cabins hit 70\u00b0C+ in summer parking, which bakes leather dry and fades plastics fast; desert dust infiltrates seals constantly. Regular conditioning and UV dressing between details stretches the interval \u2014 but in this climate, "once a year" means permanent material degradation.',
      },
      {
        question: 'What is included in a full interior detail?',
        answer:
          'Our full interior detail covers: deep vacuum of every surface including boot and spare-wheel well; hot-water extraction of seats, carpets and mats; leather cleaning, conditioning and protection; steam sanitisation of vents and crevices; dashboard and trim cleaning with UV dressing; interior glass with anti-fog treatment; door jambs; and optional ozone odour treatment and fabric protection.',
      },
    ],
    seoTitle: 'Interior Car Detailing Dubai | Ceramic My Car',
    seoDescription:
      'Interior car detailing in Dubai: deep steam clean, leather care & odour removal. Showroom-fresh cabin in a day. Book your interior detail now.',
    answer:
      'Interior detailing is a deep restorative clean of your car\u2019s cabin \u2014 steam-cleaned fabrics, conditioned leather, sanitised vents and UV-protected plastics. In Dubai\u2019s dust and 70\u00b0C cabin heat we recommend it every 3\u20136 months; a full detail takes 4\u20138 hours.',
    howItWorks: [
      'A proper interior detail is restorative, not cosmetic. It starts with dry soil removal \u2014 deep vacuum plus compressed air to blast dust from vents, seams and seat rails \u2014 because wiping dust around just scratches surfaces. Only then do liquids touch the cabin.',
      'Fabrics get hot-water extraction: heated cleaning solution is injected into carpets and upholstery, then immediately vacuum-extracted along with dissolved grime. Leather gets a three-step treatment \u2014 pH-balanced cleaning, conditioning to restore oils, then protection \u2014 because Dubai heat strips leather\u2019s natural moisture relentlessly.',
      'The finishing layer is protection and hygiene: UV dressing on dashboards and plastics to slow sun damage, anti-fog treatment on interior glass, and ozone treatment for odour \u2014 ozone oxidises odour molecules at a molecular level instead of covering them with scent.',
    ],
    dubaiFactors: [
      '70\u00b0C+ cabin temperatures: parked cars in Dubai summer become ovens. Leather dries, cracks and fades; adhesives soften; plastics off-gas. Regular conditioning and UV dressing are the only defence, and they\u2019re core to every interior detail we do.',
      'Constant dust infiltration: fine desert dust bypasses door seals and settles into every texture \u2014 vents, speaker grilles, seat perforations. It\u2019s mildly abrasive, so dusty cabins literally sand their own surfaces every time you touch them.',
      'Sand in fabrics: beach trips and desert outings grind sand deep into carpets and mats where vacuums alone can\u2019t reach. Hot-water extraction is the only method that truly removes it.',
      'AC mould and mustiness: Dubai\u2019s humidity plus constant AC use breeds microbial growth in evaporators and vents \u2014 the sour smell when you first switch on. Steam sanitisation and vent treatment eliminate it at the source.',
    ],
    process: [
      {
        title: 'Dry soil removal',
        text: 'Deep vacuum of seats, carpets, boot and crevices, plus compressed air to blast dust from vents, seat rails and switchgear. All loose abrasive soil comes out before any liquid touches a surface.',
      },
      {
        title: 'Fabric extraction',
        text: 'Hot-water extraction on carpets, mats and cloth upholstery \u2014 heated solution in, dissolved grime vacuumed straight back out. Stubborn stains get targeted pre-treatment first.',
      },
      {
        title: 'Leather three-step',
        text: 'Leather is pH-balanced cleaned, then conditioned to restore the oils Dubai heat strips away, then protected. Light-coloured leather gets extra attention for dye transfer and denim staining.',
      },
      {
        title: 'Vents, glass and trim',
        text: 'Steam sanitisation of air vents and crevices, UV-protectant dressing on dashboard and plastics, interior glass cleaned with anti-fog treatment, door jambs wiped down.',
      },
      {
        title: 'Odour treatment and QC',
        text: 'Ozone treatment if odour was flagged at inspection \u2014 oxidising smell molecules rather than masking them. Final walkaround under bright light; you inspect before you pay.',
      },
    ],
    comparisonTitle: 'Interior Detailing vs a Regular Car Wash Interior',
    comparison: [
      'Versus the "interior clean" at car washes: a wipedown and a scented tree. Wash crews spend 15 minutes \u2014 no extraction, no leather conditioning, no vent sanitisation. It looks fine for a week because nothing was actually restored. A real detail takes 4\u20138 hours because every material gets its correct treatment.',
      'Versus DIY: you can maintain between details with a vacuum and quality interior cleaner, and you should. But hot-water extractors, steamers, ozone generators and professional leather systems aren\u2019t driveway equipment \u2014 and using the wrong chemical on leather or Alcantara causes damage a detailer then has to fix.',
      'Versus seat covers: covers hide problems; detailing solves them. If your leather is already cracking, covers just trap heat and moisture against the damage. Detail first, then decide if you still want covers.',
    ],
    myths: [
      {
        myth: 'Leather interiors are maintenance-free.',
        truth:
          'Leather is skin \u2014 it dries, cracks and fades without conditioning, and Dubai\u2019s heat accelerates it brutally. "Maintenance-free leather" usually means coated leather that still needs cleaning; the coating just buys time. Condition every 3\u20134 months here.',
      },
      {
        myth: 'Steam cleaning will damage electronics and screens.',
        truth:
          'Soaking damages electronics; controlled dry steam doesn\u2019t. Professionals use high-heat, low-moisture steam kept away from sensitive components, with extraction and microfibre on screens. The horror stories involve rental machines and garden hoses, not detailing steamers.',
      },
      {
        myth: 'An air freshener fixes bad car smells.',
        truth:
          'It perfumes over them for days. Real odour \u2014 milk spills, smoke, AC mould \u2014 lives in fabrics and evaporators. Ozone treatment oxidises the odour molecules themselves; extraction removes the source material. Fresheners are the last step, never the solution.',
      },
      {
        myth: 'Shiny dashboards mean protected dashboards.',
        truth:
          'That wet shine is usually silicone dressing that attracts dust and accelerates cracking in UV. Proper protection is a matte UV-inhibiting dressing \u2014 it looks natural and actually slows sun damage instead of showcasing it.',
      },
    ],
    costFactors: [
      'Vehicle size \u2014 a compact hatchback vs a 7-seat SUV is a different half-day',
      'Upholstery type \u2014 leather three-step care vs fabric extraction vs Alcantara',
      'Condition \u2014 maintained cabins vs stained, neglected interiors needing restoration',
      'Odour issues \u2014 standard clean vs ozone treatment for smoke or spill smells',
      'Protection add-ons \u2014 fabric guard, leather ceramic coating, odour bombs',
    ],
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
      {
        question: 'How much does exterior detailing cost in Dubai?',
        answer:
          'Exterior detailing in Dubai starts from AED 250 for a decontamination wash and wax on a small car, up to AED 700+ for a full exterior detail with clay bar, iron removal and premium sealant on a large SUV. Engine bay cleaning and headlight restoration are available as add-ons.',
      },
      {
        question: 'How long does exterior detailing take?',
        answer:
          'A proper exterior detail takes 3\u20135 hours: pre-rinse and foam, two-bucket hand wash, iron and tar decontamination, clay bar treatment, then wax or sealant application with wheels, tyres and glass finished. Rushed "express details" skip the decontamination \u2014 which is the entire point.',
      },
      {
        question: 'How is exterior detailing different from a regular car wash in Dubai?',
        answer:
          'A car wash removes loose dirt. Detailing removes bonded contamination \u2014 iron fallout from construction zones, tar from fresh roadworks, and mineral deposits \u2014 that no wash touches, then seals the paint with real protection. In Dubai\u2019s environment a wash lasts days; a detail lasts months.',
      },
      {
        question: 'How often should I get exterior detailing in Dubai?',
        answer:
          'Every 3\u20134 months for daily drivers. Dubai\u2019s dust, UV and hard water degrade wax and sealant faster than temperate climates \u2014 a sealant rated for 6 months elsewhere gives you about 4 here. Regular detailing also means contamination never gets the chance to bond permanently.',
      },
      {
        question: 'Will detailing remove water spots from my car?',
        answer:
          'Fresh water spots \u2014 yes, usually with clay bar and chemical removers. Etched spots that have bitten into the clear coat need machine polishing (paint correction), which is a separate service. The distinction matters: we\u2019ll tell you at inspection which type you have before you pay for either.',
      },
      {
        question: 'Is hand washing really safer than an automatic car wash?',
        answer:
          'Dramatically. Automatic brushes trap grit from hundreds of previous cars and grind it into your paint \u2014 it\u2019s the number one cause of swirl marks we correct. A proper hand wash uses a two-bucket method (one for shampoo, one for rinsing the mitt), grit guards, and plush mitts, so dirt never gets dragged across the paint.',
      },
    ],
    seoTitle: 'Exterior Car Detailing Dubai | Ceramic My Car',
    seoDescription:
      'Exterior car detailing in Dubai: safe hand wash, clay bar & iron decontamination with wax protection. Book your exterior detail today.',
    answer:
      'Exterior detailing is a full paint decontamination \u2014 safe hand wash, iron fallout removal, clay bar and gloss enhancement \u2014 finished with wax or sealant. It removes what car washes can\u2019t: bonded iron, tar and industrial fallout. Takes 3\u20135 hours.',
    howItWorks: [
      'Contamination comes in two types. Loose contamination \u2014 dust, dirt, road film \u2014 rinses and washes off. Bonded contamination \u2014 iron fallout from brakes and construction, tar from fresh asphalt, mineral deposits, industrial fallout \u2014 is chemically or physically stuck to the clear coat. No amount of shampoo removes it; it needs dedicated chemistry and mechanical action.',
      'Exterior detailing attacks both in sequence. A citrus pre-wash and foam loosen the loose stuff before a mitt ever touches paint (this alone prevents most wash swirls). Iron remover dissolves embedded iron particles \u2014 you\u2019ll see them bleed purple as they dissolve. Tar remover lifts tar spots. Then a clay bar glides over lubricated paint, shearing off anything still bonded.',
      'Only now is the paint genuinely clean \u2014 often for the first time in months. The finish is a wax or paint sealant: carnauba for warm glow (8\u201312 weeks in Dubai), synthetic sealant for durability (4\u20136 months). Wheels, tyres, glass and trim are finished to match.',
    ],
    dubaiFactors: [
      'Construction iron fallout: Dubai is a permanent construction site. Airborne iron particles from brake dust, rail works and building sites embed invisibly in clear coat and oxidise \u2014 the "my white car has orange dots" phenomenon. Iron decon dissolves them; washing never will.',
      'Fresh tar: constant roadworks mean fresh asphalt and tar spray. Tar bonds chemically to clear coat within days in heat; left alone it needs aggressive removal that risks the paint.',
      'Hard-water mineral deposits: wash with Dubai tap water in direct sun and minerals bake on in minutes. Detailing removes existing deposits and the sealant layer makes future ones release easily.',
      'Sand-blasted lower panels: fine sand kicked up at speed peppers lower doors and bumpers. Decon plus sealant keeps this abrasion from becoming permanent dullness.',
    ],
    process: [
      {
        title: 'Pre-rinse and foam',
        text: 'Thorough rinse followed by citrus pre-wash and thick foam dwell. This loosens the heavy grime so the wash mitt never has to scrub \u2014 scrubbing is what causes swirls.',
      },
      {
        title: 'Two-bucket hand wash',
        text: 'pH-neutral shampoo, one bucket for wash solution, one for rinsing the mitt, grit guards in both. Top-down, panel by panel, mitt rinsed constantly. Wheels cleaned separately with dedicated tools.',
      },
      {
        title: 'Chemical decontamination',
        text: 'Iron fallout remover across all paint and wheels (watch it bleed purple), then tar remover on lower panels and behind wheels. Dwell times respected \u2014 chemistry needs time, not elbow grease.',
      },
      {
        title: 'Clay bar treatment',
        text: 'Fine-grade clay with proper lubrication glides over every painted panel, shearing off remaining bonded contaminants. The "plastic bag test" \u2014 feeling paint through a bag \u2014 confirms glass-smooth results.',
      },
      {
        title: 'Protection and finishing',
        text: 'Carnauba wax or synthetic sealant applied panel by panel and cured. Tyres dressed, trim restored, glass cleaned inside and out, exhaust tips polished. Final inspection in daylight.',
      },
    ],
    comparisonTitle: 'Exterior Detailing vs Automatic Car Wash vs "Polish"',
    comparison: [
      'Versus automatic car washes: brushes and cloth strips carry grit from every car before yours. One automatic wash can add more swirls than a year of hand washing. Detailing\u2019s two-bucket method exists specifically because automatics are paint damage machines \u2014 convenient, fast, and the reason paint correction exists.',
      'Versus the petrol-station "polish and wax": typically a glaze that fills swirls temporarily plus a spray wax that lasts two washes. It looks good in the forecourt lights and fades within weeks. Detailing removes contamination permanently and protects with real sealant chemistry.',
      'Versus ceramic coating: detailing is maintenance; coating is long-term armour. A fresh detail is actually the perfect starting point \u2014 many customers book exterior detailing first, see their paint truly clean, then upgrade to ceramic coating for multi-year protection.',
    ],
    myths: [
      {
        myth: 'Dish soap is fine for washing cars.',
        truth:
          'Dish soap strips wax and sealant aggressively and dries out trim \u2014 it\u2019s engineered to cut grease, not preserve protection. pH-neutral car shampoo cleans without stripping; the price difference is a few dirhams and your protection survives.',
      },
      {
        myth: 'Clay bars scratch paint.',
        truth:
          'Dry clay on dry paint, yes. Properly lubricated fine-grade clay glides without marring \u2014 it\u2019s been the professional standard for decades. Scratches blamed on clay are almost always from skipping the wash and decon steps before it.',
      },
      {
        myth: 'Wax lasts a year in Dubai.',
        truth:
          'No. Carnauba gives 8\u201312 weeks here; synthetic sealants 4\u20136 months. Anyone promising 12-month wax durability in 50\u00b0C heat and UV Index 11 is selling fantasy. Plan on quarterly detailing and your paint will thank you.',
      },
      {
        myth: 'More foam means a cleaner car.',
        truth:
          'Foam\u2019s job is dwell time \u2014 keeping cleaning agents on the paint so they loosen grime before contact. Beyond that it\u2019s theatre. The cleaning happens in the contact wash and the decon stages, not in the foam cannon show.',
      },
    ],
    costFactors: [
      'Vehicle size \u2014 compact vs SUV changes wash, clay and sealant time significantly',
      'Contamination level \u2014 garage-kept vs daily-driven through construction zones',
      'Protection choice \u2014 carnauba wax vs long-life synthetic sealant',
      'Add-ons \u2014 engine bay detail, headlight restoration, trim restoration',
      'Frequency \u2014 maintained cars need less decon time than first-time details',
    ],
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
      {
        question: 'What is the darkest legal window tint in Dubai?',
        answer:
          'UAE federal law requires a minimum 30% VLT (visible light transmission) on front side windows \u2014 meaning at least 30% of light must pass through. Rear side windows and the rear windshield can legally be darker, and many drivers go 20% or 5% at the back. We install only RTA-compliant combinations and will refuse illegal front tints: the fine isn\u2019t worth it, and neither is failing inspection.',
      },
      {
        question: 'How long does window tint last in Dubai?',
        answer:
          'Premium nano-ceramic film (Xpel, SunTek, 3M) lasts 10+ years in Dubai \u2014 it\u2019s warrantied against fading, bubbling and peeling for life by the manufacturer. Cheap dyed films are a different story: they turn purple and bubble within 2\u20133 summers here. The film quality is the entire difference between "lifetime" and "replace in two years".',
      },
      {
        question: 'Does window tint really reduce heat inside the car?',
        answer:
          'Yes \u2014 measurably. Nano-ceramic film rejects up to 70% of infrared heat (the part of sunlight you feel as heat) plus 99% of UV. Cabin temperatures drop noticeably, dashboards stop burning to the touch, and your AC works far less hard \u2014 which genuinely improves fuel economy in stop-start Dubai traffic. Dyed "limo tint" looks dark but blocks little heat; always check the IR rejection spec, not just the darkness.',
      },
      {
        question: 'Can old window tint be removed?',
        answer:
          'Yes. Professional removal uses steam and heat to soften the adhesive, peeling the film cleanly \u2014 then adhesive residue is dissolved and the glass is polished. It takes 1\u20132 hours. DIY removal with razors risks scratching the glass and, critically, destroying rear-window defroster lines. If your old tint is bubbling or purple, removal plus fresh ceramic film is the fix.',
      },
      {
        question: 'Why is my window tint bubbling?',
        answer:
          'Bubbles mean adhesive failure \u2014 the film\u2019s glue has broken down, almost always from cheap film, poor installation (contamination trapped underneath), or both. Dubai heat accelerates it. Small edge bubbles sometimes settle in the first week of curing; widespread bubbling months later means the film is done. The only real fix is professional removal and re-tinting with quality film.',
      },
      {
        question: 'Will window tint interfere with my phone or GPS signal?',
        answer:
          'Nano-ceramic film: no. Metallic film: yes, potentially. Metalised tints contain metal particles that can block radio frequencies \u2014 GPS, mobile signal, tyre-pressure sensors and radar detectors. This is a major reason we recommend nano-ceramic (Xpel Prime, SunTek CXP, 3M Crystalline) in Dubai: superior heat rejection with zero electronic interference.',
      },
    ],
    seoTitle: 'Car Window Tinting Dubai | Ceramic My Car',
    seoDescription:
      'Window tinting in Dubai: nano-ceramic film blocking 99% UV & 70% heat. RTA-compliant, lifetime film warranty. Get a free tint quote.',
    answer:
      'Window tinting applies nano-ceramic film to your car\u2019s glass, blocking up to 99% of UV rays and 70% of infrared heat. In Dubai it keeps cabins cooler, protects interiors from fading and cuts AC load. Installation takes 4\u20136 hours with a lifetime film warranty.',
    howItWorks: [
      'Window film is a multi-layer polyester construction: a scratch-resistant hard coat on the outside, the functional layer in the middle, and a pressure-sensitive adhesive against the glass. What separates a AED 800 tint from a AED 2,500 one is entirely that middle layer.',
      'Dyed film\u2019s middle layer is just dye \u2014 it looks dark but blocks little heat and fades purple in UV. Metallic film uses metal particles for real heat rejection but interferes with electronic signals. Nano-ceramic film embeds ceramic nanoparticles that block infrared heat and UV at a molecular level: maximum heat rejection, zero signal interference, no fading.',
      'VLT (visible light transmission) measures darkness: 5% is limo-dark, 70% is nearly clear. Darkness and heat rejection are independent specs \u2014 a quality 50% ceramic film rejects more heat than a cheap 5% dyed film. Always compare IR rejection percentages, not shades.',
    ],
    dubaiFactors: [
      'UV Index 11+ for months: unprotected glass lets skin-damaging UV into the cabin on every commute. 99% UV rejection isn\u2019t a luxury spec here \u2014 it\u2019s health-relevant, especially for children in rear seats.',
      '70\u00b0C cabin temperatures: parked cars become ovens, cooking dashboards, cracking leather and ageing every plastic and electronic component faster. 70% infrared rejection meaningfully slows this destruction.',
      'AC fuel penalty: Dubai drivers run AC 8+ months a year. Reducing cabin heat load cuts compressor work \u2014 the fuel saving over a year is real money, and the comfort difference is immediate.',
      'Glare: low winter sun and reflective glass towers create brutal glare on Sheikh Zayed Road. Quality tint cuts glare without the night-visibility penalty of overly dark cheap film.',
    ],
    process: [
      {
        title: 'Glass preparation',
        text: 'Every window is deep-cleaned inside \u2014 the film bonds to interior glass. Any dust, sticker residue or contamination trapped now becomes a permanent bubble, so prep is meticulous.',
      },
      {
        title: 'Computer-cut patterns',
        text: 'Film is cut by plotter to your exact model\u2019s window shapes. No blades on your glass, no hand-cut gaps \u2014 the pattern accounts for dot-matrix edges and third brake lights.',
      },
      {
        title: 'Application',
        text: 'With slip solution, each piece is positioned on the interior glass and squeegeed from centre outward, pushing out every drop of solution. Rear windshields are heat-shrunk to match their curvature before application.',
      },
      {
        title: 'Edge sealing and inspection',
        text: 'Edges are sealed and trimmed to sit just inside the glass perimeter. We inspect every window against the light for contamination, fingers and lifting edges before handover.',
      },
      {
        title: 'Curing',
        text: 'The adhesive needs 3\u20135 days to fully cure in Dubai\u2019s heat \u2014 don\u2019t roll windows down during this period. Slight haze in the first days is normal moisture evaporating, not a defect.',
      },
    ],
    comparisonTitle: 'Nano-Ceramic vs Dyed vs Metallic Tint',
    comparison: [
      'Versus dyed film: dyed is cheap, dark and nearly useless against heat \u2014 it fades purple within a couple of Dubai summers and blocks little infrared. Nano-ceramic costs 2\u20133x more and actually solves the heat problem while lasting a decade. For Dubai, dyed film is false economy.',
      'Versus metallic film: metallic rejects heat well but its metal layer can interfere with GPS, mobile reception, TPMS sensors and toll tags \u2014 a genuine daily annoyance. Nano-ceramic matches or beats its heat rejection with zero electronic side effects.',
      'Versus sunshades and curtains: shades help when parked but do nothing while driving \u2014 when UV and glare actually hit you. They\u2019re a fine supplement for windscreens, not a substitute for film on the glass you drive behind.',
    ],
    myths: [
      {
        myth: 'Darker tint always means cooler cabin.',
        truth:
          'Darkness (VLT) and heat rejection (IR + UV blocking) are independent. A 5% dyed film looks menacing and blocks little heat; a 50% nano-ceramic film looks mild and rejects 70% of infrared. Shop the spec sheet, not the shade.',
      },
      {
        myth: 'Window tint is illegal in Dubai.',
        truth:
          'It\u2019s legal within limits: minimum 30% VLT on front side windows; rears can be darker. The myth persists because fully blacked-out cars do get fined \u2014 for exceeding the limit, not for having tint. We install RTA-compliant combinations only.',
      },
      {
        myth: 'All tint bubbles eventually.',
        truth:
          'Quality film installed on properly prepped glass doesn\u2019t bubble \u2014 that\u2019s what the lifetime warranty covers. Bubbling is adhesive failure from cheap film or contaminated installation. It\u2019s a quality signal, not an inevitability.',
      },
      {
        myth: 'Tint will mess with my phone and GPS.',
        truth:
          'Only metallic films do that. Nano-ceramic films contain no metal and are electronically transparent \u2014 your GPS, phone, Salik tag and radar detector all work normally. If a shop can\u2019t tell you whether their film is metallic, walk away.',
      },
    ],
    costFactors: [
      'Film technology \u2014 dyed vs metallic vs nano-ceramic is the biggest price gap',
      'Vehicle size and window count \u2014 coupes vs 7-seat SUVs vs windscreens included',
      'Film brand \u2014 Xpel Prime, 3M Crystalline and SunTek CXP sit at different tiers',
      'Old tint removal \u2014 bubbled or purpled film adds 1\u20132 hours of labour',
      'Windshield coverage \u2014 clear 70\u201380% ceramic on the windshield costs extra but transforms cabin heat',
    ],
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

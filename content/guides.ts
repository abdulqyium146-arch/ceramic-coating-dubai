// Phase 4: informational guide/FAQ hubs for question-intent clusters.

export interface Guide {
  slug: string
  h1: string
  seoTitle: string
  seoDescription: string
  intro: string[]
  takeaways: string[]
  sections: { heading: string; paragraphs: string[] }[]
  table?: { caption: string; headers: [string, string, string]; rows: [string, string, string][] }
  faqs: { question: string; answer: string }[]
  relatedLinks: { label: string; href: string }[]
}

const GUIDES_BASE: Guide[] = [
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

// Phase 4c: comparison + explainer guides.
const GUIDES_EXTRA: Guide[] = [
  {
    slug: 'ppf-vs-ceramic-coating',
    h1: 'PPF vs Ceramic Coating: The Honest Dubai Comparison',
    seoTitle: 'PPF vs Ceramic Coating: Which Is Right? | Dubai Guide',
    seoDescription:
      'PPF vs ceramic coating: cost, protection & durability compared for Dubai. Plus when to get both. Honest advice from installers.',
    intro: [
      'This is the question we answer most at our Al Quoz studio \u2014 and the one the internet answers worst. PPF and ceramic coating are not competitors; they solve different problems. But because they\u2019re sold side by side, buyers treat them as an either/or choice and usually optimise for the wrong thing.',
      'Here\u2019s the straight comparison: what each does, what each costs in Dubai, and the decision framework we walk customers through every day.',
    ],
    takeaways: [
      'PPF = physical protection (chips, scratches). Ceramic = chemical/UV protection + gloss + easy washing.',
      'If highway stone chips are your fear, only PPF helps. If UV fade and wash swirls are, ceramic wins.',
      'Dubai cost: ceramic from AED 1,500; PPF from AED 2,500 (front) to AED 15,000 (full body).',
      'The benchmark setup: PPF on impact zones + ceramic over everything.',
      'Beware anyone selling one product as doing the other\u2019s job.',
    ],
    sections: [
      {
        heading: 'The Core Difference in One Paragraph',
        paragraphs: [
          'Paint protection film is a physical barrier \u2014 150\u2013200 microns of urethane that absorbs impacts. Ceramic coating is a chemical barrier \u2014 microns thick, bonded to the paint, blocking UV and chemicals while adding gloss and hydrophobics. One stops rocks; the other stops the sun. In Dubai, you face both.',
        ],
      },
      {
        heading: 'When to Choose PPF',
        paragraphs: [
          'Choose PPF when your primary enemy is physical: daily Sheikh Zayed Road commuting (stone chips), desert or wadi driving (sand rash, brush scratches), a brand-new car you want frozen at delivery condition, or a high-value car where resale depends on flawless paint. If you\u2019ve ever winced at a chip on your hood, that\u2019s the PPF use case.',
        ],
      },
      {
        heading: 'When to Choose Ceramic Coating',
        paragraphs: [
          'Choose ceramic when your primary enemies are chemical and cosmetic: a car parked outdoors under UV Index 11+, dark paint that shows every swirl, hatred of washing (hydrophobics cut wash time dramatically), or a budget under AED 3,000. For garage-kept cars that rarely see highways, ceramic alone is the value answer.',
        ],
      },
      {
        heading: 'When to Get Both (and How)',
        paragraphs: [
          'The Dubai benchmark: PPF on the front end (bumper, hood, mirrors, headlights \u2014 where 90% of chips land), ceramic coating over the entire car including the film. The film stops impacts; the ceramic adds UV protection, gloss and easy washing everywhere. Booked together it costs less than the two services separately \u2014 ask for a bundle quote.',
        ],
      },
    ],
    table: {
      caption: 'Head-to-Head: PPF vs Ceramic Coating',
      headers: ['Feature', 'PPF', 'Ceramic Coating'],
      rows: [
        ['Stops rock chips', 'Yes \u2014 its main job', 'No'],
        ['UV / fade protection', 'Yes, under the film', 'Yes \u2014 excellent'],
        ['Scratch resistance', 'Self-heals light scratches', 'Resists wash swirls only'],
        ['Gloss enhancement', 'Slight', 'Dramatic wet-look'],
        ['Hydrophobics / easy wash', 'Moderate', 'Excellent'],
        ['Durability in Dubai', '~10 years', '2\u201310 years by tier'],
        ['Typical cost', 'AED 2,500\u201315,000', 'AED 1,500\u20138,500+'],
        ['Install time', '2\u20135 days', '1\u20133 days'],
        ['Can combine?', 'Yes \u2014 ceramic over PPF', 'Yes \u2014 under nothing'],
      ],
    },
    faqs: [
      {
        question: 'Is PPF better than ceramic coating?',
        answer:
          'Neither is better \u2014 they do different jobs. PPF is better at stopping physical damage; ceramic is better at UV protection, gloss and easy washing per dirham. The right question is which problem you have, not which product is "better".',
      },
      {
        question: 'Can I get ceramic coating instead of PPF to save money?',
        answer:
          'Only if chips aren\u2019t your problem. Ceramic costs less and does more for gloss and washing \u2014 but it physically cannot stop a stone chip. If you commute on highways daily, the money "saved" becomes paint repair later.',
      },
      {
        question: 'Should I do PPF or ceramic first on a new car?',
        answer:
          'If budget allows one: PPF on the front end first (chips happen from day one), ceramic later over everything. If doing both at once: PPF first, ceramic over the top \u2014 always in that order.',
      },
      {
        question: 'Which lasts longer, PPF or ceramic coating?',
        answer:
          'Premium PPF lasts ~10 years; ceramic lasts 2\u201310 years depending on tier and maintenance. In practice they age differently \u2014 film fails at edges and yellows (cheap film), coating fades in hydrophobics \u2014 so "lasts longer" depends on what you measure.',
      },
      {
        question: 'Is the PPF + ceramic combo worth it in Dubai?',
        answer:
          'For cars over ~AED 150,000 that see highways, yes \u2014 it\u2019s the closest to complete protection available. For a city runabout that\u2019s garage-kept, ceramic alone is the sensible spend.',
      },
    ],
    relatedLinks: [
      { label: 'PPF service', href: '/services/ppf' },
      { label: 'Ceramic coating service', href: '/services/ceramic-coating' },
      { label: 'PPF price guide', href: '/pricing/ppf-price-dubai' },
      { label: 'Ceramic coating price guide', href: '/pricing/ceramic-coating-price-dubai' },
    ],
  },
  {
    slug: 'graphene-vs-ceramic-dubai',
    h1: 'Graphene vs Ceramic Coating: Dubai Comparison',
    seoTitle: 'Graphene vs Ceramic Coating | Dubai Comparison Guide',
    seoDescription:
      'Graphene vs ceramic coating in Dubai: real differences, heat & dust performance, cost. Which coating suits your car?',
    intro: [
      'Graphene coating is marketed as ceramic\u2019s successor \u2014 and the marketing has outrun the explanation. Here\u2019s what graphene actually adds, where it genuinely matters in Dubai, and when standard ceramic remains the smarter buy.',
      'Short version: graphene is ceramic chemistry plus a graphene nanostructure. Same family, upgraded properties \u2014 not a different species.',
    ],
    takeaways: [
      'Graphene coatings add: anti-static dust repellence, better heat dissipation, reduced water spotting.',
      'In Dubai\u2019s dust and 50\u00b0C heat, those three upgrades are genuinely noticeable.',
      'Cost: graphene from AED 2,500 vs ceramic from AED 1,500.',
      'For garage-kept cars, standard ceramic is the value pick.',
      'Both need the same preparation and maintenance \u2014 graphene isn\u2019t fit-and-forget.',
    ],
    sections: [
      {
        heading: 'What Graphene Actually Adds',
        paragraphs: [
          'A graphene coating starts as a ceramic (SiO2) coating with reduced graphene oxide integrated into the matrix. The graphene adds three measurable properties: lower surface energy (water spots release instead of etching), anti-static behaviour (less dust attraction \u2014 huge in Dubai), and higher thermal conductivity (heat spreads instead of concentrating, reducing water-spot baking).',
          'What it doesn\u2019t add: meaningful hardness over 9H ceramic, chip resistance (still a coating, not armour), or freedom from maintenance.',
        ],
      },
      {
        heading: 'The Dubai Verdict',
        paragraphs: [
          'Dubai is arguably the best case in the world for graphene: airborne dust coats cars within hours of washing, and 50\u00b0C panels bake water spots into paint fast. The anti-static and heat-dissipation properties attack Dubai\u2019s two signature problems directly. On a daily-driven car parked outdoors here, the difference over standard ceramic is real and visible within months.',
          'On a garage-kept weekend car, the advantages shrink to marginal \u2014 and the ~AED 1,000 premium buys little you\u2019ll notice. That\u2019s when standard ceramic wins on value.',
        ],
      },
      {
        heading: 'Cost Comparison',
        paragraphs: [
          'Graphene coating in Dubai starts from AED 2,500 for a 5-year package on a sedan \u2014 roughly AED 1,000 more than the equivalent ceramic tier. The premium covers the graphene-infused product and identical preparation. Durability claims (5\u20137 years typical, up to 10 premium) mirror ceramic\u2019s, because the failure modes \u2014 contamination, neglect, UV \u2014 are the same.',
        ],
      },
    ],
    table: {
      caption: 'Head-to-Head: Graphene vs Ceramic Coating',
      headers: ['Property', 'Graphene Coating', 'Ceramic Coating (9H)'],
      rows: [
        ['Dust repellence', 'Anti-static \u2014 noticeably less dust', 'Standard \u2014 dust settles normally'],
        ['Water spotting', 'Reduced \u2014 spots release easier', 'Good, but spots can bake on'],
        ['Heat dissipation', 'Higher \u2014 less spot baking', 'Standard'],
        ['Gloss', 'Deep, slightly darker tone', 'Sharp wet-look gloss'],
        ['Hardness', '~9H\u201310H', '9H'],
        ['Durability', '5\u201310 years by tier', '2\u201310 years by tier'],
        ['Dubai starting price', 'From AED 2,500', 'From AED 1,500'],
        ['Maintenance needs', 'Same: wash 2\u20134 weekly', 'Same'],
      ],
    },
    faqs: [
      {
        question: 'Is graphene coating better than ceramic coating?',
        answer:
          'In measurable properties \u2014 dust repellence, heat dissipation, water-spot resistance \u2014 yes. In hardness and base durability, roughly equal. "Better" depends on whether you\u2019ll notice the upgrades: daily-driven outdoor cars in Dubai will; garage queens won\u2019t.',
      },
      {
        question: 'How much does graphene coating cost in Dubai?',
        answer:
          'From AED 2,500 for a 5-year package on a sedan, up to AED 6,000+ for premium tiers on larger vehicles. About AED 1,000 more than the equivalent ceramic package \u2014 the preparation work is identical.',
      },
      {
        question: 'Does graphene coating last longer than ceramic?',
        answer:
          'Not meaningfully. Both live or die by preparation and maintenance; claimed durability (5\u201310 years) overlaps heavily. Buy graphene for its properties, not for extra years.',
      },
      {
        question: 'Is graphene coating worth it in Dubai?',
        answer:
          'For a daily driver parked outdoors \u2014 yes, the anti-static and heat properties target Dubai\u2019s exact problems. For a garage-kept car, standard ceramic gives 90% of the result for less money.',
      },
      {
        question: 'Can graphene coating go over PPF?',
        answer:
          'Yes \u2014 like ceramic, it bonds to film and adds hydrophobics and dust repellence on top of physical protection. An excellent combination for new cars.',
      },
    ],
    relatedLinks: [
      { label: 'Graphene coating service', href: '/services/graphene-coating' },
      { label: 'Ceramic coating service', href: '/services/ceramic-coating' },
      { label: 'Ceramic coating price guide', href: '/pricing/ceramic-coating-price-dubai' },
      { label: 'Ceramic coating FAQ guide', href: '/guides/ceramic-coating-faq-hub' },
    ],
  },
  {
    slug: 'what-is-paint-correction',
    h1: 'What Is Paint Correction? The Complete Dubai Guide',
    seoTitle: 'What Is Paint Correction? | Dubai Guide | Ceramic My Car',
    seoDescription:
      'What is paint correction? Stages, cost in Dubai (from AED 800), how long it lasts & when your car needs it. Honest explainer.',
    intro: [
      'Paint correction is machine polishing elevated to a discipline: the systematic removal of defects \u2014 swirls, oxidation, water-spot etching, light scratches \u2014 from your car\u2019s clear coat, measured in microns, finished to a level most people have never seen their paint achieve.',
      'It\u2019s also the foundation under everything we do. Ceramic coating and PPF both lock in what\u2019s underneath \u2014 correction is what makes "underneath" worth locking in.',
    ],
    takeaways: [
      'Paint correction = machine removal of clear-coat defects, not filling or hiding them.',
      'Stages: single-stage (enhancement) to multi-stage (full correction); more stages = more defect removal.',
      'Dubai cost: from AED 800 (single-stage) to AED 3,000+ (multi-stage, large vehicles).',
      'It\u2019s permanent \u2014 removed defects don\u2019t come back; new ones come from washing.',
      'Required before ceramic coating or PPF on any imperfect paint.',
    ],
    sections: [
      {
        heading: 'What Correction Actually Removes',
        paragraphs: [
          'Swirl marks (spider-webbing from bad washing), oxidation and UV haze, water-spot etching, light scratches, holograms from previous bad polishing, and bird-dropping etch marks. What it cannot fix: scratches through to primer, stone chips (they need touch-up or PPF), or thin/failing clear coat \u2014 which is why we measure paint depth first.',
          'The work is subtractive: abrasive compounds level the clear coat until defects disappear. A typical correction removes 2\u20135 microns from a 40\u201350 micron factory clear coat \u2014 safe when measured, dangerous when guessed.',
        ],
      },
      {
        heading: 'The Stages, Explained',
        paragraphs: [
          'Single-stage (enhancement): one polishing step, removes 50\u201370% of defects, restores gloss dramatically. Right for well-kept cars and as prep for coating. Multi-stage: compounding followed by refining (sometimes 3+ steps), removes 85\u201395%+ of defects. Right for neglected paint, dark colours, and show preparation.',
          'More stages isn\u2019t "better" \u2014 it\u2019s more aggressive. The correct stage is the least aggressive one that achieves your goal, because clear coat is finite.',
        ],
      },
      {
        heading: 'Why Dubai Cars Need It More',
        paragraphs: [
          'Dust is the enemy: every dusty wipe without proper washing grinds micro-scratches in, and Dubai cars get dusty daily. Tunnel car washes \u2014 still common here \u2014 install swirls at industrial speed. Add UV oxidation on outdoor-parked cars and mineral etching from hard water, and the average 3-year-old Dubai car carries more defects than a 6-year-old European one.',
          'That\u2019s why correction is bundled into our coating and PPF packages rather than sold as a surprise extra: in Dubai, "prep" isn\u2019t optional.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does paint correction cost in Dubai?',
        answer:
          'From AED 800 for single-stage enhancement on a sedan, AED 1,500\u20132,500 for two-stage correction, and AED 3,000+ for multi-stage work on large or badly defected vehicles. The free inspection determines which stage your paint actually needs.',
      },
      {
        question: 'How long does paint correction last?',
        answer:
          'The correction itself is permanent \u2014 removed defects are gone forever. What returns is new damage from washing, dust and sun. Protected with ceramic coating afterward, a correction lasts years; unprotected on a daily driver, swirls creep back within 6\u201312 months.',
      },
      {
        question: 'Is paint correction the same as polishing?',
        answer:
          'Polishing is the tool; correction is the discipline. A "polish" at a car wash is usually a filler-heavy glaze that hides swirls for weeks. True correction permanently removes them with measured, staged machine work. Ask whether defects are removed or filled \u2014 the answer tells you everything.',
      },
      {
        question: 'Will paint correction thin my clear coat dangerously?',
        answer:
          'Not when done properly. We measure paint depth on every panel first and work within safe limits \u2014 typically removing 2\u20135 microns from 40\u201350 microns of factory clear. The danger is unmeasured, aggressive correction; measurement is what makes it safe.',
      },
      {
        question: 'Do I need paint correction before ceramic coating?',
        answer:
          'On any imperfect paint, yes \u2014 coating locks in whatever\u2019s underneath permanently. On a brand-new car with delivery-fresh paint, a light single-stage enhancement usually suffices. The free inspection shows you exactly what your paint needs, with paint-depth readings to prove it.',
      },
      {
        question: 'How long does paint correction take?',
        answer:
          'Single-stage: 1 day. Two-stage: 1\u20132 days. Multi-stage on a large vehicle: 2\u20133 days. It\u2019s slow, careful work \u2014 anyone promising full correction in 3 hours is selling a glaze, not correction.',
      },
    ],
    relatedLinks: [
      { label: 'Paint correction service', href: '/services/paint-correction' },
      { label: 'Ceramic coating service', href: '/services/ceramic-coating' },
      { label: 'Ceramic coating FAQ guide', href: '/guides/ceramic-coating-faq-hub' },
      { label: 'Full price list', href: '/pricing' },
    ],
  },
]

// Combined export: the route and sitemap consume these.
export const GUIDES: Guide[] = [...GUIDES_BASE, ...GUIDES_EXTRA]
export const GUIDE_SLUGS = GUIDES.map((g) => g.slug)

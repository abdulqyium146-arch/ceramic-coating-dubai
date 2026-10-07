// Phase 4: brand pages for confirmed brand relationships.
// Claims stay consistent with what's already published on the site
// (film options include XPEL — see features). No new authorization claims.

export interface BrandPage {
  slug: string
  h1: string
  seoTitle: string
  seoDescription: string
  answer: string
  intro: string[]
  sections: { heading: string; paragraphs: string[] }[]
  faqs: { question: string; answer: string }[]
  relatedLinks: { label: string; href: string }[]
}

export const BRAND_PAGES: BrandPage[] = [
  {
    slug: 'xpel-ppf',
    h1: 'XPEL Paint Protection Film in Dubai',
    seoTitle: 'XPEL PPF Dubai | Ultimate Plus | Ceramic My Car',
    seoDescription:
      'Genuine XPEL PPF in Dubai: Ultimate Plus & Stealth installs from AED 2,500. 10-year warranty. Free inspection & pickup available.',
    answer:
      'We install genuine XPEL paint protection film in Dubai \u2014 Ultimate Plus for gloss finishes and Stealth for matte \u2014 with a 10-year manufacturer warranty. Partial-front coverage starts from AED 2,500; full-body from AED 7,500. Every install includes full paint correction first.',
    intro: [
      'XPEL is the most searched PPF brand in Dubai for a reason: Ultimate Plus has a decade-long track record in this exact climate \u2014 self-healing, optically clear, and backed by a 10-year warranty that actually covers yellowing. We install genuine XPEL film in our climate-controlled Al Quoz studio.',
      'Not sure if XPEL is right for your car? Read on \u2014 or skip straight to a free paint inspection and we\u2019ll advise honestly, including when another film or no film is the better answer.',
    ],
    sections: [
      {
        heading: 'Why XPEL Survives Dubai\u2019s Climate',
        paragraphs: [
          'Dubai kills inferior film fast: UV Index 11+, 50\u00b0C summers, and airborne sand. XPEL Ultimate Plus\u2019s elastomeric top coat was engineered for exactly this \u2014 the self-healing layer re-flows with heat, erasing the swirl marks and light scratches that sand and washing leave behind.',
          'The 10-year warranty is the other half of the story: it explicitly covers yellowing, cracking, peeling and hazing. In a climate where cheap film fails in 18 months, that warranty is the difference between an investment and an expense.',
        ],
      },
      {
        heading: 'Ultimate Plus vs Stealth: Which Finish?',
        paragraphs: [
          'Ultimate Plus is the gloss film \u2014 optically clear, invisible on your car from a metre away, and it actually deepens the gloss of the paint underneath. It\u2019s the default choice and what most of our customers choose.',
          'Stealth is the satin/matte film. On a gloss car it converts the finish to a stealth satin look; on factory matte cars (BMW Frozen, Mercedes Magno) it\u2019s the only correct protection, since matte paint can\u2019t be polished. Same self-healing technology, same 10-year warranty.',
        ],
      },
      {
        heading: 'How We Install XPEL',
        paragraphs: [
          'Film is only as good as the installation. Every XPEL job at our studio follows the same process: full decontamination, paint-thickness measurement, machine polishing to remove defects the film would magnify, computer-cut or bulk-custom fitting, and a contamination-controlled install bay. Then 24\u201348 hours of edge setting before collection.',
          'We never install film over damaged paint to hit a deadline. If your paint needs correction first, we\u2019ll tell you \u2014 and quote it honestly before any film goes on.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does XPEL PPF cost in Dubai?',
        answer:
          'Partial-front XPEL coverage starts from AED 2,500 on a sedan; full-front runs AED 4,000\u20137,000; full-body ranges from AED 7,500 to AED 15,000 on an exotic. See our PPF price guide for the exact package breakdown.',
      },
      {
        question: 'Is XPEL better than other PPF brands?',
        answer:
          'XPEL Ultimate Plus sits in the top tier alongside SunTek Ultra and 3M Pro Series \u2014 differences between them are marginal (clarity, stain resistance, installer preference). XPEL\u2019s advantage in Dubai is track record: more installs here, over more years, than any competitor. We install all three premium brands and recommend based on your car.',
      },
      {
        question: 'How long does XPEL last?',
        answer:
          'Around 10 years with basic care \u2014 that\u2019s what the manufacturer warranty covers, including yellowing. Regular washing and an annual inspection keep it performing; the self-healing top coat handles the rest.',
      },
      {
        question: 'Can XPEL be removed without damaging paint?',
        answer:
          'Yes. Professional removal with heat leaves factory paint untouched, even after years \u2014 that\u2019s one of the main reasons to buy premium film. It\u2019s also why XPEL is popular before resale: remove it and the car presents like new.',
      },
      {
        question: 'Do you offer XPEL Stealth for matte cars?',
        answer:
          'Yes. Stealth is specifically designed for matte and satin finishes, including factory matte cars like BMW Frozen and Mercedes Magno paint. It protects without adding gloss, which polishing and gloss films can\u2019t do on matte paint.',
      },
      {
        question: 'Is XPEL worth it over cheaper PPF?',
        answer:
          'In Dubai, yes \u2014 and the maths is simple. Cheap film that yellows in 18 months needs removal (expensive) and reinstallation; one XPEL install lasts a decade. Budget film in this climate is the most expensive option you can buy.',
      },
    ],
    relatedLinks: [
      { label: 'PPF service', href: '/services/ppf' },
      { label: 'PPF price guide', href: '/pricing/ppf-price-dubai' },
      { label: 'PPF FAQ guide', href: '/guides/ppf-faq-hub' },
      { label: 'Ceramic coating over PPF', href: '/services/ceramic-coating' },
    ],
  },
]

export const BRAND_PAGE_SLUGS = BRAND_PAGES.map((b) => b.slug)

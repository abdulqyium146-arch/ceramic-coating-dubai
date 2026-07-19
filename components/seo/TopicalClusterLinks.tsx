import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/content/services'

/**
 * Koray Tuğberk GÜBÜR Semantic SEO Framework — Topical Cluster Internal Links
 *
 * Renders contextual prose + links between semantically related service pages.
 * Each service defines its cluster relationships and the anchor text used.
 * This builds topical authority by connecting entity pages within rich context.
 */

interface ServiceRelation {
  slug: string
  anchor: string
  context: string
}

const SERVICE_RELATIONS: Record<string, ServiceRelation[]> = {
  'ceramic-coating': [
    {
      slug: 'graphene-coating',
      anchor: 'graphene ceramic coating Dubai',
      context: 'For Dubai\'s extreme heat and dusty desert environment, our',
    },
    {
      slug: 'ppf',
      anchor: 'paint protection film (PPF) Dubai',
      context: 'For maximum protection against rock chips and road debris, combine ceramic coating with',
    },
    {
      slug: 'paint-correction',
      anchor: 'professional paint correction in Dubai',
      context: 'Every ceramic coating application begins with our',
    },
    {
      slug: 'exterior-detailing',
      anchor: 'exterior detailing Dubai',
      context: 'For routine maintenance between coating applications, our',
    },
  ],
  'ppf': [
    {
      slug: 'ceramic-coating',
      anchor: 'ceramic coating over PPF Dubai',
      context: 'PPF provides physical protection; for chemical resistance and hydrophobic gloss, apply',
    },
    {
      slug: 'graphene-coating',
      anchor: 'graphene coating over PPF',
      context: 'For the ultimate paint protection combo, we layer',
    },
    {
      slug: 'paint-correction',
      anchor: 'paint correction before PPF',
      context: 'To ensure a flawless, bubble-free PPF installation, we always recommend',
    },
    {
      slug: 'window-tinting',
      anchor: 'window tinting Dubai',
      context: 'Complete your vehicle\'s protection with our premium',
    },
  ],
  'graphene-coating': [
    {
      slug: 'ceramic-coating',
      anchor: 'standard ceramic coating Dubai',
      context: 'Graphene coating outperforms',
    },
    {
      slug: 'ppf',
      anchor: 'paint protection film Dubai',
      context: 'For total paint defence, layer graphene coating over',
    },
    {
      slug: 'paint-correction',
      anchor: 'multi-stage paint correction Dubai',
      context: 'Before graphene coating application, we perform',
    },
    {
      slug: 'window-tinting',
      anchor: 'nano-ceramic window tinting',
      context: 'Extend graphene protection to your glass with our',
    },
  ],
  'paint-correction': [
    {
      slug: 'ceramic-coating',
      anchor: 'ceramic coating Dubai',
      context: 'After paint correction reveals a flawless finish, protect it permanently with our',
    },
    {
      slug: 'graphene-coating',
      anchor: 'graphene coating Dubai',
      context: 'For the most durable protection over corrected paint, apply our',
    },
    {
      slug: 'ppf',
      anchor: 'full-body PPF Dubai',
      context: 'Lock in your corrected paintwork with',
    },
    {
      slug: 'exterior-detailing',
      anchor: 'exterior car detailing Dubai',
      context: 'Maintain your corrected paint with regular',
    },
  ],
  'interior-detailing': [
    {
      slug: 'exterior-detailing',
      anchor: 'exterior detailing Dubai',
      context: 'Pair interior detailing with our comprehensive',
    },
    {
      slug: 'window-tinting',
      anchor: 'UV-blocking window tinting Dubai',
      context: 'Protect your detailed interior from UV fade with',
    },
    {
      slug: 'ceramic-coating',
      anchor: 'ceramic coating for your exterior',
      context: 'While your interior is being detailed, consider adding',
    },
  ],
  'exterior-detailing': [
    {
      slug: 'interior-detailing',
      anchor: 'interior detailing Dubai',
      context: 'Complete your vehicle transformation with our',
    },
    {
      slug: 'paint-correction',
      anchor: 'professional paint correction',
      context: 'If swirl marks or scratches are visible after detailing, upgrade to our',
    },
    {
      slug: 'ceramic-coating',
      anchor: 'ceramic coating to preserve your paint',
      context: 'After deep exterior detailing, protect your refreshed paintwork with',
    },
  ],
  'window-tinting': [
    {
      slug: 'interior-detailing',
      anchor: 'interior detailing to protect your cabin',
      context: 'Tinted windows reduce heat and UV — maximise the benefit with our',
    },
    {
      slug: 'ceramic-coating',
      anchor: 'ceramic coating for your exterior paint',
      context: 'While adding window tinting, many Dubai car owners also book',
    },
    {
      slug: 'ppf',
      anchor: 'paint protection film (PPF)',
      context: 'For complete vehicle protection beyond the glass, explore our',
    },
  ],
}

interface Props {
  currentSlug: string
}

export function TopicalClusterLinks({ currentSlug }: Props) {
  const relations = SERVICE_RELATIONS[currentSlug]
  if (!relations?.length) return null

  return (
    <section
      className="section-py bg-dark-950 border-t border-white/5"
      aria-label="Related services"
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md mb-4">
            Related <span className="text-gradient-gold">Protection Services</span>
          </h2>
          <p className="text-white/50 text-sm mb-10">
            Build a complete protection strategy for your vehicle with our complementary services.
          </p>

          {/* Prose-style contextual links — Koray semantic content network */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {relations.map((rel) => {
              const service = SERVICES.find((s) => s.slug === rel.slug)
              if (!service) return null
              return (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="glass-card p-5 group hover:border-gold-500/30 hover:bg-gold-500/[0.03] transition-all duration-300"
                >
                  <p className="text-xs text-white/40 mb-2 leading-relaxed">
                    {rel.context}{' '}
                    <span className="text-gold-400 font-semibold group-hover:text-gold-300 transition-colors">
                      {rel.anchor}
                    </span>
                    {' '}for enhanced results.
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-gold-400 transition-colors">
                        {service.title}
                      </p>
                      <p className="text-xs text-white/40">
                        From AED {service.startingPrice.toLocaleString()}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Entity-rich descriptive paragraph — Koray NLP signal */}
          <div className="glass-card p-6 border-gold-500/10">
            <p className="text-sm text-white/50 leading-relaxed">
              Ceramic My Car offers Dubai&apos;s most complete range of paint protection services —
              from{' '}
              {SERVICES.filter((s) => s.slug !== currentSlug).map((s, i, arr) => (
                <span key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-gold-400/80 hover:text-gold-400 transition-colors underline underline-offset-2 decoration-gold-500/30"
                  >
                    {s.title.toLowerCase()}
                  </Link>
                  {i < arr.length - 2 ? ', ' : i === arr.length - 2 ? ' to ' : ''}
                </span>
              ))}{' '}
              — all performed by certified specialists in our Al Quoz studio, Dubai.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { CTABanner } from '@/components/sections/CTABanner'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Gallery | Before & After Ceramic Coating Dubai | Ceramic My Car',
  description:
    'See stunning before and after results of ceramic coating, PPF, paint correction, and detailing work on Lamborghinis, Ferraris, Range Rovers, and more in Dubai.',
  keywords: [
    'ceramic coating before after Dubai',
    'PPF before after Dubai',
    'car detailing results Dubai',
    'ceramic coating gallery Dubai',
    'paint correction before after',
  ],
}

const GALLERY_ITEMS = [
  { car: 'Lamborghini Urus', service: 'Graphene Coating + PPF', area: 'Dubai Marina', color: 'from-yellow-500/20 to-orange-500/20' },
  { car: 'Ferrari 488 Spider', service: 'Full PPF + Ceramic', area: 'Palm Jumeirah', color: 'from-red-500/20 to-rose-500/20' },
  { car: 'Range Rover Sport', service: 'Ceramic Coating Premium', area: 'Business Bay', color: 'from-blue-500/20 to-slate-500/20' },
  { car: 'Porsche 911 GT3', service: 'Full Body PPF', area: 'Emirates Hills', color: 'from-gray-500/20 to-zinc-500/20' },
  { car: 'Mercedes S-Class', service: 'Ceramic + Window Tint', area: 'Downtown Dubai', color: 'from-slate-500/20 to-gray-500/20' },
  { car: 'BMW X5', service: 'Paint Correction + Ceramic', area: 'JVC', color: 'from-white/10 to-gray-500/20' },
  { car: 'Nissan Patrol', service: 'Graphene Coating', area: 'Arabian Ranches', color: 'from-amber-500/20 to-yellow-500/20' },
  { car: 'Toyota Land Cruiser', service: 'Full PPF', area: 'Dubai Hills', color: 'from-stone-500/20 to-neutral-500/20' },
  { car: 'Tesla Model S', service: 'Ceramic Coating Elite', area: 'Motor City', color: 'from-sky-500/20 to-blue-500/20' },
  { car: 'Rolls-Royce Cullinan', service: 'Full PPF + Graphene', area: 'Emirates Hills', color: 'from-purple-500/20 to-indigo-500/20' },
  { car: 'Audi Q8', service: 'Exterior Detailing + Ceramic', area: 'Business Bay', color: 'from-zinc-500/20 to-gray-500/20' },
  { car: 'Porsche Cayenne', service: 'Paint Correction + PPF', area: 'Palm Jumeirah', color: 'from-orange-500/20 to-amber-500/20' },
]

export default function GalleryPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Gallery', url: `${SITE_CONFIG.url}/gallery` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Header */}
      <section className="relative pt-32 pb-16 bg-dark-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
        <div className="section-container relative text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Gallery</span>
          </nav>
          <h1 className="heading-lg mb-4">
            Our <span className="text-gradient-gold">Work Gallery</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Real results from real vehicles. Browse our portfolio of ceramic coating, PPF,
            paint correction, and detailing work across Dubai and UAE.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((item, index) => (
              <article
                key={index}
                className={`glass-card overflow-hidden group hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Image placeholder with gradient */}
                <div className={`h-56 bg-gradient-to-br ${item.color} flex items-center justify-center relative`}>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚗</div>
                    <p className="text-xs text-white/40 font-medium">{item.car}</p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="badge-gold text-2xs">Before/After</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-sm font-bold text-white group-hover:text-gold-400 transition-colors mb-0.5">
                    {item.car}
                  </h3>
                  <p className="text-xs text-gold-400 mb-1">{item.service}</p>
                  <p className="text-xs text-white/40">{item.area}, Dubai</p>
                </div>
              </article>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-12 text-center glass-card p-8 max-w-lg mx-auto">
            <h2 className="text-xl font-bold text-white mb-3">
              See More on Instagram
            </h2>
            <p className="text-white/60 text-sm mb-6">
              Follow us for daily before/after content, ceramic coating transformations,
              and PPF installations on Dubai&apos;s most exciting vehicles.
            </p>
            <a
              href={SITE_CONFIG.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              @ceramicmycar on Instagram
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title="Want Results Like These?"
        subtitle="Book your free paint inspection and let us show you what we can do for your car."
      />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, Quote, ExternalLink } from 'lucide-react'
import { TESTIMONIALS } from '@/content/testimonials'
import { CTABanner } from '@/components/sections/CTABanner'
import { generateBreadcrumbSchema, generateReviewSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: '4.9★ Ceramic Coating Dubai Reviews | 847 Verified Google Reviews | Ceramic My Car' },
  description:
    'Genuine car ceramic coating services Dubai reviews. 4.9 stars from 847+ verified Google customers. Ferrari, Lamborghini, Range Rover, BMW, Mercedes owners share their Ceramic My Car experiences.',
  keywords: [
    'car ceramic coating Dubai reviews',
    'ceramic coating Dubai reviews',
    'best car ceramic coating Dubai reviews',
    'Ceramic My Car reviews',
    'car detailing reviews Dubai',
    'ceramic coating Google reviews Dubai',
    '4.9 star ceramic coating Dubai',
  ],
}

export default function ReviewsPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Reviews', url: `${SITE_CONFIG.url}/reviews` },
  ])

  const reviewSchema = generateReviewSchema(
    TESTIMONIALS.map((t) => ({
      author: t.name,
      rating: t.rating,
      text: t.review,
      date: t.date,
    }))
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Header */}
      <section className="relative pt-32 pb-16 bg-dark-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
        <div className="section-container relative text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Reviews</span>
          </nav>
          <h1 className="heading-lg mb-6">
            Customer <span className="text-gradient-gold">Reviews</span>
          </h1>

          {/* Rating Summary */}
          <div className="inline-flex flex-col items-center glass-card px-12 py-8 mb-8">
            <p className="text-6xl font-black text-gradient-gold mb-2">
              {SITE_CONFIG.rating.value}
            </p>
            <div className="flex items-center gap-0.5 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-6 w-6 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="text-white/60 text-sm">
              Based on {SITE_CONFIG.rating.count} Google reviews
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="https://g.page/ceramicmycar/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink className="h-4 w-4" />
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <article key={testimonial.id} className="review-card flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-base font-bold text-dark-950 shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{testimonial.name}</p>
                      <p className="text-xs text-white/50">{testimonial.location}</p>
                      <p className="text-xs text-white/40">{new Date(testimonial.date).toLocaleDateString('en-AE', { year: 'numeric', month: 'long' })}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-gold-500/20 shrink-0" />
                </div>

                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <p className="text-sm text-white/70 leading-relaxed flex-1 mb-4">
                  &ldquo;{testimonial.review}&rdquo;
                </p>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs font-bold text-gold-400">{testimonial.car}</p>
                  <p className="text-xs text-white/40">{testimonial.service}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Join 2,400+ Satisfied Customers"
        subtitle="Book your free paint inspection today and see why Dubai's car owners trust Ceramic My Car."
      />
    </>
  )
}

'use client'

import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/content/testimonials'

export function Testimonials() {
  return (
    <section className="section-py bg-dark-950 relative" aria-labelledby="reviews-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.04)_0%,transparent_70%)]" />

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge-gold mb-4 inline-flex">Customer Reviews</span>
          <h2 id="reviews-heading" className="heading-lg mb-4">
            What Dubai&apos;s Car Owners
            <br />
            <span className="text-gradient-gold">Say About Us</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-white">4.9</span>
            <span className="text-white/50">from 847 Google reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 6).map((testimonial) => (
            <article key={testimonial.id} className="review-card flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-sm font-bold text-dark-950 shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs text-white/50">{testimonial.location}</p>
                  </div>
                </div>
                <Quote className="h-6 w-6 text-gold-500/30 shrink-0" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-white/70 leading-relaxed flex-1 mb-4">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <p className="text-xs font-medium text-gold-400">{testimonial.car}</p>
                  <p className="text-2xs text-white/40">{testimonial.service}</p>
                </div>
                {testimonial.verified && (
                  <span className="text-2xs font-medium text-green-400/70 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Verified
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Google CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://g.page/ceramicmycar/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Star className="h-4 w-4 text-gold-400" />
            Read All 847 Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}

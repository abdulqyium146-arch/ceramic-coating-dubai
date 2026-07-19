'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { FAQS } from '@/content/faqs'
import { cn } from '@/lib/utils'

interface FAQSectionProps {
  limit?: number
  category?: string
}

export function FAQSection({ limit, category }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>('1')

  const filtered = FAQS.filter((faq) => !category || faq.category === category).slice(
    0,
    limit ?? undefined
  )

  return (
    <section className="section-py bg-dark-900 relative" aria-labelledby="faq-heading">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="section-container">
        <div className="text-center mb-16">
          <span className="badge-gold mb-4 inline-flex">FAQ</span>
          <h2 id="faq-heading" className="heading-lg mb-4">
            Frequently Asked{' '}
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Everything you need to know about ceramic coating, PPF, and car detailing in
            Dubai. {"Can't"} find your answer?{' '}
            <a href="/contact" className="text-gold-400 hover:text-gold-300 transition-colors">
              Contact us
            </a>
            .
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {filtered.map((faq) => (
            <div
              key={faq.id}
              className={cn(
                'glass-card overflow-hidden transition-all duration-300',
                openId === faq.id && 'border-gold-500/30 bg-gold-500/5'
              )}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="flex w-full items-start justify-between gap-4 p-5 text-left"
                aria-expanded={openId === faq.id}
              >
                <span className="text-sm font-semibold text-white leading-snug pr-2">
                  {faq.question}
                </span>
                <span className="shrink-0 mt-0.5">
                  {openId === faq.id ? (
                    <Minus className="h-4 w-4 text-gold-400" />
                  ) : (
                    <Plus className="h-4 w-4 text-white/40" />
                  )}
                </span>
              </button>

              {openId === faq.id && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-white/60 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export function FloatingCTA() {
  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like to get a quote for ceramic coating / car detailing. My car is a "
  )

  return (
    <div
      className="fixed bottom-6 right-4 z-50 flex flex-col gap-3"
      aria-label="Quick contact options"
    >
      {/* Phone Button */}
      <a
        href={`tel:${SITE_CONFIG.phone}`}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-dark-800 border border-white/20 text-white shadow-luxury hover:border-gold-500/50 hover:bg-gold-500/10 transition-all duration-200 hover:scale-110"
        aria-label={`Call ${SITE_CONFIG.name}`}
      >
        <Phone className="h-5 w-5" />
        <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-xl bg-dark-800 border border-white/10 px-3 py-1.5 text-xs font-medium text-white shadow-luxury group-hover:block">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury hover:bg-[#20bd5a] transition-all duration-200 hover:scale-110 animate-pulse-gold"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="h-7 w-7 fill-white" />
        <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-xl bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white shadow-luxury group-hover:block">
          WhatsApp Us
        </span>
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-400 text-2xs font-bold text-dark-950">
          1
        </span>
      </a>
    </div>
  )
}

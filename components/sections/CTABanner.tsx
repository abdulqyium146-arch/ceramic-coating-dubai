import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

interface CTABannerProps {
  title?: string
  subtitle?: string
}

export function CTABanner({
  title = 'Ready to Protect Your Car?',
  subtitle = 'Get a free paint inspection and personalised quote. We serve all areas of Dubai.',
}: CTABannerProps) {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-gold-600 via-gold-500 to-amber-500 py-16 md:py-20"
      aria-label="Call to action"
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="section-container relative">
        <div className="flex flex-col items-center text-center gap-8 md:flex-row md:text-left md:justify-between">
          <div>
            <h2 className="text-2xl font-black text-dark-950 sm:text-3xl md:text-4xl mb-2">
              {title}
            </h2>
            <p className="text-dark-800/80 text-base md:text-lg max-w-xl">{subtitle}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-dark-950 px-6 py-3.5 text-sm font-bold text-white hover:bg-dark-900 transition-colors shadow-luxury"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-dark-950/20 bg-transparent px-6 py-3.5 text-sm font-bold text-dark-950 hover:bg-dark-950/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi, I'd like to get a quote`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

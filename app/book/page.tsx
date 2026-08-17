import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Star, Truck } from 'lucide-react'
import { BookingForm } from '@/components/booking/BookingForm'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Book Car Ceramic Coating Services Dubai | Online Booking | Free Inspection Included',
  description:
    'Book your car ceramic coating services Dubai online in 60 seconds. Ceramic coating, PPF, graphene coating, paint correction & detailing. Free paint inspection. Pickup across all Dubai areas.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/book`,
  },
  openGraph: {
    title: 'Book Car Ceramic Coating Services Dubai | Free Inspection | Ceramic My Car',
    description:
      'Book car ceramic coating services Dubai online. Free paint inspection included. Pickup available across all Dubai areas. Confirm within 2 hours.',
    url: `${SITE_CONFIG.url}/book`,
  },
}

const TRUST_BADGES = [
  {
    icon: <Star className="h-5 w-5 text-gold-400" />,
    label: '4.9★ Google Rating',
    sub: '847+ verified reviews',
  },
  {
    icon: <Shield className="h-5 w-5 text-gold-400" />,
    label: 'GYEON Certified',
    sub: 'Authorized installer',
  },
  {
    icon: <Truck className="h-5 w-5 text-gold-400" />,
    label: 'Free Pickup Available',
    sub: 'Orders over AED 3,000',
  },
]

export default function BookPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Book Online', url: `${SITE_CONFIG.url}/book` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-dark-950 pt-32 pb-16">
        <div className="section-container text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">Book Online</span>
          </nav>

          <div className="badge-gold inline-flex mb-4">Book Your Service</div>

          <h1 className="heading-xl mb-4">
            Book Your{' '}
            <span className="text-gradient-gold">Service</span>
          </h1>

          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Reserve your appointment online in minutes. Every booking includes a free vehicle inspection — no obligation, no hidden charges.
            Pickup available across all Dubai areas.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <BookingForm />
        </div>
      </section>

      {/* Trust badges */}
      <section className="pb-20 bg-dark-950">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="glass-card rounded-xl p-4 flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center">
                  {badge.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{badge.label}</p>
                  <p className="text-xs text-white/40 mt-0.5">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

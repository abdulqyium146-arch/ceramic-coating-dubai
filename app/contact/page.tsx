import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { ContactContent, DirectionsButton } from '@/components/sections/ContactContent'

export const metadata: Metadata = {
  title: 'Free Quote & Paint Inspection | Contact Us | Al Quoz Dubai',
  description:
    'Get a free car ceramic coating services Dubai quote. Call, WhatsApp or visit our Al Quoz studio. Free paint inspection included. Serving all Dubai areas. Response within 2 hours.',
  keywords: [
    'car ceramic coating Dubai quote',
    'free ceramic coating quote Dubai',
    'ceramic coating free inspection Dubai',
    'contact car ceramic coating Dubai',
    'book ceramic coating Dubai',
    'car detailing quote Dubai',
    'free paint inspection Dubai',
  ],
}

export default function ContactPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Contact', url: `${SITE_CONFIG.url}/contact` },
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
            <span className="text-white/80">Contact</span>
          </nav>
          <h1 className="heading-lg mb-4">
            Get Your Free <span className="text-gradient-gold">Quote</span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Contact us via phone, WhatsApp, or the form below. We respond to all enquiries
            within 2 hours during business hours.
          </p>
        </div>
      </section>

      {/* Contact Grid — client component handles all tracked interactions */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <ContactContent />
        </div>
      </section>

      {/* Studio Map */}
      <section className="section-py bg-dark-900 border-t border-white/5" aria-labelledby="studio-location-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left — Studio address block */}
            <div>
              <span className="badge-gold mb-4 inline-flex">
                <MapPin className="h-3 w-3" />
                Find Our Studio
              </span>
              <h2 id="studio-location-heading" className="text-2xl font-black text-white mb-6">
                Ceramic My Car —{' '}
                <span className="text-gradient-gold">Al Quoz, Dubai</span>
              </h2>

              <address className="not-italic space-y-4 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">{SITE_CONFIG.address.street}</p>
                    <p>{SITE_CONFIG.address.area}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">{SITE_CONFIG.phoneDisplay}</p>
                    <p className="text-xs text-white/40">Call or WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Opening Hours</p>
                    <p>Mon–Thu: {SITE_CONFIG.hours.weekdays}</p>
                    <p>Friday: {SITE_CONFIG.hours.friday}</p>
                    <p>Sat–Sun: {SITE_CONFIG.hours.weekends}</p>
                  </div>
                </div>
              </address>

              <div className="mt-6 glass-card p-4 border-gold-500/10">
                <p className="text-xs font-semibold text-gold-400 mb-2">How to Find Us</p>
                <ul className="space-y-1.5 text-xs text-white/50">
                  <li>• Off Sheikh Zayed Road, Al Quoz Industrial Area 1</li>
                  <li>• 10 min from Dubai Mall · 15 min from Dubai Marina</li>
                  <li>• Look for the Ceramic My Car sign on the building</li>
                  <li>• Free parking available on-site</li>
                </ul>
              </div>

              {/* Tracked directions button — client component */}
              <DirectionsButton />
            </div>

            {/* Right — Embedded Google Map */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/30"
                 style={{ height: '460px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac5a5ed97cd28ab9%3A0x6a3cc5ff15ccf54!2sCeramic%20My%20Car%20%7C%20Best%20Detailing%20Studio%20in%20Dubai!5e0!3m2!1sen!2s!4v1784538548445!5m2!1sen!2s"
                title="Ceramic My Car — Best Detailing Studio in Dubai, Al Quoz location on Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

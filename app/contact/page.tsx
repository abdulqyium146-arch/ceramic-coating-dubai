import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Us | Get Free Ceramic Coating Quote Dubai',
  description:
    'Contact Ceramic My Car Dubai. Get a free quote for ceramic coating, PPF, or car detailing. Call, WhatsApp, or visit our Al Quoz studio. Free paint inspection available.',
  keywords: [
    'contact ceramic coating Dubai',
    'ceramic coating quote Dubai',
    'car detailing quote Dubai',
    'Ceramic My Car contact',
    'free inspection Dubai',
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

      {/* Contact Grid */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">
                How to Reach Us
              </h2>

              <div className="space-y-6 mb-10">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="glass-card p-5 flex items-center gap-4 hover:border-gold-500/30 transition-all group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 group-hover:bg-gold-500/20 transition-colors shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-0.5">Call Us</p>
                    <p className="text-base font-bold text-white">{SITE_CONFIG.phoneDisplay}</p>
                    <p className="text-xs text-white/50">Available 8am – 8pm daily</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi, I'd like to get a quote for my car`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 flex items-center gap-4 hover:border-green-500/30 transition-all group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400 group-hover:bg-green-500/20 transition-colors shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-0.5">WhatsApp</p>
                    <p className="text-base font-bold text-white">+{SITE_CONFIG.whatsapp}</p>
                    <p className="text-xs text-white/50">Fastest response — usually within minutes</p>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="glass-card p-5 flex items-center gap-4 hover:border-gold-500/30 transition-all group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 group-hover:bg-gold-500/20 transition-colors shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-0.5">Email</p>
                    <p className="text-base font-bold text-white">{SITE_CONFIG.email}</p>
                    <p className="text-xs text-white/50">Response within 4 hours</p>
                  </div>
                </a>

                <div className="glass-card p-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-0.5">Studio Address</p>
                    <address className="not-italic text-base font-bold text-white">
                      {SITE_CONFIG.address.street}
                    </address>
                    <p className="text-xs text-white/50">
                      {SITE_CONFIG.address.area}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}
                    </p>
                  </div>
                </div>

                <div className="glass-card p-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">Opening Hours</p>
                    <div className="space-y-1 text-sm text-white">
                      <p>Mon–Thu: <span className="text-white/70">{SITE_CONFIG.hours.weekdays}</span></p>
                      <p>Friday: <span className="text-white/70">{SITE_CONFIG.hours.friday}</span></p>
                      <p>Sat–Sun: <span className="text-white/70">{SITE_CONFIG.hours.weekends}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">
                Request a Free Quote
              </h2>
              <form className="glass-card p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Ahmed Al Mansoori"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+971 50 000 0000"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ahmed@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="car" className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">
                    Your Car *
                  </label>
                  <input
                    type="text"
                    id="car"
                    name="car"
                    required
                    placeholder="e.g. Mercedes GLE 2023 White"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-xl border border-white/10 bg-dark-900 px-4 py-3 text-sm text-white focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="ceramic-coating">Ceramic Coating</option>
                    <option value="ppf">Paint Protection Film (PPF)</option>
                    <option value="graphene-coating">Graphene Coating</option>
                    <option value="ppf-ceramic">PPF + Ceramic Combo</option>
                    <option value="paint-correction">Paint Correction</option>
                    <option value="interior-detailing">Interior Detailing</option>
                    <option value="exterior-detailing">Exterior Detailing</option>
                    <option value="window-tinting">Window Tinting</option>
                    <option value="full-package">Full Package (everything)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Any specific requirements, paint condition issues, or questions..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  Send Quote Request
                </button>

                <p className="text-xs text-white/30 text-center">
                  We respond within 2 hours during business hours. Your information is kept private.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Map — Local SEO NAP reinforcement ─────────────────────── */}
      <section className="section-py bg-dark-900 border-t border-white/5" aria-labelledby="studio-location-heading">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left — Studio address block (NAP entity for Google) */}
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
                    <a href={`tel:${SITE_CONFIG.phone}`} className="font-semibold text-white hover:text-gold-400 transition-colors">
                      {SITE_CONFIG.phoneDisplay}
                    </a>
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

              {/* Landmark notes — helps customers navigate */}
              <div className="mt-6 glass-card p-4 border-gold-500/10">
                <p className="text-xs font-semibold text-gold-400 mb-2">How to Find Us</p>
                <ul className="space-y-1.5 text-xs text-white/50">
                  <li>• Off Sheikh Zayed Road, Al Quoz Industrial Area 1</li>
                  <li>• 10 min from Dubai Mall · 15 min from Dubai Marina</li>
                  <li>• Look for the Ceramic My Car sign on the building</li>
                  <li>• Free parking available on-site</li>
                </ul>
              </div>

              <a
                href="https://maps.google.com/maps?q=Ceramic+My+Car+Dubai+Al+Quoz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 inline-flex"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
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
      {/* ──────────────────────────────────────────────────────────────────── */}
    </>
  )
}

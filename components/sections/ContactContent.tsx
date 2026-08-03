'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, CheckCircle2 } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import {
  trackPhoneClick,
  trackWhatsAppClick,
  trackEmailClick,
  trackDirectionsClick,
  trackGenerateLead,
} from '@/lib/analytics'

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    // Rely on native HTML5 validation — if invalid, browser shows errors and we never reach here
    if (!form.checkValidity()) return

    const data = new FormData(form)
    const service = (data.get('service') as string) || 'unknown'

    trackGenerateLead(service)
    setSubmitted(true)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-8">How to Reach Us</h2>

        <div className="space-y-6 mb-10">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            onClick={() => trackPhoneClick(SITE_CONFIG.phone)}
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
            onClick={() => trackWhatsAppClick(SITE_CONFIG.whatsapp)}
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
            onClick={() => trackEmailClick(SITE_CONFIG.email)}
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
        <h2 className="text-2xl font-bold text-white mb-8">Request a Free Quote</h2>

        {submitted ? (
          <div className="glass-card p-10 flex flex-col items-center text-center gap-4">
            <CheckCircle2 className="h-14 w-14 text-gold-400" />
            <h3 className="text-xl font-bold text-white">Quote Request Received!</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Thank you — we will review your request and reply within 2 hours during business hours.
              For the fastest response, WhatsApp us directly.
            </p>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi, I just sent a quote request on your website`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(SITE_CONFIG.whatsapp)}
              className="btn-primary mt-2"
            >
              <MessageCircle className="h-4 w-4" />
              Follow Up on WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate={false} className="glass-card p-8 space-y-5">
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
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
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

            <button type="submit" className="btn-primary w-full justify-center text-base py-4">
              Send Quote Request
            </button>

            <p className="text-xs text-white/30 text-center">
              We respond within 2 hours during business hours. Your information is kept private.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

// Standalone directions button — used in the map section below the form
export function DirectionsButton({ className }: { className?: string }) {
  return (
    <a
      href="https://maps.google.com/maps?q=Ceramic+My+Car+Dubai+Al+Quoz"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackDirectionsClick()}
      className={className ?? 'btn-primary mt-6 inline-flex'}
    >
      <Navigation className="h-4 w-4" />
      Get Directions
    </a>
  )
}

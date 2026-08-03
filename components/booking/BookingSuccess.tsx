'use client'

import { CheckCircle2, Phone, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import { generateWhatsAppUrl, generateCallUrl } from '@/lib/utils'
import { trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics'

interface BookingSuccessProps {
  bookingId: string
  service: string
  date: string
  time: string
  name: string
}

function formatDateDisplay(dateStr: string): string {
  if (!dateStr) return '—'
  try {
    return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-AE', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return dateStr
  }
}

function formatTimeDisplay(timeStr: string): string {
  if (!timeStr) return '—'
  try {
    const [hours, minutes] = timeStr.split(':').map(Number)
    const period = hours >= 12 ? 'PM' : 'AM'
    const displayHour = hours % 12 || 12
    return `${displayHour}:${String(minutes).padStart(2, '0')} ${period}`
  } catch {
    return timeStr
  }
}

function formatServiceName(slug: string): string {
  const map: Record<string, string> = {
    'ceramic-coating': 'Ceramic Coating',
    ppf: 'Paint Protection Film (PPF)',
    'graphene-coating': 'Graphene Coating',
    'paint-correction': 'Paint Correction',
    'interior-detailing': 'Interior Detailing',
    'exterior-detailing': 'Exterior Detailing',
    'window-tinting': 'Window Tinting',
  }
  return map[slug] ?? slug
}

export function BookingSuccess({ bookingId, service, date, time, name }: BookingSuccessProps) {
  const ref = bookingId.slice(0, 8).toUpperCase()
  const waMessage = `Hi, I just submitted a booking request (ref: ${ref}) for ${formatServiceName(service)}. Can you please confirm?`
  const waUrl = generateWhatsAppUrl(SITE_CONFIG.whatsapp, waMessage)
  const callUrl = generateCallUrl(SITE_CONFIG.phone)

  return (
    <div className="max-w-lg mx-auto text-center space-y-8 py-8">
      {/* Success icon */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-2xl scale-150" />
          <CheckCircle2 className="relative h-20 w-20 text-gold-400" />
        </div>
      </div>

      {/* Heading */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Booking Request Received!</h2>
        <p className="text-white/60">
          Thank you, {name.split(' ')[0]}. We&apos;ll confirm within 2 hours during business hours.
        </p>
      </div>

      {/* Reference */}
      <div className="glass-card rounded-2xl p-6 text-center">
        <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
          Booking Reference
        </p>
        <p className="text-3xl font-mono font-bold text-gold-400 tracking-widest">{ref}</p>
        <p className="text-xs text-white/40 mt-2">Keep this for your records</p>
      </div>

      {/* Booking summary */}
      <div className="glass-card rounded-2xl p-5 text-left space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-white/50">Service</span>
          <span className="text-white font-medium">{formatServiceName(service)}</span>
        </div>
        <div className="border-t border-white/5" />
        <div className="flex justify-between text-sm">
          <span className="text-white/50">Date</span>
          <span className="text-white font-medium">{formatDateDisplay(date)}</span>
        </div>
        <div className="border-t border-white/5" />
        <div className="flex justify-between text-sm">
          <span className="text-white/50">Time</span>
          <span className="text-white font-medium">{formatTimeDisplay(time)}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick(SITE_CONFIG.whatsapp)}
          className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white font-bold py-3.5 px-5 rounded-xl transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          Follow Up on WhatsApp
        </a>
        <a
          href={callUrl}
          onClick={() => trackPhoneClick(SITE_CONFIG.phone)}
          className="flex-1 flex items-center justify-center gap-2 btn-secondary py-3.5 px-5 rounded-xl font-bold"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>
      </div>

      {/* What happens next */}
      <div className="glass-card rounded-2xl p-6 text-left">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">What Happens Next</h3>
        <div className="space-y-4">
          {[
            {
              step: '1',
              title: 'We Review Your Request',
              desc: 'Our team checks your booking details and availability.',
            },
            {
              step: '2',
              title: 'Confirmation via WhatsApp or Call',
              desc: `We'll contact you on ${SITE_CONFIG.phoneDisplay} to confirm your appointment.`,
            },
            {
              step: '3',
              title: 'Drop Off or We Collect',
              desc: 'Bring your vehicle to our Al Quoz studio, or use our free pickup service.',
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-xs font-bold text-gold-400">
                {step}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-white/50 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

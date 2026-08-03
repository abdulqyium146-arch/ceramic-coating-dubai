'use client'

import { Loader2, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import { generateWhatsAppUrl } from '@/lib/utils'
import type { BookingInput } from '@/lib/validations/booking'

interface ReviewStepProps {
  formData: BookingInput
  priceEstimate: string
  isSubmitting: boolean
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

const DIVIDER = <div className="border-t border-white/5" />

interface ReviewRowProps {
  label: string
  value: string
  highlight?: boolean
}

function ReviewRow({ label, value, highlight = false }: ReviewRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <span className="text-xs font-semibold text-white/40 uppercase tracking-wider flex-shrink-0 pt-0.5">
        {label}
      </span>
      <span
        className={
          highlight
            ? 'text-base font-bold text-gold-400 text-right'
            : 'text-sm font-medium text-white text-right'
        }
      >
        {value}
      </span>
    </div>
  )
}

export function ReviewStep({ formData, priceEstimate, isSubmitting }: ReviewStepProps) {
  const waUrl = generateWhatsAppUrl(
    SITE_CONFIG.whatsapp,
    `Hi, I'd like to book ${formatServiceName(formData.service)} for my ${formData.vehicle_type} on ${formatDateDisplay(formData.booking_date)} at ${formatTimeDisplay(formData.booking_time)}.`
  )

  const locationStr = formData.address
    ? `${formData.address}, ${formData.city}`
    : formData.city

  return (
    <div className="space-y-6">
      {/* Summary card */}
      <div className="glass-card rounded-2xl p-6 space-y-0 divide-y divide-white/5">
        <ReviewRow label="Service" value={formatServiceName(formData.service)} />
        <ReviewRow label="Vehicle" value={formData.vehicle_type} />
        <ReviewRow label="Date" value={formatDateDisplay(formData.booking_date)} />
        <ReviewRow label="Time" value={formatTimeDisplay(formData.booking_time)} />
        {DIVIDER}
        <ReviewRow label="Name" value={formData.full_name} />
        <ReviewRow label="Phone" value={formData.phone} />
        <ReviewRow label="Email" value={formData.email} />
        {formData.address && (
          <ReviewRow label="Location" value={locationStr} />
        )}
        {DIVIDER}
        <ReviewRow label="Est. Price" value={priceEstimate} highlight />
      </div>

      {/* Price note */}
      <p className="text-center text-xs text-white/40">
        Price confirmed after free vehicle inspection. No hidden charges.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full py-4 text-base font-bold rounded-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Confirm Booking Request'
        )}
      </button>

      {/* WhatsApp fallback */}
      <div className="text-center">
        <p className="text-xs text-white/40 mb-2">Prefer to book via WhatsApp?</p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          Chat with us on WhatsApp
        </a>
      </div>
    </div>
  )
}

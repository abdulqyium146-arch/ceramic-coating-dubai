'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, CheckCircle2, Loader2, MessageCircle, Phone } from 'lucide-react'
import { bookingSchema, type BookingInput } from '@/lib/validations/booking'
import { submitBooking } from '@/actions/booking'
import { trackBooking, trackGenerateLead } from '@/lib/analytics'
import { SITE_CONFIG } from '@/lib/constants'

const SERVICES = [
  { value: 'ceramic-coating', label: 'Ceramic Coating' },
  { value: 'ppf', label: 'Paint Protection Film (PPF)' },
  { value: 'graphene-coating', label: 'Graphene Coating' },
  { value: 'paint-correction', label: 'Paint Correction' },
  { value: 'interior-detailing', label: 'Interior Detailing' },
  { value: 'exterior-detailing', label: 'Exterior Detailing' },
  { value: 'window-tinting', label: 'Window Tinting' },
]

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [bookingRef, setBookingRef] = useState('')
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      full_name: '',
      phone: '',
      email: '',
      service: '',
      city: '',
      notes: '',
    },
  })

  async function onSubmit(data: BookingInput) {
    setIsSubmitting(true)
    setServerError('')
    try {
      const result = await submitBooking(data)
      if (result.success && result.bookingId) {
        trackBooking()
        trackGenerateLead(data.service, 'Dubai')
        setBookingRef(result.bookingId.slice(0, 8).toUpperCase())
        setSubmitted(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setServerError(result.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setServerError('An unexpected error occurred. Please try WhatsApp instead.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="glass-card rounded-2xl p-8 md:p-12 text-center space-y-6">
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 border border-green-500/30">
            <CheckCircle2 className="h-10 w-10 text-green-400" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Request Received!</h2>
          <p className="text-white/60">We&apos;ll call you within 2 hours to confirm your booking.</p>
        </div>
        <div className="inline-block rounded-xl bg-gold-500/10 border border-gold-500/30 px-6 py-3">
          <p className="text-xs text-white/40 mb-1">Booking Reference</p>
          <p className="font-mono text-xl font-black text-gold-400">#{bookingRef}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi, I just submitted a booking request. Reference: #${bookingRef}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white"
          >
            <MessageCircle className="h-4 w-4" />
            Follow Up on WhatsApp
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            Call Us Now
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="glass-card rounded-2xl p-6 md:p-8 space-y-5">

        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-1.5">
              Your Name <span className="text-gold-400">*</span>
            </label>
            <input
              {...register('full_name')}
              placeholder="Ahmed Al Mansoori"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 focus:bg-white/8 transition-all"
            />
            {errors.full_name && (
              <p className="mt-1.5 text-xs text-red-400">{errors.full_name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-1.5">
              Phone Number <span className="text-gold-400">*</span>
            </label>
            <input
              {...register('phone')}
              type="tel"
              placeholder="+971 50 123 4567"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 focus:bg-white/8 transition-all"
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-400">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-white/80 mb-1.5">
            Email Address <span className="text-gold-400">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="ahmed@example.com"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 focus:bg-white/8 transition-all"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-semibold text-white/80 mb-1.5">
            Service Required <span className="text-gold-400">*</span>
          </label>
          <select
            {...register('service')}
            className="w-full rounded-xl bg-dark-900 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500/50 transition-all appearance-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff60' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
          >
            <option value="" className="bg-dark-900 text-white/40">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s.value} value={s.value} className="bg-dark-900 text-white">
                {s.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1.5 text-xs text-red-400">{errors.service.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-white/80 mb-1.5">
            Your Location <span className="text-gold-400">*</span>
          </label>
          <input
            {...register('city')}
            placeholder="Dubai Marina, JVC, Business Bay..."
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 focus:bg-white/8 transition-all"
          />
          {errors.city && (
            <p className="mt-1.5 text-xs text-red-400">{errors.city.message}</p>
          )}
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-semibold text-white/80 mb-1.5">
            Additional Notes <span className="text-white/30 font-normal">(optional)</span>
          </label>
          <textarea
            {...register('notes')}
            rows={3}
            placeholder="Tell us about your car, preferred time, or any special requests..."
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 focus:bg-white/8 transition-all resize-none"
          />
        </div>

        {/* Server error */}
        {serverError && (
          <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
            <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-red-300">{serverError}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full py-4 text-base font-bold rounded-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending Request...
            </>
          ) : (
            'Request a Free Quote'
          )}
        </button>

        <p className="text-center text-xs text-white/30">
          Free inspection · No obligation · We&apos;ll call you within 2 hours
        </p>
      </div>
    </form>
  )
}

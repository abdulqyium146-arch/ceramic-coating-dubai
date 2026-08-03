import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Car, MapPin, Phone, Mail, FileText, DollarSign } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { BookingDetailActions } from '@/components/admin/BookingDetailActions'
import { BookingStatusBadge } from '@/components/admin/BookingStatusBadge'
import type { Booking } from '@/types/booking'
import { SITE_CONFIG } from '@/lib/constants'

interface Props {
  params: Promise<{ id: string }>
}

function formatService(slug: string): string {
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

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-AE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function formatTime(timeStr: string): string {
  const [h, m] = timeStr.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour = h % 12 || 12
  return `${hour}:${String(m).padStart(2, '0')} ${period}`
}

function formatCreatedAt(iso: string): string {
  return new Date(iso).toLocaleString('en-AE', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default async function BookingDetailPage({ params }: Props) {
  const { id } = await params
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !data) notFound()

  const booking = data as Booking
  const ref = booking.id.slice(0, 8).toUpperCase()

  const waMessage = encodeURIComponent(
    `Hi ${booking.full_name}, this is Ceramic My Car. Your booking (#${ref}) for ${formatService(booking.service)} on ${formatDate(booking.booking_date)} has been confirmed. We look forward to seeing you!`
  )
  const waLink = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${waMessage}`

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Back + header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link
            href="/admin/bookings"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors mb-3"
          >
            <ArrowLeft className="h-4 w-4" />
            All Bookings
          </Link>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-bold text-white">#{ref}</h1>
            <BookingStatusBadge status={booking.status} />
          </div>
          <p className="text-sm text-white/40 mt-1">
            Submitted {formatCreatedAt(booking.created_at)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left — booking details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Customer */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">
              Customer
            </h2>
            <div className="space-y-3">
              <div>
                <p className="text-lg font-bold text-white">{booking.full_name}</p>
              </div>
              <a
                href={`tel:${booking.phone}`}
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-gold-400 shrink-0" />
                {booking.phone}
              </a>
              <a
                href={`mailto:${booking.email}`}
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-gold-400 shrink-0" />
                {booking.email}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  {[booking.address, booking.city, booking.postcode].filter(Boolean).join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* Service + vehicle */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">
              Service Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-500/10 shrink-0">
                  <DollarSign className="h-4 w-4 text-gold-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-medium mb-0.5">Service</p>
                  <p className="text-sm font-semibold text-white">{formatService(booking.service)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-500/10 shrink-0">
                  <Car className="h-4 w-4 text-gold-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-medium mb-0.5">Vehicle</p>
                  <p className="text-sm font-semibold text-white">{booking.vehicle_type}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-500/10 shrink-0">
                  <Calendar className="h-4 w-4 text-gold-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-medium mb-0.5">Date</p>
                  <p className="text-sm font-semibold text-white">{formatDate(booking.booking_date)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-500/10 shrink-0">
                  <Clock className="h-4 w-4 text-gold-400" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-medium mb-0.5">Time</p>
                  <p className="text-sm font-semibold text-white">{formatTime(booking.booking_time)}</p>
                </div>
              </div>
            </div>

            {booking.price_estimate && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-white/40 font-medium mb-1">Price Estimate</p>
                <p className="text-xl font-black text-gradient-gold">{booking.price_estimate}</p>
                <p className="text-xs text-white/30 mt-0.5">Confirmed after free vehicle inspection</p>
              </div>
            )}
          </div>

          {/* Notes */}
          {booking.notes && (
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-4 w-4 text-gold-400" />
                <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider">
                  Customer Notes
                </h2>
              </div>
              <p className="text-sm text-white/70 leading-relaxed whitespace-pre-wrap">
                {booking.notes}
              </p>
            </div>
          )}
        </div>

        {/* Right — actions */}
        <div className="space-y-4">
          {/* Contact shortcuts */}
          <div className="glass-card rounded-2xl p-5">
            <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">
              Contact Customer
            </h2>
            <div className="space-y-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#20bd5a] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${booking.phone}`}
                className="flex items-center justify-center gap-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/80 hover:text-white hover:border-white/20 transition-all"
              >
                Call {booking.phone}
              </a>
              <a
                href={`mailto:${booking.email}`}
                className="flex items-center justify-center gap-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/80 hover:text-white hover:border-white/20 transition-all"
              >
                Email
              </a>
            </div>
          </div>

          {/* Status + delete */}
          <div className="glass-card rounded-2xl p-5">
            <BookingDetailActions bookingId={booking.id} currentStatus={booking.status} />
          </div>

          {/* Booking ID */}
          <div className="glass-card rounded-2xl p-5">
            <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
              Booking Reference
            </p>
            <p className="font-mono text-sm font-bold text-white/80 break-all">{booking.id}</p>
            <p className="text-xs text-white/30 mt-1">Last updated {formatCreatedAt(booking.updated_at)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

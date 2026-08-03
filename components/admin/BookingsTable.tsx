import Link from 'next/link'
import { Calendar } from 'lucide-react'
import type { Booking } from '@/types/booking'
import { BookingStatusBadge } from '@/components/admin/BookingStatusBadge'
import { BookingActions } from '@/components/admin/BookingActions'

interface BookingsTableProps {
  bookings: Booking[]
}

function formatDateShort(dateStr: string): string {
  if (!dateStr) return '—'
  try {
    return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-AE', {
      day: 'numeric',
      month: 'short',
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
    ppf: 'PPF',
    'graphene-coating': 'Graphene Coating',
    'paint-correction': 'Paint Correction',
    'interior-detailing': 'Interior Detailing',
    'exterior-detailing': 'Exterior Detailing',
    'window-tinting': 'Window Tinting',
  }
  return map[slug] ?? slug
}

export function BookingsTable({ bookings }: BookingsTableProps) {
  if (bookings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Calendar className="h-12 w-12 text-white/20 mb-4" />
        <p className="text-white/40 font-medium">No bookings found</p>
        <p className="text-white/25 text-sm mt-1">Bookings will appear here once customers submit the form.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              {['Reference', 'Customer', 'Service', 'Vehicle', 'Date & Time', 'Status', ''].map(
                (col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-left text-xs font-semibold text-white/40 uppercase tracking-wider"
                  >
                    {col}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="hover:bg-white/[0.02] transition-colors"
              >
                {/* Reference */}
                <td className="px-4 py-3">
                  <Link
                    href={`/admin/bookings/${booking.id}`}
                    className="font-mono text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    #{booking.id.slice(0, 8).toUpperCase()}
                  </Link>
                </td>

                {/* Customer */}
                <td className="px-4 py-3">
                  <div className="text-sm font-semibold text-white">{booking.full_name}</div>
                  <div className="text-xs text-white/40 mt-0.5">{booking.phone}</div>
                </td>

                {/* Service */}
                <td className="px-4 py-3">
                  <span className="text-sm text-white/80">{formatServiceName(booking.service)}</span>
                </td>

                {/* Vehicle */}
                <td className="px-4 py-3">
                  <span className="text-sm text-white/80">{booking.vehicle_type}</span>
                </td>

                {/* Date & Time */}
                <td className="px-4 py-3">
                  <div className="text-sm text-white/80">{formatDateShort(booking.booking_date)}</div>
                  <div className="text-xs text-white/40 mt-0.5">{formatTimeDisplay(booking.booking_time)}</div>
                </td>

                {/* Status */}
                <td className="px-4 py-3">
                  <BookingStatusBadge status={booking.status} />
                </td>

                {/* Actions */}
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/bookings/${booking.id}`}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/20 transition-all"
                    >
                      View
                    </Link>
                    <BookingActions bookingId={booking.id} currentStatus={booking.status} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card layout */}
      <div className="md:hidden space-y-3">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="glass-card rounded-xl p-4 space-y-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <Link
                  href={`/admin/bookings/${booking.id}`}
                  className="font-mono text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors mb-1 block"
                >
                  #{booking.id.slice(0, 8).toUpperCase()}
                </Link>
                <div className="text-sm font-semibold text-white">{booking.full_name}</div>
                <div className="text-xs text-white/40">{booking.phone}</div>
              </div>
              <div className="flex items-center gap-2">
                <BookingStatusBadge status={booking.status} />
                <BookingActions bookingId={booking.id} currentStatus={booking.status} />
              </div>
            </div>
            <Link
              href={`/admin/bookings/${booking.id}`}
              className="flex items-center justify-center w-full rounded-xl border border-white/10 bg-white/5 py-2 text-xs font-semibold text-white/60 hover:text-white hover:border-white/20 transition-all"
            >
              View Full Details
            </Link>

            <div className="border-t border-white/5 pt-3 grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-white/40">Service</span>
                <p className="text-white font-medium mt-0.5">{formatServiceName(booking.service)}</p>
              </div>
              <div>
                <span className="text-white/40">Vehicle</span>
                <p className="text-white font-medium mt-0.5">{booking.vehicle_type}</p>
              </div>
              <div>
                <span className="text-white/40">Date</span>
                <p className="text-white font-medium mt-0.5">{formatDateShort(booking.booking_date)}</p>
              </div>
              <div>
                <span className="text-white/40">Time</span>
                <p className="text-white font-medium mt-0.5">{formatTimeDisplay(booking.booking_time)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

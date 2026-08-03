'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle2, XCircle, Clock, Trash2, Loader2 } from 'lucide-react'
import { updateBookingStatus, deleteBooking } from '@/actions/admin'
import type { BookingStatus } from '@/types/booking'

interface Props {
  bookingId: string
  currentStatus: BookingStatus
}

const STATUS_OPTIONS: { value: BookingStatus; label: string; icon: React.ReactNode; className: string }[] = [
  {
    value: 'pending',
    label: 'Pending',
    icon: <Clock className="h-4 w-4" />,
    className: 'border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20',
  },
  {
    value: 'confirmed',
    label: 'Confirmed',
    icon: <CheckCircle2 className="h-4 w-4" />,
    className: 'border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20',
  },
  {
    value: 'completed',
    label: 'Completed',
    icon: <CheckCircle2 className="h-4 w-4" />,
    className: 'border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20',
  },
  {
    value: 'cancelled',
    label: 'Cancelled',
    icon: <XCircle className="h-4 w-4" />,
    className: 'border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20',
  },
]

export function BookingDetailActions({ bookingId, currentStatus }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState('')
  const [confirmDelete, setConfirmDelete] = useState(false)

  function handleStatusChange(status: BookingStatus) {
    if (status === currentStatus) return
    setError('')
    startTransition(async () => {
      const result = await updateBookingStatus(bookingId, status)
      if (!result.success) setError(result.error ?? 'Failed to update status')
      else router.refresh()
    })
  }

  function handleDelete() {
    if (!confirmDelete) {
      setConfirmDelete(true)
      return
    }
    setError('')
    startTransition(async () => {
      const result = await deleteBooking(bookingId)
      if (!result.success) {
        setError(result.error ?? 'Failed to delete booking')
        setConfirmDelete(false)
      } else {
        router.push('/admin/bookings')
      }
    })
  }

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
          Update Status
        </p>
        <div className="grid grid-cols-2 gap-2">
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleStatusChange(opt.value)}
              disabled={isPending || opt.value === currentStatus}
              className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${opt.className} ${opt.value === currentStatus ? 'ring-2 ring-offset-1 ring-offset-dark-900' : ''}`}
            >
              {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : opt.icon}
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <p className="text-xs text-red-400 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2">
          {error}
        </p>
      )}

      <div className="pt-2 border-t border-white/10">
        <button
          onClick={handleDelete}
          disabled={isPending}
          className="flex items-center justify-center gap-2 w-full rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-2.5 text-sm font-semibold text-red-400 hover:bg-red-500/15 transition-all disabled:opacity-50"
        >
          <Trash2 className="h-4 w-4" />
          {confirmDelete ? 'Tap again to confirm delete' : 'Delete Booking'}
        </button>
        {confirmDelete && (
          <button
            onClick={() => setConfirmDelete(false)}
            className="w-full text-center text-xs text-white/40 hover:text-white/60 mt-2 transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  )
}

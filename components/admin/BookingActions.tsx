'use client'

import { useTransition } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { MoreHorizontal, CheckCircle, XCircle, Star, Trash2, Loader2 } from 'lucide-react'
import { updateBookingStatus, deleteBooking } from '@/actions/admin'
import { cn } from '@/lib/utils'
import type { BookingStatus } from '@/types/booking'

interface BookingActionsProps {
  bookingId: string
  currentStatus: BookingStatus
}

export function BookingActions({ bookingId, currentStatus }: BookingActionsProps) {
  const [isPending, startTransition] = useTransition()

  function handleStatusUpdate(status: BookingStatus) {
    startTransition(async () => {
      await updateBookingStatus(bookingId, status)
    })
  }

  function handleDelete() {
    if (
      typeof window !== 'undefined' &&
      !window.confirm('Are you sure you want to delete this booking? This cannot be undone.')
    ) {
      return
    }
    startTransition(async () => {
      await deleteBooking(bookingId)
    })
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={cn(
            'flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all',
            isPending && 'opacity-50 cursor-not-allowed'
          )}
          disabled={isPending}
          aria-label="Booking actions"
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <MoreHorizontal className="h-4 w-4" />
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={4}
          className="z-50 min-w-[160px] rounded-xl border border-white/10 bg-dark-900 shadow-xl p-1 animate-in fade-in-0 zoom-in-95 duration-150"
        >
          {currentStatus !== 'confirmed' && (
            <DropdownMenu.Item
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-blue-400 hover:bg-blue-500/10 cursor-pointer outline-none transition-colors"
              onSelect={() => handleStatusUpdate('confirmed')}
            >
              <CheckCircle className="h-4 w-4" />
              Confirm
            </DropdownMenu.Item>
          )}

          {currentStatus !== 'completed' && (
            <DropdownMenu.Item
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-green-400 hover:bg-green-500/10 cursor-pointer outline-none transition-colors"
              onSelect={() => handleStatusUpdate('completed')}
            >
              <Star className="h-4 w-4" />
              Mark Complete
            </DropdownMenu.Item>
          )}

          {currentStatus !== 'cancelled' && (
            <DropdownMenu.Item
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-amber-400 hover:bg-amber-500/10 cursor-pointer outline-none transition-colors"
              onSelect={() => handleStatusUpdate('cancelled')}
            >
              <XCircle className="h-4 w-4" />
              Cancel
            </DropdownMenu.Item>
          )}

          <DropdownMenu.Separator className="my-1 border-t border-white/10" />

          <DropdownMenu.Item
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 cursor-pointer outline-none transition-colors"
            onSelect={handleDelete}
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

'use server'

import { createClient } from '@/lib/supabase/server'
import { bookingSchema } from '@/lib/validations/booking'
import {
  sendBookingConfirmationToCustomer,
  sendBookingNotificationToBusiness,
} from '@/lib/email'

export async function submitBooking(
  data: unknown
): Promise<{ success: boolean; bookingId?: string; error?: string }> {
  const parsed = bookingSchema.safeParse(data)

  if (!parsed.success) {
    return { success: false, error: 'Please check all required fields.' }
  }

  const validated = parsed.data
  const supabase = await createClient()

  const { data: inserted, error } = await supabase
    .from('bookings')
    .insert({
      full_name: validated.full_name,
      phone: validated.phone,
      email: validated.email,
      service: validated.service,
      vehicle_type: 'TBD',
      booking_date: 'TBD',
      booking_time: 'TBD',
      city: validated.city,
      notes: validated.notes ?? null,
      status: 'pending',
    })
    .select('id')
    .single()

  if (error || !inserted) {
    console.error('[Booking] Supabase insert error:', error)
    return {
      success: false,
      error: 'Failed to save booking. Please try WhatsApp instead.',
    }
  }

  const bookingId = inserted.id as string
  const fullBooking = { ...validated, id: bookingId, price_estimate: null }

  Promise.all([
    sendBookingConfirmationToCustomer(fullBooking),
    sendBookingNotificationToBusiness(fullBooking),
  ]).catch((err) => console.error('[Booking] Email send error:', err))

  return { success: true, bookingId }
}

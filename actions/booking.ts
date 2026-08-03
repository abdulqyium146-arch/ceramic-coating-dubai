'use server'

import { createClient } from '@/lib/supabase/server'
import { bookingSchema } from '@/lib/validations/booking'
import {
  sendBookingConfirmationToCustomer,
  sendBookingNotificationToBusiness,
} from '@/lib/email'

type PriceRange = [number, number]

const SERVICE_PRICE_MAP: Record<string, PriceRange> = {
  'ceramic-coating': [1500, 8500],
  ppf: [2500, 15000],
  'graphene-coating': [2500, 6000],
  'paint-correction': [800, 3000],
  'interior-detailing': [400, 1500],
  'exterior-detailing': [250, 700],
  'window-tinting': [800, 3000],
}

function computePriceEstimate(service: string, vehicleType: string): string {
  const baseRange = SERVICE_PRICE_MAP[service] ?? [500, 5000]
  let [min, max] = baseRange

  const vt = vehicleType.toLowerCase()
  if (vt.includes('supercar') || vt.includes('exotic')) {
    min = Math.round(min * 1.5)
    max = Math.round(max * 1.5)
  } else if (vt.includes('suv') || vt.includes('pickup') || vt.includes('van')) {
    min = Math.round(min * 1.2)
    max = Math.round(max * 1.2)
  }

  const fmt = (n: number) => n.toLocaleString('en-AE')
  return `AED ${fmt(min)} – AED ${fmt(max)}`
}

export async function submitBooking(
  data: unknown
): Promise<{ success: boolean; bookingId?: string; error?: string }> {
  const parsed = bookingSchema.safeParse(data)

  if (!parsed.success) {
    return { success: false, error: 'Please check all required fields.' }
  }

  const validated = parsed.data
  const supabase = await createClient()

  const price_estimate = computePriceEstimate(validated.service, validated.vehicle_type)

  const { data: inserted, error } = await supabase
    .from('bookings')
    .insert({
      full_name: validated.full_name,
      phone: validated.phone,
      email: validated.email,
      service: validated.service,
      vehicle_type: validated.vehicle_type,
      booking_date: validated.booking_date,
      booking_time: validated.booking_time,
      address: validated.address ?? null,
      city: validated.city,
      postcode: validated.postcode ?? null,
      notes: validated.notes ?? null,
      price_estimate,
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
  const fullBooking = { ...validated, id: bookingId, price_estimate }

  // Fire emails non-blocking — don't let email failures block the user
  Promise.all([
    sendBookingConfirmationToCustomer(fullBooking),
    sendBookingNotificationToBusiness(fullBooking),
  ]).catch((err) => console.error('[Booking] Email send error:', err))

  return { success: true, bookingId }
}

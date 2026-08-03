'use server'

import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'
import { sendBookingNotificationToBusiness } from '@/lib/email'

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().optional(),
  car: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
})

export async function submitContactForm(
  data: unknown
): Promise<{ success: boolean; error?: string }> {
  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  const v = parsed.data
  const supabase = await createClient()

  const { data: inserted, error } = await supabase
    .from('bookings')
    .insert({
      full_name: v.name,
      phone: v.phone,
      email: v.email || '',
      service: v.service || 'enquiry',
      vehicle_type: v.car || 'Not specified',
      booking_date: 'TBD',
      booking_time: 'TBD',
      city: 'TBD',
      notes: v.message || null,
      status: 'pending',
    })
    .select('id')
    .single()

  if (error || !inserted) {
    console.error('[Contact] Supabase insert error:', error)
    return { success: false, error: 'Failed to save. Please try WhatsApp instead.' }
  }

  // Notify business — non-blocking
  sendBookingNotificationToBusiness({
    id: inserted.id as string,
    full_name: v.name,
    phone: v.phone,
    email: v.email || '',
    service: v.service || 'enquiry',
    city: 'Contact form',
    notes: [v.car ? `Car: ${v.car}` : '', v.message || ''].filter(Boolean).join('\n') || null,
  }).catch((err) => console.error('[Contact] Email error:', err))

  return { success: true }
}

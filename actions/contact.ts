'use server'

import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'
import { sendBookingNotificationToBusiness } from '@/lib/email'

const contactSchema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z.string().min(7, 'Phone required'),
  email: z.string().optional().nullable(),
  car: z.string().optional().nullable(),
  service: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
})

export async function submitContactForm(
  data: unknown
): Promise<{ success: boolean; error?: string }> {
  console.log('[Contact] submitContactForm called', JSON.stringify(data))

  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    console.error('[Contact] Zod validation failed:', parsed.error.flatten())
    return { success: false, error: 'Please fill in all required fields.' }
  }

  const v = parsed.data
  console.log('[Contact] Validated data:', v)

  let supabase
  try {
    supabase = await createClient()
  } catch (err) {
    console.error('[Contact] Failed to create Supabase client:', err)
    return { success: false, error: 'Server error. Please try WhatsApp instead.' }
  }

  const { data: inserted, error } = await supabase
    .from('bookings')
    .insert({
      full_name: v.name,
      phone: v.phone,
      email: v.email ?? '',
      service: v.service ?? 'enquiry',
      vehicle_type: v.car ?? 'Not specified',
      booking_date: 'TBD',
      booking_time: 'TBD',
      city: 'Contact Form',
      notes: [v.car ? `Car: ${v.car}` : null, v.message ?? null]
        .filter(Boolean)
        .join('\n') || null,
      status: 'pending',
    })
    .select('id')
    .single()

  if (error || !inserted) {
    console.error('[Contact] Supabase insert error:', JSON.stringify(error))
    return {
      success: false,
      error: `Failed to save: ${error?.message ?? 'unknown error'}. Please try WhatsApp instead.`,
    }
  }

  console.log('[Contact] Saved successfully, id:', inserted.id)

  void sendBookingNotificationToBusiness({
    id: inserted.id as string,
    full_name: v.name,
    phone: v.phone,
    email: v.email ?? '',
    service: v.service ?? 'enquiry',
    city: 'Contact Form',
    notes: [v.car ? `Car: ${v.car}` : null, v.message ?? null]
      .filter(Boolean)
      .join('\n') || null,
  }).catch((err) => console.error('[Contact] Email error:', err))

  return { success: true }
}

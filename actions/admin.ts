'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import type { BookingStatus } from '@/types/booking'

export async function updateBookingStatus(
  id: string,
  status: BookingStatus
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient()

  const { error } = await supabase
    .from('bookings')
    .update({ status })
    .eq('id', id)

  if (error) {
    console.error('[Admin] updateBookingStatus error:', error)
    return { success: false, error: 'Failed to update booking status.' }
  }

  revalidatePath('/admin/bookings')
  revalidatePath(`/admin/bookings/${id}`)
  return { success: true }
}

export async function deleteBooking(
  id: string
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient()

  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('[Admin] deleteBooking error:', error)
    return { success: false, error: 'Failed to delete booking.' }
  }

  revalidatePath('/admin/bookings')
  return { success: true }
}

export async function adminSignIn(
  email: string,
  password: string
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true }
}

export async function adminSignOut(): Promise<void> {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/admin/login')
}

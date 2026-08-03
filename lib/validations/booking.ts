import { z } from 'zod'

export const bookingSchema = z.object({
  full_name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  service: z.string().min(1, 'Please select a service'),
  city: z.string().min(2, 'Please enter your location'),
  notes: z.string().optional(),
})

export type BookingInput = z.infer<typeof bookingSchema>

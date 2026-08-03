import { z } from 'zod'

export const bookingSchema = z.object({
  full_name: z.string().min(2, 'Full name must be at least 2 characters'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  vehicle_type: z.string().min(1, 'Please select your vehicle type'),
  booking_date: z.string().min(1, 'Please select a date'),
  booking_time: z.string().min(1, 'Please select a time'),
  address: z.string().optional(),
  city: z.string().min(2, 'Please enter your city'),
  postcode: z.string().optional(),
  notes: z.string().optional(),
})

export type BookingInput = z.infer<typeof bookingSchema>

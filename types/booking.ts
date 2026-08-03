export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled'

export interface Booking {
  id: string
  full_name: string
  phone: string
  email: string
  service: string
  vehicle_type: string
  booking_date: string
  booking_time: string
  address?: string | null
  city: string
  postcode?: string | null
  notes?: string | null
  price_estimate?: string | null
  status: BookingStatus
  created_at: string
  updated_at: string
}

export type BookingFormData = Omit<Booking, 'id' | 'status' | 'created_at' | 'updated_at'>

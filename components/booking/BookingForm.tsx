'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { bookingSchema, type BookingInput } from '@/lib/validations/booking'
import { submitBooking } from '@/actions/booking'
import { trackBooking, trackGenerateLead } from '@/lib/analytics'
import { StepIndicator } from '@/components/booking/StepIndicator'
import { ServiceStep } from '@/components/booking/ServiceStep'
import { ScheduleStep } from '@/components/booking/ScheduleStep'
import { ContactStep } from '@/components/booking/ContactStep'
import { ReviewStep } from '@/components/booking/ReviewStep'
import { BookingSuccess } from '@/components/booking/BookingSuccess'

const STEPS = ['Service', 'Schedule', 'Confirm']

const STEP_FIELDS: Record<number, (keyof BookingInput)[]> = {
  1: ['service', 'vehicle_type'],
  2: ['booking_date', 'booking_time'],
  3: ['full_name', 'phone', 'email', 'city'],
}

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

function computeClientPriceEstimate(service: string, vehicleType: string): string {
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

export function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [bookingId, setBookingId] = useState('')
  const [serverError, setServerError] = useState('')
  const [needsPickup, setNeedsPickup] = useState(false)

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      full_name: '',
      phone: '',
      email: '',
      service: '',
      vehicle_type: '',
      booking_date: '',
      booking_time: '',
      address: '',
      city: '',
      postcode: '',
      notes: '',
    },
    mode: 'onBlur',
  })

  // Watch all values for live preview
  const formValues = watch()

  const priceEstimate = formValues.service && formValues.vehicle_type
    ? computeClientPriceEstimate(formValues.service, formValues.vehicle_type)
    : 'AED — '

  async function handleNext() {
    const fields = STEP_FIELDS[currentStep] ?? []
    const valid = await trigger(fields)
    if (valid) {
      setCurrentStep((s) => Math.min(s + 1, 3))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function handleBack() {
    setCurrentStep((s) => Math.max(s - 1, 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function onSubmit(data: BookingInput) {
    setIsSubmitting(true)
    setServerError('')

    try {
      const result = await submitBooking(data)

      if (result.success && result.bookingId) {
        trackBooking()
        trackGenerateLead(data.service, 'Dubai')
        setBookingId(result.bookingId)
        setSubmitted(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setServerError(result.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setServerError('An unexpected error occurred. Please try WhatsApp instead.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <BookingSuccess
        bookingId={bookingId}
        service={formValues.service}
        date={formValues.booking_date}
        time={formValues.booking_time}
        name={formValues.full_name}
      />
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <StepIndicator currentStep={currentStep} steps={STEPS} />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Hidden registered fields for react-hook-form */}
        <input type="hidden" {...register('service')} />
        <input type="hidden" {...register('vehicle_type')} />
        <input type="hidden" {...register('booking_date')} />
        <input type="hidden" {...register('booking_time')} />
        <input type="hidden" {...register('notes')} />
        <input type="hidden" {...register('address')} />
        <input type="hidden" {...register('postcode')} />

        <div className="glass-card rounded-2xl p-6 md:p-8">
          {/* Step 1: Service */}
          {currentStep === 1 && (
            <ServiceStep
              value={formValues.service}
              onChange={(v) => setValue('service', v, { shouldValidate: true })}
              vehicleType={formValues.vehicle_type}
              onVehicleChange={(v) => setValue('vehicle_type', v, { shouldValidate: true })}
              error={errors.service?.message}
              vehicleError={errors.vehicle_type?.message}
            />
          )}

          {/* Step 2: Schedule */}
          {currentStep === 2 && (
            <ScheduleStep
              date={formValues.booking_date}
              time={formValues.booking_time}
              notes={formValues.notes ?? ''}
              onDateChange={(v) => setValue('booking_date', v, { shouldValidate: true })}
              onTimeChange={(v) => setValue('booking_time', v, { shouldValidate: true })}
              onNotesChange={(v) => setValue('notes', v)}
              dateError={errors.booking_date?.message}
              timeError={errors.booking_time?.message}
            />
          )}

          {/* Step 3: Contact + Review */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <ContactStep
                fullName={formValues.full_name}
                phone={formValues.phone}
                email={formValues.email}
                address={formValues.address ?? ''}
                city={formValues.city}
                postcode={formValues.postcode ?? ''}
                onFullNameChange={(v) => setValue('full_name', v, { shouldValidate: true })}
                onPhoneChange={(v) => setValue('phone', v, { shouldValidate: true })}
                onEmailChange={(v) => setValue('email', v, { shouldValidate: true })}
                onAddressChange={(v) => setValue('address', v)}
                onCityChange={(v) => setValue('city', v, { shouldValidate: true })}
                onPostcodeChange={(v) => setValue('postcode', v)}
                errors={{
                  full_name: errors.full_name?.message,
                  phone: errors.phone?.message,
                  email: errors.email?.message,
                  address: errors.address?.message,
                  city: errors.city?.message,
                  postcode: errors.postcode?.message,
                }}
                needsPickup={needsPickup}
                onNeedsPickupChange={(v) => {
                  setNeedsPickup(v)
                  if (!v) {
                    setValue('address', '')
                    setValue('postcode', '')
                  }
                }}
              />

              {/* Review always visible below contact on step 3 */}
              <div>
                <h3 className="text-base font-semibold text-white mb-4">Review Your Booking</h3>
                <ReviewStep
                  formData={formValues}
                  priceEstimate={priceEstimate}
                  isSubmitting={isSubmitting}
                />
              </div>
            </div>
          )}

          {/* Server error */}
          {serverError && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
              <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-300">{serverError}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 gap-4">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="btn-secondary flex items-center gap-2 px-5 py-3 rounded-xl font-semibold"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < 3 && (
            <button
              type="button"
              onClick={handleNext}
              className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl font-bold ml-auto"
            >
              Next Step
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

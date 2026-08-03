'use client'

import { Shield, Layers, Hexagon, Sparkles, Car, Zap, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceOption {
  slug: string
  title: string
  price: string
  icon: React.ReactNode
  desc: string
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    slug: 'ceramic-coating',
    title: 'Ceramic Coating',
    price: 'From AED 1,500',
    icon: <Shield className="h-6 w-6" />,
    desc: '2–10 year protection',
  },
  {
    slug: 'ppf',
    title: 'Paint Protection Film',
    price: 'From AED 2,500',
    icon: <Layers className="h-6 w-6" />,
    desc: 'Self-healing physical shield',
  },
  {
    slug: 'graphene-coating',
    title: 'Graphene Coating',
    price: 'From AED 2,500',
    icon: <Hexagon className="h-6 w-6" />,
    desc: 'Anti-static dust repellent',
  },
  {
    slug: 'paint-correction',
    title: 'Paint Correction',
    price: 'From AED 800',
    icon: <Sparkles className="h-6 w-6" />,
    desc: 'Remove swirls & scratches',
  },
  {
    slug: 'interior-detailing',
    title: 'Interior Detailing',
    price: 'From AED 400',
    icon: <Car className="h-6 w-6" />,
    desc: 'Deep cabin transformation',
  },
  {
    slug: 'exterior-detailing',
    title: 'Exterior Detailing',
    price: 'From AED 250',
    icon: <Zap className="h-6 w-6" />,
    desc: 'Decontamination & protection',
  },
  {
    slug: 'window-tinting',
    title: 'Window Tinting',
    price: 'From AED 800',
    icon: <Sun className="h-6 w-6" />,
    desc: '99% UV rejection',
  },
]

const VEHICLE_TYPES = [
  'Sedan',
  'Hatchback',
  'SUV / 4x4',
  'Coupe',
  'Convertible',
  'Pickup Truck',
  'Van',
  'Supercar / Exotic',
]

interface ServiceStepProps {
  value: string
  onChange: (v: string) => void
  vehicleType: string
  onVehicleChange: (v: string) => void
  error?: string
  vehicleError?: string
}

export function ServiceStep({
  value,
  onChange,
  vehicleType,
  onVehicleChange,
  error,
  vehicleError,
}: ServiceStepProps) {
  return (
    <div className="space-y-8">
      {/* Service selection */}
      <div>
        <h3 className="text-base font-semibold text-white mb-1">Select Your Service</h3>
        <p className="text-sm text-white/50 mb-4">Choose the service you&apos;d like to book.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SERVICE_OPTIONS.map((service) => {
            const isSelected = value === service.slug
            return (
              <button
                key={service.slug}
                type="button"
                onClick={() => onChange(service.slug)}
                className={cn(
                  'relative flex items-start gap-4 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer',
                  isSelected
                    ? 'border-gold-500/50 bg-gold-500/5 shadow-[0_0_20px_rgba(245,158,11,0.08)]'
                    : 'border-white/10 bg-white/5 hover:border-gold-500/30 hover:bg-white/[0.07]'
                )}
              >
                {/* Selection indicator */}
                <div
                  className={cn(
                    'absolute top-3 right-3 w-4 h-4 rounded-full border-2 transition-all',
                    isSelected
                      ? 'border-gold-500 bg-gold-500'
                      : 'border-white/20'
                  )}
                >
                  {isSelected && (
                    <div className="absolute inset-[3px] rounded-full bg-dark-950" />
                  )}
                </div>

                {/* Icon */}
                <div
                  className={cn(
                    'flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center transition-colors',
                    isSelected
                      ? 'bg-gold-500/15 text-gold-400'
                      : 'bg-white/5 text-white/50'
                  )}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pr-6">
                  <div className={cn('font-semibold text-sm', isSelected ? 'text-white' : 'text-white/80')}>
                    {service.title}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5">{service.desc}</div>
                  <div className={cn('text-xs font-bold mt-1.5', isSelected ? 'text-gold-400' : 'text-gold-500/70')}>
                    {service.price}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
        {error && (
          <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
            <span>⚠</span> {error}
          </p>
        )}
      </div>

      {/* Vehicle type */}
      <div>
        <h3 className="text-base font-semibold text-white mb-1">Vehicle Type</h3>
        <p className="text-sm text-white/50 mb-4">Select the type of vehicle you&apos;re bringing in.</p>
        <div className="flex flex-wrap gap-2">
          {VEHICLE_TYPES.map((vt) => {
            const isSelected = vehicleType === vt
            return (
              <button
                key={vt}
                type="button"
                onClick={() => onVehicleChange(vt)}
                className={cn(
                  'px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 cursor-pointer',
                  isSelected
                    ? 'border-gold-500/50 bg-gold-500/10 text-gold-400'
                    : 'border-white/10 bg-white/5 text-white/60 hover:border-gold-500/30 hover:text-white/80'
                )}
              >
                {vt}
              </button>
            )
          })}
        </div>
        {vehicleError && (
          <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
            <span>⚠</span> {vehicleError}
          </p>
        )}
      </div>
    </div>
  )
}

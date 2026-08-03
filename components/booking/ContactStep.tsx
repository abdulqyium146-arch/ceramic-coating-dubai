'use client'

import { cn } from '@/lib/utils'

interface ContactStepProps {
  fullName: string
  phone: string
  email: string
  address: string
  city: string
  postcode: string
  onFullNameChange: (v: string) => void
  onPhoneChange: (v: string) => void
  onEmailChange: (v: string) => void
  onAddressChange: (v: string) => void
  onCityChange: (v: string) => void
  onPostcodeChange: (v: string) => void
  errors: {
    full_name?: string
    phone?: string
    email?: string
    address?: string
    city?: string
    postcode?: string
  }
  needsPickup: boolean
  onNeedsPickupChange: (v: boolean) => void
}

export function ContactStep({
  fullName,
  phone,
  email,
  address,
  city,
  postcode,
  onFullNameChange,
  onPhoneChange,
  onEmailChange,
  onAddressChange,
  onCityChange,
  onPostcodeChange,
  errors,
  needsPickup,
  onNeedsPickupChange,
}: ContactStepProps) {
  return (
    <div className="space-y-6">
      {/* Full Name */}
      <div>
        <label
          htmlFor="full_name"
          className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider"
        >
          Full Name <span className="text-gold-400">*</span>
        </label>
        <input
          id="full_name"
          type="text"
          value={fullName}
          onChange={(e) => onFullNameChange(e.target.value)}
          placeholder="Ahmed Al Mansouri"
          autoComplete="name"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
        />
        {errors.full_name && (
          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <span>⚠</span> {errors.full_name}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider"
        >
          Phone / WhatsApp <span className="text-gold-400">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="+971 55 123 4567"
          autoComplete="tel"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
        />
        {errors.phone && (
          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <span>⚠</span> {errors.phone}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider"
        >
          Email Address <span className="text-gold-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="ahmed@example.com"
          autoComplete="email"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <span>⚠</span> {errors.email}
          </p>
        )}
      </div>

      {/* City (always shown) */}
      <div>
        <label
          htmlFor="city"
          className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider"
        >
          City / Area <span className="text-gold-400">*</span>
        </label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          placeholder="Dubai Marina, JVC, Business Bay..."
          autoComplete="address-level2"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
        />
        {errors.city && (
          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <span>⚠</span> {errors.city}
          </p>
        )}
      </div>

      {/* Pickup toggle */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <button
          type="button"
          onClick={() => onNeedsPickupChange(!needsPickup)}
          className="flex items-center justify-between w-full cursor-pointer"
          aria-pressed={needsPickup}
        >
          <div className="text-left">
            <div className="text-sm font-semibold text-white">Need Vehicle Pickup?</div>
            <div className="text-xs text-white/40 mt-0.5">
              Free pickup &amp; delivery for orders over AED 3,000
            </div>
          </div>
          {/* Toggle switch */}
          <div
            className={cn(
              'relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0',
              needsPickup ? 'bg-gold-500' : 'bg-white/10'
            )}
          >
            <div
              className={cn(
                'absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200',
                needsPickup ? 'translate-x-6' : 'translate-x-1'
              )}
            />
          </div>
        </button>
      </div>

      {/* Address fields (shown when pickup is on) */}
      {needsPickup && (
        <div className="space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div>
            <label
              htmlFor="address"
              className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider"
            >
              Street Address
            </label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => onAddressChange(e.target.value)}
              placeholder="Apartment / Villa number, Street name"
              autoComplete="street-address"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
            />
            {errors.address && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <span>⚠</span> {errors.address}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="postcode"
              className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider"
            >
              Postcode / P.O. Box <span className="text-white/30">(optional)</span>
            </label>
            <input
              id="postcode"
              type="text"
              value={postcode}
              onChange={(e) => onPostcodeChange(e.target.value)}
              placeholder="e.g. 00000"
              autoComplete="postal-code"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
            />
          </div>
        </div>
      )}
    </div>
  )
}

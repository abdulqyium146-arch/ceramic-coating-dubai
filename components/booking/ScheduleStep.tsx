'use client'

import { cn } from '@/lib/utils'

const TIME_SLOTS = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
]

function formatTimeDisplay(time: string): string {
  const [hours, minutes] = time.split(':').map(Number)
  const period = hours >= 12 ? 'PM' : 'AM'
  const displayHour = hours % 12 || 12
  return `${displayHour}:${String(minutes).padStart(2, '0')} ${period}`
}

function getTodayISO(): string {
  return new Date().toISOString().split('T')[0]
}

interface ScheduleStepProps {
  date: string
  time: string
  notes: string
  onDateChange: (v: string) => void
  onTimeChange: (v: string) => void
  onNotesChange: (v: string) => void
  dateError?: string
  timeError?: string
}

export function ScheduleStep({
  date,
  time,
  notes,
  onDateChange,
  onTimeChange,
  onNotesChange,
  dateError,
  timeError,
}: ScheduleStepProps) {
  const today = getTodayISO()

  return (
    <div className="space-y-8">
      {/* Date picker */}
      <div>
        <label
          htmlFor="booking_date"
          className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider"
        >
          Preferred Date <span className="text-gold-400">*</span>
        </label>
        <input
          id="booking_date"
          type="date"
          value={date}
          min={today}
          onChange={(e) => onDateChange(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all [color-scheme:dark]"
        />
        <p className="mt-2 text-xs text-white/40">
          Mon–Thu: 8am–8pm&nbsp;&nbsp;|&nbsp;&nbsp;Fri: 2pm–8pm&nbsp;&nbsp;|&nbsp;&nbsp;Sat–Sun: 9am–6pm
        </p>
        {dateError && (
          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <span>⚠</span> {dateError}
          </p>
        )}
      </div>

      {/* Time slots */}
      <div>
        <label className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">
          Preferred Time <span className="text-gold-400">*</span>
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {TIME_SLOTS.map((slot) => {
            const isSelected = time === slot
            return (
              <button
                key={slot}
                type="button"
                onClick={() => onTimeChange(slot)}
                className={cn(
                  'px-3 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 cursor-pointer',
                  isSelected
                    ? 'border-gold-500 bg-gold-500 text-dark-950 font-bold shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                    : 'border-white/10 bg-white/5 text-white/70 hover:border-gold-500/30 hover:text-white'
                )}
              >
                {formatTimeDisplay(slot)}
              </button>
            )
          })}
        </div>
        {timeError && (
          <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
            <span>⚠</span> {timeError}
          </p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label
          htmlFor="notes"
          className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider"
        >
          Additional Notes <span className="text-white/30">(optional)</span>
        </label>
        <textarea
          id="notes"
          rows={3}
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          placeholder="E.g. My car has some existing swirl marks, please advise on paint correction first..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all resize-none"
        />
      </div>
    </div>
  )
}

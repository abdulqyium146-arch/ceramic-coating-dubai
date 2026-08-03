'use client'

import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StepIndicatorProps {
  currentStep: number
  steps: string[]
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="flex items-start justify-center w-full mb-8">
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const isCompleted = stepNumber < currentStep
        const isCurrent = stepNumber === currentStep
        const isFuture = stepNumber > currentStep

        return (
          <div key={step} className="flex items-start flex-1">
            {/* Step circle + label */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className={cn(
                  'w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300',
                  isCompleted &&
                    'bg-gold-500 border-gold-500 text-dark-950',
                  isCurrent &&
                    'bg-transparent border-gold-500 text-gold-400',
                  isFuture &&
                    'bg-transparent border-white/20 text-white/30'
                )}
              >
                {isCompleted ? (
                  <Check className="h-4 w-4 stroke-[3]" />
                ) : (
                  <span>{stepNumber}</span>
                )}
              </div>
              <span
                className={cn(
                  'mt-2 text-xs font-semibold tracking-wide text-center max-w-[80px] leading-tight',
                  isCompleted && 'text-gold-400',
                  isCurrent && 'text-white',
                  isFuture && 'text-white/30'
                )}
              >
                {step}
              </span>
            </div>

            {/* Connector line (not after last step) */}
            {index < steps.length - 1 && (
              <div className="flex-1 mt-4 mx-2">
                <div
                  className={cn(
                    'h-0.5 w-full transition-all duration-300',
                    isCompleted ? 'bg-gold-500' : 'bg-white/10'
                  )}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

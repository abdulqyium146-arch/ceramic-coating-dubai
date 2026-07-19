'use client'

import { Shield, Clock, Award, Users, Wrench, ThumbsUp } from 'lucide-react'

const REASONS = [
  {
    icon: Award,
    title: 'Certified Installers',
    description:
      'GYEON Certified, Xpel Authorized, and Ceramic Pro Certified. Only professionals touch your vehicle.',
  },
  {
    icon: Shield,
    title: 'Premium Products Only',
    description:
      'We use only professional-grade coatings and films from the world\'s leading manufacturers. No compromises.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description:
      'We respect your time. Every job is completed on schedule, with real-time updates throughout the process.',
  },
  {
    icon: Wrench,
    title: 'State-of-the-Art Studio',
    description:
      'Our climate-controlled Al Quoz studio is purpose-built for coating and PPF installation at the highest standard.',
  },
  {
    icon: Users,
    title: '2,400+ Cars Protected',
    description:
      'Trusted by Dubai\'s most discerning car owners — from daily drivers to Ferraris, Lamborghinis, and Rolls-Royces.',
  },
  {
    icon: ThumbsUp,
    title: '4.9-Star Google Rating',
    description:
      'Our results speak for themselves. 847 genuine Google reviews from real customers across Dubai and UAE.',
  },
]

export function WhyUs() {
  return (
    <section className="section-py relative bg-dark-900" aria-labelledby="why-us-heading">
      {/* Decorative divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading */}
          <div>
            <span className="badge-gold mb-4 inline-flex">Why Choose Us</span>
            <h2 id="why-us-heading" className="heading-lg mb-6">
              {"Dubai's Most Trusted"}
              <br />
              <span className="text-gradient-gold">Detailing Studio</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Since 2018, Ceramic My Car has been the benchmark for premium paint
              protection in Dubai. We combine factory-trained expertise, professional-grade
              products, and obsessive attention to detail to deliver results that exceed
              expectations — every single time.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {[
                'GYEON Certified',
                'Xpel Authorized',
                'Ceramic Pro Certified',
                'IDA Member',
                '6 Years in Dubai',
              ].map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center rounded-lg border border-gold-500/20 bg-gold-500/5 px-3 py-1.5 text-xs font-medium text-gold-400"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REASONS.map((reason) => {
              const Icon = reason.icon
              return (
                <div key={reason.title} className="glass-card p-5 hover:border-gold-500/20 transition-all duration-300">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{reason.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
    </section>
  )
}

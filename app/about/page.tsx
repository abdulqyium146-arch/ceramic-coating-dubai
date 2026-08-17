import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Award, Users, CheckCircle2 } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import { CTABanner } from '@/components/sections/CTABanner'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Car Ceramic Coating Services Dubai | Ceramic My Car Studio | Since 2018',
  description:
    "Dubai's most trusted car ceramic coating services studio since 2018. GYEON Certified, Xpel Authorized, Ceramic Pro Certified. 2,400+ cars protected. 4.9★ Google rating.",
  keywords: [
    'car ceramic coating Dubai studio',
    'about car ceramic coating Dubai',
    'best car ceramic coating Dubai',
    'GYEON certified car ceramic coating Dubai',
    'Xpel authorized Dubai',
    'certified car ceramic coating Dubai',
    'Ceramic My Car about',
  ],
}

const TEAM_MEMBERS = [
  {
    name: 'Mohammed Al Rashid',
    role: 'Founder & Lead Ceramic Coating Specialist',
    certifications: ['GYEON Certified', 'Ceramic Pro Certified', 'IDA Member'],
    experience: '10+ years',
  },
  {
    name: 'Khalid Hassan',
    role: 'PPF Installation Specialist',
    certifications: ['Xpel Certified', 'SunTek Authorized'],
    experience: '8 years',
  },
  {
    name: 'James Murray',
    role: 'Paint Correction & Detailing Specialist',
    certifications: ['IDA Certified', 'Rupes Certified'],
    experience: '7 years',
  },
]

const MILESTONES = [
  { year: '2018', event: 'Founded in Al Quoz, Dubai with a vision for professional-grade protection' },
  { year: '2019', event: 'Became GYEON Certified Installers — one of the first in Dubai' },
  { year: '2020', event: 'Xpel Authorized Dealer status achieved; launched PPF service' },
  { year: '2021', event: '1,000 cars protected milestone. Expanded studio to double capacity' },
  { year: '2022', event: 'Ceramic Pro Certified. Launched graphene coating service' },
  { year: '2023', event: '2,000 cars protected. Named #1 Detailing Studio by Dubai Car Community' },
  { year: '2024', event: '2,400+ cars protected. 847 Google reviews at 4.9★ average' },
]

export default function AboutPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'About', url: `${SITE_CONFIG.url}/about` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Header */}
      <section className="relative pt-32 pb-20 bg-dark-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_60%)]" />
        <div className="section-container relative">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">About</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-black font-display text-white mb-6">
              {"Dubai's"} Most Trusted{' '}
              <span className="text-gradient-gold">Detailing Studio</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Since 2018, Ceramic My Car has been the benchmark for premium paint protection
              in Dubai. Our obsession with perfection, professional-grade products, and
              certified expertise have made us the first choice for 2,400+ vehicle owners
              across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-py bg-dark-900">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Real studio map — shows Google our actual location on the About page */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/20"
                 style={{ height: '360px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac5a5ed97cd28ab9%3A0x6a3cc5ff15ccf54!2sCeramic%20My%20Car%20%7C%20Best%20Detailing%20Studio%20in%20Dubai!5e0!3m2!1sen!2s!4v1784538548445!5m2!1sen!2s"
                title="Ceramic My Car studio — Al Quoz, Dubai on Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <div>
              <h2 className="heading-md mb-6">
                Our <span className="text-gradient-gold">Story</span>
              </h2>
              <div className="space-y-4 text-white/70 text-sm leading-relaxed">
                <p>
                  Ceramic My Car was born from frustration. Our founder Mohammed spent years
                  watching his and his friends&apos; cars deteriorate under Dubai&apos;s brutal UV,
                  sand, and heat — despite regular washing and waxing. The answer wasn&apos;t
                  better car washes. It was professional-grade ceramic coating.
                </p>
                <p>
                  In 2018, after intensive training with GYEON in Europe and Ceramic Pro in the US,
                  Mohammed opened our Al Quoz studio with a simple mission: bring world-class
                  paint protection to Dubai&apos;s car owners, with the professionalism and
                  transparency the market was missing.
                </p>
                <p>
                  Six years and 2,400+ cars later, we&apos;ve grown into a full-service premium
                  detailing studio with an Xpel Authorized PPF installation bay, a state-of-the-art
                  paint correction suite, and a team of certified specialists. But our mission
                  remains exactly the same.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Our <span className="text-gradient-gold">Certifications</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              We hold the highest professional certifications in the ceramic coating and paint
              protection industry — so you know your car is in expert hands.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SITE_CONFIG.certifications.map((cert) => (
              <div key={cert} className="glass-card p-6 text-center hover:border-gold-500/30 transition-all">
                <Award className="h-8 w-8 text-gold-400 mx-auto mb-3" />
                <p className="text-sm font-bold text-white">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-py bg-dark-900">
        <div className="section-container max-w-3xl">
          <h2 className="heading-md text-center mb-12">
            Our <span className="text-gradient-gold">Journey</span>
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500 to-transparent" />
            <div className="space-y-8">
              {MILESTONES.map((milestone) => (
                <div key={milestone.year} className="flex items-start gap-6 pl-12 relative">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-gold text-xs font-black text-dark-950 shrink-0">
                    {milestone.year.slice(-2)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gold-400 mb-1">{milestone.year}</p>
                    <p className="text-sm text-white/70">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-py bg-dark-950">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Our <span className="text-gradient-gold">Team</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Every team member is professionally certified and passionate about delivering
              perfect results on every vehicle.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="glass-card p-6 text-center hover:border-gold-500/20 transition-all">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold text-xl font-black text-dark-950">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{member.name}</h3>
                <p className="text-xs text-gold-400 mb-1">{member.role}</p>
                <p className="text-xs text-white/40 mb-3">{member.experience} experience</p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {member.certifications.map((cert) => (
                    <span key={cert} className="text-2xs bg-white/5 border border-white/10 rounded-lg px-2 py-0.5 text-white/50">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Protect Your Car?"
        subtitle="Book your free paint inspection with Dubai's most trusted ceramic coating team."
      />
    </>
  )
}

'use client'

import Link from 'next/link'
import { Phone, ChevronDown, Shield, Star, Award } from 'lucide-react'
import { SITE_CONFIG, STATS } from '@/lib/constants'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-950"
      aria-label="Hero section"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(249,115,22,0.06)_0%,transparent_60%)]" />

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
          role="img"
          aria-label="Luxury car with ceramic coating"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-dark-950/60 to-dark-950" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-32 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-up">
          <span className="badge-gold">
            <Award className="h-3 w-3" />
            #1 Ceramic Coating Studio in Dubai
          </span>
        </div>

        {/* Main Heading — Entity & Semantic SEO optimized */}
        <h1 className="heading-xl font-display font-black mb-6 text-balance animate-fade-up [animation-delay:100ms]">
          <span className="text-white">Premium</span>{' '}
          <span className="text-gradient-gold">Ceramic Coating</span>
          <br />
          <span className="text-white">& Car Detailing</span>{' '}
          <span className="text-white/70">Dubai</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed mb-10 animate-fade-up [animation-delay:200ms]">
          Protect your vehicle with professional{' '}
          <strong className="text-white/90">nano-ceramic coating</strong>,{' '}
          <strong className="text-white/90">PPF</strong>,{' '}
          <strong className="text-white/90">graphene coating</strong>, and expert{' '}
          <strong className="text-white/90">paint protection</strong> in Dubai. Trusted by
          Ferrari, Lamborghini, and Rolls-Royce owners across the UAE.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up [animation-delay:300ms]">
          <Link href="/contact" className="btn-primary text-base px-8 py-4 rounded-2xl">
            Get Free Quote
          </Link>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi, I'd like to get a ceramic coating quote for my car`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base px-8 py-4 rounded-2xl"
          >
            WhatsApp Us
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="btn-ghost text-base px-6 py-4"
          >
            <Phone className="h-4 w-4 text-gold-400" />
            {SITE_CONFIG.phoneDisplay}
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16 animate-fade-up [animation-delay:400ms]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-white">
              {SITE_CONFIG.rating.value}
            </span>
            <span className="text-sm text-white/50">
              ({SITE_CONFIG.rating.count} Google Reviews)
            </span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Shield className="h-4 w-4 text-gold-400" />
            GYEON Certified Installer
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Shield className="h-4 w-4 text-gold-400" />
            Xpel Authorized Dealer
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-up [animation-delay:500ms]">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p className="text-2xl font-black text-gradient-gold mb-1">{stat.value}</p>
              <p className="text-xs font-medium text-white/50 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs font-medium uppercase tracking-widest text-white/30">
          Explore
        </span>
        <ChevronDown className="h-5 w-5 text-white/30" />
      </div>
    </section>
  )
}

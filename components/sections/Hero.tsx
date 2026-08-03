'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, ChevronDown, Shield, Star, Award } from 'lucide-react'
import { SITE_CONFIG, STATS } from '@/lib/constants'
import { trackPhoneClick, trackWhatsAppClick, trackQuoteRequest } from '@/lib/analytics'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-950"
      aria-label="Hero section"
    >
      {/* ── Background layers (bottom → top) ───────────────────────────── */}

      {/* 1. Base dark fill */}
      <div className="absolute inset-0 bg-dark-950" />

      {/* 2. BMW XM — dark teal luxury SUV in climate-controlled studio.
              Positioned right-of-centre so the left text zone stays near-black. */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/bmw-xm-ceramic-coating-dubai.webp"
          alt="BMW XM ceramic coating Dubai — Ceramic My Car premium studio Al Quoz"
          fill
          className="object-cover"
          style={{ opacity: 0.38, objectPosition: '68% center' }}
          priority
          quality={80}
          sizes="100vw"
        />
      </div>

      {/* 3. Porsche 718 Boxster — visible only on desktop, far-right edge only,
              adds colour depth and a second luxury marque to the composition. */}
      <div className="absolute inset-y-0 right-0 w-[45%] hidden lg:block">
        <Image
          src="/gallery/porsche-718-boxster-ceramic-coating-dubai.webp"
          alt=""
          fill
          className="object-cover object-left"
          style={{ opacity: 0.12 }}
          quality={60}
          sizes="45vw"
          aria-hidden="true"
        />
      </div>

      {/* 4. Directional gradients — protect text on left, fade bottom to dark */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-dark-950/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-transparent to-dark-950" />

      {/* 5. Gold atmosphere top + bottom-right warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_5%_0%,rgba(245,158,11,0.10)_0%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_90%_80%,rgba(249,115,22,0.06)_0%,transparent_100%)]" />

      {/* 6. Subtle gold grid — very low opacity texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,158,11,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.6) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* ──────────────────────────────────────────────────────────────────── */}

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
          <Link
            href="/contact"
            onClick={() => trackQuoteRequest('hero')}
            className="btn-primary text-base px-8 py-4 rounded-2xl"
          >
            Get Free Quote
          </Link>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi, I'd like to get a ceramic coating quote for my car`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick(SITE_CONFIG.whatsapp)}
            className="btn-secondary text-base px-8 py-4 rounded-2xl"
          >
            WhatsApp Us
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            onClick={() => trackPhoneClick(SITE_CONFIG.phone)}
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

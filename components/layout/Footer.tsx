import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Star } from 'lucide-react'
import { SITE_CONFIG, DUBAI_LOCATIONS } from '@/lib/constants'
import { SERVICES } from '@/content/services'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-dark-900" aria-label="Site footer">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold shadow-glow-gold">
                <span className="text-base font-black text-dark-950">C</span>
              </div>
              <div>
                <p className="font-bold text-white group-hover:text-gold-400 transition-colors">
                  Ceramic My Car
                </p>
                <p className="text-2xs font-medium text-white/40 uppercase tracking-widest">
                  Car Ceramic Coating Services · Dubai
                </p>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              {"Dubai's #1 car ceramic coating services studio. Nano ceramic coating, PPF, graphene & detailing. Trusted by 2,400+ car owners since 2018."}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">
                {SITE_CONFIG.rating.value} / 5
              </span>
              <span className="text-sm text-white/50">
                ({SITE_CONFIG.rating.count} Google reviews)
              </span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 hover:text-gold-400 hover:border-gold-500/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 hover:text-gold-400 hover:border-gold-500/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 hover:text-gold-400 hover:border-gold-500/30 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2" role="list">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2" role="list">
              {DUBAI_LOCATIONS.slice(0, 8).map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Ceramic Coating {loc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-sm text-gold-400 hover:text-gold-300 transition-colors">
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <Phone className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
                <address className="not-italic">
                  {SITE_CONFIG.address.street},<br />
                  {SITE_CONFIG.address.area},<br />
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}
                </address>
              </div>

              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                  Opening Hours
                </p>
                <div className="space-y-1 text-xs text-white/50">
                  <p>Mon–Thu: {SITE_CONFIG.hours.weekdays}</p>
                  <p>Friday: {SITE_CONFIG.hours.friday}</p>
                  <p>Sat–Sun: {SITE_CONFIG.hours.weekends}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Studio */}
      <div className="border-t border-white/5">
        <div className="section-container py-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-4 text-center">
            Partner Studio
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.latinkingdetailing.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-6 py-4 flex items-center gap-4 hover:border-gold-500/30 hover:bg-gold-500/5 transition-all group max-w-sm w-full"
              aria-label="Latin King Detailing — car detailing in Manchester, UK"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 group-hover:bg-gold-500/20 transition-colors font-black text-sm">
                LK
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white group-hover:text-gold-400 transition-colors">
                  Latin King Detailing
                </p>
                <p className="text-xs text-white/50 truncate">
                  Urmston, Manchester, UK
                </p>
              </div>
              <div className="ml-auto flex items-center gap-1 shrink-0">
                <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                <span className="text-xs font-semibold text-white/70">5.0</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {currentYear} Ceramic My Car — Car Ceramic Coating Services Dubai. All rights reserved. Al Quoz, Dubai, UAE.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white/80 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-xs text-white/40 hover:text-white/80 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { trackPhoneClick, trackWhatsAppClick, trackQuoteRequest } from '@/lib/analytics'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-white/10 bg-dark-950/90 backdrop-blur-xl shadow-luxury'
          : 'bg-transparent'
      )}
    >
      <nav className="section-container" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Car Ceramic Coating Services Dubai — Ceramic My Car Home">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-gold shadow-glow-gold">
              <span className="text-sm font-black text-dark-950">C</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-none text-white group-hover:text-gold-400 transition-colors">
                Ceramic My Car
              </p>
              <p className="text-2xs font-medium text-white/50 uppercase tracking-widest">
                Car Ceramic Coating Services · Dubai
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative">
                {link.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                      {link.label}
                      <ChevronDown
                        className={cn('h-3.5 w-3.5 transition-transform duration-200', openDropdown === link.label && 'rotate-180')}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64">
                        <div className="glass-card p-2 shadow-luxury">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-lg px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/8 transition-all"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-all block"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              onClick={() => trackPhoneClick(SITE_CONFIG.phone)}
              className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              aria-label={`Call ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="h-4 w-4 text-gold-400" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              onClick={() => trackQuoteRequest('header')}
              className="btn-ghost text-xs px-4 py-2.5 border border-white/10"
            >
              Free Quote
            </Link>
            <Link
              href="/book"
              onClick={() => trackQuoteRequest('header_book')}
              className="btn-primary text-xs px-5 py-2.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              onClick={() => trackPhoneClick(SITE_CONFIG.phone)}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 hover:bg-gold-500/20 transition-colors"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-dark-950/98 backdrop-blur-xl max-h-screen overflow-y-auto">
          <div className="section-container py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2 flex flex-col gap-3">
              <Link
                href="/book"
                onClick={() => { setMobileOpen(false); trackQuoteRequest('mobile_book') }}
                className="btn-primary w-full justify-center"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-secondary w-full justify-center"
              >
                Free Quote
              </Link>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi, I'd like to get a quote for ceramic coating`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { setMobileOpen(false); trackWhatsAppClick(SITE_CONFIG.whatsapp) }}
                className="btn-ghost w-full justify-center border border-white/10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

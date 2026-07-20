'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

interface GalleryItem {
  src: string
  alt: string
  car: string
  service: string
  category: string
  w: number
  h: number
}

const ITEMS: GalleryItem[] = [
  {
    src: '/gallery/porsche-718-boxster-ceramic-coating-dubai.webp',
    alt: 'Porsche 718 Boxster Miami Blue ceramic coating Dubai — mirror gloss finish at Ceramic My Car studio',
    car: 'Porsche 718 Boxster',
    service: 'Ceramic Coating',
    category: 'ceramic-coating',
    w: 900, h: 1200,
  },
  {
    src: '/gallery/bmw-xm-ceramic-coating-dubai.webp',
    alt: 'BMW XM dark green ceramic coating Dubai — luxury SUV paint protection at Ceramic My Car',
    car: 'BMW XM',
    service: 'Ceramic Coating',
    category: 'ceramic-coating',
    w: 900, h: 1200,
  },
  {
    src: '/gallery/mercedes-s-class-ceramic-coating-workshop-dubai.webp',
    alt: 'Mercedes S-Class black ceramic coating — gloss enhancement and paint protection Dubai',
    car: 'Mercedes S-Class',
    service: 'Ceramic Coating',
    category: 'ceramic-coating',
    w: 1600, h: 1200,
  },
  {
    src: '/gallery/bmw-x5-ceramic-coating-dubai.webp',
    alt: 'BMW X5 M Sport dark navy blue ceramic coating — showroom-level finish Dubai',
    car: 'BMW X5',
    service: 'Ceramic Coating',
    category: 'ceramic-coating',
    w: 1600, h: 1100,
  },
  {
    src: '/gallery/lexus-rx-ceramic-coating-dubai.webp',
    alt: 'Lexus RX white ceramic coating Dubai — hydrophobic protection at Ceramic My Car studio',
    car: 'Lexus RX',
    service: 'Ceramic Coating',
    category: 'ceramic-coating',
    w: 900, h: 1200,
  },
  {
    src: '/gallery/tesla-model3-ceramic-coating-dubai.webp',
    alt: 'Tesla Model 3 dark blue ceramic coating installation at Ceramic My Car Dubai workshop',
    car: 'Tesla Model 3',
    service: 'Ceramic Coating',
    category: 'ceramic-coating',
    w: 900, h: 1200,
  },
  {
    src: '/gallery/mercedes-c200-ceramic-coating-rear-dubai.webp',
    alt: 'Mercedes C200 black ceramic coating — perfect gloss on rear panels Dubai',
    car: 'Mercedes C200',
    service: 'Ceramic Coating',
    category: 'ceramic-coating',
    w: 1600, h: 1000,
  },
  {
    src: '/gallery/mazda-cx5-ceramic-coating-dubai.webp',
    alt: 'Mazda CX-5 red ceramic coating Dubai — deep gloss paint protection result',
    car: 'Mazda CX-5',
    service: 'Ceramic Coating',
    category: 'ceramic-coating',
    w: 1600, h: 1000,
  },
  {
    src: '/gallery/chery-suv-ceramic-coating-dubai.webp',
    alt: 'Chery Tiggo SUV dark blue ceramic coating — showroom presentation Dubai',
    car: 'Chery Tiggo SUV',
    service: 'Ceramic Coating',
    category: 'ceramic-coating',
    w: 900, h: 1200,
  },
  {
    src: '/gallery/chery-suv-ceramic-coating-studio-dubai.webp',
    alt: 'Chery Tiggo SUV ceramic coating wide angle — Ceramic My Car studio Dubai',
    car: 'Chery Tiggo SUV',
    service: 'Ceramic Coating',
    category: 'ceramic-coating',
    w: 900, h: 1200,
  },
  {
    src: '/gallery/mercedes-e-class-ceramic-coating-showroom.webp',
    alt: 'Mercedes E-Class black ceramic coating showroom result — Dubai detailing studio',
    car: 'Mercedes E-Class',
    service: 'Ceramic Coating',
    category: 'ceramic-coating',
    w: 900, h: 1200,
  },
  {
    src: '/gallery/toyota-rav4-ceramic-coating-dubai.webp',
    alt: 'Toyota RAV4 white ceramic coating — paint protection result Dubai Ceramic My Car',
    car: 'Toyota RAV4',
    service: 'Ceramic Coating',
    category: 'ceramic-coating',
    w: 900, h: 1200,
  },
  {
    src: '/gallery/mercedes-s-class-rear-ceramic-coating-dubai.webp',
    alt: 'Mercedes S-Class rear ceramic coating — deep black gloss finish Dubai',
    car: 'Mercedes S-Class',
    service: 'Ceramic Coating',
    category: 'ceramic-coating',
    w: 900, h: 1200,
  },
  {
    src: '/gallery/gmc-sierra-pickup-ceramic-coating-dubai.webp',
    alt: 'GMC Sierra pickup truck red ceramic coating — paint protection Dubai showroom',
    car: 'GMC Sierra',
    service: 'Ceramic Coating',
    category: 'ceramic-coating',
    w: 900, h: 1200,
  },
  {
    src: '/gallery/ppf-installation-hood-masking-dubai.webp',
    alt: 'PPF installation process — paint protection film masking on black car hood Dubai',
    car: 'PPF Installation',
    service: 'Paint Protection Film',
    category: 'ppf',
    w: 1600, h: 1000,
  },
  {
    src: '/gallery/ceramic-coating-application-process-dubai.webp',
    alt: 'Ceramic coating application process — technician applying coating to blue car panel Dubai',
    car: 'Application Process',
    service: 'Ceramic Coating',
    category: 'process',
    w: 900, h: 900,
  },
  {
    src: '/gallery/ceramic-coating-application-dropper-closeup.webp',
    alt: 'Ceramic coating application — dropper applying coating to applicator pad on red sports car',
    car: 'Coating Application',
    service: 'Ceramic Coating',
    category: 'process',
    w: 900, h: 1200,
  },
  {
    src: '/gallery/gtechniq-exo-crystal-serum-ultra-products.webp',
    alt: 'Gtechniq EXO and Crystal Serum Ultra ceramic coating products — professional grade Dubai',
    car: 'Gtechniq EXO + CSU',
    service: 'Products',
    category: 'products',
    w: 1600, h: 1000,
  },
  {
    src: '/gallery/gtechniq-crystal-serum-exo-kit-dubai.webp',
    alt: 'Gtechniq Crystal Serum Ultra and EXO V5 professional kit — ceramic coating products used at Ceramic My Car',
    car: 'Gtechniq Pro Kit',
    service: 'Products',
    category: 'products',
    w: 900, h: 1000,
  },
  {
    src: '/gallery/gtechniq-crystal-serum-light-product.webp',
    alt: 'Gtechniq Crystal Serum Light ceramic coating product — professional grade paint protection Dubai',
    car: 'Gtechniq Crystal Serum',
    service: 'Products',
    category: 'products',
    w: 900, h: 1200,
  },
]

const CATEGORIES = [
  { id: 'all', label: 'All Work', count: ITEMS.length },
  { id: 'ceramic-coating', label: 'Ceramic Coating', count: ITEMS.filter(i => i.category === 'ceramic-coating').length },
  { id: 'ppf', label: 'PPF', count: ITEMS.filter(i => i.category === 'ppf').length },
  { id: 'process', label: 'Our Process', count: ITEMS.filter(i => i.category === 'process').length },
  { id: 'products', label: 'Products', count: ITEMS.filter(i => i.category === 'products').length },
]

export function GalleryGrid() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === 'all' ? ITEMS : ITEMS.filter((i) => i.category === active)

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const prevImage = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null))
  }, [filtered.length])

  const nextImage = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev + 1) % filtered.length : null))
  }, [filtered.length])

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage()
      else if (e.key === 'ArrowRight') nextImage()
      else if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, prevImage, nextImage, closeLightbox])

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => { setActive(cat.id); setLightbox(null) }}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              active === cat.id
                ? 'bg-gold-500 text-dark-950 shadow-lg shadow-gold-500/25'
                : 'glass-card text-white/60 hover:text-white hover:border-white/20 border border-white/10'
            }`}
          >
            {cat.label}
            <span className={`ml-2 text-xs font-normal ${active === cat.id ? 'text-dark-900' : 'text-white/30'}`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div
        className="columns-1 sm:columns-2 lg:columns-3 gap-4"
        style={{ columnGap: '1rem' }}
      >
        {filtered.map((item, index) => (
          <div
            key={item.src}
            className="break-inside-avoid mb-4 group relative overflow-hidden rounded-2xl cursor-zoom-in border border-white/[0.06] hover:border-gold-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10"
            onClick={() => setLightbox(index)}
            role="button"
            aria-label={`View ${item.car} — ${item.service}`}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setLightbox(index)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.w}
              height={item.h}
              className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 4}
              loading={index < 4 ? 'eager' : 'lazy'}
              quality={85}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block text-2xs font-bold uppercase tracking-wider text-gold-400 mb-1">
                  {item.service}
                </span>
                <p className="text-sm font-bold text-white leading-tight">{item.car}</p>
              </div>
              <div className="absolute top-3 right-3 p-2 rounded-full bg-white/10 backdrop-blur-sm">
                <ZoomIn className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state (for filtered views with 0 results) */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-white/30">
          <p className="text-lg">No images in this category yet.</p>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(6,6,10,0.96)', backdropFilter: 'blur(16px)' }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-4 z-10">
            <div>
              <p className="text-xs font-bold text-gold-400">{filtered[lightbox].service}</p>
              <p className="text-sm font-semibold text-white">{filtered[lightbox].car}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/40 font-mono">
                {lightbox + 1} / {filtered.length}
              </span>
              <button
                className="p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Prev button */}
          <button
            className="absolute left-3 sm:left-6 p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all z-10"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Image */}
          <div
            className="relative mx-16 sm:mx-20 max-h-[calc(100vh-120px)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={filtered[lightbox].w}
              height={filtered[lightbox].h}
              className="max-w-full max-h-[calc(100vh-120px)] object-contain rounded-xl shadow-2xl"
              priority
              quality={90}
              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 75vw, 60vw"
            />
          </div>

          {/* Next button */}
          <button
            className="absolute right-3 sm:right-6 p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all z-10"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5 py-4 overflow-x-auto px-4">
            {filtered.map((item, i) => (
              <button
                key={item.src}
                onClick={(e) => { e.stopPropagation(); setLightbox(i) }}
                className={`relative shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  i === lightbox ? 'border-gold-500 opacity-100' : 'border-white/10 opacity-40 hover:opacity-70'
                }`}
                aria-label={`Go to image ${i + 1}`}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

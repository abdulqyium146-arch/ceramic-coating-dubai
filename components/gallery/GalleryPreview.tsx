import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Camera } from 'lucide-react'

const PREVIEW_IMAGES = [
  {
    src: '/gallery/porsche-718-boxster-ceramic-coating-dubai.webp',
    alt: 'Porsche 718 Boxster Miami Blue ceramic coating Dubai — mirror gloss finish',
    label: 'Porsche 718 Boxster',
    service: 'Ceramic Coating',
    span: true, // tall portrait — spans 2 rows
  },
  {
    src: '/gallery/bmw-xm-ceramic-coating-dubai.webp',
    alt: 'BMW XM dark green ceramic coating Dubai luxury SUV',
    label: 'BMW XM',
    service: 'Ceramic Coating',
    span: false,
  },
  {
    src: '/gallery/mercedes-s-class-ceramic-coating-workshop-dubai.webp',
    alt: 'Mercedes S-Class black ceramic coating workshop Dubai',
    label: 'Mercedes S-Class',
    service: 'Ceramic Coating',
    span: false,
  },
  {
    src: '/gallery/lexus-rx-ceramic-coating-dubai.webp',
    alt: 'Lexus RX white ceramic coating Dubai studio',
    label: 'Lexus RX',
    service: 'Ceramic Coating',
    span: false,
  },
  {
    src: '/gallery/bmw-x5-ceramic-coating-dubai.webp',
    alt: 'BMW X5 dark navy ceramic coating Dubai showroom',
    label: 'BMW X5',
    service: 'Ceramic Coating',
    span: false,
  },
  {
    src: '/gallery/tesla-model3-ceramic-coating-dubai.webp',
    alt: 'Tesla Model 3 dark blue ceramic coating Dubai',
    label: 'Tesla Model 3',
    service: 'Ceramic Coating',
    span: false,
  },
]

export function GalleryPreview() {
  return (
    <section className="section-py bg-dark-900 border-t border-white/5">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="badge-gold mb-3 inline-flex">
              <Camera className="h-3 w-3" />
              Real Results
            </span>
            <h2 className="heading-md">
              Our <span className="text-gradient-gold">Recent Work</span>
            </h2>
            <p className="text-white/50 text-sm mt-2 max-w-md">
              Every photo is a real vehicle completed at our Al Quoz studio.
              No renders, no stock — just results.
            </p>
          </div>
          <Link
            href="/gallery"
            className="btn-ghost text-sm shrink-0"
          >
            View All 20 Photos
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Asymmetric grid: first image tall (portrait), rest fill a 2-row × 2-col grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-3"
          style={{ gridAutoRows: '200px' }}
        >
          {PREVIEW_IMAGES.map((img, i) => (
            <Link
              key={img.src}
              href="/gallery"
              className={`relative overflow-hidden rounded-2xl group border border-white/[0.06] hover:border-gold-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10 ${
                img.span ? 'row-span-2' : ''
              }`}
              aria-label={`${img.label} — ${img.service}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes={
                  i === 0
                    ? '(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw'
                    : '(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw'
                }
                priority={i < 2}
                loading={i < 2 ? 'eager' : 'lazy'}
                quality={80}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-2xs font-bold uppercase tracking-wider text-gold-400 leading-none mb-0.5">
                    {img.service}
                  </p>
                  <p className="text-xs font-bold text-white leading-tight">{img.label}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 text-center sm:hidden">
          <Link href="/gallery" className="btn-ghost text-sm">
            View All 20 Photos
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

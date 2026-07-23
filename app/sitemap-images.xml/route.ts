import { NextResponse } from 'next/server'
import { SITE_CONFIG } from '@/lib/constants'

const GALLERY_IMAGES = [
  {
    src: '/gallery/bmw-xm-ceramic-coating-dubai.webp',
    title: 'BMW XM Ceramic Coating Dubai — Ceramic My Car Studio Al Quoz',
    caption: 'BMW XM luxury SUV ceramic coating at Ceramic My Car studio, Al Quoz, Dubai.',
  },
  {
    src: '/gallery/porsche-718-boxster-ceramic-coating-dubai.webp',
    title: 'Porsche 718 Boxster Ceramic Coating Dubai',
    caption: 'Porsche 718 Boxster ceramic coating at Ceramic My Car, Dubai.',
  },
  {
    src: '/gallery/bmw-x5-ceramic-coating-dubai.webp',
    title: 'BMW X5 Ceramic Coating Dubai Studio',
    caption: 'BMW X5 ceramic coating preparation at Ceramic My Car, Al Quoz, Dubai.',
  },
  {
    src: '/gallery/lexus-rx-ceramic-coating-dubai.webp',
    title: 'Lexus RX Ceramic Coating Dubai — White SUV',
    caption: 'Lexus RX white ceramic coating at Ceramic My Car studio, Dubai.',
  },
  {
    src: '/gallery/mazda-cx5-ceramic-coating-dubai.webp',
    title: 'Mazda CX-5 Graphene Ceramic Coating Dubai',
    caption: 'Mazda CX-5 graphene ceramic coating with dramatic reflections at Ceramic My Car, Dubai.',
  },
  {
    src: '/gallery/tesla-model3-ceramic-coating-dubai.webp',
    title: 'Tesla Model 3 Ceramic Coating & Window Tinting Dubai',
    caption: 'Tesla Model 3 ceramic coating and window tinting service at Ceramic My Car, Dubai.',
  },
  {
    src: '/gallery/mercedes-c200-ceramic-coating-rear-dubai.webp',
    title: 'Mercedes C200 Ceramic Coating Dubai — Rear View',
    caption: 'Mercedes C200 rear ceramic coating at Ceramic My Car studio, Al Quoz, Dubai.',
  },
  {
    src: '/gallery/mercedes-s-class-ceramic-coating-workshop-dubai.webp',
    title: 'Mercedes S-Class Interior Detailing & Ceramic Coating Dubai',
    caption: 'Mercedes S-Class undergoing interior detailing at Ceramic My Car, Dubai.',
  },
  {
    src: '/gallery/mercedes-s-class-rear-ceramic-coating-dubai.webp',
    title: 'Mercedes S-Class Rear Ceramic Coating Dubai',
    caption: 'Mercedes S-Class rear ceramic coating finish at Ceramic My Car studio, Dubai.',
  },
  {
    src: '/gallery/mercedes-e-class-ceramic-coating-showroom.webp',
    title: 'Mercedes E-Class Ceramic Coating Showroom Finish Dubai',
    caption: 'Mercedes E-Class showroom ceramic coating finish at Ceramic My Car, Al Quoz.',
  },
  {
    src: '/gallery/ppf-installation-hood-masking-dubai.webp',
    title: 'PPF Installation Hood Masking Dubai — Xpel Paint Protection Film',
    caption: 'Professional Xpel PPF installation with hood masking at Ceramic My Car, Dubai.',
  },
  {
    src: '/gallery/ceramic-coating-application-process-dubai.webp',
    title: 'Ceramic Coating Application Process Dubai — Technician Applying Coating',
    caption: 'Professional ceramic coating application process at Ceramic My Car studio, Dubai.',
  },
  {
    src: '/gallery/ceramic-coating-application-dropper-closeup.webp',
    title: 'Ceramic Coating Application Closeup Dubai — Dropper Detail',
    caption: 'Close-up of ceramic coating liquid application at Ceramic My Car, Dubai.',
  },
  {
    src: '/gallery/toyota-rav4-ceramic-coating-dubai.webp',
    title: 'Toyota RAV4 Ceramic Coating Dubai',
    caption: 'Toyota RAV4 ceramic coating at Ceramic My Car studio, Al Quoz, Dubai.',
  },
  {
    src: '/gallery/chery-suv-ceramic-coating-dubai.webp',
    title: 'Chery SUV Ceramic Coating Dubai',
    caption: 'Chery SUV ceramic coating at Ceramic My Car, Dubai.',
  },
  {
    src: '/gallery/chery-suv-ceramic-coating-studio-dubai.webp',
    title: 'Chery SUV Ceramic Coating Studio Dubai — Al Quoz',
    caption: 'Chery SUV ceramic coating studio shot at Ceramic My Car, Al Quoz, Dubai.',
  },
  {
    src: '/gallery/gmc-sierra-pickup-ceramic-coating-dubai.webp',
    title: 'GMC Sierra Pickup Truck Ceramic Coating Dubai',
    caption: 'GMC Sierra pickup truck ceramic coating at Ceramic My Car, Dubai.',
  },
  {
    src: '/gallery/gtechniq-exo-crystal-serum-ultra-products.webp',
    title: 'Gtechniq Crystal Serum Ultra & Exo Ceramic Coating Products Dubai',
    caption: 'Gtechniq Crystal Serum Ultra and Exo professional ceramic coating products used at Ceramic My Car, Dubai.',
  },
  {
    src: '/gallery/gtechniq-crystal-serum-exo-kit-dubai.webp',
    title: 'Gtechniq Crystal Serum Exo Kit Dubai — Ceramic Coating Products',
    caption: 'Gtechniq Crystal Serum Exo professional kit at Ceramic My Car studio, Dubai.',
  },
  {
    src: '/gallery/gtechniq-crystal-serum-light-product.webp',
    title: 'Gtechniq Crystal Serum Light Ceramic Coating Product Dubai',
    caption: 'Gtechniq Crystal Serum Light ceramic coating product at Ceramic My Car, Dubai.',
  },
]

const GALLERY_PAGE = `${SITE_CONFIG.url}/gallery`

export async function GET() {
  const base = SITE_CONFIG.url

  const imageEntries = GALLERY_IMAGES.map(
    (img) => `
  <url>
    <loc>${GALLERY_PAGE}</loc>
    <image:image>
      <image:loc>${base}${img.src}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>
  </url>`
  ).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageEntries}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

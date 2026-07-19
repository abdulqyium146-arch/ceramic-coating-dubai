export const SITE_CONFIG = {
  name: 'Ceramic My Car',
  tagline: 'Premium Ceramic Coating & Paint Protection in Dubai',
  description:
    "Dubai's #1 premium ceramic coating, PPF, graphene coating, and car detailing studio. Serving Dubai Marina, Business Bay, JVC, Palm Jumeirah, Downtown Dubai, and all of UAE.",
  url: 'https://ceramic-my-car.com',
  logo: '/images/logo.svg',
  phone: '+971555153180',
  phoneDisplay: '+971 55 515 3180',
  whatsapp: '971555153180',
  email: 'info@ceramic-my-car.com',
  address: {
    street: 'Al Quoz Industrial Area 4',
    area: 'Al Quoz',
    city: 'Dubai',
    country: 'UAE',
    postalCode: '00000',
    lat: 25.1405,
    lng: 55.2195,
  },
  hours: {
    weekdays: '8:00 AM – 8:00 PM',
    friday: '2:00 PM – 8:00 PM',
    weekends: '9:00 AM – 6:00 PM',
  },
  socialMedia: {
    instagram: 'https://instagram.com/ceramicmycar',
    facebook: 'https://facebook.com/ceramicmycar',
    tiktok: 'https://tiktok.com/@ceramicmycar',
    youtube: 'https://youtube.com/@ceramicmycar',
  },
  rating: {
    value: 4.9,
    count: 847,
  },
  founded: 2018,
  certifications: [
    'GYEON Certified Installer',
    'Xpel Authorized Dealer',
    'Ceramic Pro Certified',
    'IDA Certified Detailer',
  ],
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Ceramic Coating', href: '/services/ceramic-coating' },
      { label: 'Paint Protection Film (PPF)', href: '/services/ppf' },
      { label: 'Graphene Coating', href: '/services/graphene-coating' },
      { label: 'Paint Correction', href: '/services/paint-correction' },
      { label: 'Interior Detailing', href: '/services/interior-detailing' },
      { label: 'Exterior Detailing', href: '/services/exterior-detailing' },
      { label: 'Window Tinting', href: '/services/window-tinting' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Locations', href: '/locations' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const DUBAI_LOCATIONS = [
  { name: 'Dubai Marina', slug: 'dubai-marina', area: 'Dubai Marina' },
  { name: 'JVC', slug: 'jvc', area: 'Jumeirah Village Circle' },
  { name: 'Business Bay', slug: 'business-bay', area: 'Business Bay' },
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah', area: 'Palm Jumeirah' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai', area: 'Downtown Dubai' },
  { name: 'Dubai Hills', slug: 'dubai-hills', area: 'Dubai Hills Estate' },
  { name: 'Al Quoz', slug: 'al-quoz', area: 'Al Quoz' },
  { name: 'Motor City', slug: 'motor-city', area: 'Motor City' },
  { name: 'JVT', slug: 'jvt', area: 'Jumeirah Village Triangle' },
  { name: 'Arabian Ranches', slug: 'arabian-ranches', area: 'Arabian Ranches' },
  { name: 'Emirates Hills', slug: 'emirates-hills', area: 'Emirates Hills' },
  { name: 'Mirdif', slug: 'mirdif', area: 'Mirdif' },
  { name: 'Deira', slug: 'deira', area: 'Deira' },
  { name: 'Bur Dubai', slug: 'bur-dubai', area: 'Bur Dubai' },
]

export const STATS = [
  { value: '2,400+', label: 'Cars Protected' },
  { value: '6+', label: 'Years in Dubai' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '100%', label: 'Satisfaction Rate' },
]

export const TRUST_BADGES = [
  'GYEON Certified Installer',
  'Xpel Authorized Dealer',
  'Ceramic Pro Certified',
  'IDA Member',
  '6-Year Dubai Track Record',
  '2,400+ Cars Protected',
]

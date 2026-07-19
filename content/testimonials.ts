export interface Testimonial {
  id: string
  name: string
  location: string
  car: string
  service: string
  rating: number
  review: string
  date: string
  verified: boolean
  platform: 'google' | 'instagram' | 'direct'
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Al Mansoori',
    location: 'Dubai Marina',
    car: 'Lamborghini Urus',
    service: 'Graphene Coating + PPF',
    rating: 5,
    review:
      "Absolutely incredible work on my Urus. The team spent 4 days perfecting every inch. The graphene coating over PPF gives the paint a depth and gloss I've never seen before. Worth every dirham. The car looks better than it did when I drove it out of the showroom.",
    date: '2024-11-15',
    verified: true,
    platform: 'google',
  },
  {
    id: '2',
    name: 'Sarah Thompson',
    location: 'Business Bay',
    car: 'Range Rover Sport',
    service: 'Ceramic Coating',
    rating: 5,
    review:
      "My Range Rover was looking tired after 2 years in Dubai's sun. After ceramic coating from Ceramic My Car, it genuinely looks better than new. The hydrophobic effect is insane — water just flies off. They also did a brilliant paint correction that removed all the swirl marks. Highly recommend.",
    date: '2024-10-28',
    verified: true,
    platform: 'google',
  },
  {
    id: '3',
    name: 'Khalid Ibrahim',
    location: 'Palm Jumeirah',
    car: 'Ferrari 488 Spider',
    service: 'Full PPF + Ceramic',
    rating: 5,
    review:
      'These guys know exotic cars. Very few detailing shops in Dubai I would trust with my Ferrari, but Ceramic My Car is on another level. The PPF installation is flawless — you literally cannot see it. Paint correction before the coating revealed the true colour of the red. Perfectionists.',
    date: '2024-10-12',
    verified: true,
    platform: 'google',
  },
  {
    id: '4',
    name: 'Priya Sharma',
    location: 'JVC',
    car: 'BMW X5',
    service: 'Paint Correction + Ceramic Coating',
    rating: 5,
    review:
      'I had tried another detailing shop before and was disappointed. A friend recommended Ceramic My Car and the difference is night and day. Professional from start to finish — they showed me before/after paint readings and photos at every stage. My white BMW looks phenomenal.',
    date: '2024-09-20',
    verified: true,
    platform: 'google',
  },
  {
    id: '5',
    name: 'Mohammed Al Rashidi',
    location: 'Downtown Dubai',
    car: 'Mercedes S-Class',
    service: 'Ceramic Coating + Window Tinting',
    rating: 5,
    review:
      'Professional service and exceptional results. The ceramic coating on my S-Class is perfect, and the Xpel window tint has made a noticeable difference in cabin temperature. Great team that communicates throughout the process and delivers on time.',
    date: '2024-09-05',
    verified: true,
    platform: 'google',
  },
  {
    id: '6',
    name: 'James Wilson',
    location: 'Emirates Hills',
    car: 'Porsche 911 GT3',
    service: 'Full PPF Coverage',
    rating: 5,
    review:
      'I specifically researched who in Dubai was the best at PPF on sports cars before choosing Ceramic My Car. The installers are clearly experienced with high-end vehicles — the film wrap around complex curves on the GT3 is seamless. Could not be happier.',
    date: '2024-08-18',
    verified: true,
    platform: 'google',
  },
  {
    id: '7',
    name: 'Fatima Hassan',
    location: 'Dubai Hills',
    car: 'Tesla Model X',
    service: 'Interior + Exterior Detailing',
    rating: 5,
    review:
      'Brought my Tesla in for full interior and exterior detailing. The results are amazing — every surface looks brand new. The leather seats feel incredible after conditioning. Highly professional team and very reasonable pricing for the quality.',
    date: '2024-08-05',
    verified: true,
    platform: 'google',
  },
  {
    id: '8',
    name: 'Omar Al Dabbagh',
    location: 'Arabian Ranches',
    car: 'GMC Yukon',
    service: 'Ceramic Coating',
    rating: 5,
    review:
      'Used them for my GMC Yukon. The team was fantastic — thorough, professional, and passionate about their work. The ceramic coating has been on for 6 months now and the car is still repelling water and dust like day one. Worth the investment.',
    date: '2024-07-22',
    verified: true,
    platform: 'google',
  },
]

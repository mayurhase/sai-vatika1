import type { Property } from '../types/property'

export const properties: Property[] = [
  {
    id: 'shirdi-project',
    title: 'Shirdi Project - Sai Vatika',
    tagline: 'Temple-front plotted community with curated infrastructure',
    location: 'Nagar-Manmad Highway, Shirdi',
    city: 'Shirdi',
    price: 'Rs 35 Lakhs onwards',
    priceValueLakh: 35,
    category: 'Temple Township',
    status: 'Now Selling',
    isFlagship: true,
    plotSizes: '1,800 - 3,200 sq.ft.',
    acres: '32 acres',
    landUse: 'DTCP & MahaRERA registered',
    utilities: ['30 ft internal roads', '3-phase power', 'Central water lines', 'Perimeter security'],
    sitePlanImage: '/assets/site-plan-current.png',
    locationMapImage: '/assets/location-map.png',
    description:
      'A serene plotted canvas off the Shirdi-Manmad highway that keeps Sai Baba Temple within daily reach while offering landscaped parks, meditation decks, and ready infrastructure for rapid construction.',
    highlights: [
      'Walkable access to Sai Baba Temple corridor',
      'Club pavilion with multipurpose hall and guest suites',
      'Native tree plantations with drip irrigation',
    ],
    features: [
      'Prime location surrounded by natural greenery',
      'Spacious, well-planned layout with 30-ft internal roads',
      'Compound wall and security across the 9-acre site',
      'Independent compound fencing for each 10-Guntha plot',
      'Separate electricity and water provision for every plot',
      'Plantation of coconut and fruit trees, street lighting throughout',
      'Reliable electricity and water connections, main-road access',
      'Complete legal and registration support',
      'Clean, pollution-free natural environment',
    ],
    benefits: [
      'Strong appreciation potential from Shirdi tourism growth',
      'Suitable for residential or farmhouse use',
      'Ideal for weekend relaxation and family retreats',
    ],
    nearbyFacilities: [
      { name: 'International School', distance: '500 m' },
      { name: 'Nagar-Manmad Highway (project approach)', distance: '300 m' },
      { name: 'Sai Baba Temple', distance: '5 km' },
      { name: 'MIDC', distance: '3 km' },
      { name: 'Jangli Maharaj Ashram Hospital', distance: '500 m' },
      { name: 'Nashik Highway', distance: '1 km' },
      { name: 'Samruddhi Highway', distance: '1 km' },
      { name: 'Shirdi Railway Station', distance: '4 km' },
      { name: 'Sanjhawani Engineering College', distance: '9 km' },
      { name: 'Airport', distance: '16 km' },
      { name: 'Kopargaon Railway Station', distance: '10 km' },
    ],
    connectivity: [
      {
        category: 'Spiritual',
        name: 'Sai Baba Temple',
        distance: '1.2 km / 5 mins',
        description: 'Direct shuttle and shaded pedestrian pathway along Pimpalwadi Road.',
      },
      {
        category: 'Airport',
        name: 'Shirdi International Airport',
        distance: '14 km / 20 mins',
        description: 'Quick hop via NH-160; daily flights to Mumbai, Bengaluru, Hyderabad.',
      },
      {
        category: 'Railway',
        name: 'Sainagar Shirdi Station',
        distance: '2.8 km / 8 mins',
        description: 'Daily trains including Vande Bharat connecting Mumbai, Nashik and Varanasi.',
      },
      {
        category: 'Highway',
        name: 'Nagar-Manmad Highway',
        distance: '300 m',
        description: 'Signal-light access onto the main corridor with fast intercity connectivity.',
      },
      {
        category: 'Education',
        name: 'Podar International School',
        distance: '3.5 km',
        description: 'CBSE school with dedicated pick-up bay inside the community.',
      },
      {
        category: 'Healthcare',
        name: 'Sai Sanjivani Hospital',
        distance: '3.2 km / 10 mins',
        description: '24x7 emergency and diagnostic centre on Ahmednagar-Manmad Road.',
      },
    ],
    mainImage: '/assets/drone1.jpg',
    galleryImages: [
      '/assets/drone1.jpg',
      '/assets/drone2.jpg',
      '/assets/camera1.jpg',
      '/assets/camera2.jpg',
      '/assets/camera4.jpg',
      '/assets/camera5.jpg',
      '/assets/camera6.jpg',
    ],
    tags: ['Temple Access', 'Ready Infrastructure', 'Shuttle Service'],
  },
]

export const cities = Array.from(new Set(properties.map((property) => property.city)))
export const categories = Array.from(new Set(properties.map((property) => property.category)))
export const propertyStatuses = Array.from(new Set(properties.map((property) => property.status)))

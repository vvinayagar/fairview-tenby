// Open-source imagery via Unsplash CDN (free to use) — stands in for Fairview's own photography
const img = (id, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80&h=${h}`

export const heroVideo = '/hero.mp4' // CC0 school clip (Mixkit free license)
export const heroPoster = img('1503676260728-1c00da094a0b', 1600, 900)

export const campuses = [
  { name: 'Fairview Kuala Lumpur', slug: 'kuala-lumpur', place: 'Wangsa Maju, Kuala Lumpur', ages: '3–19 years',
    tags: ['Flagship Campus', 'IB Continuum', 'Since 1978'],
    photo: img('1580582932707-520aed937b7b', 600, 400), hero: img('1580582932707-520aed937b7b', 1600, 900),
    address: 'Lot 4178, Jalan 1/27, Seksyen 1 Wangsa Maju, 53300 Kuala Lumpur',
    phone: '+603-4142 0888', email: 'kl@fairview.edu.my',
    blurb: 'Our flagship Kuala Lumpur campus is the oldest and largest IB World School in Malaysia — a beacon of quality education since 1978. Set in the heart of Wangsa Maju, it delivers the full IB continuum in a vibrant, purpose-built campus.',
    highlights: ['Full IB continuum: PYP, MYP & Diploma', 'Purpose-built science & innovation labs', 'Award-winning sports and performing arts', 'The founding Fairview campus, est. 1978'] },
  { name: 'Fairview Subang', slug: 'subang', place: 'Subang Jaya, Selangor', ages: '3–19 years',
    tags: ['IB Continuum', 'STEM Focus'],
    photo: img('1562774053-701939374585', 600, 400), hero: img('1562774053-701939374585', 1600, 900),
    address: 'Persiaran Kewajipan, USJ, 47610 Subang Jaya, Selangor',
    phone: '+603-8023 0888', email: 'subang@fairview.edu.my',
    blurb: 'Fairview Subang pairs the full IB continuum with a distinctive STEM focus, giving students the tools to think critically and create confidently in a fast-changing world.',
    highlights: ['Dedicated STEM & robotics programmes', 'Full IB continuum: PYP, MYP & Diploma', 'Modern maker-spaces and labs', 'Strong university placement record'] },
  { name: 'Fairview Ipoh', slug: 'ipoh', place: 'Ipoh, Perak', ages: '3–19 years',
    tags: ['IB Continuum', 'Boarding Available'],
    photo: img('1577896851231-70ef18881754', 600, 400), hero: img('1577896851231-70ef18881754', 1600, 900),
    address: 'Jalan Sultan Azlan Shah, 31350 Ipoh, Perak',
    phone: '+605-321 0888', email: 'ipoh@fairview.edu.my',
    blurb: 'Set in the historic city of Ipoh, this campus offers the full IB continuum with boarding available — an ideal choice for families seeking a nurturing home away from home.',
    highlights: ['Boarding available for older students', 'Full IB continuum: PYP, MYP & Diploma', 'Warm, close-knit learning community', 'Green, spacious campus grounds'] },
  { name: 'Fairview Penang', slug: 'penang', place: 'Bukit Mertajam, Penang', ages: '3–19 years',
    tags: ['IB Continuum', 'Foundation in Music'],
    photo: img('1544717305-2782549b5136', 600, 400), hero: img('1544717305-2782549b5136', 1600, 900),
    address: 'Jalan Kulim, Bukit Mertajam, 14000 Penang',
    phone: '+604-538 0888', email: 'penang@fairview.edu.my',
    blurb: 'Fairview Penang is renowned for its Foundation in Music pathway alongside the full IB continuum, nurturing both academic excellence and a lifelong love of the arts.',
    highlights: ['Foundation in Music pathway', 'Full IB continuum: PYP, MYP & Diploma', 'Performing arts and choir programmes', 'Vibrant island community'] },
  { name: 'Fairview Johor', slug: 'johor', place: 'Johor Bahru, Johor', ages: '3–19 years',
    tags: ['IB Continuum', 'Early Years'],
    photo: img('1533105079780-92b9be482077', 600, 400), hero: img('1533105079780-92b9be482077', 1600, 900),
    address: 'Jalan Persiaran Southkey, 80150 Johor Bahru, Johor',
    phone: '+607-336 0888', email: 'johor@fairview.edu.my',
    blurb: 'Our Johor Bahru campus is known for its outstanding Early Years provision, giving the youngest learners an inspiring, play-based start before progressing through the full IB continuum.',
    highlights: ['Outstanding Early Years centre', 'Full IB continuum: PYP, MYP & Diploma', 'Play-based, inquiry-led foundations', 'Close to Singapore, easy access'] },
  { name: 'Dominus Arts & Eduresort', slug: 'dominus', place: 'Port Dickson, Negeri Sembilan', ages: 'All ages',
    tags: ['Arts Venue', 'Expeditions & Excursions'],
    photo: img('1507924538820-ede94a04019d', 600, 400), hero: img('1507924538820-ede94a04019d', 1600, 900),
    address: 'Jalan Pantai, 71000 Port Dickson, Negeri Sembilan',
    phone: '+606-647 0888', email: 'dominus@fairview.edu.my',
    blurb: 'Dominus Arts & Eduresort is Fairview’s coastal home for the performing arts, expeditions and residential experiences — where lessons become lived experience.',
    highlights: ['Professional arts & performance venue', 'Residential expeditions & camps', 'Duke of Edinburgh’s Award activities', 'Seaside campus at Port Dickson'] },
]

// look up a campus by its URL slug
export const campusBySlug = slug => campuses.find(c => c.slug === slug)

export const uniStats = [
  { value: '90%', label: 'Graduates placed at their first-choice university' },
  { value: '100%', label: 'Students supported with personalised careers guidance' },
]

// Tabs map to highlighted continents on the world map (data-r keys in world.svg)
export const uniRegions = [
  { label: 'Europe', key: 'europe' },
  { label: 'Asia', key: 'asia' },
  { label: 'Americas', key: 'americas' },
  { label: 'Oceania', key: 'oceania' },
]

// University destinations grouped by the region tab
export const uniList = {
  Europe: [
    { country: 'United Kingdom', schools: ['University of Cambridge', 'Imperial College London', 'University College London', 'The University of Edinburgh', 'University of Warwick', 'University of Manchester', 'University of Bristol'] },
    { country: 'Ireland', schools: ['Trinity College Dublin', 'Royal College of Surgeons Ireland'] },
    { country: 'Netherlands', schools: ['Delft University of Technology'] },
  ],
  Asia: [
    { country: 'Singapore', schools: ['National University of Singapore', 'Nanyang Technological University'] },
    { country: 'Hong Kong', schools: ['The University of Hong Kong', 'HKUST'] },
    { country: 'Malaysia', schools: ['Taylor’s University', 'Monash University Malaysia', 'Sunway University'] },
  ],
  Americas: [
    { country: 'United States', schools: ['University of California, Berkeley', 'Purdue University', 'Boston University'] },
    { country: 'Canada', schools: ['University of Toronto', 'University of British Columbia', 'McGill University'] },
  ],
  Oceania: [
    { country: 'Australia', schools: ['University of Melbourne', 'University of Sydney', 'Monash University', 'UNSW Sydney'] },
    { country: 'New Zealand', schools: ['University of Auckland'] },
  ],
}

// The IB Learner Profile — five attribute clusters shown on the interactive wheel.
// `blurb` is the short description shown in the centre of the wheel.
export const skills = [
  { key: 'Thinkers', color: '#00243e',
    blurb: 'Thinking deeply, questioning and problem-solving: “I lead my learning by asking, researching and reasoning things through for myself.”',
    items: [
      { title: 'Inquirers', text: 'Nurturing curiosity and the skills to research, question and learn independently.' },
      { title: 'Knowledgeable', text: 'Exploring concepts and ideas of local and global significance.' },
      { title: 'Critical thinking', text: 'Making sense of information, solving problems and making smart decisions.' },
    ] },
  { key: 'Communicators', color: '#0a6e9e',
    blurb: 'Sharing ideas with clarity and confidence: “I express myself in more than one language and truly listen to others.”',
    items: [
      { title: 'Communicators', text: 'Expressing ideas confidently in more than one language and in many ways.' },
      { title: 'Open-minded', text: 'Appreciating our own cultures and valuing the perspectives of others.' },
    ] },
  { key: 'Principled', color: '#ec8500',
    blurb: 'Acting with integrity and care: “I do the right thing and take responsibility for my actions and their consequences.”',
    items: [
      { title: 'Principled', text: 'Acting with integrity, honesty and a strong sense of fairness.' },
      { title: 'Caring', text: 'Showing empathy, compassion and respect in service to others.' },
    ] },
  { key: 'Balanced', color: '#f4b333',
    blurb: 'Nurturing the whole self: “I look after my mind, body and heart, and support the wellbeing of those around me.”',
    items: [
      { title: 'Balanced', text: 'Understanding the importance of intellectual, physical and emotional wellbeing.' },
      { title: 'Reflective', text: 'Thoughtfully considering our learning, strengths and areas to grow.' },
    ] },
  { key: 'Courageous', color: '#004271',
    blurb: 'Growing through challenge: “I approach the unfamiliar with resourcefulness, resilience and belief in myself.”',
    items: [
      { title: 'Risk-takers', text: 'Approaching uncertainty with forethought, resourcefulness and resilience.' },
      { title: 'Self-belief', text: 'Trusting in your own abilities to grow, learn and go further.' },
    ] },
]

export const community = [
  { value: '6', label: 'Campuses across Malaysia and beyond', icon: '🏫' },
  { value: '47', label: 'Years of IB excellence since 1978', icon: '🎓' },
  { value: '40', label: 'Nationalities in our learning community', icon: '🌍' },
  { value: '3', label: 'IB programmes — PYP, MYP and Diploma', icon: '📚' },
]

export const testimonials = [
  { name: 'Aisyah Rahman', year: 'IB Diploma graduate', photo: img('1503454537195-1dcabb73ffb9', 400, 300),
    quote: 'At Fairview I was encouraged to ask questions no one had answered yet. That curiosity is what got me into medical school.' },
]

export const avatars = [
  img('1544005313-94ddf0286df2', 120, 120),
  img('1500648767791-00dcc994a43e', 120, 120),
  img('1438761681033-6461ffad8d80', 120, 120),
  img('1507003211169-0a1dd7228f2d', 120, 120),
  img('1489424731084-a5d8b219a5bb', 120, 120),
  img('1494790108377-be9c29b29330', 120, 120),
]

export const introImg = img('1509062522246-3755977927d7', 700, 700)
export const footerLinks = {
  schools: ['Fairview Kuala Lumpur', 'Fairview Subang', 'Fairview Ipoh', 'Fairview Penang', 'Fairview Johor', 'Dominus Arts Venue'],
  useful: ['Our Programmes', 'Admissions', 'Work With Us', 'Privacy Policy'],
}

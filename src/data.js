// Open-source imagery via Unsplash CDN (free to use) — stands in for Fairview's own photography
const img = (id, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80&h=${h}`

export const heroVideo = '/hero.mp4' // CC0 school clip (Mixkit free license)
export const heroPoster = img('1503676260728-1c00da094a0b', 1600, 900)

export const campuses = [
  { name: 'Fairview Kuala Lumpur', place: 'Wangsa Maju, Kuala Lumpur', ages: '3–19 years',
    tags: ['Flagship Campus', 'IB Continuum', 'Since 1978'],
    photo: img('1580582932707-520aed937b7b', 600, 400) },
  { name: 'Fairview Subang', place: 'Subang Jaya, Selangor', ages: '3–19 years',
    tags: ['IB Continuum', 'STEM Focus'],
    photo: img('1562774053-701939374585', 600, 400) },
  { name: 'Fairview Ipoh', place: 'Ipoh, Perak', ages: '3–19 years',
    tags: ['IB Continuum', 'Boarding Available'],
    photo: img('1577896851231-70ef18881754', 600, 400) },
  { name: 'Fairview Penang', place: 'Bukit Mertajam, Penang', ages: '3–19 years',
    tags: ['IB Continuum', 'Foundation in Music'],
    photo: img('1544717305-2782549b5136', 600, 400) },
  { name: 'Fairview Johor', place: 'Johor Bahru, Johor', ages: '3–19 years',
    tags: ['IB Continuum', 'Early Years'],
    photo: img('1533105079780-92b9be482077', 600, 400) },
  { name: 'Dominus Arts & Eduresort', place: 'Port Dickson, Negeri Sembilan', ages: 'All ages',
    tags: ['Arts Venue', 'Expeditions & Excursions'],
    photo: img('1507924538820-ede94a04019d', 600, 400) },
]

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

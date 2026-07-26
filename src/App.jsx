import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {
  heroVideo, heroPoster, campuses, uniStats, uniRegions, uniList,
  skills, community, testimonials, avatars, introImg, footerLinks,
} from './data.js'
import { initAnimations } from './anim.js'

/* ---------- logo ---------- */
function Logo({ light }) {
  return (
    <a href="#top" className={`logo ${light ? 'logo--light' : ''}`} aria-label="Fairview International School">
      <img
        className="logo__img"
        src={light ? '/fairview-logo-white.png' : '/fairview-logo.png'}
        alt="Fairview International School"
      />
    </a>
  )
}

/* ---------- header ---------- */
function Header() {
  return (
    <header className="header" id="top">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <div className="header__school">
            <select defaultValue="" aria-label="Choose a school">
              <option value="" disabled>Please choose a school</option>
              {campuses.map(c => <option key={c.name}>{c.name}</option>)}
            </select>
          </div>
          <a href="#enquire" className="btn-pill">Enquire now</a>
        </div>
      </div>
    </header>
  )
}

/* ---------- hero ---------- */
function Hero() {
  return (
    <section className="hero">
      <video className="hero__video" autoPlay muted loop playsInline poster={heroPoster}>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <span className="hero__scrim" />
      <div className="hero__content" data-aos="fade-up" data-aos-duration="900">
        <h1>Where potential takes flight</h1>
        <p>A private IB world school where every child discovers their strengths and goes further</p>
        <a href="#campus" className="btn-pill btn-pill--lg">Find a Fairview near me</a>
      </div>
      <a href="#intro" className="hero__scroll" aria-label="Scroll down">&#8595;</a>
    </section>
  )
}

/* ---------- intro ---------- */
function Intro() {
  return (
    <section className="intro section-pad" id="intro">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-7" data-aos="fade-up">
            <h2 className="intro__title">Malaysia’s most trusted<br />IB school network</h2>
            <p>Fairview guides children from an inspiring early-years start, through the Primary
              Years and Middle Years Programmes, and on to the globally-respected IB Diploma.</p>
            <p>As an authorised IB World School delivering the full continuum, we help students
              make clear, measurable progress — gaining life skills, deepening curiosity and
              achieving results that open doors to the world’s best universities.</p>
            <p>With campuses since 1978 and a legacy as the oldest and largest IB school in
              Malaysia, Fairview pairs trusted local roots with extraordinary opportunities for
              every learner.</p>
          </div>
          <div className="col-12 col-lg-5" data-aos="zoom-in">
            <div className="intro__media">
              <span className="blob blob--pink" />
              <img src={introImg} alt="Fairview students learning" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- choose your campus ---------- */
function Campus() {
  return (
    <section className="campus section-pad" id="campus">
      <div className="container">
        <div className="campus__head" data-aos="fade-up">
          <h2 className="sec-title">Choose your campus</h2>
          <p>Explore Fairview’s campuses across Kuala Lumpur, Subang, Ipoh, Penang and Johor.</p>
          <a href="#" className="btn-pill btn-pill--sm">Show on map</a>
        </div>
        <div className="row g-4">
          {campuses.map((c, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={c.name} data-aos="fade-up" data-aos-delay={(idx % 3) * 100}>
              <article className="campus-card">
                <div className="campus-card__img"><img src={c.photo} alt={c.name} loading="lazy" /></div>
                <div className="campus-card__body">
                  <h3>{c.name}</h3>
                  <span className="campus-card__place">📍 {c.place}</span>
                  <div className="campus-card__meta">
                    <span className="campus-card__age">{c.ages}</span>
                    {c.tags.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                  <a href="#" className="campus-card__more">More details</a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- university destinations ---------- */
function University() {
  const [region, setRegion] = useState(uniRegions[0])
  const mapRef = useRef(null)
  // Load the world map SVG once and inject it, so region <path>s can be highlighted.
  useEffect(() => {
    let alive = true
    fetch('/world.svg')
      .then(r => r.text())
      .then(txt => {
        if (!alive || !mapRef.current) return
        // Parse as real SVG/XML — the HTML innerHTML parser truncates very large path data.
        const doc = new DOMParser().parseFromString(txt, 'image/svg+xml')
        const svg = doc.documentElement
        mapRef.current.replaceChildren(svg)
      })
      .catch(() => {})
    return () => { alive = false }
  }, [])
  return (
    <section className="uni section-pad">
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-lg-3" data-aos="fade-up">
            <h2 className="sec-title">University destinations</h2>
            <p>Fairview graduates leave with the results, skills and confidence to earn places at
              leading universities worldwide.</p>
            {uniStats.map(s => (
              <div className="uni-stat" key={s.label}>
                <span className="uni-stat__value count-text" data-count={s.value}>{s.value}</span>
                <span className="uni-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="uni-tabs">
              {uniRegions.map(r => (
                <button key={r.key} className={region.key === r.key ? 'is-active' : ''}
                  onClick={() => setRegion(r)}>{r.label}</button>
              ))}
            </div>
            <div ref={mapRef} className="uni-map" data-active={region.key} role="img"
              aria-label={`Map with ${region.label} highlighted`} />
          </div>
          <div className="col-12 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div className="uni-list">
              {uniList[region.label].map(u => (
                <div className="uni-list__group" key={u.country}>
                  <h4>{u.country}</h4>
                  <ul>{u.schools.map(s => <li key={s}>{s}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- testimonial + avatars ---------- */
function Voices() {
  const t = testimonials[0]
  return (
    <section className="voices section-pad">
      <div className="container">
        <div className="voices__card row align-items-center g-0" data-aos="zoom-in-up">
          <div className="col-12 col-md-4 voices__photo"><img src={t.photo} alt={t.name} loading="lazy" /></div>
          <div className="col-12 col-md-8 voices__body">
            <p className="voices__quote">{t.quote}</p>
            <div className="voices__by"><strong>{t.name}</strong><span>{t.year}</span></div>
            <a href="#" className="voices__watch">▶ Watch video review</a>
            <span className="voices__mark">”</span>
          </div>
        </div>
        <div className="voices__avatars" data-aos="fade-up" data-aos-delay="100">
          <Swiper modules={[Autoplay]} slidesPerView="auto" spaceBetween={20} grabCursor loop
            autoplay={{ delay: 2200, disableOnInteraction: false }} speed={600} className="cursor-drag-slider">
            {avatars.concat(avatars).map((a, i) => (
              <SwiperSlide key={i} className="avatar-slide">
                <img src={a} alt="" loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

/* ---------- IB Learner Profile wheel ----------
   Large ring with the five attribute clusters set as curved text around it.
   Selecting a cluster spins it to the top; the centre shows its description. */
const WHEEL = { cx: 280, cy: 280, R: 250, TR: 250 }
const wheelPoint = (deg, r = WHEEL.TR) => {
  const a = (deg * Math.PI) / 180
  return [WHEEL.cx + r * Math.cos(a), WHEEL.cy + r * Math.sin(a)]
}
// clockwise arc centred on `deg`, wide enough to seat a word
const wheelArc = (deg, span = 58) => {
  const [x1, y1] = wheelPoint(deg - span / 2)
  const [x2, y2] = wheelPoint(deg + span / 2)
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${WHEEL.TR} ${WHEEL.TR} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`
}

function Skills() {
  const [i, setI] = useState(0)
  const s = skills[i]
  const step = 360 / skills.length
  const move = d => setI((i + d + skills.length) % skills.length)
  return (
    <section className="skills section-pad">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <h2 className="sec-title sec-title--center">The IB Learner Profile</h2>
          <p className="skills__lead">At the heart of every IB programme are ten attributes that shape how Fairview
            students think, communicate and act. Explore the five clusters we nurture at every stage of the journey.</p>
        </div>
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-5" data-aos="fade-up">
            <span className="skills__cat" style={{ color: s.color }}>{s.key}</span>
            <div className="skills__cards">
              {s.items.map(it => (
                <div className="skill-card" key={it.title} style={{ borderColor: s.color }}>
                  <h4>{it.title}</h4>
                  <p>{it.text}</p>
                </div>
              ))}
            </div>
            <div className="skills__nav">
              <button onClick={() => move(-1)} aria-label="Previous cluster">&#8592;</button>
              <button onClick={() => move(1)} aria-label="Next cluster">&#8594;</button>
            </div>
          </div>
          <div className="col-12 col-lg-7" data-aos="zoom-in" data-aos-delay="100">
            <div className="wheel">
              <svg viewBox="0 0 560 560" className="wheel__svg" role="group" aria-label="IB Learner Profile clusters">
                <defs>
                  {skills.map((sk, idx) => (
                    <path key={sk.key} id={`arc-${idx}`} d={wheelArc(-90 + idx * step)} fill="none" />
                  ))}
                </defs>
                <circle className="wheel__ring" cx={WHEEL.cx} cy={WHEEL.cy} r={WHEEL.R} fill="none" />
                {/* active indicator dot, fixed at the top of the ring */}
                <circle className="wheel__dot" cx={WHEEL.cx} cy={WHEEL.cy - WHEEL.R} r="16" fill={s.color} />
                {/* rotating group brings the active cluster to the top */}
                <g className="wheel__labels" style={{ transform: `rotate(${-i * step}deg)`, transformOrigin: `${WHEEL.cx}px ${WHEEL.cy}px` }}>
                  {skills.map((sk, idx) => (
                    <text key={sk.key} className={`wheel__label ${idx === i ? 'is-active' : ''}`}
                      fill={sk.color} onClick={() => setI(idx)}>
                      <textPath href={`#arc-${idx}`} startOffset="50%" textAnchor="middle">{sk.key}</textPath>
                    </text>
                  ))}
                </g>
                <foreignObject x="150" y="200" width="260" height="180">
                  <p className="wheel__blurb">{s.blurb}</p>
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- global learning community ---------- */
function Community() {
  return (
    <section className="community section-pad">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <h2 className="sec-title sec-title--center">Our learning community</h2>
          <p className="community__lead">Across every Fairview campus we share one purpose: to grow the world’s most
            curious, confident and caring minds.</p>
        </div>
        <div className="row g-4 justify-content-center">
          {community.map((c, idx) => (
            <div className="col-6 col-lg-3" key={c.label} data-aos="fade-in" data-aos-delay={250 + idx * 250}>
              <div className="comm-card">
                <span className="comm-card__icon">{c.icon}</span>
                <span className="comm-card__value count-text" data-count={c.value}>{c.value}</span>
                <span className="comm-card__label">{c.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- enquire form ---------- */
function Enquire() {
  return (
    <section className="enquire section-pad" id="enquire">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <h2 className="sec-title sec-title--center">Enquire now</h2>
          <p>Fill in your details and we’ll help you find the best fit for your child.</p>
        </div>
        <form className="enquire__form" data-aos="fade-up" data-aos-delay="100" onSubmit={e => e.preventDefault()}>
          <div className="row g-3">
            <div className="col-12 col-md-6"><label>First Name*</label><input required /></div>
            <div className="col-12 col-md-6"><label>Last Name*</label><input required /></div>
            <div className="col-12 col-md-6"><label>Email Address*</label><input type="email" required /></div>
            <div className="col-12 col-md-6"><label>Phone number*</label><input required /></div>
            <div className="col-12 col-md-6"><label>Preferred School</label>
              <select defaultValue=""><option value="" disabled>Please Select</option>{campuses.map(c => <option key={c.name}>{c.name}</option>)}</select></div>
            <div className="col-12 col-md-6"><label>Entry year</label>
              <select defaultValue=""><option value="" disabled>Please Select</option><option>2026</option><option>2027</option></select></div>
            <div className="col-12"><label>Message</label><textarea rows="4" /></div>
            <div className="col-12"><button className="btn-pill" type="submit">Submit</button></div>
          </div>
        </form>
      </div>
    </section>
  )
}

/* ---------- footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer__grid g-4">
          <div className="col-12 col-lg-4 footer__brand">
            <Logo light />
            <p>Where potential takes flight — a top global IB world school since 1978.</p>
          </div>
          <div className="col-6 col-lg-3">
            <h4>Our Campuses</h4>
            <ul>{footerLinks.schools.map(s => <li key={s}><a href="#">{s}</a></li>)}</ul>
          </div>
          <div className="col-6 col-lg-2">
            <h4>Quick links</h4>
            <ul>{footerLinks.useful.map(s => <li key={s}><a href="#">{s}</a></li>)}</ul>
          </div>
          <div className="col-12 col-lg-3 footer__contact">
            <h4>Contact info</h4>
            <p className="footer__phone"><a href="tel:+60341420888">+603-4142 0888</a></p>
            <p className="footer__phone"><a href="mailto:enquiries@fairview.edu.my">enquiries@fairview.edu.my</a></p>
            <a href="#enquire" className="btn-pill btn-pill--sm">Enquire now</a>
          </div>
        </div>
        <div className="footer__bar">
          <span>© {new Date().getFullYear()} Fairview International School. All Rights Reserved.</span>
          <span className="footer__isp">A Top Global IB World School in Malaysia</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    const id = requestAnimationFrame(() => initAnimations())
    return () => cancelAnimationFrame(id)
  }, [])
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Campus />
        <University />
        <Voices />
        <Skills />
        <Community />
        <Enquire />
      </main>
      <Footer />
    </>
  )
}

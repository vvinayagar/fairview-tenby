import AOS from 'aos'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function parseCount(text) {
  const m = text.trim().match(/^([^\d]*)([\d.,]+)\s*([a-zA-Z%+]*)$/)
  if (!m) return null
  const num = parseFloat(m[2].replace(/,/g, ''))
  if (isNaN(num)) return null
  return { prefix: m[1] || '', num, suffix: m[3] || '', hasComma: m[2].includes(',') }
}
const format = (n, meta) => meta.prefix + (meta.hasComma ? Math.round(n).toLocaleString('en-US') : Math.round(n)) + meta.suffix

export function initAnimations() {
  // Reveals via AOS — the same library the live Tenby site uses
  // (fade-up default, zoom-in on media, staggered delays).
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 90,
    disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  })

  // Count-up numbers (kept on GSAP ScrollTrigger)
  ScrollTrigger.getAll().forEach(t => t.kill())
  gsap.utils.toArray('.count-text').forEach(el => {
    const meta = parseCount(el.dataset.count || el.textContent)
    if (!meta) return
    const final = el.textContent
    el.textContent = format(0, meta)
    const obj = { v: 0 }
    ScrollTrigger.create({
      trigger: el, start: 'top 92%', once: true,
      onEnter: () => gsap.to(obj, {
        v: meta.num, duration: 2, ease: 'power1.out',
        onUpdate: () => { el.textContent = format(obj.v, meta) },
        onComplete: () => { el.textContent = final },
      }),
    })
  })

  // Recompute AOS positions once images/fonts settle
  const refresh = () => AOS.refreshHard()
  window.addEventListener('load', refresh)
  setTimeout(refresh, 1200)
}

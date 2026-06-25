import { useEffect } from 'react'
import Lenis from 'lenis'
import { scrollRef } from '../lib/scroll.js'

/* Lenis smooth scroll — cijela stranica klizi maslac-glatko.
   Poštuje prefers-reduced-motion (tada se ne aktivira). */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    })
    scrollRef.current = lenis

    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      scrollRef.current = null
    }
  }, [])

  return null
}

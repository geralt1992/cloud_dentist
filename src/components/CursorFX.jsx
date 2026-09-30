import { useEffect, useRef } from 'react'

/* Diskretan custom kursor (zlatni prsten koji s blagim kašnjenjem prati miš)
   + magnetni gumbi (.btn se lagano "privlače" mišu).
   Aktivno samo na uređajima s preciznim pokazivačem (ne dira mobitele). */
export default function CursorFX() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer:fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches
    if (!fine) return

    document.body.classList.add('has-cursor-fx')
    const d = dot.current
    const r = ring.current

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let magnetEl = null
    let raf = 0

    // transform umjesto left/top → bez layouta; prsten se animira samo dok ne sustigne miš
    const place = (el, x, y) => {
      if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
    }
    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      place(r, rx, ry)
      raf = Math.abs(mx - rx) + Math.abs(my - ry) > 0.2 ? requestAnimationFrame(loop) : 0
    }

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      place(d, mx, my)
      if (!raf) raf = requestAnimationFrame(loop)

      // magnetni gumbi
      const btn = e.target.closest && e.target.closest('.btn')
      if (btn !== magnetEl) {
        if (magnetEl) magnetEl.style.transform = ''
        magnetEl = btn
        r && r.classList.toggle('hover', !!btn)
      }
      if (magnetEl && !reduce) {
        const b = magnetEl.getBoundingClientRect()
        const dx = e.clientX - (b.left + b.width / 2)
        const dy = e.clientY - (b.top + b.height / 2)
        magnetEl.style.transform = `translate(${dx * 0.22}px, ${dy * 0.3}px)`
      }
    }

    const onOver = (e) => {
      const interactive = e.target.closest && e.target.closest('a, button, .gi, input, select, [role="slider"]')
      r && r.classList.toggle('active', !!interactive)
    }

    place(d, mx, my)
    place(r, rx, ry)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-cursor-fx')
      if (magnetEl) magnetEl.style.transform = ''
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cur-dot" aria-hidden="true" />
      <div ref={ring} className="cur-ring" aria-hidden="true" />
    </>
  )
}

import { useRef, useState, useCallback, useEffect } from 'react'
import FadeUp from '../components/FadeUp.jsx'

/* Interaktivni "prije / poslije" kliznik preko slike osmijeha.
   Povuci ručku (ili klikni/dodirni) da otkriješ transformaciju. */
// BEFORE = krivi zubi / aparatić (prije ortodoncije), AFTER = ravni bijeli osmijeh (poslije)
const BEFORE = 'https://images.pexels.com/photos/5524024/pexels-photo-5524024.jpeg?auto=compress&cs=tinysrgb&w=1100'
const AFTER = 'https://images.pexels.com/photos/3762441/pexels-photo-3762441.jpeg?auto=compress&cs=tinysrgb&w=1100'

export default function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const wrap = useRef(null)
  const drag = useRef(false)

  const move = useCallback((clientX) => {
    const el = wrap.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = Math.min(Math.max(clientX - r.left, 0), r.width)
    setPos((x / r.width) * 100)
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      if (!drag.current) return
      move(e.touches ? e.touches[0].clientX : e.clientX)
    }
    const onUp = () => (drag.current = false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [move])

  const start = (e) => {
    drag.current = true
    move(e.touches ? e.touches[0].clientX : e.clientX)
  }

  return (
    <section className="ba-sec section" id="rezultati">
      <div className="container">
        <div className="ba-hdr">
          <FadeUp>
            <div className="lbl" style={{ justifyContent: 'center' }}>
              <span>Prije / Poslije</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="ba-h2">
              Transformacije koje
              <br />
              <em className="gold-text">govore same za sebe</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="ba-sub">Povucite kliznik i otkrijte razliku — stvarni rezultati naših pacijenata.</p>
          </FadeUp>
        </div>

        <FadeUp delay={0.24}>
          <div
            className="ba-wrap"
            ref={wrap}
            onMouseDown={start}
            onTouchStart={start}
            role="slider"
            aria-label="Prije i poslije kliznik"
            aria-valuenow={Math.round(pos)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4))
              if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4))
            }}
          >
            <img className="ba-img ba-after" src={AFTER} alt="Osmijeh poslije tretmana" draggable="false" />
            <img
              className="ba-img ba-before"
              src={BEFORE}
              alt="Osmijeh prije tretmana"
              draggable="false"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            />
            <span className="ba-tag ba-tag-before">Prije</span>
            <span className="ba-tag ba-tag-after">Poslije</span>
            <div className="ba-handle" style={{ left: `${pos}%` }}>
              <div className="ba-line" />
              <div className="ba-knob">
                <span>‹</span>
                <span>›</span>
              </div>
              <div className="ba-line" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

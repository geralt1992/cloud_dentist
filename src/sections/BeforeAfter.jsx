import { useRef, useState, useCallback, useEffect } from 'react'
import FadeUp from '../components/FadeUp.jsx'
import Img from '../components/Img.jsx'
import { pexels } from '../lib/img.js'

/* Interaktivni "prije / poslije" kliznik preko slike osmijeha.
   Povuci ručku (ili klikni/dodirni) da otkriješ transformaciju.
   Obje strane su ISTA fotografija (ista osoba, isti kadar); "prije" prolazi kroz
   SVG filter koji požuti samo najsvjetlije tonove (zube), a kožu gotovo ne dira.
   Kad klijent ima svoje prave fotke, zamijeni SMILE i makni filter. */
const SMILE = pexels(3762441)
const WIDTHS = [700, 1100, 1500]
const SIZES = '(max-width: 960px) 100vw, 920px'

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
            <p className="ba-sub">Povucite kliznik i otkrijte razliku koju donosi profesionalno bijeljenje.</p>
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
            <Img
              className="ba-img"
              src={SMILE}
              widths={WIDTHS}
              sizes={SIZES}
              alt="Osmijeh poslije bijeljenja"
              draggable="false"
              loading="lazy"
            />
            <div className="ba-before-clip" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <Img
                className="ba-img ba-before"
                src={SMILE}
                widths={WIDTHS}
                sizes={SIZES}
                alt="Osmijeh prije bijeljenja"
                draggable="false"
                loading="lazy"
              />
            </div>
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
          <p className="ba-note">Ilustrativni prikaz</p>
        </FadeUp>
      </div>

      {/* "Požutjeli zubi": tablice spuštaju plavi (i malo zeleni) kanal samo u svijetlim tonovima */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
        <filter id="ba-stain" colorInterpolationFilters="sRGB">
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0 .125 .25 .375 .5 .625 .75 .87 .96" />
            <feFuncG type="table" tableValues="0 .125 .25 .375 .5 .62 .73 .82 .89" />
            <feFuncB type="table" tableValues="0 .125 .25 .37 .48 .56 .6 .63 .66" />
          </feComponentTransfer>
        </filter>
      </svg>
    </section>
  )
}

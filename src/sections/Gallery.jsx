import { useState, useEffect, useCallback } from 'react'
import FadeUp from '../components/FadeUp.jsx'
import Img from '../components/Img.jsx'
import { pexels } from '../lib/img.js'

/* Svaki opis provjeren prema onome što je stvarno na slici.
   Redoslijed prati mrežu: 1 i 5 široke, 2 i 4 uske, 3 visoka (portret). */
const IMAGES = [
  { src: pexels(6812453), alt: 'Moderna ordinacija', sizes: '(max-width: 768px) 50vw, 540px' },
  { src: pexels(3881449), alt: 'Pažljiv pregled', sizes: '(max-width: 768px) 50vw, 330px' },
  { src: pexels(6554598), alt: 'Blistav osmijeh', sizes: '(max-width: 768px) 100vw, 440px' },
  { src: pexels(3845810), alt: 'Opuštena atmosfera', sizes: '(max-width: 768px) 50vw, 330px', pos: '25% 50%' },
  { src: pexels(5355903), alt: 'Timski rad', sizes: '(max-width: 768px) 50vw, 540px' },
]

export default function Gallery() {
  // null = zatvoreno; broj = indeks otvorene slike
  const [active, setActive] = useState(null)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback((e) => {
    e?.stopPropagation()
    setActive((i) => (i + 1) % IMAGES.length)
  }, [])
  const prev = useCallback((e) => {
    e?.stopPropagation()
    setActive((i) => (i - 1 + IMAGES.length) % IMAGES.length)
  }, [])

  // Tipkovnica + zaključavanje scrolla dok je lightbox otvoren
  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [active, close, next, prev])

  return (
    <section className="gal-sec section" id="galerija">
      <div className="container">
        <FadeUp>
          <div className="lbl" style={{ justifyContent: 'center' }}>
            <span>Galerija</span>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="gal-h2">
            Naša ordinacija &amp;
            <br />
            <em>zadovoljni pacijenti</em>
          </h2>
        </FadeUp>
        <FadeUp delay={0.18}>
          <p className="gal-sub">Moderan prostor, vrhunska oprema i tim koji brine o svakom detalju.</p>
        </FadeUp>
      </div>
      <FadeUp delay={0.26}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>
          <div className="gal-grid">
            {IMAGES.map((img, i) => (
              <button
                type="button"
                className="gi"
                key={img.alt}
                onClick={() => setActive(i)}
                aria-label={`Otvori sliku: ${img.alt}`}
              >
                <Img
                  src={img.src}
                  widths={[400, 700, 1100]}
                  sizes={img.sizes}
                  alt={img.alt}
                  loading="lazy"
                  style={img.pos ? { objectPosition: img.pos } : undefined}
                />
                <div className="gi-ov">
                  <span>{img.alt}</span>
                  <span className="gi-zoom">⤢</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </FadeUp>

      {active !== null && (
        <div className="lbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lbox-close" onClick={close} aria-label="Zatvori">×</button>
          <button className="lbox-nav lbox-prev" onClick={prev} aria-label="Prethodna">‹</button>
          <figure className="lbox-fig" onClick={(e) => e.stopPropagation()}>
            <Img src={IMAGES[active].src} widths={[800, 1300, 1900]} sizes="90vw" alt={IMAGES[active].alt} />
            <figcaption>{IMAGES[active].alt}</figcaption>
          </figure>
          <button className="lbox-nav lbox-next" onClick={next} aria-label="Sljedeća">›</button>
          <span className="lbox-count">{active + 1} / {IMAGES.length}</span>
        </div>
      )}
    </section>
  )
}

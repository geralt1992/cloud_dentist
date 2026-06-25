import { useState, useEffect, useCallback } from 'react'
import FadeUp from '../components/FadeUp.jsx'

const IMAGES = [
  ['https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=900', 'Moderna ordinacija'],
  ['https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600', 'Stručni pregled'],
  ['https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=800', 'Savršen osmijeh'],
  ['https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=700', 'Sretna pacijentica'],
  ['https://images.pexels.com/photos/3762940/pexels-photo-3762940.jpeg?auto=compress&cs=tinysrgb&w=900', 'Tim stručnjaka'],
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
          <p className="gal-sub">Svaki osmijeh je jedinstvena priča. Pogledajte dio naših transformacija.</p>
        </FadeUp>
      </div>
      <FadeUp delay={0.26}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>
          <div className="gal-grid">
            {IMAGES.map(([src, alt], i) => (
              <button
                type="button"
                className="gi"
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Otvori sliku: ${alt}`}
              >
                <img src={src} alt={alt} loading="lazy" />
                <div className="gi-ov">
                  <span>{alt}</span>
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
            <img src={IMAGES[active][0]} alt={IMAGES[active][1]} />
            <figcaption>{IMAGES[active][1]}</figcaption>
          </figure>
          <button className="lbox-nav lbox-next" onClick={next} aria-label="Sljedeća">›</button>
          <span className="lbox-count">{active + 1} / {IMAGES.length}</span>
        </div>
      )}
    </section>
  )
}

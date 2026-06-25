import FadeUp from '../components/FadeUp.jsx'

/* Traka tehnologija / certifikata / partnera — gradi autoritet u par sekundi.
   NAPOMENA: ovo su uobičajeni dentalni brendovi kao placeholderi.
   Prije objave uskladi popis sa stvarnim partnerima/certifikatima klijenta. */
const ITEMS = [
  'Straumann',
  'Nobel Biocare',
  'Dentsply Sirona',
  'Invisalign',
  'Ivoclar',
  'Planmeca',
  '3M',
  'KaVo',
  'iTero',
  'W&H',
  'NSK',
  'VITA',
]

export default function TrustedBy() {
  // dupliramo niz da marquee teče bez šava
  const loop = [...ITEMS, ...ITEMS]
  return (
    <section className="trust-strip" aria-label="Partneri i certifikati">
      <div className="container">
        <FadeUp>
          <p className="trust-cap">Partneri i brendovi s kojima surađujemo s povjerenjem</p>
        </FadeUp>
      </div>
      <div className="trust-marquee">
        <div className="trust-track">
          {loop.map((t, i) => (
            <span className="trust-logo" key={i} aria-hidden={i >= ITEMS.length}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

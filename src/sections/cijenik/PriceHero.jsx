import { Link } from 'react-router-dom'
import PricingHeroCanvas from '../../components/PricingHeroCanvas.jsx'
import FadeUp from '../../components/FadeUp.jsx'

export default function PriceHero() {
  return (
    <section className="page-hero">
      <PricingHeroCanvas />
      <div className="page-hero-grad" />
      <div className="container page-hero-c">
        <FadeUp>
          <Link to="/" className="back-link">
            ← Povratak na početnu
          </Link>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1>
            Transparentni
            <br />
            <em className="gold-text">cjenik usluga</em>
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="page-hero-sub">
            Vjerujemo u potpunu transparentnost. Sve cijene su jasno navedene — bez skrivenih troškova, bez iznenađenja. Svaki tretman prilagođavamo vašim potrebama i budžetu.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="page-hero-note">
            <strong>ℹ</strong>
            <span>
              Sve cijene su okvirne. Točna cijena utvrđuje se nakon pregleda i individualne procjene.
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

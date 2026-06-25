import FadeUp from '../components/FadeUp.jsx'
import SmartLink from '../components/SmartLink.jsx'
import { useClient } from '../client/ClientContext.jsx'

export default function Hero() {
  const c = useClient()
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-grad" />
      <div className="container hero-c">
        <div style={{ maxWidth: 680 }}>
          <FadeUp>
            <div className="hero-badge">
              <div className="hero-dot" />
              <span>{c.heroBadge}</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="hero-name">
              <span className="hero-name-mark" />
              <span className="hero-name-txt">{c.name}</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.14}>
            <h1 className="hero-h1">
              <span className="gold-text">Osmijeh</span>
              <br />
              koji traje
              <br />
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>cijeli život</em>
            </h1>
          </FadeUp>
          <FadeUp delay={0.22}>
            <p className="hero-sub">
              Moderna stomatologija namijenjena vama. Kombiniramo najnoviju tehnologiju s brižnim pristupom za savršene rezultate koji nadilaze sva očekivanja.
            </p>
          </FadeUp>
          <FadeUp delay={0.32}>
            <div className="hero-acts">
              <SmartLink to="/#kontakt" className="btn btn-gold">
                Zakaži pregled →
              </SmartLink>
              <SmartLink to="/#usluge" className="btn btn-outline">
                Naše usluge
              </SmartLink>
            </div>
          </FadeUp>
          <FadeUp delay={0.42}>
            <div className="hero-trust">
              <div className="hero-stat">
                <strong>4.9<span className="hero-star">★</span></strong>
                <span>Prosječna ocjena</span>
              </div>
              <div className="hero-trust-div" />
              <div className="hero-stat">
                <strong>{c.yearsTag}</strong>
                <span>{c.yearsLabel}</span>
              </div>
              <div className="hero-trust-div" />
              <div className="hero-stat">
                <strong>100<span className="hero-star">%</span></strong>
                <span>Bezbolna terapija</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
      <div className="scroll-ind">
        <span className="scroll-t">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

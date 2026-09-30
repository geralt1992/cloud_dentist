import FadeUp from '../components/FadeUp.jsx'
import SmartLink from '../components/SmartLink.jsx'
import { useClient } from '../client/ClientContext.jsx'
import { PACKAGES } from '../data/pricing.js'

/* Isti paketi kao na stranici /cijenik (src/data/pricing.js) — nazivi i cijene se ne razilaze. */
export default function Pricing() {
  const { isDemo } = useClient()
  return (
    <section className="prc-sec section" id="cijene">
      <div className="container">
        <div className="prc-hdr">
          <FadeUp>
            <div className="lbl" style={{ justifyContent: 'center' }}>
              <span>Cjenik</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="prc-h2">
              Transparentne cijene
              <br />
              <em className="gold-text">bez skrivenih troškova</em>
            </h2>
          </FadeUp>
        </div>
        <div className="prc-grid">
          {PACKAGES.map((p, i) => (
            <FadeUp key={p.nm} delay={i * 0.14}>
              <div className={`prc-card${p.feat ? ' feat' : ''}`}>
                {p.feat && <div className="prc-badge">Najpopularnije</div>}
                <div className="prc-nm">{p.nm}</div>
                <div className="prc-pr">{p.price}</div>
                <div className="prc-pd">{p.period}</div>
                <ul className="prc-feats">
                  {p.fs.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <SmartLink
                  to="/#kontakt"
                  className={`btn ${p.feat ? 'btn-gold' : 'btn-outline'}`}
                  style={{ display: 'block', textAlign: 'center', justifyContent: 'center' }}
                >
                  Rezervirajte →
                </SmartLink>
              </div>
            </FadeUp>
          ))}
        </div>
        {/* Demo je jedna stranica — zasebni cjenik postoji samo na pravom sajtu */}
        {!isDemo && (
          <FadeUp delay={0.2} style={{ textAlign: 'center', marginTop: 48 }}>
            <SmartLink to="/cijenik" className="btn btn-outline">
              Pogledajte cijeli cjenik →
            </SmartLink>
          </FadeUp>
        )}
      </div>
    </section>
  )
}

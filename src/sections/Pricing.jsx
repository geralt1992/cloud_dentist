import FadeUp from '../components/FadeUp.jsx'
import SmartLink from '../components/SmartLink.jsx'

const PLANS = [
  {
    nm: 'Osnovno',
    pr: 'Od 80€',
    pd: 'po pregledu',
    feat: false,
    fs: ['Preventivni pregled', 'Rendgenski snimak', 'Čišćenje zubnog kamenca', 'Savjetovanje', 'Plan terapije'],
  },
  {
    nm: 'Premium',
    pr: 'Od 250€',
    pd: 'po tretmanu',
    feat: true,
    fs: ['Sve iz Osnovno paketa', 'Profesionalno bijeljenje', 'Estetsko punjenje', 'Prioritetno zakazivanje', '6-mj. kontrolni pregled'],
  },
  {
    nm: 'Smile Design',
    pr: 'Po dogovoru',
    pd: 'individualni plan',
    feat: false,
    fs: ['Digitalni smile design', 'Kompletna rekonstrukcija', 'Implantati / furnir', 'Keramičke krunice', 'Doživotna garancija'],
  },
]

export default function Pricing() {
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
          {PLANS.map((p, i) => (
            <FadeUp key={i} delay={i * 0.14}>
              <div className={`prc-card${p.feat ? ' feat' : ''}`}>
                {p.feat && <div className="prc-badge">Najpopularnije</div>}
                <div className="prc-nm">{p.nm}</div>
                <div className="prc-pr">{p.pr}</div>
                <div className="prc-pd">{p.pd}</div>
                <ul className="prc-feats">
                  {p.fs.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <SmartLink
                  to="/#kontakt"
                  className={`btn ${p.feat ? 'btn-gold' : 'btn-outline'}`}
                  style={{ display: 'block', textAlign: 'center', justifyContent: 'center' }}
                >
                  Rezerviraj →
                </SmartLink>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.2} style={{ textAlign: 'center', marginTop: 48 }}>
          <SmartLink to="/cijenik" className="btn btn-outline">
            Pogledaj cijeli cjenik →
          </SmartLink>
        </FadeUp>
      </div>
    </section>
  )
}

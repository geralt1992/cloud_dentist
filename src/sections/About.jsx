import FadeUp from '../components/FadeUp.jsx'
import SmartLink from '../components/SmartLink.jsx'
import { useClient } from '../client/ClientContext.jsx'

const FEATURES = [
  'Specijalist estetske stomatologije',
  'Certificirana za Digital Smile Design',
  'Laser stomatologija',
  'Bezbolna terapija',
  'Sedacija za anksiozne pacijente',
  'Digitalni rendgen (niža doza)',
]

export default function About() {
  const c = useClient()
  return (
    <section className="abt section" id="o-nama">
      <div className="container">
        <div className="abt-grid">
          <FadeUp>
            <div className="abt-img-wrap" style={{ paddingBottom: 28, paddingRight: 18 }}>
              <div className="abt-frame" />
              <img src={c.photo} alt={c.doctor} className="abt-img" loading="lazy" />
              <div className="abt-tag">
                <div className="abt-tag-n">{c.yearsTag}</div>
                <div className="abt-tag-l">{c.yearsLabel}</div>
              </div>
            </div>
          </FadeUp>
          <div>
            <FadeUp delay={0.1}>
              <div className="lbl">
                <span>O nama</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.18}>
              <h2 className="abt-h2">
                {c.doctor} —
                <br />
                <em className="gold-text">Vaš povjerenik</em>
                <br />
                u stomatologiji
              </h2>
            </FadeUp>
            <FadeUp delay={0.26}>
              <div className="divider" />
              {c.bio.map((para, i) => (
                <p className="abt-txt" key={i}>
                  {para}
                </p>
              ))}
            </FadeUp>
            <FadeUp delay={0.34}>
              <div className="abt-feats">
                {FEATURES.map((f, i) => (
                  <div className="abt-feat" key={i}>
                    <div className="abt-dot" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.42}>
              <SmartLink to="/#kontakt" className="btn btn-gold">
                Rezerviraj konzultaciju →
              </SmartLink>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}

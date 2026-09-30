import FadeUp from '../components/FadeUp.jsx'
import SmartLink from '../components/SmartLink.jsx'
import Img from '../components/Img.jsx'
import { useClient } from '../client/ClientContext.jsx'
import { highlightStat } from '../lib/format.js'

// Rodno neutralno — isti popis stoji uz doktora i uz doktoricu.
const FEATURES = [
  'Estetska stomatologija i Digital Smile Design',
  'Laserska stomatologija',
  'Bezbolna terapija',
  'Sedacija za anksiozne pacijente',
  'Digitalni RTG (niža doza zračenja)',
  '3D skeniranje bez otisaka',
]

export default function About() {
  const c = useClient()
  const hl = highlightStat(c)
  return (
    <section className="abt section" id="o-nama">
      <div className="container">
        <div className="abt-grid">
          <FadeUp>
            <div className="abt-img-wrap" style={{ paddingBottom: 28, paddingRight: 18 }}>
              <div className="abt-frame" />
              <Img
                src={c.photo}
                widths={[500, 800, 1100]}
                sizes="(max-width: 1024px) 500px, 45vw"
                alt={c.doctor}
                className="abt-img"
                loading="lazy"
              />
              <div className="abt-tag">
                <div className="abt-tag-n">{hl.value}</div>
                <div className="abt-tag-l">{hl.label}</div>
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
                <em className="gold-text">stručnost kojoj</em>
                <br />
                možete vjerovati
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
                {FEATURES.map((f) => (
                  <div className="abt-feat" key={f}>
                    <div className="abt-dot" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.42}>
              <SmartLink to="/#kontakt" className="btn btn-gold">
                Rezervirajte konzultaciju →
              </SmartLink>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}

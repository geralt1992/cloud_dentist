import FadeUp from '../components/FadeUp.jsx'
import SmartLink from '../components/SmartLink.jsx'
import { useClient } from '../client/ClientContext.jsx'

export default function CTAStrip() {
  const c = useClient()
  return (
    <section className="cta-strip">
      <div className="cta-glow" />
      <div className="container cta-inner">
        <FadeUp>
          <div className="cta-orn">
            <span className="cta-orn-line" />
            <span className="cta-orn-mark">✦</span>
            <span className="cta-orn-line" />
          </div>
        </FadeUp>
        <FadeUp delay={0.12}>
          <h2 className="cta-title">
            Savršen osmijeh
            <br />
            <em className="cta-gold">počinje jednim pozivom</em>
          </h2>
        </FadeUp>
        <FadeUp delay={0.22}>
          <p className="cta-p">Zakažite besplatnu konzultaciju — javljamo se unutar 24 sata.</p>
        </FadeUp>
        <FadeUp delay={0.32}>
          <div className="cta-acts">
            <SmartLink to="/#kontakt" className="btn btn-gold">
              Zakaži termin →
            </SmartLink>
            <a className="cta-phone" href={`tel:${c.contact.phoneHref}`}>
              ili nazovite <em>{c.contact.phone}</em>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

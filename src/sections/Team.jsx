import FadeUp from '../components/FadeUp.jsx'
import Tilt from '../components/Tilt.jsx'
import Img from '../components/Img.jsx'
import { useClient } from '../client/ClientContext.jsx'

/* Ljudi biraju ljude. Voditelj/ica i ostatak tima dolaze iz podataka klijenta
   (src/data/clients.js); fotografije su već usklađene sa spolom. */
export default function Team() {
  const c = useClient()
  const members = [
    {
      name: c.doctor,
      role: c.leadRole || (c.gender === 'f' ? 'Voditeljica ordinacije' : 'Voditelj ordinacije'),
      photo: c.photo,
      detail: c.leadDetail || 'Estetska i rekonstruktivna stomatologija s individualnim pristupom svakom osmijehu.',
    },
    ...c.team,
  ]

  return (
    <section className="team-sec section" id="tim">
      <div className="container">
        <div className="team-hdr">
          <FadeUp>
            <div className="lbl" style={{ justifyContent: 'center' }}>
              <span>Naš tim</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="team-h2">
              Stručnjaci kojima
              <br />
              <em className="gold-text">predajete svoj osmijeh</em>
            </h2>
          </FadeUp>
        </div>

        <div className="team-grid">
          {members.map((m, i) => (
            <FadeUp key={m.name} delay={i * 0.12}>
              <Tilt className="team-card" max={5}>
                <div className="team-photo">
                  <Img
                    src={m.photo}
                    widths={[400, 700, 1000]}
                    sizes="(max-width: 680px) 380px, (max-width: 900px) 45vw, 360px"
                    alt={m.name}
                    loading="lazy"
                  />
                  <div className="team-reveal">
                    <p>{m.detail}</p>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{m.name}</h3>
                  <span className="team-role">{m.role}</span>
                </div>
              </Tilt>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

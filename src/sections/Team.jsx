import FadeUp from '../components/FadeUp.jsx'
import Tilt from '../components/Tilt.jsx'
import { useClient } from '../client/ClientContext.jsx'

/* Ljudi biraju ljude. Voditelj se povlači iz podataka klijenta;
   ostali članovi su generički placeholderi (zamijeni stvarnim timom po želji). */
const EXTRA = [
  {
    name: 'dr. med. dent. Iva Marić',
    role: 'Implantologija',
    photo: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=700',
    detail: 'Specijalizirana za zubne implantate i kiruršku stomatologiju s naglaskom na bezbolne tehnike.',
  },
  {
    name: 'dr. med. dent. Luka Novak',
    role: 'Ortodoncija',
    photo: 'https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg?auto=compress&cs=tinysrgb&w=700',
    detail: 'Invisalign i fiksni aparatići — ravnanje zubi prilagođeno svakom pacijentu i životnom stilu.',
  },
]

export default function Team() {
  const c = useClient()
  const members = [
    {
      name: c.doctor,
      role: 'Voditelj ordinacije',
      photo: c.photo,
      detail: 'Estetska i rekonstruktivna stomatologija s individualnim pristupom svakom osmijehu.',
    },
    ...EXTRA,
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
            <FadeUp key={i} delay={i * 0.12}>
              <Tilt className="team-card" max={5}>
                <div className="team-photo">
                  <img src={m.photo} alt={m.name} loading="lazy" />
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

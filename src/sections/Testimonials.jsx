import FadeUp from '../components/FadeUp.jsx'
import ReviewsBadge from '../components/ReviewsBadge.jsx'
import { useClient } from '../client/ClientContext.jsx'
import { pexels } from '../lib/img.js'

/* Izmišljene recenzije (ime + inicijal, da ne odgovaraju nijednoj stvarnoj osobi) — bez imena doktora/ordinacije, da se ništa
   ne kosi s klijentom. Grad se umeće iz podataka (c.cityIn = "Osijeku"). */
const testimonials = (c) => [
  {
    txt: 'Nikada nisam vjerovala da ću se osjećati ovako lijepo s novim osmijehom. Rezultat je nadmašio sva očekivanja — prirodno, elegantno, savršeno.',
    name: 'Maja H.',
    role: 'Marketing direktorica',
    av: pexels(1239291, 120),
  },
  {
    txt: 'Implantati su savršeno usklađeni s mojim prirodnim zubima. Cijeli postupak bio je bezbolniji nego što sam mogao zamisliti. Vrhunska stručnost i ljubaznost.',
    name: 'Tomislav B.',
    role: 'Arhitekt',
    av: pexels(220453, 120),
  },
  {
    txt: `Bijeljenje u jednoj posjeti i razlika je dramatična! Ordinacija je moderna, osoblje profesionalno — ovo mi je jedina adresa za stomatologiju u ${c.cityIn}.`,
    name: 'Petra N.',
    role: 'Poduzetnica',
    av: pexels(774909, 120),
  },
]

export default function Testimonials() {
  const c = useClient()
  return (
    <section className="tst-sec section" id="recenzije">
      <div className="container">
        <div className="tst-hdr">
          <FadeUp>
            <div className="lbl" style={{ justifyContent: 'center' }}>
              <span>Recenzije pacijenata</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="tst-h2">
              Što kažu naši
              <br />
              <em className="gold-text">zadovoljni pacijenti</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.18}>
            <ReviewsBadge />
          </FadeUp>
        </div>
        <div className="tst-grid">
          {testimonials(c).map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.14}>
              <div className="tst-card">
                <div className="tst-q">"</div>
                <div className="tst-stars">★★★★★</div>
                <p className="tst-txt">{t.txt}</p>
                <div className="tst-aut">
                  <div className="tst-av">
                    <img src={t.av} alt={t.name} loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <div className="tst-nm">{t.name}</div>
                    <div className="tst-rl">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

import FadeUp from '../components/FadeUp.jsx'
import ReviewsBadge from '../components/ReviewsBadge.jsx'

const TESTIMONIALS = [
  {
    txt: 'Nikada nisam vjerovala da ću se osjećati ovako lijepo s novim osmijehom. Dr. Kovač je napravila nevjerojatan posao — prirodno, elegantno, savršeno.',
    name: 'Maja Horvat',
    role: 'Marketing direktorica',
    stars: 5,
    av: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    txt: 'Implantati su savršeno usklađeni s mojim prirodnim zubima. Proces je bio bezbolaniji nego što sam ikad mogao zamisliti. Vrhunska stručnost i ljubaznost.',
    name: 'Tomislav Barić',
    role: 'Arhitekt',
    stars: 5,
    av: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    txt: 'Bijeljenje u jednoj sesiji i razlika je dramatična! Ordinacija je moderna, osoblje profesionalno. DentArt je jedina adresa za stomatologiju u Zagrebu.',
    name: 'Petra Nikolić',
    role: 'Poduzetnica',
    stars: 5,
    av: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
]

export default function Testimonials() {
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
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={i} delay={i * 0.14}>
              <div className="tst-card">
                <div className="tst-q">"</div>
                <div className="tst-stars">{'★'.repeat(t.stars)}</div>
                <p className="tst-txt">{t.txt}</p>
                <div className="tst-aut">
                  <div className="tst-av">
                    <img src={t.av} alt={t.name} />
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

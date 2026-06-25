import FadeUp from '../components/FadeUp.jsx'

const STEPS = [
  ['01', 'Konzultacija', 'Upoznajemo vaše želje, analiziramo zdravlje zubi i zajedno definiramo cilj — bez obveze i potpuno besplatno.'],
  ['02', 'Digitalno skeniranje', '3D sken čeljusti i fotodokumentacija. Bez neugodnih otisaka — sve precizno, brzo i bezbolno.'],
  ['03', 'Smile Design', 'Dizajniramo vaš novi osmijeh digitalno i pokazujemo vam rezultat prije nego išta započnemo.'],
  ['04', 'Rezultat', 'Realizacija plana uz vrhunske materijale i kontrolne preglede — osmijeh koji traje godinama.'],
]

export default function Process() {
  return (
    <section className="proc-sec section" id="proces">
      <div className="container">
        <div className="proc-hdr">
          <FadeUp>
            <div className="lbl">
              <span>Kako radimo</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="proc-h2">
              Vaš put do savršenog
              <br />
              <em className="gold-text">osmijeha u 4 koraka</em>
            </h2>
          </FadeUp>
        </div>

        <div className="proc-timeline">
          <div className="proc-line" />
          {STEPS.map(([no, title, desc], i) => (
            <FadeUp key={no} delay={i * 0.12}>
              <div className="proc-step">
                <div className="proc-node">
                  <span>{no}</span>
                </div>
                <div className="proc-body">
                  <h3 className="proc-title">{title}</h3>
                  <p className="proc-desc">{desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

import FadeUp from '../components/FadeUp.jsx'

const SERVICES = [
  ['01', '✦', 'Estetska stomatologija', 'Transformirajte osmijeh krunicama, furnirom i naprednim estetskim tretmanima koji pružaju prirodan, blistav izgled.'],
  ['02', '◈', 'Implantati', 'Trajno rješenje za izgubljene zube. Titanijumski implantati pružaju čvrstoću i izgled savršenih prirodnih zuba.'],
  ['03', '◇', 'Ortodoncija', 'Nevidljivi aparati i klasična terapija za savršeno poravnat osmijeh u svim godinama.'],
  ['04', '✧', 'Bijeljenje zuba', 'Profesionalno bijeljenje do 8 nijansi svjetlije u jednoj posjeti. Dugotrajna i bezbolna metoda.'],
  ['05', '◉', 'Parodontologija', 'Liječenje desni i parodontnih tkiva najsuvremenijim metodama za zdravlje cijele usne šupljine.'],
  ['06', '⬡', 'Dječja stomatologija', 'Opuštena, bezbolna iskustva za naše najmlađe. Gradimo temelje zdravog osmijeha od malih nogu.'],
]

export default function Services() {
  return (
    <section className="svc-sec section" id="usluge">
      <div className="container">
        <div className="svc-hdr">
          <div>
            <FadeUp>
              <div className="lbl">
                <span>Naše usluge</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="svc-h2">
                Kompletan spektar
                <br />
                <em>stomatološke skrbi</em>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="svc-p">
              Svaka usluga prilagođena je vašim individualnim potrebama. Naš tim stručnjaka koristi najnovije tehnologije za iznimne rezultate koji traju.
            </p>
          </FadeUp>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>
        <div className="svc-grid">
          {SERVICES.map(([no, icon, nm, dsc], i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="svc-card">
                <div className="svc-no">{no}</div>
                <div className="svc-icon">{icon}</div>
                <div className="svc-ln" />
                <h3 className="svc-nm">{nm}</h3>
                <p className="svc-dsc">{dsc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

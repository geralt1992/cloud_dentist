import { useState } from 'react'
import FadeUp from '../components/FadeUp.jsx'

const ITEMS = [
  ['Boli li tretman?', 'Radimo s naglaskom na bezbolnu terapiju — koristimo modernu anesteziju, a za anksiozne pacijente nudimo i sedaciju. Većina pacijenata iznenadi se koliko je ugodno.'],
  ['Koliko traje prvi pregled?', 'Prvi pregled i konzultacija traju otprilike 30–45 minuta. Detaljno analiziramo stanje, odgovaramo na pitanja i predlažemo plan terapije — bez obveze.'],
  ['Nudite li plaćanje na rate?', 'Da. Veće zahvate moguće je platiti obročno. Na konzultaciji ćemo proći sve opcije i pronaći rješenje koje vam odgovara.'],
  ['Kako se naručujem?', 'Najjednostavnije telefonom ili putem obrasca na stranici. Javljamo se unutar 24 sata i dogovaramo termin koji vam najbolje odgovara.'],
  ['Primate li hitne slučajeve?', 'Da, trudimo se hitne slučajeve (bol, lom, oteklina) primiti istog dana. Nazovite nas i naći ćemo najbrži mogući termin.'],
]

export default function FaqHome() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faqh-sec section" id="pitanja">
      <div className="container faqh-inner">
        <div className="faqh-aside">
          <FadeUp>
            <div className="lbl">
              <span>Česta pitanja</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="faqh-h2">
              Imate pitanje?
              <br />
              <em className="gold-text">Imamo odgovor.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="faqh-p">Ako ne pronađete odgovor, slobodno nas nazovite — rado pomažemo.</p>
          </FadeUp>
        </div>

        <div className="faqh-list">
          {ITEMS.map(([q, a], i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <div className={`faq-item${open === i ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="fq-text">{q}</span>
                  <div className="fq-icon">+</div>
                </button>
                <div className="faq-a">
                  <p>{a}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

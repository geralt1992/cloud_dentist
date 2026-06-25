import { useState } from 'react'
import FadeUp from '../../components/FadeUp.jsx'
import { FAQ_ITEMS } from '../../data/pricing.js'

function FaqColumn({ items, openIndex, setOpen, offset }) {
  return (
    <div className="faq-list">
      {items.map(([q, a], i) => {
        const idx = i + offset
        return (
          <FadeUp key={idx} delay={i * 0.08}>
            <div className={`faq-item${openIndex === idx ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(openIndex === idx ? null : idx)}>
                <span className="fq-text">{q}</span>
                <div className="fq-icon">+</div>
              </button>
              <div className="faq-a">
                <p>{a}</p>
              </div>
            </div>
          </FadeUp>
        )
      })}
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const half = Math.ceil(FAQ_ITEMS.length / 2)

  return (
    <section className="section" style={{ background: 'var(--dark2)' }}>
      <div className="container">
        <FadeUp>
          <div className="lbl">
            <span>Česta pitanja</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', marginBottom: 48 }}>
            Imate li <em className="gold-text">pitanja o cijenama?</em>
          </h2>
        </FadeUp>
        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 60px' }}>
          <FaqColumn items={FAQ_ITEMS.slice(0, half)} openIndex={open} setOpen={setOpen} offset={0} />
          <FaqColumn items={FAQ_ITEMS.slice(half)} openIndex={open} setOpen={setOpen} offset={half} />
        </div>
      </div>
    </section>
  )
}

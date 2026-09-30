import { useState } from 'react'
import FadeUp from '../components/FadeUp.jsx'
import { useClient } from '../client/ClientContext.jsx'
import { fmtDate } from '../lib/format.js'

const SERVICES = [
  'Pregled i konzultacija',
  'Čišćenje i poliranje',
  'Estetsko bijeljenje',
  'Zubni implantati',
  'Ortodoncija / Invisalign',
  'Hitan slučaj',
]

/* "Rezervirajte u 30 sekundi" — kratki widget koji sastavi
   personaliziranu poruku i otvori WhatsApp (ili e-mail kao rezerva). */
export default function QuickBook() {
  const c = useClient()
  const today = new Date().toISOString().split('T')[0]
  const [service, setService] = useState(SERVICES[0])
  const [date, setDate] = useState('')
  const [name, setName] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const lines = [
      'Pozdrav, želio/la bih rezervirati termin.',
      `Usluga: ${service}`,
      date && `Željeni datum: ${fmtDate(date)}`,
      name && `Ime: ${name}`,
    ].filter(Boolean)
    const digits = (c.contact.phoneHref || '').replace(/\D/g, '')
    // WhatsApp samo za mobilne brojeve (+385 9x) — fiksni telefon nema WhatsApp, pa ide e-mail.
    if (/^3859\d/.test(digits)) {
      window.open(`https://wa.me/${digits}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
    } else {
      window.location.href =
        `mailto:${c.contact.email}?subject=${encodeURIComponent('Rezervacija termina')}` +
        `&body=${encodeURIComponent(lines.join('\r\n'))}`
    }
  }

  return (
    <section className="qb-sec" id="rezervacija">
      <div className="qb-glow" />
      <div className="container">
        <FadeUp>
          <div className="qb-card">
            <div className="qb-left">
              <div className="lbl">
                <span>Brza rezervacija</span>
              </div>
              <h2 className="qb-h2">
                Rezervirajte termin
                <br />
                <em className="gold-text">u 30 sekundi</em>
              </h2>
              <p className="qb-p">Odaberite uslugu i datum — javljamo se s potvrdom unutar 24 sata.</p>
            </div>

            <form className="qb-form" onSubmit={submit}>
              <label className="qb-field">
                <span>Usluga</span>
                <select value={service} onChange={(e) => setService(e.target.value)}>
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label className="qb-field">
                <span>Željeni datum</span>
                <input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} />
              </label>
              <label className="qb-field">
                <span>Ime (nije obavezno)</span>
                <input type="text" placeholder="Vaše ime" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <button type="submit" className="btn btn-gold qb-submit">
                Pošaljite upit →
              </button>
            </form>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

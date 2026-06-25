import { useState } from 'react'
import FadeUp from '../components/FadeUp.jsx'
import { useClient } from '../client/ClientContext.jsx'

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
    const msg =
      `Pozdrav, želio/la bih rezervirati termin.%0A` +
      `Usluga: ${encodeURIComponent(service)}%0A` +
      (date ? `Željeni datum: ${encodeURIComponent(date)}%0A` : '') +
      (name ? `Ime: ${encodeURIComponent(name)}` : '')
    const digits = (c.contact.phoneHref || '').replace(/[^0-9]/g, '')
    if (digits) {
      window.open(`https://wa.me/${digits}?text=${msg}`, '_blank')
    } else {
      window.location.href = `mailto:${c.contact.email}?subject=${encodeURIComponent(
        'Rezervacija termina'
      )}&body=${msg.replace(/%0A/g, '%0D%0A')}`
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
                Pošalji upit →
              </button>
            </form>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

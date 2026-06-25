import { useState } from 'react'
import FadeUp from '../components/FadeUp.jsx'
import { useClient } from '../client/ClientContext.jsx'

const SERVICES = [
  'Estetska stomatologija',
  'Implantati',
  'Ortodoncija',
  'Bijeljenje zuba',
  'Parodontologija',
  'Dječja stomatologija',
  'Konzultacija',
]

export default function Contact() {
  const c = useClient()
  const [form, setForm] = useState({ name: '', email: '', phone: '', svc: '', msg: '', date: '' })
  const [sent, setSent] = useState(false)

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4500)
  }

  const mapQuery = encodeURIComponent(`${c.name}, ${c.contact.address}`)
  const mapEmbed = `https://www.google.com/maps?q=${mapQuery}&output=embed`
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

  const info = [
    ['📍', 'Adresa', c.contact.address],
    ['📞', 'Telefon', c.contact.phone],
    ['✉', 'Email', c.contact.email],
    ['🕐', 'Radno vrijeme', c.contact.hours],
  ]

  return (
    <section className="cnt-sec section" id="kontakt">
      <div className="container">
        <div className="cnt-grid">
          <div>
            <FadeUp>
              <div className="lbl">
                <span>Kontakt</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="cnt-h2">
                Zakaži termin
                <br />
                <em>već danas</em>
              </h2>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="cnt-dsc">
                Napravite prvi korak prema savršenom osmijehu. Naš tim odgovara unutar 24 sata.
              </p>
            </FadeUp>
            <FadeUp delay={0.26}>
              {info.map(([ico, lbl, val], i) => (
                <div className="cnt-item" key={i}>
                  <div className="cnt-ico">{ico}</div>
                  <div className="cnt-itxt">
                    <strong>{lbl}</strong>
                    <span>{val}</span>
                  </div>
                </div>
              ))}
            </FadeUp>
          </div>
          <FadeUp delay={0.18}>
            <form className="cnt-form" onSubmit={submit}>
              <div className="frm-row">
                <div className="fg">
                  <label>Ime i prezime</label>
                  <input type="text" placeholder="Ivan Horvat" required value={form.name} onChange={upd('name')} />
                </div>
                <div className="fg">
                  <label>Email adresa</label>
                  <input type="email" placeholder="ivan@email.com" required value={form.email} onChange={upd('email')} />
                </div>
              </div>
              <div className="frm-row">
                <div className="fg">
                  <label>Telefon</label>
                  <input type="tel" placeholder="+385 91 234 5678" value={form.phone} onChange={upd('phone')} />
                </div>
                <div className="fg">
                  <label>Željeni termin</label>
                  <input type="date" value={form.date} onChange={upd('date')} />
                </div>
              </div>
              <div className="fg">
                <label>Usluga</label>
                <select value={form.svc} onChange={upd('svc')}>
                  <option value="">Odaberite uslugu...</option>
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="fg">
                <label>Poruka (opcionalno)</label>
                <textarea
                  placeholder="Opišite vaše potrebe ili pitanja..."
                  rows="4"
                  value={form.msg}
                  onChange={upd('msg')}
                />
              </div>
              {sent ? (
                <div className="success-msg">✓ Hvala! Kontaktirat ćemo vas uskoro.</div>
              ) : (
                <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                  Pošalji zahtjev →
                </button>
              )}
            </form>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <div className="cnt-map">
            <iframe
              title={`Lokacija — ${c.name}`}
              src={mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a className="cnt-map-link" href={mapLink} target="_blank" rel="noreferrer">
              Otvori u Google Maps →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

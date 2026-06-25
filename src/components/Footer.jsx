import { useClient } from '../client/ClientContext.jsx'
import SmartLink from './SmartLink.jsx'

const SERVICES = ['Estetska stomatologija', 'Implantati', 'Ortodoncija', 'Bijeljenje zuba', 'Parodontologija']
const PRACTICE = ['O nama', 'Naš tim', 'Galerija', 'Recenzije', 'Cjenik']
const SOCIALS = [
  ['f', '#'],
  ['in', '#'],
  ['ig', '#'],
  ['yt', '#'],
]

export default function Footer() {
  const c = useClient()
  const year = new Date().getFullYear()

  return (
    <footer className="ftr">
      <div className="container">
        <div className="ftr-grid">
          <div className="ftr-brand">
            <SmartLink to="/" className="logo">
              <span className="logo-m">{c.name}</span>
              <span className="logo-s">{c.logoSub}</span>
            </SmartLink>
            <p>
              Vaša stomatološka ordinacija u srcu grada {c.city}. Posvećeni izvrsnosti u svakom osmijehu koji stvaramo zajedno s vama.
            </p>
          </div>
          <div className="ftr-col">
            <h4>Usluge</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s}>
                  <SmartLink to="/#usluge">{s}</SmartLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="ftr-col">
            <h4>Ordinacija</h4>
            <ul>
              {PRACTICE.map((s) => (
                <li key={s}>
                  <SmartLink to={s === 'Cjenik' ? '/cijenik' : '/#o-nama'}>{s}</SmartLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="ftr-col">
            <h4>Kontakt</h4>
            <ul>
              <li><a href="#">{c.contact.address}</a></li>
              <li><a href={`tel:${c.contact.phoneHref}`}>{c.contact.phone}</a></li>
              <li><a href={`mailto:${c.contact.email}`}>{c.contact.email}</a></li>
              <li><a href="#">{c.contact.hours}</a></li>
            </ul>
          </div>
        </div>
        <div className="ftr-bot">
          <p>© {year} {c.name}. Sva prava pridržana.</p>
          <div className="ftr-soc">
            {SOCIALS.map(([l, h]) => (
              <a key={l} href={h} className="ftr-si">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

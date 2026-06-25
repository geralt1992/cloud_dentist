import { useClient } from '../client/ClientContext.jsx'
import SmartLink from './SmartLink.jsx'
import { Icon } from './icons.jsx'

const SERVICES = ['Estetska stomatologija', 'Implantati', 'Ortodoncija', 'Bijeljenje zuba', 'Parodontologija']
const PRACTICE = ['O nama', 'Naš tim', 'Galerija', 'Recenzije', 'Cjenik']

const SocialIcon = {
  f: <path d="M14 8.5h2V5.7h-2.3C11.4 5.7 10 7 10 9v1.6H8V13h2v6h2.6v-6H15l.5-2.4h-2.9V9.1c0-.4.3-.6.7-.6Z" />,
  ig: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.4" cy="7.6" r="1" fill="currentColor" />
    </>
  ),
  in: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10v6M8 7.6v.01M12 16v-3.2c0-1.2 1.8-1.3 1.8 0V16M12 16v-6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </>
  ),
  yt: <path d="M21 12s0-2.5-.3-3.7c-.2-.7-.7-1.2-1.4-1.4C18 6.5 12 6.5 12 6.5s-6 0-7.3.4c-.7.2-1.2.7-1.4 1.4C3 9.5 3 12 3 12s0 2.5.3 3.7c.2.7.7 1.2 1.4 1.4 1.3.4 7.3.4 7.3.4s6 0 7.3-.4c.7-.2 1.2-.7 1.4-1.4.3-1.2.3-3.7.3-3.7ZM10.3 14.5v-5l4.2 2.5-4.2 2.5Z" />,
}

const SOCIALS = [
  ['f', 'Facebook', '#'],
  ['ig', 'Instagram', '#'],
  ['in', 'LinkedIn', '#'],
  ['yt', 'YouTube', '#'],
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
            <ul className="ftr-contact">
              <li>
                <span className="ftr-ic">{Icon.pin}</span>
                <a href="#">{c.contact.address}</a>
              </li>
              <li>
                <span className="ftr-ic">{Icon.phone}</span>
                <a href={`tel:${c.contact.phoneHref}`}>{c.contact.phone}</a>
              </li>
              <li>
                <span className="ftr-ic">{Icon.mail}</span>
                <a href={`mailto:${c.contact.email}`}>{c.contact.email}</a>
              </li>
              <li>
                <span className="ftr-ic">{Icon.clock}</span>
                <a href="#">{c.contact.hours}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ftr-bot">
          <p>© {year} {c.name}. Sva prava pridržana.</p>
          <div className="ftr-soc">
            {SOCIALS.map(([key, label, href]) => (
              <a key={key} href={href} className="ftr-si" aria-label={label} title={label}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  {SocialIcon[key]}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

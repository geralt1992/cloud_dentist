import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useClient } from '../client/ClientContext.jsx'
import SmartLink from './SmartLink.jsx'

const LINKS = [
  ['Usluge', '/#usluge'],
  ['O nama', '/#o-nama'],
  ['Galerija', '/#galerija'],
  ['Recenzije', '/#recenzije'],
  ['Cjenik', '/cijenik'],
  ['Kontakt', '/#kontakt'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const c = useClient()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const isActive = (to) => to === '/cijenik' && pathname === '/cijenik'

  return (
    <>
      <nav className={`nav${scrolled ? ' s' : ''}`}>
        <div className="container nav-inner">
          <SmartLink to="/" className="logo">
            <span className="logo-m">{c.name}</span>
            <span className="logo-s">{c.logoSub}</span>
          </SmartLink>
          <ul className="nav-links">
            {LINKS.map(([l, h]) => (
              <li key={l}>
                <SmartLink to={h} className={isActive(h) ? 'active' : ''}>
                  {l}
                </SmartLink>
              </li>
            ))}
            <li>
              <SmartLink to="/#kontakt" className="nav-cta btn">
                Rezerviraj
              </SmartLink>
            </li>
          </ul>
          <button className="ham" onClick={() => setOpen(!open)} aria-label="Menu">
            <span style={{ transform: open ? 'rotate(45deg) translate(4.5px,4.5px)' : 'none' }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? 'rotate(-45deg) translate(4.5px,-4.5px)' : 'none' }} />
          </button>
        </div>
      </nav>
      <div className={`mob-nav${open ? ' open' : ''}`}>
        <button className="mob-close" onClick={() => setOpen(false)}>
          ×
        </button>
        {LINKS.map(([l, h]) => (
          <SmartLink key={l} to={h} onClick={() => setOpen(false)}>
            {l}
          </SmartLink>
        ))}
        <SmartLink to="/#kontakt" className="btn btn-gold" onClick={() => setOpen(false)} style={{ marginTop: 12 }}>
          Rezerviraj termin →
        </SmartLink>
      </div>
    </>
  )
}

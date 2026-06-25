import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useClient } from '../client/ClientContext.jsx'
import SmartLink from './SmartLink.jsx'

const LINKS = [
  ['Usluge', '/#usluge'],
  ['O nama', '/#o-nama'],
  ['Rezultati', '/#rezultati'],
  ['Recenzije', '/#recenzije'],
  ['Cjenik', '/cijenik'],
  ['Kontakt', '/#kontakt'],
]

const SECTION_IDS = ['home', 'usluge', 'proces', 'o-nama', 'tim', 'rezultati', 'galerija', 'recenzije', 'rezervacija', 'pitanja', 'kontakt']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSec, setActiveSec] = useState('home')
  const { pathname } = useLocation()
  const onHome = pathname === '/' || pathname.startsWith('/demo/')
  const c = useClient()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Scroll-spy: označi sekciju koja je trenutno u vidnom polju
  useEffect(() => {
    if (!onHome) return
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (vis) setActiveSec(vis.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [onHome])

  const isActive = (to) => {
    if (to === '/cijenik') return pathname === '/cijenik'
    if (!onHome) return false
    const hash = to.split('#')[1]
    return hash && hash === activeSec
  }

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

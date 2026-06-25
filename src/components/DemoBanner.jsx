import { useEffect } from 'react'
import { useClient } from '../client/ClientContext.jsx'
import { AGENCY } from '../data/agency.js'

/* Fiksna traka na dnu demo stranice — daje do znanja da je ovo prijedlog
   i poziva klijenta da te nazove. Prikazuje se samo na /demo/<slug>. */
export default function DemoBanner() {
  const c = useClient()

  // Razmak na dnu da fiksna traka ne prekriva footer.
  useEffect(() => {
    const prev = document.body.style.paddingBottom
    document.body.style.paddingBottom = '72px'
    return () => {
      document.body.style.paddingBottom = prev
    }
  }, [])
  return (
    <div className="demo-bar">
      <div className="demo-bar-inner">
        <span className="demo-bar-tag">Demo prijedlog</span>
        <span className="demo-bar-txt">
          Ovako bi mogla izgledati web stranica za <strong>{c.name}</strong> — izradio {AGENCY.brand}
        </span>
        <a className="demo-bar-cta" href={`tel:${AGENCY.phoneHref}`}>
          Sviđa vam se? Nazovite {AGENCY.phone} →
        </a>
      </div>
    </div>
  )
}

import { useEffect, useRef } from 'react'
import { useClient } from '../client/ClientContext.jsx'
import { AGENCY } from '../data/agency.js'

/* Fiksna traka na dnu demo stranice — daje do znanja da je ovo prijedlog
   i poziva klijenta da te nazove. Prikazuje se samo na /demo/<slug>. */
export default function DemoBanner() {
  const c = useClient()
  const bar = useRef(null)

  // Razmak na dnu = stvarna visina trake (na mobitelu je viša) → footer nikad nije prekriven.
  useEffect(() => {
    const prev = document.body.style.paddingBottom
    const fit = () => {
      if (bar.current) document.body.style.paddingBottom = `${bar.current.offsetHeight}px`
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(bar.current)
    return () => {
      ro.disconnect()
      document.body.style.paddingBottom = prev
    }
  }, [])

  return (
    <div className="demo-bar" ref={bar}>
      <div className="demo-bar-inner">
        <span className="demo-bar-tag">Demo prijedlog</span>
        {/* Ime bez prijedloga "za" — dugi nazivi ("Ordinacija dentalne medicine…") ne mijenjaju padež.
            Na mobitelu se duži dio skriva da traka ne prekrije pola ekrana. */}
        <span className="demo-bar-txt">
          <span className="demo-bar-long">
            Ovako bi mogla izgledati vaša nova web stranica · <strong>{c.name}</strong> ·{' '}
          </span>
          izrada: {AGENCY.brand}
        </span>
        <a className="demo-bar-cta" href={`tel:${AGENCY.phoneHref}`}>
          Sviđa vam se? Nazovite {AGENCY.phone} →
        </a>
      </div>
    </div>
  )
}

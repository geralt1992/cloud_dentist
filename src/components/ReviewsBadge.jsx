import { useClient } from '../client/ClientContext.jsx'
import { fmtNum } from '../lib/format.js'

/* Google recenzije badge — ★ ocjena + broj recenzija.
   Ocjena/broj dolaze iz podataka klijenta (c.rating, c.reviewCount) — isti kao u heroju i statistici. */
export default function ReviewsBadge() {
  const c = useClient()
  const rating = c.rating
  const count = c.reviewCount
  const full = Math.floor(rating)

  return (
    <a
      className="gr-badge"
      href={c.reviewsUrl || 'https://www.google.com/maps'}
      target="_blank"
      rel="noreferrer"
    >
      <span className="gr-logo" aria-hidden="true">
        <b style={{ color: '#4285F4' }}>G</b>
        <b style={{ color: '#EA4335' }}>o</b>
        <b style={{ color: '#FBBC05' }}>o</b>
        <b style={{ color: '#4285F4' }}>g</b>
        <b style={{ color: '#34A853' }}>l</b>
        <b style={{ color: '#EA4335' }}>e</b>
      </span>
      <span className="gr-rating">{fmtNum(rating)}</span>
      <span className="gr-stars" aria-hidden="true">
        {'★'.repeat(full)}
        {rating % 1 >= 0.3 ? <span className="gr-half">★</span> : null}
      </span>
      <span className="gr-count">{fmtNum(count)}+ recenzija</span>
    </a>
  )
}

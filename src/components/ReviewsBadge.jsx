import { useClient } from '../client/ClientContext.jsx'

/* Google recenzije badge — ★ ocjena + broj recenzija.
   Ocjena/broj se mogu personalizirati po klijentu (c.rating, c.reviewCount);
   ako nisu zadani, koriste se neutralne zadane vrijednosti. */
export default function ReviewsBadge() {
  const c = useClient()
  const rating = c.rating || '4.9'
  const count = c.reviewCount || 120
  const full = Math.floor(Number(rating))

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
      <span className="gr-rating">{rating}</span>
      <span className="gr-stars" aria-hidden="true">
        {'★'.repeat(full)}
        {rating % 1 >= 0.3 ? <span className="gr-half">★</span> : null}
      </span>
      <span className="gr-count">{count}+ recenzija</span>
    </a>
  )
}

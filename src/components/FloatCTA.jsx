import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/* Floating "Zakaži" button that appears after scrolling `threshold` px. */
export default function FloatCTA({ threshold = 600 }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > threshold)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [threshold])

  return (
    <div className={`float-cta${show ? ' show' : ''}`}>
      <Link to="/#kontakt">📅 Zakaži →</Link>
    </div>
  )
}

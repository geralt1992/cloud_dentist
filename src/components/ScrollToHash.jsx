import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Scrolls to the #hash target on navigation, or to the top when there is none.
   Replaces the native anchor behaviour the single-file version relied on. */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target section is mounted before scrolling.
      const id = setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 0)
      return () => clearTimeout(id)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

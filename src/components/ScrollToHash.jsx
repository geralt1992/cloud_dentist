import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { smoothScrollTo, scrollRef } from '../lib/scroll.js'

/* Scrolls to the #hash target on navigation, or to the top when there is none.
   Koristi Lenis ako je aktivan (maslac-glatko), inače native. */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target section is mounted before scrolling.
      const id = setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) smoothScrollTo(el)
      }, 0)
      return () => clearTimeout(id)
    }
    if (scrollRef.current) scrollRef.current.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

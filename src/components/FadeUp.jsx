import { useEffect, useRef, useState } from 'react'

/* Fade-in-on-scroll wrapper. dir: 'up' (default) | 'left' | 'right'. */
export default function FadeUp({ children, delay = 0, dir = 'up', style = {} }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true)
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const cls = dir === 'left' ? 'fu-l' : dir === 'right' ? 'fu-r' : 'fu'
  return (
    <div
      ref={ref}
      className={`${cls}${vis ? ' vis' : ''}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  )
}

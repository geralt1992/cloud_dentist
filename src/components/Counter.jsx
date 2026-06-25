import { useEffect, useRef, useState } from 'react'

/* Counts up to `to` (then appends `suffix`) the first time it scrolls into view. */
export default function Counter({ to, suffix = '' }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true
          let cur = 0
          const step = to / (2000 / 16)
          const id = setInterval(() => {
            cur += step
            if (cur >= to) {
              setN(to)
              clearInterval(id)
            } else {
              setN(Math.floor(cur))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

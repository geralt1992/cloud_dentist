import { useRef } from 'react'

/* 3D tilt wrapper — element se lagano naginje prema mišu (parallax dubina).
   Aktivno samo na uređajima s hover-om i bez prefers-reduced-motion. */
export default function Tilt({ className = '', children, max = 8, ...rest }) {
  const ref = useRef(null)
  const on = useRef(false)

  const onEnter = () => {
    on.current =
      window.matchMedia('(hover:hover)').matches &&
      !window.matchMedia('(prefers-reduced-motion:reduce)').matches
    if (on.current && ref.current) ref.current.style.transition = 'transform .12s ease-out'
  }
  const onMove = (e) => {
    if (!on.current || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`
  }
  const onLeave = () => {
    if (!ref.current) return
    ref.current.style.transition = 'transform .5s ease'
    ref.current.style.transform = ''
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </div>
  )
}

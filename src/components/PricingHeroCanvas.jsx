import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/* Ambient drifting particles + (opcionalno) ukrasni prsteni iza hero sekcije.
   rings=false → samo čestice (koristi se na naslovnom hero). */
export default function PricingHeroCanvas({ rings = true }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const W = window.innerWidth
    const H = canvas.parentElement.offsetHeight || 500
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000)
    camera.position.z = 6
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Ambient floating particles
    const count = 180
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
      vel[i * 3] = (Math.random() - 0.5) * 0.003
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003
      vel[i * 3 + 2] = 0
    }
    const geo = new THREE.BufferGeometry()
    const posAttr = new THREE.BufferAttribute(pos, 3)
    geo.setAttribute('position', posAttr)
    const pts = new THREE.Points(
      geo,
      new THREE.PointsMaterial({ color: 0xc8a56a, size: 0.06, transparent: true, opacity: 0.45 })
    )
    scene.add(pts)

    // Large decorative rings (opcionalno)
    let ring, ring2
    if (rings) {
      ring = new THREE.Mesh(
        new THREE.TorusGeometry(4, 0.012, 16, 120),
        new THREE.MeshBasicMaterial({ color: 0xc8a56a, transparent: true, opacity: 0.12 })
      )
      ring.rotation.x = Math.PI / 5
      ring.position.x = 5
      scene.add(ring)

      ring2 = new THREE.Mesh(
        new THREE.TorusGeometry(5.5, 0.008, 16, 120),
        new THREE.MeshBasicMaterial({ color: 0xc8a56a, transparent: true, opacity: 0.07 })
      )
      ring2.rotation.x = Math.PI / 3
      ring2.position.x = 4
      scene.add(ring2)
    }

    const onResize = () => {
      const W2 = window.innerWidth
      camera.aspect = W2 / H
      camera.updateProjectionMatrix()
      renderer.setSize(W2, H)
    }
    window.addEventListener('resize', onResize)

    let rafId
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      // drift particles
      for (let i = 0; i < count; i++) {
        pos[i * 3] += vel[i * 3]
        pos[i * 3 + 1] += vel[i * 3 + 1]
        if (Math.abs(pos[i * 3]) > 10) vel[i * 3] *= -1
        if (Math.abs(pos[i * 3 + 1]) > 5) vel[i * 3 + 1] *= -1
      }
      posAttr.needsUpdate = true
      if (rings) {
        ring.rotation.z += 0.002
        ring2.rotation.z -= 0.0015
      }
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [rings])

  return <canvas ref={ref} id="hero-canvas" />
}

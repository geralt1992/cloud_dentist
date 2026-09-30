import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/* Ambient drifting particles + (opcionalno) ukrasni prsteni iza hero sekcije cjenika.
   Animacija se pauzira kad canvas nije u vidnom polju; uz prefers-reduced-motion
   iscrta se samo jedan statični kadar. */
export default function PricingHeroCanvas({ rings = true }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches

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
    const ptsMat = new THREE.PointsMaterial({ color: 0xc8a56a, size: 0.06, transparent: true, opacity: 0.45 })
    scene.add(new THREE.Points(geo, ptsMat))
    const disposables = [geo, ptsMat]

    // Large decorative rings (opcionalno)
    const ringMeshes = []
    if (rings) {
      const addRing = (radius, tube, opacity, rotX, posX) => {
        const g = new THREE.TorusGeometry(radius, tube, 16, 120)
        const m = new THREE.MeshBasicMaterial({ color: 0xc8a56a, transparent: true, opacity })
        const mesh = new THREE.Mesh(g, m)
        mesh.rotation.x = rotX
        mesh.position.x = posX
        scene.add(mesh)
        disposables.push(g, m)
        ringMeshes.push(mesh)
      }
      addRing(4, 0.012, 0.12, Math.PI / 5, 5)
      addRing(5.5, 0.008, 0.07, Math.PI / 3, 4)
    }

    const onResize = () => {
      const W2 = window.innerWidth
      camera.aspect = W2 / H
      camera.updateProjectionMatrix()
      renderer.setSize(W2, H)
      if (reduce) renderer.render(scene, camera)
    }
    window.addEventListener('resize', onResize)

    let rafId = 0
    let visible = true
    const animate = () => {
      if (!visible) {
        rafId = 0
        return
      }
      rafId = requestAnimationFrame(animate)
      // drift particles
      for (let i = 0; i < count; i++) {
        pos[i * 3] += vel[i * 3]
        pos[i * 3 + 1] += vel[i * 3 + 1]
        if (Math.abs(pos[i * 3]) > 10) vel[i * 3] *= -1
        if (Math.abs(pos[i * 3 + 1]) > 5) vel[i * 3 + 1] *= -1
      }
      posAttr.needsUpdate = true
      if (ringMeshes.length) {
        ringMeshes[0].rotation.z += 0.002
        ringMeshes[1].rotation.z -= 0.0015
      }
      renderer.render(scene, camera)
    }

    let io
    if (reduce) {
      renderer.render(scene, camera)
    } else {
      io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting
        if (visible && !rafId) animate()
      })
      io.observe(canvas)
      animate()
    }

    return () => {
      cancelAnimationFrame(rafId)
      io?.disconnect()
      window.removeEventListener('resize', onResize)
      disposables.forEach((d) => d.dispose())
      renderer.dispose()
    }
  }, [rings])

  return <canvas ref={ref} id="hero-canvas" />
}

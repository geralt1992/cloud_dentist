import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/* Suptilno polje treperavih zvjezdica iza hero sekcije.
   Sitne točkice s mekim rubom, individualno trepere i lagano plutaju;
   cijelo polje blago prati miš za osjećaj dubine (paralaksa). */
export default function HeroCanvas() {
  const ref = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const W = window.innerWidth
    const H = window.innerHeight
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100)
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(W, H)
    const pr = Math.min(window.devicePixelRatio, 2)
    renderer.setPixelRatio(pr)

    // Raspodjela zvjezdica po širokom prostoru iza heroja
    const COUNT = 85
    const pos = new Float32Array(COUNT * 3)
    const phase = new Float32Array(COUNT)
    const scale = new Float32Array(COUNT)
    const gold = new Float32Array(COUNT) // 0 = toplo bijela, 1 = zlatna
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18
      pos[i * 3 + 1] = (Math.random() - 0.5) * 11
      pos[i * 3 + 2] = -2 - Math.random() * 7
      phase[i] = Math.random() * Math.PI * 2
      scale[i] = 0.4 + Math.random() * 1.1
      gold[i] = Math.random() < 0.32 ? 1 : 0
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('phase', new THREE.BufferAttribute(phase, 1))
    geo.setAttribute('scale', new THREE.BufferAttribute(scale, 1))
    geo.setAttribute('gold', new THREE.BufferAttribute(gold, 1))

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uPr: { value: pr },
        uWarm: { value: new THREE.Color(0xfff4e0) },
        uGold: { value: new THREE.Color(0xc8a56a) },
      },
      vertexShader: `
        attribute float phase;
        attribute float scale;
        attribute float gold;
        uniform float uTime;
        uniform float uPr;
        varying float vAlpha;
        varying float vGold;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          float tw = 0.5 + 0.5 * sin(uTime * 1.4 + phase);
          vAlpha = 0.12 + 0.78 * tw;
          vGold = gold;
          gl_PointSize = scale * uPr * (90.0 / -mv.z);
        }
      `,
      fragmentShader: `
        uniform vec3 uWarm;
        uniform vec3 uGold;
        varying float vAlpha;
        varying float vGold;
        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          if (d > 0.5) discard;
          float soft = smoothstep(0.5, 0.0, d);
          vec3 col = mix(uWarm, uGold, vGold);
          gl_FragColor = vec4(col, vAlpha * soft);
        }
      `,
    })

    const stars = new THREE.Points(geo, mat)
    scene.add(stars)

    const onMouse = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    const onResize = () => {
      const W2 = window.innerWidth
      const H2 = window.innerHeight
      camera.aspect = W2 / H2
      camera.updateProjectionMatrix()
      renderer.setSize(W2, H2)
    }
    window.addEventListener('resize', onResize)

    let rafId
    let t = 0
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      t += 0.01
      mat.uniforms.uTime.value = t
      stars.rotation.y += 0.0004
      // blaga paralaksa za mišem
      stars.position.x += (mouse.current.x * 0.4 - stars.position.x) * 0.03
      stars.position.y += (mouse.current.y * 0.25 - stars.position.y) * 0.03
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      geo.dispose()
      mat.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas ref={ref} id="three-c" />
}

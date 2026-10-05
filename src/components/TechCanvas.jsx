import { useEffect, useRef } from 'react'

// TechCanvas: red de partículas en el fondo del hero.
// Todo vive dentro de un useEffect con limpieza (cancela la animación
// y el listener al desmontar). Respeta "reducir movimiento".
export default function TechCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const cv = ref.current
    const ctx = cv.getContext('2d')
    const COLORS = ['14,124,91', '138,133,128', '60,55,48']
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let pts = []
    let W = 0
    let H = 0
    let raf = 0

    const size = () => {
      const r = cv.parentElement.getBoundingClientRect()
      W = cv.width = r.width
      H = cv.height = r.height
      const n = Math.min(60, Math.floor((W * H) / 26000))
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        c: COLORS[Math.floor(Math.random() * 3)],
        r: Math.random() * 2 + 1.2,
      }))
    }

    const frame = () => {
      ctx.clearRect(0, 0, W, H)
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, 7)
        ctx.fillStyle = `rgba(${p.c},.8)`
        ctx.fill()
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(14,124,91,${(1 - d / 130) * 0.3})`
            ctx.stroke()
          }
        }
      }
      if (!reduced) raf = requestAnimationFrame(frame)
    }

    size()
    window.addEventListener('resize', size)
    frame()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', size)
    }
  }, [])

  return <canvas ref={ref} className="hero__canvas" aria-hidden="true" />
}

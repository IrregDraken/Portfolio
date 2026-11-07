import { useEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../config/site'

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { alpha: true })
    if (!canvas || !context) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let frame = 0
    let pointerX = -1000
    let pointerY = -1000
    const points: { x: number; y: number; z: number; phase: number; size: number }[] = []
    const count = window.innerWidth < 700 ? 380 : 820

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    for (let i = 0; i < count; i++) {
      const t = i / count
      const arm = i % 5
      const radius = Math.sqrt(t) * Math.min(width, height) * 0.43
      const angle = t * Math.PI * 22 + arm * Math.PI * 2 / 5
      points.push({
        x: width * 0.69 + Math.cos(angle) * radius,
        y: height * 0.49 + Math.sin(angle) * radius * 0.7,
        z: Math.random(),
        phase: Math.random() * Math.PI * 2,
        size: 0.45 + Math.random() * 1.35,
      })
    }

    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointerX = event.clientX - rect.left
      pointerY = event.clientY - rect.top
    }
    const leave = () => { pointerX = -1000; pointerY = -1000 }
    canvas.addEventListener('pointermove', move)
    canvas.addEventListener('pointerleave', leave)
    const draw = (time: number) => {
      context.clearRect(0, 0, width, height)
      const t = reduced ? 0 : time * 0.00022
      const cx = width * 0.69
      const cy = height * 0.49
      for (const p of points) {
        const dx = p.x - pointerX
        const dy = p.y - pointerY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const repel = distance < 125 ? (1 - distance / 125) * 19 : 0
        const driftX = Math.sin(t + p.phase) * 4
        const driftY = Math.cos(t * 1.2 + p.phase) * 5
        const x = p.x + driftX + (distance ? dx / distance * repel : 0)
        const y = p.y + driftY + (distance ? dy / distance * repel : 0)
        const alpha = 0.12 + p.z * 0.48
        context.beginPath()
        context.fillStyle = p.z > 0.83 ? `rgba(202,178,132,${alpha})` : `rgba(112,220,160,${alpha})`
        context.arc(x, y, p.size * (0.7 + p.z * 0.55), 0, Math.PI * 2)
        context.fill()
      }
      const glow = context.createRadialGradient(cx, cy, 0, cx, cy, Math.min(width, height) * 0.48)
      glow.addColorStop(0, 'rgba(52,190,115,0.10)')
      glow.addColorStop(0.55, 'rgba(52,190,115,0.025)')
      glow.addColorStop(1, 'rgba(52,190,115,0)')
      context.fillStyle = glow
      context.fillRect(0, 0, width, height)
      if (!reduced) frame = window.requestAnimationFrame(draw)
    }
    frame = window.requestAnimationFrame(draw)
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      canvas.removeEventListener('pointermove', move)
      canvas.removeEventListener('pointerleave', leave)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
}

function Hero() {
  return (
    <section id="hero" className="hero-section particle-hero">
      <ParticleField />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-topline"><span>INDEPENDENT DEVELOPER</span><span>PORT HARCOURT, NG <i /></span></div>
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-pretitle"><span /> SOFTWARE · SYSTEMS · INTELLIGENCE</p>
          <h1 className="hero-title">I build<br /><em>what comes</em><br />next<span className="title-period">.</span></h1>
          <p className="hero-description">I’m Nnamdi. I turn complex ideas into useful software, intelligent systems, and digital products built to last.</p>
          <div className="hero-role"><span className="availability-dot" /> AVAILABLE FOR SELECT PROJECTS</div>
          <div className="hero-cta-row">
            <a className="editorial-link editorial-link-solid" href="#work">Explore my work <ArrowUpRight size={16} /></a>
            <a className="editorial-link" href={siteConfig.links.resume} target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="hero-orbit-label"><span>FIELD NOTE / 001</span><strong>Curious.<br />Unyielding.<br />Becoming.</strong><small>Ideas are only<br />the beginning.</small></div>
      </div>
      <div className="hero-footerline"><span>DESIGNING AND ENGINEERING DIGITAL EXPERIENCES</span><a href="#work">SCROLL TO EXPLORE <ArrowDown size={13} /></a><span>© {new Date().getFullYear()} {siteConfig.brand}</span></div>
    </section>
  )
}

export default Hero

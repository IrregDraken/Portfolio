import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../config/site'

const roles = ['Creative Developer', 'Full-Stack Developer', 'AI Systems Builder', 'Product Engineer']

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 2600)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="hero-section portrait-hero">
      <div className="portrait-hero-noise" aria-hidden="true" />
      <div className="portrait-hero-inner">
        <div className="portrait-hero-copy">
          <p className="portrait-eyebrow"><span /> INDEPENDENT DEVELOPER <i /> PORT HARCOURT, NIGERIA</p>
          <p className="portrait-intro">Hello, I'm</p>
          <h1 className="portrait-title">Nnamdi<br /><em>Obinna.</em></h1>
          <div className="portrait-role-line"><span className="portrait-role-label">I AM A</span><strong key={roleIndex}>{roles[roleIndex]}</strong></div>
          <p className="portrait-description">I design and engineer digital products, intelligent applications, and reliable systems that turn ambitious ideas into useful experiences.</p>
          <div className="portrait-actions">
            <a className="portrait-button portrait-button-primary" href="#work">Explore my work <ArrowUpRight size={16} /></a>
            <a className="portrait-button portrait-button-quiet" href={siteConfig.links.resume} target="_blank" rel="noreferrer">Download résumé <ArrowUpRight size={16} /></a>
          </div>
          <div className="portrait-social-proof"><span className="portrait-live-dot" /> OPEN TO SELECT OPPORTUNITIES <span className="portrait-social-divider" /> SOFTWARE · AI · PRODUCT</div>
        </div>
        <div className="portrait-hero-visual">
          <div className="portrait-frame">
            <img src="/draken.webp" alt="Nwodim Nnamdi Obinna" fetchPriority="high" />
            <div className="portrait-frame-shade" />
            <div className="portrait-image-caption"><span>THE PERSON BEHIND THE BUILDS</span><strong>Curious. Unyielding. Becoming.</strong></div>
          </div>
          <span className="portrait-index">01 / THE INTRODUCTION</span>
          <span className="portrait-orbit orbit-one" />
          <span className="portrait-orbit orbit-two" />
        </div>
      </div>
      <div className="portrait-hero-bottom"><span>SOFTWARE ENGINEERING / DIGITAL PRODUCT DEVELOPMENT</span><a href="#work">SCROLL TO EXPLORE <ArrowDown size={13} /></a><span>© {new Date().getFullYear()} ${siteConfig.brand}</span></div>
    </section>
  )
}

export default Hero

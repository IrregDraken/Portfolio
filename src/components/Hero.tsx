import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../config/site'

const roles = ['Creative Developer', 'Full-Stack Engineer', 'AI Systems Builder', 'Product Engineer']

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 2800)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="hero-section portrait-hero reference-hero">
      <div className="reference-hero-grain" aria-hidden="true" />
      <div className="reference-hero-inner">
        <div className="reference-hero-copy">
          <div className="reference-hero-meta">
            <span>PORTFOLIO / 2026</span>
            <span className="reference-meta-dot" />
            <span>INDEPENDENT SOFTWARE ENGINEER</span>
          </div>
          <p className="reference-hello">Hello, I'm</p>
          <h1 className="reference-name">Nnamdi<br /><span>Obinna.</span></h1>
          <div className="reference-role">
            <span className="reference-role-prefix">I BUILD</span>
            <strong key={roleIndex}>{roles[roleIndex]}</strong>
          </div>
          <p className="reference-description">
            Digital products, intelligent applications, and scalable systems.
            I turn complex ideas into useful software through thoughtful design
            and hands-on engineering.
          </p>
          <div className="reference-actions">
            <a href="#work" className="reference-primary-link">Explore selected work <ArrowUpRight size={16} /></a>
            <a href={siteConfig.links.resume} target="_blank" rel="noreferrer" className="reference-secondary-link">View résumé <ArrowUpRight size={15} /></a>
          </div>
          <div className="reference-availability">
            <span className="reference-availability-dot" />
            <span>AVAILABLE FOR SELECT OPPORTUNITIES</span>
          </div>
        </div>
        <div className="reference-portrait-column">
          <div className="reference-portrait">
            <img src="/draken.webp" alt={siteConfig.fullName} fetchPriority="high" />
            <div className="reference-portrait-overlay" />
            <div className="reference-portrait-caption">
              <span>THE PERSON BEHIND THE BUILDS</span>
              <strong>Curious. Unyielding. Becoming.</strong>
            </div>
          </div>
          <div className="reference-portrait-index"><span>01</span> / INTRODUCTION</div>
          <span className="reference-portrait-orbit" aria-hidden="true" />
        </div>
      </div>
      <div className="reference-hero-footer">
        <span>SOFTWARE ENGINEERING · PRODUCT DEVELOPMENT · AI</span>
        <a href="#work">SCROLL TO EXPLORE <ArrowDown size={13} /></a>
        <span>© {new Date().getFullYear()} {siteConfig.brand}</span>
      </div>
    </section>
  )
}

export default Hero

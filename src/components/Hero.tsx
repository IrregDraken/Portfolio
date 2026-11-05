import { useEffect, useState } from 'react'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { siteConfig } from '../config/site'
import { assetPath } from '../utils/assets'

const roles = ['Software Engineer', 'AI Systems Builder', 'Full-Stack Developer', 'Automation Engineer', 'Creative Technologist']

function Hero() {
  const [time, setTime] = useState('')
  const { text } = useTypingEffect(roles, { typeSpeed: 62, deleteSpeed: 34, pauseDelay: 2600, fadeDelay: 420 })
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('en-NG', { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()))
    update()
    const timer = window.setInterval(update, 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="hero-section cinematic-hero">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-topline"><span>ÐRAKEN 他</span><span>INDEPENDENT ENGINEERING / 2026</span></div>
      <div className="cinematic-hero-grid">
        <div className="cinematic-hero-copy">
          <p className="editorial-kicker reveal"><span /> SOFTWARE · AI · SYSTEMS</p>
          <p className="hero-pretitle reveal" data-reveal-delay="80">Curious. Unyielding. Becoming.</p>
          <h1 className="cinematic-title reveal" data-reveal-delay="140">I build<br /><span>what comes</span><br />next<span className="title-period">.</span></h1>
          <div className="hero-bottom-copy reveal" data-reveal-delay="240">
            <p className="hero-description">I’m Nnamdi Obinna. I turn complex ideas into useful software, intelligent systems, and experiences built to matter.</p>
            <p className="hero-role"><span>Currently exploring</span> {text}<i aria-hidden="true" /></p>
            <div className="hero-cta-row">
              <a href="#work" className="editorial-link editorial-link-solid">Explore selected work <span>↘</span></a>
              <a href="#contact" className="editorial-link">Start a conversation <span>↗</span></a>
              {siteConfig.links.resume && <a href={siteConfig.links.resume} target="_blank" rel="noreferrer" className="editorial-link">Resume <span>↗</span></a>}
            </div>
          </div>
        </div>
        <div className="cinematic-portrait-wrap reveal" data-reveal-delay="180">
          <div className="portrait-index"><span>01 / 06</span><span>THE BUILDER</span></div>
          <div className="cinematic-portrait">
            <img src={assetPath('draken.webp')} alt="Nwodim Nnamdi Obinna" width="960" height="1280" fetchPriority="high" decoding="async" />
            <div className="portrait-caption"><span>NWODIM NNAMDI OBINNA</span><span>PORT HARCOURT, NG</span></div>
          </div>
          <p className="portrait-side-note">A practice of learning, building, and becoming.</p>
        </div>
      </div>
      <div className="hero-footerline"><span>SCROLL TO EXPLORE</span><span className="hero-scroll-line" aria-hidden="true" /><span>{time || '––:––'} WAT</span></div>
    </section>
  )
}
export default Hero

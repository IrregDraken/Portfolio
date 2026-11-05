import { ArrowUpRight, ArrowUp } from 'lucide-react'
import { siteConfig } from '../config/site'

const footerLinks = [
  { label: 'GitHub', href: siteConfig.links.github },
  { label: 'LinkedIn', href: siteConfig.links.linkedin },
  { label: 'Instagram', href: siteConfig.links.instagram },
  { label: 'X', href: siteConfig.links.x },
  { label: 'YouTube', href: siteConfig.links.youtube },
].filter((item) => Boolean(item.href))

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="editorial-footer">
      <div className="footer-main">
        <div className="footer-heading">
          <p className="footer-kicker"><span /> THE NEXT THING STARTS HERE</p>
          <h2>Have something<br /><em>worth building?</em></h2>
          <a className="footer-contact-link" href="#contact">Let's talk <ArrowUpRight size={18} /></a>
        </div>
        <div className="footer-aside">
          <p className="footer-aside-label">A practice in progress.</p>
          <p>Curious by nature. Unyielding in the work. Always becoming.</p>
          <a href={"mailto:" + siteConfig.links.email}>{siteConfig.links.email} <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <a className="footer-brand" href="#top">{siteConfig.brand}</a>
        <span>© {currentYear} · Built with intention.</span>
        <nav aria-label="Footer links">
          {footerLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
          ))}
        </nav>
        <a className="footer-top-link" href="#top" aria-label="Back to top">TOP <ArrowUp size={13} /></a>
      </div>
    </footer>
  )
}

export default Footer

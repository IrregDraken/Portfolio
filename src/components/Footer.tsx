import { siteConfig } from '../config/site'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium tracking-[-0.02em] text-[#f5f7fa]">
            {siteConfig.brand}
          </span>

          <span className="hidden h-3 w-px bg-white/10 sm:block" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8b9690]">
            {currentYear}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8b9690] transition-colors duration-300 hover:text-[#39ff88]"
          >
            GitHub
          </a>

          {siteConfig.links.linkedin && (
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8b9690] transition-colors duration-300 hover:text-[#39ff88]"
            >
              LinkedIn
            </a>
          )}

          {siteConfig.links.email && (
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8b9690] transition-colors duration-300 hover:text-[#39ff88]"
            >
              {siteConfig.links.email}
            </a>
          )}

          {siteConfig.links.x && (
            <a
              href={siteConfig.links.x}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8b9690] transition-colors duration-300 hover:text-[#39ff88]"
            >
              X
            </a>
          )}

          {siteConfig.links.instagram && (
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8b9690] transition-colors duration-300 hover:text-[#39ff88]"
            >
              Instagram
            </a>
          )}

          {siteConfig.links.youtube && (
            <a
              href={siteConfig.links.youtube}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8b9690] transition-colors duration-300 hover:text-[#39ff88]"
            >
              YouTube
            </a>
          )}

          <a
            href="#top"
            className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8b9690] transition-colors duration-300 hover:text-[#39ff88]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

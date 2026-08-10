import { useEffect, useState } from 'react'

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/[0.06] bg-[#080a0f]/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#top"
          onClick={closeMenu}
          className="group relative z-10 flex items-center"
          aria-label="Ð R ƛ K E N 他 home"
        >
          <span className="text-lg font-semibold tracking-[0.18em] text-[#f5f7fa] transition-colors duration-300 group-hover:text-[#4d8dff]">
            Ð R ƛ K E N 他
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm text-[#9aa4b2] transition-colors duration-300 hover:text-[#f5f7fa]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[#f5f7fa] transition-all duration-300 hover:border-[#4d8dff]/50 hover:bg-[#4d8dff]/10"
          >
            GitHub
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#f5f7fa] transition-colors duration-300 hover:border-white/20 md:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-px w-full origin-center bg-current transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-px w-full origin-center bg-current transition-transform duration-300 ${
                isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`fixed inset-0 top-0 -z-10 bg-[#080a0f] transition-all duration-300 md:hidden ${
          isMenuOpen
            ? 'pointer-events-auto visible opacity-100'
            : 'pointer-events-none invisible opacity-0'
        }`}
      >
        <div className="flex min-h-screen flex-col justify-center px-8">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.4em] text-[#626c7a]">
            Navigation
          </p>

          <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center gap-4 text-4xl font-medium tracking-[-0.04em] text-[#f5f7fa]"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 60}ms` : '0ms',
                }}
              >
                <span className="font-mono text-xs text-[#4d8dff] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  0{index + 1}
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-12">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center gap-2 rounded-full border border-[#4d8dff]/30 bg-[#4d8dff]/10 px-5 py-3 text-sm text-[#f5f7fa]"
            >
              GitHub
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
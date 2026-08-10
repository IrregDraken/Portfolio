import { useEffect, useState } from 'react'

const navigation = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

function smoothScrollTo(id: string) {
  const target = document.getElementById(id)

  if (!target) return

  const start = window.scrollY
  const headerOffset = 80

  const targetPosition =
    target.getBoundingClientRect().top +
    window.scrollY -
    headerOffset

  const distance = targetPosition - start

  const duration = Math.min(
    1200,
    Math.max(700, Math.abs(distance) * 0.75),
  )

  let startTime: number | null = null

  const easeInOut = (t: number) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const animate = (currentTime: number) => {
    if (startTime === null) {
      startTime = currentTime
    }

    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeInOut(progress)

    window.scrollTo(
      0,
      start + distance * eased,
    )

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen
      ? 'hidden'
      : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleNavigation = (id: string) => {
    setIsMenuOpen(false)

    window.setTimeout(() => {
      smoothScrollTo(id)
    }, 80)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? 'border-b border-white/[0.06] bg-[#080a0f]/75 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center justify-between px-6 sm:px-8 lg:px-12">

        {/* Brand */}
        <button
          type="button"
          onClick={() => handleNavigation('top')}
          className="group relative flex items-center gap-2 text-left"
          aria-label="Go to top"
        >
          <span className="text-[18px] font-semibold tracking-[-0.06em] text-[#f5f7fa] transition-all duration-500 ease-out group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(77,141,255,0.25)]">
            DRΛKEN
          </span>

          <span className="text-[15px] font-medium text-[#4d8dff] transition-all duration-500 ease-out group-hover:translate-y-[-1px] group-hover:text-[#79aaff]">
            他
          </span>

          <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#4d8dff] shadow-[0_0_10px_#4d8dff] transition-all duration-700 ease-out group-hover:w-full" />
        </button>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-2 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigation(item.id)}
              className="group relative rounded-full px-5 py-3 text-[13px] font-medium tracking-wide text-[#8f99a8] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:text-[#f5f7fa]"
            >
              {/* Hover surface */}
              <span className="absolute inset-0 rounded-full border border-transparent bg-transparent transition-all duration-500 ease-out group-hover:border-[#4d8dff]/20 group-hover:bg-[#4d8dff]/[0.045] group-hover:shadow-[0_0_24px_rgba(77,141,255,0.06)]" />

              {/* Label */}
              <span className="relative z-10">
                {item.label}
              </span>

              {/* Animated indicator */}
              <span className="absolute bottom-[5px] left-1/2 h-px w-0 -translate-x-1/2 bg-[#4d8dff] opacity-0 shadow-[0_0_8px_#4d8dff] transition-all duration-500 ease-out group-hover:w-5 group-hover:opacity-100" />
            </button>
          ))}

          {/* GitHub */}
          <a
            href="https://github.com/IrregDraken"
            target="_blank"
            rel="noreferrer"
            className="group relative ml-3 inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/[0.11] px-6 py-3 text-[13px] font-medium text-[#dce1e8] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-[#4d8dff]/45 hover:bg-[#4d8dff]/[0.07] hover:text-white hover:shadow-[0_0_30px_rgba(77,141,255,0.10)]"
          >
            {/* Animated glow */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#4d8dff]/[0.10] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

            <span className="relative z-10">
              GitHub
            </span>

            <span className="relative z-10 text-[#4d8dff] transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() =>
            setIsMenuOpen((current) => !current)
          }
          className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#f5f7fa] transition-all duration-500 ease-out hover:border-[#4d8dff]/40 hover:bg-[#4d8dff]/[0.06] hover:shadow-[0_0_22px_rgba(77,141,255,0.08)] md:hidden"
          aria-label={
            isMenuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-px w-full origin-center bg-current transition-all duration-500 ease-out ${
                isMenuOpen
                  ? 'translate-y-[7px] rotate-45'
                  : ''
              }`}
            />

            <span
              className={`h-px w-full bg-current transition-all duration-300 ease-out ${
                isMenuOpen
                  ? 'opacity-0'
                  : 'opacity-100'
              }`}
            />

            <span
              className={`h-px w-full origin-center bg-current transition-all duration-500 ease-out ${
                isMenuOpen
                  ? '-translate-y-[7px] -rotate-45'
                  : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#080a0f]/95 backdrop-blur-2xl transition-all duration-700 ease-out md:hidden ${
          isMenuOpen
            ? 'visible opacity-100'
            : 'pointer-events-none invisible opacity-0'
        }`}
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-20%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#4d8dff]/[0.06] blur-[130px]"
        />

        <div className="flex min-h-screen flex-col justify-center px-8">

          <p
            className={`mb-8 font-mono text-[10px] uppercase tracking-[0.4em] text-[#626c7a] transition-all duration-700 ${
              isMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            Navigation / 01
          </p>

          <nav className="flex flex-col gap-3">
            {navigation.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item.id)}
                className={`group flex items-center gap-5 text-left text-5xl font-medium tracking-[-0.055em] text-[#f5f7fa] transition-all duration-700 ease-out ${
                  isMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${150 + index * 90}ms`
                    : '0ms',
                }}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#4d8dff] opacity-70 transition-all duration-500 group-hover:opacity-100">
                  0{index + 1}
                </span>

                <span className="transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:text-white group-hover:[text-shadow:0_0_30px_rgba(77,141,255,0.25)]">
                  {item.label}
                </span>

                <span className="text-xl text-[#4d8dff] opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </button>
            ))}
          </nav>

          {/* Mobile GitHub */}
          <a
            href="https://github.com/IrregDraken"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className={`group mt-12 inline-flex w-fit items-center gap-4 rounded-full border border-[#4d8dff]/30 bg-[#4d8dff]/[0.07] px-6 py-3.5 text-sm text-[#f5f7fa] transition-all duration-700 ease-out hover:border-[#4d8dff] hover:bg-[#4d8dff]/[0.12] hover:shadow-[0_0_30px_rgba(77,141,255,0.12)] ${
              isMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
            style={{
              transitionDelay: isMenuOpen
                ? '500ms'
                : '0ms',
            }}
          >
            GitHub

            <span className="text-[#4d8dff] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>

          {/* Bottom system marker */}
          <div
            className={`absolute bottom-10 left-8 font-mono text-[9px] uppercase tracking-[0.3em] text-[#626c7a] transition-all duration-700 ${
              isMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            <span className="text-[#4d8dff]">
              SYS_01
            </span>
            <br />
            DRKN.DEV
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
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

    window.scrollTo(
      0,
      start + distance * easeInOut(progress),
    )

    if (progress < 1) {
      window.requestAnimationFrame(animate)
    }
  }

  window.requestAnimationFrame(animate)
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

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll,
      )
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
    smoothScrollTo(id)
  }

  return (
    <>
      <header
        className={`site-header ${
          isScrolled ? 'is-scrolled' : ''
        }`}
      >
        <div className="navbar-inner">

          <a
            href="#hero"
            className="navbar-brand"
            onClick={(event) => {
              event.preventDefault()
              smoothScrollTo('hero')
            }}
          >
            <span className="navbar-brand-name">
              DRAKEN
            </span>

            <span className="navbar-brand-accent">
              他
            </span>

            <span
              aria-hidden="true"
              className="navbar-brand-line"
            />
          </a>

          <nav
            className="desktop-nav"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                className="nav-link"
                onClick={() =>
                  handleNavigation(item.id)
                }
              >
                {item.label}
              </button>
            ))}

            <a
              href="https://github.com/IrregDraken"
              target="_blank"
              rel="noreferrer"
              className="nav-github"
            >
              <span>GitHub</span>
              <span className="nav-arrow">↗</span>
            </a>
          </nav>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={
              isMenuOpen
                ? 'Close navigation'
                : 'Open navigation'
            }
            aria-expanded={isMenuOpen}
            onClick={() =>
              setIsMenuOpen((current) => !current)
            }
          >
            <span className="menu-lines">
              <span
                className={`line line-top ${
                  isMenuOpen ? 'is-open' : ''
                }`}
              />

              <span
                className={`line line-middle ${
                  isMenuOpen ? 'is-open' : ''
                }`}
              />

              <span
                className={`line line-bottom ${
                  isMenuOpen ? 'is-open' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`mobile-overlay ${
          isMenuOpen ? 'is-open' : ''
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          aria-hidden="true"
          className="mobile-overlay-glow"
        />

        <div className="mobile-nav-content">
          <p className="mobile-nav-label">
            Navigation / 01
          </p>

          <nav
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {navigation.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className="mobile-nav-link"
                onClick={() =>
                  handleNavigation(item.id)
                }
              >
                <span className="mobile-nav-number">
                  0{index + 1}
                </span>

                <span>{item.label}</span>

                <span className="mobile-nav-arrow">
                  ↗
                </span>
              </button>
            ))}
          </nav>

          <a
            href="https://github.com/IrregDraken"
            target="_blank"
            rel="noreferrer"
            className="mobile-github"
            onClick={() =>
              setIsMenuOpen(false)
            }
          >
            GitHub
            <span>↗</span>
          </a>

          <p className="mobile-system-marker">
            <span>SYS_01</span>
            <br />
            ONLINE
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar
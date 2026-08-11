import { useEffect, useState } from 'react'

const typingPhrases = [
  'Just a guy trying to leave the internet a little better than I found it.',
  'Building software that solves actual problems.',
  'AI systems, backend infrastructure, and strange experiments.',
]

function Hero() {
  const [time, setTime] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat('en-NG', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date()),
      )
    }

    updateTime()

    const interval = window.setInterval(updateTime, 1000)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const phrase = typingPhrases[phraseIndex]

    const typingSpeed = isDeleting ? 28 : 48

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = phrase.slice(0, typedText.length + 1)
        setTypedText(nextText)

        if (nextText === phrase) {
          setIsDeleting(true)
        }
      } else {
        const nextText = phrase.slice(0, typedText.length - 1)
        setTypedText(nextText)

        if (nextText.length === 0) {
          setIsDeleting(false)
          setPhraseIndex(
            (current) => (current + 1) % typingPhrases.length,
          )
        }
      }
    }, typedText.length === phrase.length && !isDeleting ? 1800 : typingSpeed)

    return () => window.clearTimeout(timeout)
  }, [typedText, isDeleting, phraseIndex])

  return (
    <section
      id="hero"
      className="hero-section relative isolate min-h-[100svh] w-full overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="hero-background"
      >
        <div className="hero-grid" />
        <div className="hero-horizon" />
        <div className="hero-grid-glow" />
        <div className="hero-vignette" />

        <div className="hero-glow hero-glow-primary" />
        <div className="hero-glow hero-glow-secondary" />

        <div className="hero-scanline" />

        <div className="hero-particles">
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              className={`particle particle-${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          TECHNICAL MARKERS
      ===================================================== */}

      <div className="hero-marker hero-marker-left">
        <span>SYS_01</span>
        <br />
        PORTFOLIO / CORE
      </div>

      <div className="hero-marker hero-marker-right">
        <span>STATUS</span>
        <br />
        ONLINE
      </div>

      {/* =====================================================
          MAIN HERO
      ===================================================== */}

      <div className="hero-layout">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="hero-copy">

          <div className="hero-eyebrow hero-reveal">
            <span />
            <p>Full-Stack Developer</p>
          </div>

          <h1 className="hero-title hero-reveal">
            <span className="hero-name">DRΛKEN</span>
            <span className="hero-name-accent">他</span>
          </h1>

          <div className="hero-statement hero-reveal">
            <p>
              I build software, AI systems,
              <br />
              and the infrastructure behind them.
            </p>

            <div className="typing-wrapper">
              <span className="typing-prefix">&gt;_</span>

              <span className="typing-text">
                {typedText}
              </span>

              <span
                aria-hidden="true"
                className="typing-cursor"
              />
            </div>
          </div>

          <div className="hero-actions hero-reveal">
            <a
              href="#work"
              className="hero-button hero-button-primary"
            >
              <span>View my work</span>

              <span className="hero-button-icon">
                →
              </span>
            </a>

            <a
              href="https://github.com/IrregDraken"
              target="_blank"
              rel="noreferrer"
              className="hero-button hero-button-secondary"
            >
              <span>GitHub</span>

              <span className="hero-button-icon">
                ↗
              </span>
            </a>
          </div>

          <div className="hero-meta hero-reveal">
            <div>
              <p className="meta-label">
                Focus
              </p>

              <p className="meta-value">
                AI · Backend
              </p>
            </div>

            <div>
              <p className="meta-label">
                Status
              </p>

              <div className="meta-value meta-status">
                <span className="status-dot" />
                <span>Building</span>
              </div>
            </div>

            <div>
              <p className="meta-label">
                Lagos
              </p>

              <p className="meta-value meta-time">
                {time || '--:--:--'}
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT ORB
        ================================================= */}

        <div className="orb-stage">

          <div
            aria-hidden="true"
            className="orb-aura"
          />

          {/* Outer ring */}
          <div
            aria-hidden="true"
            className="orb-ring orb-ring-outer"
          >
            <span className="orb-dot orb-dot-one" />
          </div>

          {/* Dashed ring */}
          <div
            aria-hidden="true"
            className="orb-ring orb-ring-dashed"
          >
            <span className="orb-dot orb-dot-two" />
          </div>

          {/* Middle ring */}
          <div
            aria-hidden="true"
            className="orb-ring orb-ring-middle"
          />

          {/* Inner tilted ring */}
          <div
            aria-hidden="true"
            className="orb-ring orb-ring-inner"
          />

          {/* Satellite orbit */}
          <div
            aria-hidden="true"
            className="orb-satellite"
          >
            <span />
          </div>

          {/* Profile */}
          <div className="profile-orb">
            <img
              src="/draken.jpg"
              alt="Draken"
              className="profile-image"
            />

            <div
              aria-hidden="true"
              className="profile-overlay"
            />

            <div
              aria-hidden="true"
              className="profile-inner-glow"
            />

            <div
              aria-hidden="true"
              className="orb-shine"
            />

            <div
              aria-hidden="true"
              className="orb-scan"
            />
          </div>

          {/* Outer profile rim */}
          <div
            aria-hidden="true"
            className="orb-edge"
          />

          {/* Floating nodes */}
          <span
            aria-hidden="true"
            className="orb-node node-one"
          />

          <span
            aria-hidden="true"
            className="orb-node node-two"
          />

          <span
            aria-hidden="true"
            className="orb-node node-three"
          />

          <span
            aria-hidden="true"
            className="orb-node node-four"
          />

          {/* Orb labels */}
          <div className="orb-label orb-label-left">
            <span>01</span>
            IDENTITY
          </div>

          <div className="orb-label orb-label-right">
            <span>ONLINE</span>
            BUILD / CREATE
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL
      ===================================================== */}

      <a
        href="#work"
        className="scroll-indicator"
        aria-label="Scroll to selected work"
      >
        <span>Scroll</span>
        <i />
      </a>
    </section>
  )
}

export default Hero
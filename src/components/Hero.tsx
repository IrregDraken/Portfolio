import { useEffect, useState } from 'react'

function Hero() {
  const [time, setTime] = useState('')

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

  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#080a0f]"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div aria-hidden="true" className="hero-grid absolute inset-0" />

      <div aria-hidden="true" className="hero-vignette absolute inset-0" />

      <div
        aria-hidden="true"
        className="hero-glow hero-glow-blue absolute left-[72%] top-[45%] h-[600px] w-[600px] rounded-full"
      />

      <div
        aria-hidden="true"
        className="hero-glow hero-glow-secondary absolute left-[20%] top-[30%] h-[400px] w-[400px] rounded-full"
      />

      {/* Moving scan line */}
      <div aria-hidden="true" className="hero-scanline absolute inset-x-0 top-0" />

      {/* Particles */}
      <div aria-hidden="true" className="hero-particles absolute inset-0">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className={`particle particle-${index + 1}`}
          />
        ))}
      </div>

      {/* =====================================================
          TECHNICAL MARKERS
      ===================================================== */}

      <div className="pointer-events-none absolute left-6 top-28 z-20 hidden font-mono text-[9px] uppercase tracking-[0.3em] text-[#626c7a] sm:left-8 lg:left-12 lg:block">
        <span className="text-[#4d8dff]">SYS_01</span>
        <br />
        PORTFOLIO / CORE
      </div>

      <div className="pointer-events-none absolute right-6 top-28 z-20 hidden text-right font-mono text-[9px] uppercase tracking-[0.3em] text-[#626c7a] lg:right-12 lg:block">
        <span className="text-[#4d8dff]">STATUS</span>
        <br />
        ONLINE
      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-[1450px] grid-cols-1 items-center px-6 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:pb-10 lg:pt-20">
        
        {/* =================================================
            LEFT
        ================================================= */}

        <div className="hero-copy relative z-20 lg:-translate-y-2">

          {/* Label */}
          <div className="hero-reveal mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#4d8dff] shadow-[0_0_10px_rgba(77,141,255,0.7)]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.38em] text-[#626c7a]">
              Full-Stack Developer
            </span>
          </div>

          {/* Name */}
          <h1 className="hero-title hero-reveal whitespace-nowrap text-[clamp(3.2rem,6vw,6.4rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-[#f5f7fa]">
            <span className="hero-name">DRΛKEN</span>
            <span className="ml-3 text-[#4d8dff]">他</span>
          </h1>

          {/* Main statement */}
          <div className="hero-reveal mt-8 max-w-[650px]">
            <p className="text-xl leading-[1.4] tracking-[-0.025em] text-[#dce1e8] sm:text-2xl lg:text-[27px]">
              I build software, AI systems,
              <br />
              and the infrastructure behind them.
            </p>

            {/* Typing line */}
            <div className="mt-6 flex min-h-[24px] items-center font-mono text-[10px] tracking-[0.04em] text-[#626c7a] sm:text-xs">
              <span className="mr-3 text-[#4d8dff]">&gt;_</span>

              <span className="typing-line">
                Just a guy trying to leave the internet a little better
                than I found it.
              </span>

              <span className="typing-cursor ml-1" />
            </div>
          </div>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <div className="hero-reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="hero-button hero-button-primary group"
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
              className="hero-button hero-button-secondary group"
            >
              <span>GitHub</span>

              <span className="hero-button-icon">
                ↗
              </span>
            </a>
          </div>

          {/* Metadata */}
          <div className="hero-reveal mt-10 grid max-w-[580px] grid-cols-3 border-t border-white/[0.07] pt-5">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#626c7a]">
                Focus
              </p>

              <p className="mt-2 text-xs text-[#dce1e8]">
                AI · Backend
              </p>
            </div>

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#626c7a]">
                Status
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#4d8dff]" />

                <span className="text-xs text-[#dce1e8]">
                  Building
                </span>
              </div>
            </div>

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#626c7a]">
                Lagos
              </p>

              <p className="mt-2 font-mono text-xs text-[#dce1e8]">
                {time || '--:--:--'}
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            ORB
        ================================================= */}

        <div className="relative flex min-h-[470px] items-center justify-center lg:min-h-[650px] lg:-translate-y-3">

          {/* Aura */}
          <div
            aria-hidden="true"
            className="orb-aura absolute h-[420px] w-[420px] rounded-full"
          />

          {/* Outer orbital system */}
          <div
            aria-hidden="true"
            className="orb-ring orb-ring-outer absolute h-[min(43vw,560px)] w-[min(43vw,560px)] max-h-[560px] max-w-[560px] rounded-full"
          />

          <div
            aria-hidden="true"
            className="orb-ring orb-ring-dashed absolute h-[min(38vw,500px)] w-[min(38vw,500px)] max-h-[500px] max-w-[500px] rounded-full border border-dashed border-[#4d8dff]/20"
          >
            <span className="orb-dot orb-dot-one" />
            <span className="orb-dot orb-dot-two" />
          </div>

          <div
            aria-hidden="true"
            className="orb-ring orb-ring-middle absolute h-[min(33vw,430px)] w-[min(33vw,430px)] max-h-[430px] max-w-[430px] rounded-full"
          />

          <div
            aria-hidden="true"
            className="orb-ring orb-ring-inner absolute h-[min(28vw,365px)] w-[min(28vw,365px)] max-h-[365px] max-w-[365px] rounded-full"
          />

          {/* Orbiting satellite */}
          <div
            aria-hidden="true"
            className="orb-satellite absolute h-[min(38vw,490px)] w-[min(38vw,490px)] max-h-[490px] max-w-[490px] rounded-full"
          >
            <span />
          </div>

          {/* Profile orb */}
          <div className="profile-orb relative z-20 h-[min(27vw,350px)] w-[min(27vw,350px)] max-h-[350px] max-w-[350px] overflow-hidden rounded-full border-2 border-[#4d8dff]/60 bg-[#090d14]">
            
            <img
              src="/draken.jpg"
              alt="Draken"
              className="profile-image h-full w-full object-cover object-[50%_58%]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.15),transparent_28%),linear-gradient(to_bottom,transparent_45%,rgba(3,6,12,0.42))]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(77,141,255,0.38)]"
            />

            <div
              aria-hidden="true"
              className="orb-shine absolute inset-0"
            />
          </div>

          {/* Orb edge */}
          <div
            aria-hidden="true"
            className="absolute z-10 h-[min(28vw,365px)] w-[min(28vw,365px)] max-h-[365px] max-w-[365px] rounded-full border border-[#4d8dff]/25"
          />

          {/* Labels */}
          <div className="absolute left-[8%] top-[25%] hidden font-mono text-[8px] uppercase tracking-[0.25em] text-[#626c7a] xl:block">
            <span className="block text-[#4d8dff]">01</span>
            IDENTITY
          </div>

          <div className="absolute bottom-[16%] right-[4%] hidden text-right font-mono text-[8px] uppercase tracking-[0.25em] text-[#626c7a] xl:block">
            <span className="block text-[#4d8dff]">ONLINE</span>
            BUILD / CREATE
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL
      ===================================================== */}

      <a
        href="#work"
        className="absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#626c7a] transition-all duration-700 hover:text-[#f5f7fa] sm:flex"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.4em]">
          Scroll
        </span>

        <span className="scroll-line h-9 w-px bg-gradient-to-b from-[#4d8dff] to-transparent" />
      </a>
    </section>
  )
}

export default Hero
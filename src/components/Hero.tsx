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
      id="top"
      className="relative min-h-screen overflow-hidden border-b border-white/[0.06]"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[68%] top-[45%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4d8dff]/[0.06] blur-[150px]"
      />

      {/* Top technical marker */}
      <div className="pointer-events-none absolute right-6 top-28 hidden font-mono text-[9px] uppercase tracking-[0.3em] text-[#626c7a] lg:block">
        <span className="text-[#4d8dff]">SYS_01</span>
        <br />
        PERSONAL PORTFOLIO
      </div>

      <div className="relative mx-auto grid min-h-screen w-full max-w-[1400px] items-center gap-10 px-6 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-12 lg:pt-24">
        {/* LEFT */}
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#4d8dff]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#626c7a]">
              Full-Stack Developer
            </span>
          </div>

          <h1 className="max-w-5xl text-[clamp(4rem,10vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-[#f5f7fa]">
            Ð R ƛ K E N
            <span className="mt-2 block text-[#4d8dff]">他</span>
          </h1>

          <div className="mt-10 max-w-2xl">
            <p className="text-xl leading-8 tracking-[-0.02em] text-[#dce1e8] sm:text-2xl">
              I build software, AI systems,
              <br className="hidden sm:block" /> and the infrastructure behind
              them.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#626c7a]">
              Full-stack engineering with a focus on systems that connect
              interfaces, APIs, intelligence, and real-world infrastructure.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-4 rounded-full bg-[#f5f7fa] px-6 py-3.5 text-sm font-medium text-[#080a0f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              View my work

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#080a0f] text-[#f5f7fa] transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>

            <a
              href="https://github.com/IrregDraken"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-[#f5f7fa] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4d8dff]/40 hover:bg-[#4d8dff]/[0.06]"
            >
              GitHub
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>

          {/* Metadata */}
          <div className="mt-16 grid max-w-xl grid-cols-2 gap-8 border-t border-white/[0.07] pt-6 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#626c7a]">
                Focus
              </p>

              <p className="mt-2 text-sm text-[#dce1e8]">
                AI · Backend
              </p>
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#626c7a]">
                Status
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4d8dff] shadow-[0_0_10px_#4d8dff]" />

                <span className="text-sm text-[#dce1e8]">
                  Building
                </span>
              </div>
            </div>

            <div className="hidden sm:block">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#626c7a]">
                Lagos
              </p>

              <p className="mt-2 font-mono text-sm text-[#dce1e8]">
                {time || '--:--:--'}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SYSTEM VISUAL */}
        <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[620px]">
          {/* Outer rings */}
          <div
            aria-hidden="true"
            className="absolute h-[min(75vw,520px)] w-[min(75vw,520px)] max-h-[520px] max-w-[520px] rounded-full border border-white/[0.05]"
          />

          <div
            aria-hidden="true"
            className="absolute h-[min(58vw,390px)] w-[min(58vw,390px)] max-h-[390px] max-w-[390px] rounded-full border border-[#4d8dff]/10"
          />

          <div
            aria-hidden="true"
            className="absolute h-[min(40vw,260px)] w-[min(40vw,260px)] max-h-[260px] max-w-[260px] rounded-full border border-white/[0.06]"
          />

          {/* Orbit */}
          <div
            aria-hidden="true"
            className="absolute h-[min(65vw,430px)] w-[min(65vw,430px)] max-h-[430px] max-w-[430px] animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-[#4d8dff]/15"
          >
            <span className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-[#4d8dff] shadow-[0_0_18px_#4d8dff]" />
          </div>

          {/* Crosshair */}
          <div
            aria-hidden="true"
            className="absolute h-px w-[min(70vw,500px)] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
          />

          <div
            aria-hidden="true"
            className="absolute h-[min(70vw,500px)] w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent"
          />

          {/* Core */}
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-[#4d8dff]/30 bg-[#0d1118]/90 shadow-[0_0_100px_rgba(77,141,255,0.16)] backdrop-blur-xl sm:h-44 sm:w-44">
            <div className="absolute inset-3 rounded-full border border-[#4d8dff]/10" />

            <div className="absolute inset-8 rounded-full border border-[#4d8dff]/10" />

            <div className="h-20 w-20 rounded-full bg-[#4d8dff]/10 shadow-[0_0_70px_rgba(77,141,255,0.4)] sm:h-24 sm:w-24" />

            <span className="absolute font-mono text-[9px] uppercase tracking-[0.3em] text-[#9aa4b2]">
              DRKN
            </span>
          </div>

          {/* System labels */}
          <div className="absolute left-2 top-12 hidden font-mono text-[9px] uppercase tracking-[0.2em] text-[#626c7a] sm:block">
            <span className="block text-[#4d8dff]">01</span>
            SYSTEM
          </div>

          <div className="absolute bottom-8 right-2 hidden text-right font-mono text-[9px] uppercase tracking-[0.2em] text-[#626c7a] sm:block">
            <span className="block text-[#4d8dff]">ONLINE</span>
            BUILD / CREATE
          </div>

          <div
            aria-hidden="true"
            className="absolute right-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#4d8dff] shadow-[0_0_14px_#4d8dff]"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[18%] left-[12%] h-1 w-1 rounded-full bg-white/30"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#work"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[#626c7a] transition-colors duration-300 hover:text-[#f5f7fa] sm:flex"
        aria-label="Scroll to selected work"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.35em]">
          Scroll
        </span>

        <span className="h-10 w-px bg-gradient-to-b from-[#4d8dff] to-transparent" />
      </a>
    </section>
  )
}

export default Hero
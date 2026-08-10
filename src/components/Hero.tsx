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
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background grid */}
      <div
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
      <div className="pointer-events-none absolute left-[65%] top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4d8dff]/[0.07] blur-[150px]" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-16 px-6 pb-16 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-0 lg:pt-20">
        {/* Copy */}
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-[#4d8dff]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#626c7a]">
              Full-Stack Developer
            </span>
          </div>

          <h1 className="max-w-4xl text-[clamp(3.5rem,9vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-[#f5f7fa]">
            Ð R ƛ K E N
            <span className="block text-[#4d8dff]">他</span>
          </h1>

          <p className="mt-9 max-w-xl text-lg leading-8 text-[#9aa4b2] sm:text-xl">
            I build software, AI systems, and the infrastructure behind them.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#f5f7fa] px-6 py-3.5 text-sm font-medium text-[#080a0f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              View my work

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#080a0f] text-[#f5f7fa] transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-[#f5f7fa] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.03]"
            >
              GitHub
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>

          {/* Metadata */}
          <div className="mt-16 grid max-w-lg grid-cols-2 gap-8 border-t border-white/[0.07] pt-6 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#626c7a]">
                Focus
              </p>
              <p className="mt-2 text-sm text-[#dce1e8]">AI · Backend</p>
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#626c7a]">
                Status
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4d8dff] shadow-[0_0_10px_#4d8dff]" />
                <span className="text-sm text-[#dce1e8]">Building</span>
              </div>
            </div>

            <div className="hidden sm:block">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#626c7a]">
                Local Time
              </p>
              <p className="mt-2 font-mono text-sm text-[#dce1e8]">
                {time || '--:--:--'}
              </p>
            </div>
          </div>
        </div>

        {/* System visual */}
        <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[600px]">
          {/* Outer rings */}
          <div className="absolute h-[min(70vw,480px)] w-[min(70vw,480px)] max-h-[480px] max-w-[480px] rounded-full border border-white/[0.05]" />

          <div className="absolute h-[min(55vw,360px)] w-[min(55vw,360px)] max-h-[360px] max-w-[360px] rounded-full border border-[#4d8dff]/10" />

          <div className="absolute h-[min(40vw,250px)] w-[min(40vw,250px)] max-h-[250px] max-w-[250px] rounded-full border border-white/[0.06]" />

          {/* Orbit */}
          <div className="absolute h-[min(62vw,400px)] w-[min(62vw,400px)] max-h-[400px] max-w-[400px] animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-[#4d8dff]/15">
            <span className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-[#4d8dff] shadow-[0_0_18px_#4d8dff]" />
          </div>

          {/* Core */}
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-[#4d8dff]/30 bg-[#0d1118]/90 shadow-[0_0_80px_rgba(77,141,255,0.15)] backdrop-blur-xl sm:h-40 sm:w-40">
            <div className="absolute inset-3 rounded-full border border-[#4d8dff]/10" />

            <div className="h-16 w-16 rounded-full bg-[#4d8dff]/10 shadow-[0_0_60px_rgba(77,141,255,0.35)] sm:h-20 sm:w-20" />

            <span className="absolute font-mono text-[9px] uppercase tracking-[0.25em] text-[#9aa4b2]">
              DRKN
            </span>
          </div>

          {/* System labels */}
          <div className="absolute left-0 top-12 hidden font-mono text-[9px] uppercase tracking-[0.2em] text-[#626c7a] sm:block">
            <span className="block text-[#4d8dff]">01</span>
            SYSTEM
          </div>

          <div className="absolute bottom-10 right-0 hidden text-right font-mono text-[9px] uppercase tracking-[0.2em] text-[#626c7a] sm:block">
            <span className="block text-[#4d8dff]">ONLINE</span>
            BUILD / CREATE
          </div>

          <div className="absolute right-8 top-20 h-1 w-1 rounded-full bg-[#4d8dff] shadow-[0_0_12px_#4d8dff]" />
          <div className="absolute bottom-24 left-12 h-1 w-1 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#work"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[#626c7a] transition-colors duration-300 hover:text-[#f5f7fa] sm:flex"
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
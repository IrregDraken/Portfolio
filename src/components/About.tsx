import { siteConfig } from '../config/site'

const facts = [
  {
    label: 'Based in',
    value: siteConfig.location,
  },
  {
    label: 'Focus',
    value: 'Software + AI',
  },
  {
    label: 'Currently',
    value: 'Final-year Computer Science student',
  },
]

const timeline = [
  {
    period: '2026 (Expected)',
    title: 'B.Sc. Computer Science',
    organization: 'Michael & Cecilia Ibru University',
  },
  {
    period: '2024',
    title: 'Project Manager & Full-Stack Developer',
    organization: 'Lumora Devs (Remote Startup)',
  },
  {
    period: '2024',
    title: 'Technology Lead',
    organization: 'Tech Pantheon',
  },
  {
    period: '2024',
    title: 'University Coding Tutor',
    organization: 'C Programming',
  },
  {
    period: 'Oct 2021 – Oct 2022',
    title: 'Hardware Engineer',
    organization: 'Gigabyte Services',
  },
]

function About() {
  return (
    <section
      id="about"
      className="snap-section flex min-h-[100svh] scroll-snap-align-start border-t border-white/[0.06] px-6 pt-[104px] pb-8 sm:pt-[116px] sm:pb-10 lg:px-8 lg:pb-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header row */}
        <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-6 bg-[#39ff88]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#8b9690]">
                About
              </span>

              <span className="font-mono text-[10px] tracking-[0.2em] text-[#39ff88]/60">
                / 03
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-[#f5f7fa] sm:text-5xl lg:text-6xl">
              {siteConfig.about.title}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#8b9690]">
            A little context about the person behind the systems.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
                            <p className="reveal max-w-3xl text-xl leading-9 tracking-[-0.025em] text-[#dce1e8] sm:text-2xl sm:leading-10">
              {siteConfig.about.summary}
            </p>
            <p className="reveal mt-7 max-w-2xl text-sm leading-7 text-[#8b9690]" data-reveal-delay="100">
              {siteConfig.about.detail}
            </p>

            {siteConfig.links.resume && (
              <div className="reveal mt-8" data-reveal-delay="240">
                <a
                  href={siteConfig.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-[#f5f7fa] transition-all duration-300 hover:border-[#39ff88]/40 hover:bg-white/[0.03] hover:text-[#39ff88]"
                >
                  Download resume (PDF)
                  <span>↗</span>
                </a>
              </div>
            )}
          </div>

          <div className="lg:border-l lg:border-white/[0.07] lg:pl-12">
            <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className="reveal border-b border-white/[0.06] pb-6 last:border-0"
                  data-reveal-delay={index * 90}
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                    {fact.label}
                  </p>

                  <p className="mt-3 text-sm text-[#f5f7fa]">{fact.value}</p>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="reveal mt-12" data-reveal-delay="200">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                Education & experience
              </p>

              <div className="mt-6 space-y-0">
                {timeline.map((item) => (
                  <div
                    key={item.period + item.title}
                    className="relative border-b border-white/[0.06] pb-6 last:border-0 last:pb-0"
                  >
                    <span className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-[#39ff88]/30 to-transparent" />

                    <span className="absolute left-0 top-1 h-px w-3 bg-[#39ff88]/50" />

                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#39ff88]/80">
                      {item.period}
                    </p>

                    <p className="mt-1.5 text-sm font-medium text-[#f5f7fa]">
                      {item.title}
                    </p>

                    <p className="mt-0.5 text-xs text-[#8b9690]">
                      {item.organization}
                    </p>

                  </div>
                ))}
              </div>
            </div>

            <div className="reveal mt-8 rounded-2xl border border-[#39ff88]/10 bg-[#39ff88]/[0.035] p-6" data-reveal-delay="270">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#39ff88] opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#39ff88]" />
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#39ff88]">
                  {siteConfig.availability.status}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#8b9690]">
                {siteConfig.availability.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

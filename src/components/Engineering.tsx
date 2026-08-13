
const engineeringGroups = [
  {
    number: '01',
    title: 'Backend & AI',
    description:
      'Python and Flask APIs, authentication, and OpenAI-driven assistants and agents.',
    technologies: [
      'Python',
      'Flask',
      'REST APIs',
      'SQLite',
      'OpenAI API',
      'AI Agents',
    ],
  },
  {
    number: '02',
    title: 'Automation',
    description:
      'Intelligent workflows that remove repetitive work across tools and platforms.',
    technologies: [
      'Google Apps Script',
      'Zapier',
      'n8n',
      'Telegram Bot API',
      'Webhooks',
    ],
  },
  {
    number: '03',
    title: 'IoT & Embedded',
    description:
      'ESP32 and Arduino systems with sensor integration and hardware debugging.',
    technologies: ['ESP32', 'Arduino', 'Sensor Integration', 'Electronics', 'C'],
  },
  {
    number: '04',
    title: 'Frontend & Design',
    description:
      'Deliberate, responsive interfaces designed in Figma and built to ship.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Flutter',
      'Figma',
      'HTML5 / CSS3',
    ],
  },
]

function Engineering() {
  return (
    <section
      id="engineering"
      className="snap-section flex min-h-[100svh] scroll-snap-align-start border-t border-white/[0.06] px-6 pt-[104px] pb-8 sm:pt-[116px] sm:pb-10 lg:px-8 lg:pb-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header row */}
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-6 bg-[#39ff88]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#8b9690]">
                Engineering
              </span>

              <span className="font-mono text-[10px] tracking-[0.2em] text-[#39ff88]/60">
                / 02
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-[#f5f7fa] sm:text-5xl lg:text-6xl">
              How I build.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#8b9690]">
            The technologies and engineering areas behind the work.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-white/[0.06] bg-[#080d0a] sm:grid-cols-2 lg:grid-cols-4">
          {engineeringGroups.map((group, groupIndex) => (
            <article
              key={group.number}
              className="reveal group relative bg-[#0d1210] p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-[#111713] hover:shadow-[0_10px_34px_rgba(0,0,0,0.35),0_0_22px_rgba(57,255,136,0.06)] sm:p-8"
              data-reveal-delay={groupIndex * 90}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#39ff88]">
                  {group.number}
                </span>

                <span className="text-[#8b9690] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <h3 className="mt-12 text-xl font-medium tracking-[-0.03em] text-[#f5f7fa]">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8b9690]">
                {group.description}
              </p>

              <ul className="mt-8 space-y-3 border-t border-white/[0.06] pt-6">
                {group.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="flex items-center gap-3 text-sm text-[#8b9690]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#39ff88]/70" />
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="reveal mt-6 rounded-3xl border border-white/[0.06] bg-[#0d1210] p-7 sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                Philosophy
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#8b9690]">
                I care about understanding what I build, not just getting it to
                run. The goal is software that can be explained, maintained,
                tested, and improved.
              </p>
            </div>

            <div className="shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-[#39ff88]">
              Learn → Build → Refine
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Engineering

import SectionHeading from './SectionHeading'

const engineeringGroups = [
  {
    number: '01',
    title: 'Frontend',
    description: 'Interfaces that are deliberate, responsive, and usable.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Flutter',
      'Figma',
    ],
  },
  {
    number: '02',
    title: 'Backend',
    description: 'APIs and application logic built around clear architecture.',
    technologies: [
      'Python',
      'Flask',
      'REST APIs',
      'PostgreSQL',
      'SQLAlchemy',
    ],
  },
  {
    number: '03',
    title: 'AI',
    description: 'Practical AI integrations and intelligent application features.',
    technologies: [
      'OpenAI',
      'Whisper',
      'Machine Learning',
      'Computer Vision',
      'AI APIs',
    ],
  },
  {
    number: '04',
    title: 'Systems',
    description: 'The infrastructure and hardware underneath the application.',
    technologies: [
      'Git',
      'Docker',
      'Cloud',
      'IoT',
      'ESP32',
    ],
  },
]

function Engineering() {
  return (
    <section
      id="engineering"
      className="border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Engineering"
          number="02"
          title="How I build."
          description="The technologies and engineering areas behind the work."
        />

        <div className="grid overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0a0e0c] sm:grid-cols-2 lg:grid-cols-4">
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

                <span className="text-[#626c7a] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <h3 className="mt-12 text-xl font-medium tracking-[-0.03em] text-[#f5f7fa]">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#626c7a]">
                {group.description}
              </p>

              <ul className="mt-8 space-y-3 border-t border-white/[0.06] pt-6">
                {group.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="flex items-center gap-3 text-sm text-[#9aa4b2]"
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
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#626c7a]">
                Philosophy
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#9aa4b2]">
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

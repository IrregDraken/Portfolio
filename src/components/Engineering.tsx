/**
 * STACK — the technical ecosystem page.
 * Six engineering areas with the technologies actually used,
 * distinguished by primary (shipped with) vs developing (in use).
 */

type Tech = {
  name: string
  /** 'primary' = actively used in shipped work; 'developing' = currently adopted / being developed */
  level: 'primary' | 'developing'
}

type StackGroup = {
  number: string
  title: string
  description: string
  technologies: Tech[]
}

const stackGroups: StackGroup[] = [
  {
    number: '01',
    title: 'Backend & AI',
    description:
      'Python services, typed APIs, and AI-driven assistants built for real systems.',
    technologies: [
      { name: 'Python', level: 'primary' },
      { name: 'Flask', level: 'primary' },
      { name: 'REST APIs', level: 'primary' },
      { name: 'SQLAlchemy', level: 'developing' },
      { name: 'PostgreSQL', level: 'developing' },
      { name: 'OpenAI API', level: 'primary' },
      { name: 'LLM Integration', level: 'primary' },
      { name: 'Function / Tool Calling', level: 'developing' },
      { name: 'AI Agents', level: 'primary' },
      { name: 'RAG', level: 'developing' },
      { name: 'Embeddings', level: 'developing' },
      { name: 'Redis', level: 'developing' },
      { name: 'FastAPI', level: 'developing' },
    ],
  },
  {
    number: '02',
    title: 'Automation & Integrations',
    description:
      'Workflows that remove repetitive work across tools and platforms.',
    technologies: [
      { name: 'n8n', level: 'primary' },
      { name: 'Zapier', level: 'primary' },
      { name: 'Google Apps Script', level: 'primary' },
      { name: 'Telegram Bot API', level: 'primary' },
      { name: 'Webhooks', level: 'primary' },
      { name: 'OAuth', level: 'developing' },
      { name: 'API Integration', level: 'primary' },
      { name: 'Payment API Integration', level: 'developing' },
      { name: 'Email APIs', level: 'developing' },
    ],
  },
  {
    number: '03',
    title: 'IoT & Embedded',
    description:
      'ESP32 and Arduino systems with sensor integration and hardware debugging.',
    technologies: [
      { name: 'ESP32', level: 'primary' },
      { name: 'C', level: 'primary' },
      { name: 'Arduino', level: 'developing' },
      { name: 'Sensor Integration', level: 'primary' },
      { name: 'MQTT', level: 'developing' },
      { name: 'Wi-Fi', level: 'developing' },
      { name: 'BLE', level: 'developing' },
      { name: 'Electronics', level: 'developing' },
      { name: 'Hardware Debugging', level: 'primary' },
    ],
  },
  {
    number: '04',
    title: 'Frontend & Design',
    description:
      'Deliberate, responsive interfaces designed in Figma and built to ship.',
    technologies: [
      { name: 'TypeScript', level: 'primary' },
      { name: 'React', level: 'primary' },
      { name: 'Tailwind CSS', level: 'primary' },
      { name: 'HTML5 / CSS3', level: 'primary' },
      { name: 'Figma', level: 'primary' },
      { name: 'JavaScript', level: 'primary' },
      { name: 'Flutter', level: 'developing' },
      { name: 'Dart', level: 'developing' },
      { name: 'Next.js', level: 'developing' },
      { name: 'Responsive Design', level: 'primary' },
      { name: 'UI/UX', level: 'primary' },
      { name: 'Wireframing / Prototyping', level: 'developing' },
    ],
  },
  {
    number: '05',
    title: 'Cloud & Infrastructure',
    description:
      'Containers, deployment pipelines, and cloud services behind production systems.',
    technologies: [
      { name: 'Linux', level: 'primary' },
      { name: 'Git / GitHub Actions', level: 'primary' },
      { name: 'CI/CD', level: 'developing' },
      { name: 'Docker', level: 'developing' },
      { name: 'Docker Compose', level: 'developing' },
      { name: 'Nginx', level: 'developing' },
      { name: 'Cloud Deployment', level: 'developing' },
      { name: 'AWS / Azure', level: 'developing' },
      { name: 'Cloud Storage & Databases', level: 'developing' },
      { name: 'Monitoring & Logging', level: 'developing' },
      { name: 'Secrets Management', level: 'developing' },
    ],
  },
  {
    number: '06',
    title: 'Engineering & Developer Tools',
    description:
      'The discipline around the code: version control, testing, and design.',
    technologies: [
      { name: 'Git / GitHub', level: 'primary' },
      { name: 'VS Code', level: 'primary' },
      { name: 'Postman', level: 'primary' },
      { name: 'Pytest', level: 'developing' },
      { name: 'Unit & Integration Testing', level: 'developing' },
      { name: 'OpenAPI / Swagger', level: 'developing' },
      { name: 'JSON / YAML', level: 'primary' },
      { name: 'Debugging', level: 'primary' },
      { name: 'Software Architecture', level: 'developing' },
      { name: 'System Design', level: 'developing' },
    ],
  },
]

function Engineering() {
  return (
    <section
      id="stack"
      aria-label="Technology stack"
      className="snap-section flex min-h-[100svh] scroll-snap-align-start border-t border-white/[0.06] px-6 pt-[92px] pb-6 sm:pt-[108px] sm:pb-8 lg:px-8 lg:pb-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header row */}
        <div className="mb-5 flex flex-col gap-4 lg:mb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-6 bg-[#39ff88]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#8b9690]">
                Stack
              </span>

              <span className="font-mono text-[10px] tracking-[0.2em] text-[#39ff88]/60">
                / 02
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-[#f5f7fa] sm:text-5xl">
              What I build with.
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <p className="max-w-md text-[13px] leading-6 text-[#8b9690]">
              The technologies and engineering areas behind the work.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="flex items-center gap-2 text-[11px] text-[#8b9690]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#39ff88]" />
                In production
              </span>
              <span className="flex items-center gap-2 text-[11px] text-[#8b9690]">
                <span className="h-1.5 w-1.5 rounded-full border border-[#39ff88]/60 bg-transparent" />
                In active use
              </span>
            </div>
          </div>
        </div>

        {/*
          Shell with rounded corners + overflow-hidden for the radius,
          plus a bottom margin so the grid's last row clears the corner
          curve (mobile single column previously clipped the final chip
          row of the last card).
        */}
        <div className="mb-6 overflow-hidden rounded-3xl border border-white/[0.06] bg-[#080d0a] sm:mb-7">
          <div className="grid pb-5 sm:grid-cols-2 sm:pb-6 lg:grid-cols-3">
          {stackGroups.map((group, groupIndex) => (
            <article
              key={group.number}
              className="reveal group relative border-white/[0.04] bg-[#0d1210] p-4 transition-all duration-500 hover:bg-[#111713] sm:p-5 [&:nth-child(3n+2)]:lg:border-x [&:nth-child(3n+1)]:lg:border-r"
              data-reveal-delay={groupIndex * 70}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#39ff88]">
                  {group.number}
                </span>

                <span className="text-[#8b9690] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <h3 className="mt-5 text-[15px] font-medium tracking-[-0.03em] text-[#f5f7fa]">
                {group.title}
              </h3>

              <p className="mt-1.5 text-[12px] leading-5 text-[#8b9690]">
                {group.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5 border-t border-white/[0.06] pt-3.5">
                {group.technologies.map((technology) => (
                  <li key={technology.name}>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] ${
                        technology.level === 'primary'
                          ? 'border-[#39ff88]/30 bg-[#39ff88]/[0.07] text-[#d7f3e3]'
                          : 'border-white/[0.07] bg-white/[0.03] text-[#8b9690]'
                      }`}
                    >
                      <span
                        className={
                          technology.level === 'primary'
                            ? 'h-1 w-1 rounded-full bg-[#39ff88]'
                            : 'h-1 w-1 rounded-full border border-[#39ff88]/60'
                        }
                      />
                      {technology.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          </div>
        </div>

        <div className="reveal mt-4 rounded-3xl border border-white/[0.06] bg-[#0d1210] px-6 py-4 sm:px-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-[13px] leading-6 text-[#8b9690]">
              I care about understanding what I build, not just getting it to
              run — software that can be explained, maintained, tested, and
              improved.
              <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#39ff88]">
                Learn → Build → Refine
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Engineering

import SectionHeading from './SectionHeading'
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
    period: '2026',
    title: 'B.Sc. Computer Science (Expected)',
    organization: 'Michael & Cecilia Ibru University',
    detail:
      'Final-year coursework in software engineering, databases, and systems. Tutoring peers in C programming.',
  },
  {
    period: '2024',
    title: 'Project Manager & Full-Stack Developer',
    organization: 'Lumora Devs (Remote)',
    detail:
      'Led a seven-member remote team planning and delivering web and mobile applications. Owned architecture, UI design, backend implementation, and deployment.',
  },
  {
    period: '2024',
    title: 'Technology Lead',
    organization: 'Tech Pantheon',
    detail:
      'Technical leadership for the community, mentoring members and coordinating engineering initiatives.',
  },
  {
    period: '2021 – 2022',
    title: 'Hardware Engineer',
    organization: 'Gigabyte Services',
    detail:
      'Diagnosed, repaired, and upgraded computer systems. Configured networks, operating systems, and peripherals — the first real lesson in how systems fail and how to debug them.',
  },
]

function About() {
  return (
    <section
      id="about"
      className="border-t border-white/[0.06] px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          number="03"
          title="Nnamdi Nwodim."
          description="A little context about the person behind the systems."
        />

        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div>
            <p className="reveal max-w-3xl text-xl leading-9 tracking-[-0.025em] text-[#dce1e8] sm:text-2xl sm:leading-10">
              I am a final-year Computer Science student interested in building
              practical software, AI-powered products, and systems that solve
              real problems.
            </p>

            <p className="reveal mt-7 max-w-2xl text-sm leading-7 text-[#8b9690]" data-reveal-delay="100">
              My work sits across application development, backend systems,
              artificial intelligence, and connected hardware. I have led a
              seven-member remote development team, shipped end-to-end web and
              mobile applications, and built AI assistants, IoT security
              systems, and workflow automation tools that people actually use.
            </p>

            <p className="reveal mt-5 max-w-2xl text-sm leading-7 text-[#8b9690]" data-reveal-delay="180">
              Right now, the focus is on becoming a stronger engineer by
              building, breaking, debugging, and rebuilding things until the
              underlying concepts actually make sense.
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

              <div className="mt-8 space-y-0">
                {timeline.map((item, index) => (
                  <div
                    key={item.period + item.title}
                    className="relative border-b border-white/[0.06] pb-8 last:border-0 last:pb-0"
                  >
                    <span className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-[#39ff88]/30 to-transparent" />

                    <span className="absolute left-0 top-1 h-px w-3 bg-[#39ff88]/50" />

                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#39ff88]/80">
                      {item.period}
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#f5f7fa]">
                      {item.title}
                    </p>

                    <p className="mt-0.5 text-xs text-[#8b9690]">
                      {item.organization}
                    </p>

                    {index < timeline.length - 1 && (
                      <p className="mt-3 max-w-md text-[13px] leading-6 text-[#8b9690]/90">
                        {item.detail}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal mt-10 rounded-2xl border border-[#39ff88]/10 bg-[#39ff88]/[0.035] p-6" data-reveal-delay="270">
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

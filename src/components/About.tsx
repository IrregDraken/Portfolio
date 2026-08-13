import {
  GraduationCap,
  Briefcase,
  Users,
  Code2,
  Cpu,
} from 'lucide-react'
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

const education = [
  {
    icon: GraduationCap,
    period: '2023 – 2026 (Expected)',
    title: 'B.Sc. Computer Science',
    organization: 'Michael & Cecilia Ibru University',
  },
  {
    icon: Code2,
    period: '2024',
    title: 'University Coding Tutor',
    organization: 'C Programming',
  },
]

const experience = [
  {
    icon: Briefcase,
    period: 'Apr 2024 – Oct 2024',
    title: 'Project Manager & Full-Stack Developer',
    organization: 'Lumora Devs (Remote Startup)',
  },
  {
    icon: Users,
    period: '2024',
    title: 'Technology Lead',
    organization: 'Tech Pantheon',
  },
  {
    icon: Cpu,
    period: 'Oct 2021 – Oct 2022',
    title: 'Hardware Engineer',
    organization: 'Gigabyte Services',
  },
]

function Entry({
  icon: Icon,
  period,
  title,
  organization,
  index,
}: {
  icon: typeof GraduationCap
  period: string
  title: string
  organization: string
  index: number
}) {
  return (
    <div
      className="reveal group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#080d0a] px-4.5 py-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#39ff88]/25 hover:bg-[#0a110d]"
      data-reveal-delay={String(index * 70)}
    >
      {/* Subtle green edge glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#39ff88]/[0.07] blur-[60px] transition-all duration-500 group-hover:bg-[#39ff88]/[0.13]" />

      <div className="relative flex items-start gap-4">
        <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#39ff88]/20 bg-[#39ff88]/[0.06]">
          <Icon className="h-[18px] w-[18px] text-[#39ff88]" strokeWidth={1.75} />
        </span>

        <div className="min-w-0">
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#39ff88]/80">
            {period}
          </p>

          <p className="mt-1.5 truncate text-[15px] font-medium tracking-[-0.02em] text-[#f5f7fa]">
            {title}
          </p>

          <p className="mt-0.5 truncate text-xs text-[#8b9690]">
            {organization}
          </p>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <section
      id="about"
      className="snap-section flex min-h-[100svh] scroll-snap-align-start border-t border-white/[0.06] px-6 pt-[88px] pb-6 sm:pt-[100px] sm:pb-8 lg:px-8 lg:pb-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header row */}
        <div className="mb-5 flex flex-col gap-5 lg:mb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-[#39ff88]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#8b9690]">
                About
              </span>

              <span className="font-mono text-[10px] tracking-[0.2em] text-[#39ff88]/60">
                / 03
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-[#f5f7fa] sm:text-4xl lg:text-5xl">
              {siteConfig.about.title}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#8b9690]">
            A little context about the person behind the systems.
          </p>
        </div>

        {/* Bio + facts + resume + availability */}
        <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <p className="reveal max-w-3xl text-lg leading-8 tracking-[-0.02em] text-[#dce1e8] sm:text-xl sm:leading-9">
              {siteConfig.about.summary}
            </p>
            <p className="reveal mt-3 max-w-2xl text-sm leading-6 text-[#8b9690]" data-reveal-delay="100">
              {siteConfig.about.detail}
            </p>

            {siteConfig.links.resume && (
              <div className="reveal mt-4" data-reveal-delay="200">
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

          <div className="lg:border-l lg:border-white/[0.07] lg:pl-10">
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className="reveal border-b border-white/[0.06] pb-3.5 last:border-0"
                  data-reveal-delay={String(index * 80)}
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                    {fact.label}
                  </p>

                  <p className="mt-1.5 text-sm text-[#f5f7fa]">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="reveal mt-5 rounded-2xl border border-[#39ff88]/10 bg-[#39ff88]/[0.035] p-4" data-reveal-delay="240">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#39ff88] opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#39ff88]" />
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#39ff88]">
                  {siteConfig.availability.status}
                </span>
              </div>

              <p className="mt-2 text-[12.5px] leading-5 text-[#8b9690]">
                {siteConfig.availability.label}
              </p>
            </div>
          </div>
        </div>

        {/* Education & Experience cards */}
        <div className="mt-7 grid gap-5 lg:grid-cols-2 lg:gap-8">
          <div>
            <p className="reveal mb-4 font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
              Education
            </p>

            <div className="space-y-2.5">
              {education.map((item, index) => (
                <Entry key={item.title} {...item} index={index} />
              ))}
            </div>
          </div>

          <div>
            <p className="reveal mb-4 font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
              Experience
            </p>

            <div className="space-y-2.5">
              {experience.map((item, index) => (
                <Entry key={item.title} {...item} index={index + education.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

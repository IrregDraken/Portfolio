import type { Project } from '../data/projects'

interface FeaturedProjectProps {
  project: Project
}

function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0d1118]">
      {/* Project visual */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.06] bg-[#090d13]">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Ambient project glow */}
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4d8dff]/10 blur-[100px] transition-all duration-700 group-hover:bg-[#4d8dff]/15" />

        {/* Fake system interface */}
        <div className="absolute inset-6 flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0f15]/90 shadow-2xl backdrop-blur-sm transition-transform duration-700 group-hover:scale-[1.015] sm:inset-10">
          {/* Window header */}
          <div className="flex h-10 items-center border-b border-white/[0.06] px-4">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
            </div>

            <span className="ml-4 font-mono text-[8px] uppercase tracking-[0.2em] text-[#626c7a]">
              {project.name} / SYSTEM
            </span>
          </div>

          {/* Window body */}
          <div className="relative flex flex-1 items-center justify-center p-6">
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#4d8dff]/20 bg-[#4d8dff]/[0.06] shadow-[0_0_50px_rgba(77,141,255,0.12)]">
                <div className="h-8 w-8 rounded-full bg-[#4d8dff]/20 shadow-[0_0_30px_rgba(77,141,255,0.4)]" />
              </div>

              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#4d8dff]">
                {project.category}
              </p>

              <p className="mt-2 text-xl font-medium tracking-[-0.03em] text-[#f5f7fa] sm:text-2xl">
                {project.name}
              </p>
            </div>

            {/* Decorative data points */}
            <span className="absolute left-6 top-6 font-mono text-[8px] text-[#626c7a]">
              01 / 04
            </span>

            <span className="absolute bottom-6 right-6 font-mono text-[8px] text-[#626c7a]">
              ONLINE
            </span>
          </div>
        </div>

        {/* Project number */}
        <span className="absolute right-6 top-5 font-mono text-[9px] tracking-[0.2em] text-[#626c7a]">
          PROJECT {project.number}
        </span>
      </div>

      {/* Content */}
      <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-5 bg-[#4d8dff]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#626c7a]">
              {project.category}
            </span>
          </div>

          <h3 className="text-3xl font-semibold tracking-[-0.045em] text-[#f5f7fa] sm:text-4xl">
            {project.name}
          </h3>

          <p className="mt-4 max-w-xl text-base leading-7 text-[#dce1e8]">
            {project.description}
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#626c7a]">
            {project.longDescription}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] text-[#9aa4b2]"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-3 rounded-full bg-[#f5f7fa] px-5 py-3 text-sm font-medium text-[#080a0f] transition-all duration-300 hover:bg-white"
              >
                Live project
                <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">
                  ↗
                </span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-[#f5f7fa] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]"
              >
                Source
                <span>↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Highlights */}
        <div className="lg:border-l lg:border-white/[0.06] lg:pl-10">
          <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.3em] text-[#626c7a]">
            Engineering highlights
          </p>

          <ul className="space-y-4">
            {project.highlights.map((highlight, index) => (
              <li
                key={highlight}
                className="flex items-start gap-4 text-sm leading-6 text-[#9aa4b2]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4d8dff] shadow-[0_0_10px_rgba(77,141,255,0.5)]" />

                <span>
                  <span className="mr-2 font-mono text-[9px] text-[#626c7a]">
                    0{index + 1}
                  </span>
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default FeaturedProject
import type { Project } from '../data/projects'

interface FeaturedProjectProps {
  project: Project
}

function FeaturedProject({ project }: FeaturedProjectProps) {
  const hasLinks = Boolean(project.liveUrl) || Boolean(project.githubUrl)

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#080d0a] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_42px_rgba(0,0,0,0.4),0_0_26px_rgba(57,255,136,0.07)]">
      {/* Subtle green edge glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#39ff88]/[0.07] blur-[110px] transition-all duration-700 group-hover:bg-[#39ff88]/10" />

      <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-5 bg-[#39ff88]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
              {project.category}
            </span>

            <span className="font-mono text-[9px] tracking-[0.2em] text-[#39ff88]/50">
              / {String(project.number).padStart(2, '0')}
            </span>
          </div>

          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#f5f7fa] sm:text-3xl">
            {project.name}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#8b9690]">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] text-[#8b9690]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {hasLinks && (
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#f5f7fa] px-5 py-3 text-sm font-medium text-[#080d0a] transition-all duration-300 hover:bg-white"
              >
                Live project
                <span>↗</span>
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
        )}
      </div>
    </article>
  )
}

export default FeaturedProject

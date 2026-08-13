import { useState } from 'react'
import { GithubMark } from './BrandIcons'
import { Globe, Lightbulb, ChevronsDown, ArrowUpRight } from './IconMarks'
import type { Project } from '../data/projects'

interface FeaturedProjectProps {
  project: Project
}

function FeaturedProject({ project }: FeaturedProjectProps) {
  const [expanded, setExpanded] = useState(false)
  const hasLinks = Boolean(project.liveUrl) || Boolean(project.githubUrl)

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#080d0a] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_42px_rgba(0,0,0,0.4),0_0_26px_rgba(57,255,136,0.07)]">
      {/* Subtle green edge glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#39ff88]/[0.07] blur-[110px] transition-all duration-700 group-hover:bg-[#39ff88]/10" />

      {/* Project image header */}
      <div className="relative h-40 flex-shrink-0 overflow-hidden sm:h-48 lg:h-44">
        <img
          src={project.image}
          alt={`${project.name} visual`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d0a] via-[#080d0a]/30 to-transparent" />

        {/* Number badge */}
        <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 font-mono text-[9px] tracking-[0.2em] text-[#39ff88] backdrop-blur-sm">
          / {String(project.number).padStart(2, '0')}
        </span>

        {/* Hover reveal: quick overlay info on the image */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:px-5">
          <span className="rounded-full border border-[#39ff88]/30 bg-black/60 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[#39ff88] backdrop-blur-sm">
            {project.technologies.length} tech stacks
          </span>
          <span className="rounded-full border border-[#39ff88]/30 bg-black/60 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[#39ff88] backdrop-blur-sm">
            {project.highlights.length} highlights
          </span>
        </div>
      </div>

      <div className="relative flex h-full flex-col p-6 lg:p-7">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-5 bg-[#39ff88]" />

          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#f5f7fa] sm:text-3xl">
          {project.name}
        </h3>

        <p className="mt-2 text-[13px] leading-6 text-[#8b9690] lg:text-sm">
          {project.description}
        </p>

        {/* Expandable highlights */}
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="reveal-link mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#39ff88]/80 transition-colors duration-300 hover:text-[#39ff88]"
          aria-expanded={expanded}
        >
          <Lightbulb className="h-3.5 w-3.5" />
          {expanded ? 'Hide highlights' : 'Key highlights'}
          <ChevronsDown
            className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        <div
          className={`grid transition-all duration-500 ease-out ${
            expanded
              ? 'mt-4 grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <ul className="space-y-2 border-l border-[#39ff88]/15 pl-4">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-[13px] leading-6 text-[#c7d1cc]"
                >
                  <span className="mt-[9px] h-1 w-1 flex-shrink-0 rounded-full bg-[#39ff88]" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Interactive tech chips — link to repository */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <a
              key={technology}
              href={project.githubUrl}
              title={`Explore ${technology} in the repository`}
              className="group/chip rounded-full border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 font-mono text-[9px] text-[#8b9690] transition-all duration-300 hover:border-[#39ff88]/30 hover:bg-[#39ff88]/[0.06] hover:text-[#39ff88]"
            >
              {technology}
              <ArrowUpRight className="ml-1 inline h-2.5 w-2.5 opacity-0 transition-opacity duration-300 group-hover/chip:opacity-100" />
            </a>
          ))}
        </div>

        {/* Action links */}
        {hasLinks && (
          <div className="mt-auto flex flex-wrap items-center gap-2.5 border-t border-white/[0.06] pt-5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#f5f7fa] px-4 py-2.5 text-[13px] font-medium text-[#080d0a] transition-all duration-300 hover:bg-white hover:shadow-[0_6px_24px_rgba(57,255,136,0.15)]"
              >
                <Globe className="h-3.5 w-3.5" />
                Live
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-[13px] font-medium text-[#f5f7fa] transition-all duration-300 hover:border-[#39ff88]/30 hover:bg-[#39ff88]/[0.06] hover:text-[#39ff88]"
              >
                <GithubMark className="h-3.5 w-3.5" />
                Frontend Source
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}

            {project.backendUrl && (
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#39ff88]/20 px-4 py-2.5 text-[13px] font-medium text-[#39ff88]/90 transition-all duration-300 hover:border-[#39ff88]/50 hover:bg-[#39ff88]/[0.06]"
              >
                <GithubMark className="h-3.5 w-3.5" />
                Backend Source
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default FeaturedProject

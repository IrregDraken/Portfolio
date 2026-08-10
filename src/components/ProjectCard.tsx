import ProjectMeta from './ProjectMeta'
import ProjectVisual from './ProjectVisual'

type ProjectCardProps = {
  name: string
  category: string
  description: string
  technologies: string[]
  href?: string
  featured?: boolean
}

function ProjectCard({
  name,
  category,
  description,
  technologies,
  href,
}: ProjectCardProps) {
  return (
    <article className="group">
      <ProjectVisual name={name} category={category} />

      <div className="mt-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#4d8dff]">
              {category}
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#f5f7fa] sm:text-3xl">
              {name}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#626c7a]">
              {description}
            </p>
          </div>

          {href && (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex shrink-0 items-center gap-2 text-xs text-[#9aa4b2] transition-colors hover:text-[#f5f7fa]"
            >
              View project
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                ↗
              </span>
            </a>
          )}
        </div>

        <div className="mt-6">
          <ProjectMeta technologies={technologies} />
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
type ProjectMetaProps = {
  technologies: string[]
}

function ProjectMeta({ technologies }: ProjectMetaProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.15em] text-[#626c7a]"
        >
          {technology}
        </span>
      ))}
    </div>
  )
}

export default ProjectMeta
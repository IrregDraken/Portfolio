import { useState } from 'react'
import { ArrowDown, ArrowUpRight, ExternalLink, Layers3 } from 'lucide-react'
import { GithubMark } from './BrandIcons'
import type { Project } from '../data/projects'

interface FeaturedProjectProps {
  project: Project
}

function FeaturedProject({ project }: FeaturedProjectProps) {
  const [expanded, setExpanded] = useState(false)
  const hasSource = Boolean(project.githubUrl)
  const hasLive = Boolean(project.liveUrl)
  const hasBackend = Boolean(project.backendUrl)

  return (
    <article className="reveal cinematic-project-card group relative flex h-full flex-col overflow-hidden">
      <div className="project-visual relative overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" width="1600" height="900" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
        ) : (
          <div role="img" aria-label={project.imageAlt} className="project-art flex h-full items-center justify-center overflow-hidden">
            <span className="project-art-grid" aria-hidden="true" />
            <span className="project-art-orbit project-art-orbit-one" aria-hidden="true" />
            <span className="project-art-orbit project-art-orbit-two" aria-hidden="true" />
            <span className="project-art-index">SYSTEM / {String(project.number).padStart(2, '0')}</span>
            <span className="project-art-mark">{project.name === 'Eazy' ? 'E' : project.name === 'Orion' ? 'O' : 'Ð'}</span>
            <span className="project-art-caption">{project.category}</span>
          </div>
        )}
        <span className="project-number">/{String(project.number).padStart(2, '0')}</span>
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-content flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3>{project.name}</h3>
          <span className="project-index-label">SELECTED BUILD</span>
        </div>
        <p className="project-summary">{project.description}</p>

        <button type="button" className="project-details-toggle" aria-expanded={expanded} onClick={() => setExpanded((value) => !value)}>
          <span><Layers3 size={14} /> {expanded ? 'Close project notes' : 'Explore project'}</span>
          <ArrowDown size={15} className={expanded ? 'rotate-180' : ''} />
        </button>

        <div className={`project-details-grid ${expanded ? 'is-expanded' : ''}`} aria-hidden={!expanded}>
          <div className="project-details-inner">
            <p className="project-long-description">{project.longdescription}</p>
            <p className="project-detail-label">What went into it</p>
            <ul className="project-highlights">
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        </div>

        <div className="project-tech-list" aria-label="Technologies used">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>

        <div className="project-actions mt-auto">
          {hasLive && <a href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live experience</a>}
          {hasSource && <a href={project.githubUrl} target="_blank" rel="noreferrer"><GithubMark className="h-3.5 w-3.5" /> Source code <ArrowUpRight size={13} /></a>}
          {hasBackend && <a href={project.backendUrl} target="_blank" rel="noreferrer"><Layers3 size={14} /> Backend <ArrowUpRight size={13} /></a>}
          {!hasLive && !hasSource && !hasBackend && <span className="project-private-note">Project details available on request</span>}
        </div>
      </div>
    </article>
  )
}

export default FeaturedProject

import { useEffect, useMemo, useState } from 'react'
import { ArrowDownToLine, ArrowUpRight, Clock3, GitBranch, GitFork, RefreshCw, Search, Star } from 'lucide-react'

type GitHubRepository = {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  homepage: string | null
  language: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
  updated_at: string
  fork: boolean
  archived: boolean
  disabled: boolean
  visibility: string
}

type CachedRepositories = {
  cachedAt: number
  repositories: GitHubRepository[]
}

const CACHE_KEY = 'draken-github-projects-v1'
const CACHE_TTL = 6 * 60 * 60 * 1000
const EXCLUDED_REPOSITORIES = new Set([
  'portfolio',
  'a.d.a.m-v1.0',
  'a.d.a.m.v1',
  'rune-os-prototype',
  'medical_system.frontend',
  'medical_system.backend',
  'e-learning-backend',
  'mciu-adaptive-learn',
  'eazy-website',
  'draken-company-os',
  'orion',
])

function readCache(): CachedRepositories | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY)
    if (!cached) return null
    const parsed = JSON.parse(cached) as CachedRepositories
    return Array.isArray(parsed.repositories) ? parsed : null
  } catch {
    return null
  }
}

function hash(value: string) {
  let result = 2166136261
  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index)
    result = Math.imul(result, 16777619)
  }
  return result >>> 0
}

function dailyProjects(repositories: GitHubRepository[]) {
  const day = new Date().toISOString().slice(0, 10)
  const eligible = repositories
    .filter((repo) =>
      !repo.fork &&
      !repo.archived &&
      !repo.disabled &&
      repo.visibility === 'public' &&
      !EXCLUDED_REPOSITORIES.has(repo.name.toLowerCase()) &&
      !repo.name.toLowerCase().includes('portfolio'),
    )
    .sort((a, b) => hash(`${day}:${a.full_name}`) - hash(`${day}:${b.full_name}`))

  if (eligible.length <= 5) return eligible
  const count = 5 + (hash(`draken-count:${day}`) % Math.min(6, eligible.length - 4))
  return eligible.slice(0, Math.min(count, 10))
}

function relativeDate(value: string) {
  const days = Math.max(0, Math.floor((Date.now() - new Date(value).getTime()) / 86_400_000))
  if (days === 0) return 'Updated today'
  if (days === 1) return 'Updated yesterday'
  if (days < 30) return `Updated ${days}d ago`
  if (days < 365) return `Updated ${Math.floor(days / 30)}mo ago`
  return `Updated ${Math.floor(days / 365)}y ago`
}

function ProjectCard({ repository }: { repository: GitHubRepository }) {
  const title = repository.name
    .replace(/[-_.]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())

  return (
    <article className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080d0a] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#39ff88]/30 hover:shadow-[0_16px_50px_rgba(0,0,0,0.35)] sm:p-6">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#39ff88]/[0.06] blur-3xl transition-colors group-hover:bg-[#39ff88]/[0.12]" />
      <div className="relative mb-5 flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#39ff88]/20 bg-[#39ff88]/[0.06] text-[#39ff88]">
          <GitBranch size={20} strokeWidth={1.7} />
        </span>
        <span className="rounded-full border border-white/[0.08] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#8b9690]">
          Public repository
        </span>
      </div>

      <div className="relative">
        <h3 className="break-words text-xl font-semibold tracking-[-0.035em] text-[#f5f7fa] sm:text-2xl">{title}</h3>
        <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-[13px] leading-6 text-[#9aa69f]">
          {repository.description || 'An open-source project from the Draken engineering workspace.'}
        </p>
      </div>

      {repository.topics.length > 0 && (
        <div className="relative mt-4 flex flex-wrap gap-1.5">
          {repository.topics.slice(0, 3).map((topic) => (
            <span key={topic} className="rounded-full border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 font-mono text-[9px] text-[#aab4ae]">
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="relative mt-auto pt-5">
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[#8b9690]">
          {repository.language && <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#39ff88]" />{repository.language}</span>}
          <span className="flex items-center gap-1.5"><Star size={12} />{repository.stargazers_count}</span>
          <span className="flex items-center gap-1.5"><GitFork size={12} />{repository.forks_count}</span>
          <span className="flex items-center gap-1.5"><Clock3 size={12} />{relativeDate(repository.updated_at)}</span>
        </div>
        <div className="flex flex-wrap gap-2 border-t border-white/[0.07] pt-4">
          <a href={repository.html_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#f5f7fa] px-4 py-2.5 text-xs font-semibold text-[#080d0a] transition hover:bg-[#39ff88]">
            View source <ArrowUpRight size={14} />
          </a>
          {repository.homepage && /^https?:\/\//i.test(repository.homepage) && (
            <a href={repository.homepage} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs font-medium text-[#e5ece8] transition hover:border-[#39ff88]/40 hover:text-[#39ff88]">
              Live project <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function GitHubProjects() {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  const [language, setLanguage] = useState('All')

  async function loadRepositories(forceRefresh = false) {
    const cached = readCache()
    if (!forceRefresh && cached && Date.now() - cached.cachedAt < CACHE_TTL) {
      setRepositories(cached.repositories)
      setLoading(false)
      return
    }

    if (cached) setRepositories(cached.repositories)
    setError('')
    if (forceRefresh) setRefreshing(true)

    try {
      const response = await fetch('https://api.github.com/users/IrregDraken/repos?type=owner&sort=updated&per_page=100', {
        headers: { Accept: 'application/vnd.github+json' },
      })
      if (!response.ok) throw new Error(response.status === 403 || response.status === 429
        ? 'GitHub is temporarily rate-limiting requests. Showing the last saved list if available.'
        : `GitHub returned ${response.status}. Please try again shortly.`)
      const data = await response.json() as GitHubRepository[]
      if (!Array.isArray(data)) throw new Error('GitHub returned an unexpected response.')
      const publicRepositories = data.filter((repo) => repo.visibility === 'public')
      setRepositories(publicRepositories)
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ cachedAt: Date.now(), repositories: publicRepositories }))
      } catch {
        // Browsers can disable local storage; the live list still works for this visit.
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Could not reach GitHub right now.')
      if (!cached) setRepositories([])
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    void loadRepositories()
  }, [])

  const projectsToday = useMemo(() => dailyProjects(repositories), [repositories])
  const languages = useMemo(
    () => ['All', ...Array.from(new Set(projectsToday.map((repo) => repo.language).filter((item): item is string => Boolean(item)))).sort()],
    [projectsToday],
  )
  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return projectsToday.filter((repo) => {
      const matchesLanguage = language === 'All' || repo.language === language
      const searchable = `${repo.name} ${repo.description || ''} ${repo.topics.join(' ')} ${repo.language || ''}`.toLowerCase()
      return matchesLanguage && (!normalized || searchable.includes(normalized))
    })
  }, [projectsToday, query, language])

  return (
    <section id="project-observatory" className="border-t border-white/[0.06] px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-[#39ff88]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#8b9690]">Live from GitHub</span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#39ff88]/60">/ 02</span>
            </div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-[#f5f7fa] sm:text-4xl lg:text-5xl">Project Observatory<span className="text-[#39ff88]">.</span></h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#8b9690]">
              A rotating window into my public work. Projects are pulled from GitHub, refreshed in the background, and reshuffled each day.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#39ff88]/20 bg-[#39ff88]/[0.05] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#39ff88]">
              {projectsToday.length} projects today
            </span>
            <button type="button" onClick={() => void loadRepositories(true)} disabled={refreshing} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs text-[#dce4df] transition hover:border-[#39ff88]/35 hover:text-[#39ff88] disabled:opacity-50">
              <RefreshCw size={14} className={refreshing ? 'animate-spin' : ''} /> Refresh
            </button>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center">
          <label className="flex min-h-11 flex-1 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-4 focus-within:border-[#39ff88]/40">
            <Search size={16} className="shrink-0 text-[#8b9690]" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, technologies, or topics..." className="w-full bg-transparent py-3 text-sm text-[#f5f7fa] outline-none placeholder:text-[#68746d]" aria-label="Search GitHub projects" />
          </label>
          <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
            {languages.map((item) => (
              <button key={item} type="button" onClick={() => setLanguage(item)} className={`shrink-0 rounded-full border px-3 py-2 text-xs transition ${language === item ? 'border-[#39ff88]/35 bg-[#39ff88]/[0.08] text-[#39ff88]' : 'border-white/[0.08] text-[#8b9690] hover:border-white/20 hover:text-white'}`}>
                {item}
              </button>
            ))}
          </div>
        </div>

        {error && <p role="status" className="mb-5 rounded-2xl border border-amber-300/15 bg-amber-200/[0.04] px-4 py-3 text-xs leading-5 text-amber-100/80">{error}</p>}

        {loading && repositories.length === 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }, (_, index) => <div key={index} className="h-[270px] animate-pulse rounded-3xl border border-white/[0.06] bg-white/[0.025]" />)}
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((repository) => <ProjectCard key={repository.id} repository={repository} />)}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] px-6 py-12 text-center">
            <ArrowDownToLine className="mx-auto mb-3 text-[#39ff88]" size={22} />
            <p className="text-sm text-[#c7d1cc]">{error && repositories.length === 0 ? 'The GitHub project list is unavailable right now.' : 'No projects match that search.'}</p>
            <p className="mt-2 text-xs text-[#8b9690]">Try another search or refresh the repository list.</p>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-2 border-t border-white/[0.06] pt-5 text-[11px] leading-5 text-[#718078] sm:flex-row sm:items-center sm:justify-between">
          <span>Source: public repositories from github.com/IrregDraken</span>
          <a href="https://github.com/IrregDraken?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#a7b3ac] transition hover:text-[#39ff88]">Explore all repositories <ArrowUpRight size={13} /></a>
        </div>
      </div>
    </section>
  )
}

export default GitHubProjects

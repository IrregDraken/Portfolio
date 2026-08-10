import About from '../components/About'
import Contact from '../components/Contact'
import Engineering from '../components/Engineering'
import FeaturedProject from '../components/FeaturedProject'
import Hero from '../components/Hero'
import AdamCaseStudy from '../components/sections/AdamCaseStudy'
import { projects } from '../data/projects'

function Home() {
  const featuredProjects = projects.filter((project) => project.featured)

  const [firstProject, ...otherProjects] = featuredProjects

  return (
    <>
      <Hero />

      <section
        id="work"
        className="relative border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-5 bg-[#4d8dff]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#626c7a]">
                  Selected Work
                </span>
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#f5f7fa] sm:text-6xl">
                Things I&apos;ve built.
              </h2>
            </div>

            <span className="font-mono text-[9px] tracking-[0.25em] text-[#626c7a]">
              01 / {String(featuredProjects.length).padStart(2, '0')}
            </span>
          </div>

          {firstProject && (
            <>
              <FeaturedProject
                project={firstProject}
              />

              <AdamCaseStudy />
            </>
          )}

          {otherProjects.length > 0 && (
            <div className="mt-10 space-y-10">
              {otherProjects.map((project) => (
                <FeaturedProject
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Engineering />

      <About />

      <Contact />
    </>
  )
}

export default Home
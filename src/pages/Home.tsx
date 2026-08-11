import About from '../components/About'
import Contact from '../components/Contact'
import Engineering from '../components/Engineering'
import FeaturedProject from '../components/FeaturedProject'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import AdamCaseStudy from '../components/sections/AdamCaseStudy'
import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/projects'

function Home() {
  useReveal()

  const featuredProjects = projects.filter(
    (project) => project.featured,
  )

  const [firstProject, ...otherProjects] =
    featuredProjects

  return (
    <>
      <Hero />

      <section
        id="work"
        className="relative border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="Things I've built."
            description="A selection of systems, applications, and experiments built to solve actual problems."
            number={`01 / ${String(featuredProjects.length).padStart(2, '0')}`}
          />

          {firstProject && (
            <>
              <FeaturedProject project={firstProject} />

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

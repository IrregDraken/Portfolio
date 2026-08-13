import About from '../components/About'
import Contact from '../components/Contact'
import Engineering from '../components/Engineering'
import FeaturedProject from '../components/FeaturedProject'
import Hero from '../components/Hero'
import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/projects'

function Home() {
  useReveal()

  const featuredProjects = projects.filter(
    (project) => project.featured,
  )

  return (
    <>
      <Hero />

      <section
        id="work"
        className="snap-section flex min-h-[100svh] scroll-snap-align-start border-t border-white/[0.06] px-6 pt-[104px] pb-8 sm:pt-[116px] sm:pb-10 lg:px-8 lg:pb-12"
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* Section header row */}
          <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-6 bg-[#39ff88]" />

                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#8b9690]">
                  Selected Work
                </span>

                <span className="font-mono text-[10px] tracking-[0.2em] text-[#39ff88]/60">
                  / 01
                </span>
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-[#f5f7fa] sm:text-5xl lg:text-6xl">
                Things I&apos;ve built.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#8b9690]">
              A selection of systems, applications, and experiments built to
              solve actual problems.
            </p>
          </div>

          <div className="space-y-4">
            {featuredProjects.map((project) => (
              <FeaturedProject key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Engineering />

      <About />

      <Contact />
    </>
  )
}

export default Home

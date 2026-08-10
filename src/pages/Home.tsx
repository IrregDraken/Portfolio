import About from '../components/About'
import Contact from '../components/Contact'
import Engineering from '../components/Engineering'
import FeaturedProject from '../components/FeaturedProject'
import Hero from '../components/Hero'
import { projects } from '../data/projects'
import AdamCaseStudy from '../components/sections/AdamCasestudy'

function Home() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="bg-[#080a0f] text-[#f5f7fa]">
      <Hero />

      <main>
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

            <div className="space-y-10">
              {featuredProjects.map((project) => (
                <FeaturedProject key={project.id} project={project} />
              ))}
            </div>
          </div>

          <AdamCaseStudy />
        </section>

        <Engineering />

        <About />

        <Contact />
      </main>
    </div>
  )
}

export default Home
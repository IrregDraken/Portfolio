import About from '../components/About'
import Contact from '../components/Contact'
import Engineering from '../components/Engineering'
import FeaturedProject from '../components/FeaturedProject'
import GitHubProjects from '../components/GitHubProjects'
import Hero from '../components/Hero'
import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/projects'

function Home() {
  useReveal()
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <>
      <Hero />
      <section id="work" className="snap-section cinematic-work border-t border-white/[0.06] px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="work-heading">
            <div>
              <p className="section-kicker"><span /> SELECTED WORK <span className="section-number">/ 01</span></p>
              <h2>Things I've <em>made.</em></h2>
            </div>
            <p className="work-intro">A selection of systems, products, and experiments shaped by curiosity and built through hands-on engineering.</p>
          </div>
          <div className="cinematic-project-grid">
            {featuredProjects.map((project) => <FeaturedProject key={project.id} project={project} />)}
          </div>
          <p className="work-footnote">A selection, not the whole archive. More experiments live in the observatory below.</p>
        </div>
      </section>
      <GitHubProjects />
      <Engineering />
      <About />
      <Contact />
    </>
  )
}

export default Home

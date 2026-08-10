import FeaturedProject from '../components/FeaturedProject'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

function Home() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="bg-[#080a0f] text-[#f5f7fa]">
      <Hero />

      <main>
        {/* Selected Work */}
        <section
          id="work"
          className="relative border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Selected Work"
              number="01"
              title="Things I've built."
              description="A selection of systems, products, and experiments that represent how I approach software."
            />

            <div className="space-y-10">
              {featuredProjects.map((project) => (
                <FeaturedProject key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Engineering placeholder */}
        <section
          id="engineering"
          className="border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Engineering"
              number="02"
              title="How I build."
              description="The technologies and engineering areas behind the work."
            />

            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Frontend',
                  items: ['React', 'TypeScript', 'Tailwind CSS', 'Flutter'],
                },
                {
                  title: 'Backend',
                  items: ['Python', 'Flask', 'REST APIs', 'PostgreSQL'],
                },
                {
                  title: 'AI',
                  items: ['AI APIs', 'Machine Learning', 'Computer Vision', 'Speech'],
                },
                {
                  title: 'Systems',
                  items: ['Git', 'Docker', 'Cloud', 'IoT'],
                },
              ].map((category) => (
                <div
                  key={category.title}
                  className="bg-[#0d1118] p-7 transition-colors duration-300 hover:bg-[#111722] sm:p-8"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#4d8dff]">
                    {category.title}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-[#9aa4b2] transition-colors duration-300 hover:text-[#f5f7fa]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About placeholder */}
        <section
          id="about"
          className="border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="About"
              number="03"
              title="Still building."
              description="A little context about the person behind the systems."
            />

            <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
              <p className="max-w-3xl text-xl leading-9 tracking-[-0.02em] text-[#dce1e8] sm:text-2xl sm:leading-10">
                I am a Computer Science developer interested in building
                practical software, AI-powered products, and systems that solve
                real problems.
              </p>

              <div className="border-l border-white/[0.07] pl-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#626c7a]">
                  Current direction
                </p>

                <p className="mt-4 text-sm leading-7 text-[#9aa4b2]">
                  Deepening my understanding of backend engineering, AI,
                  systems design, cloud infrastructure, and the technologies
                  behind the products I build.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
        >
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0d1118] px-7 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-28">
              <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#4d8dff]/10 blur-[120px]" />

              <div className="relative max-w-3xl">
                <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.35em] text-[#4d8dff]">
                  Contact / 04
                </p>

                <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#f5f7fa] sm:text-6xl lg:text-7xl">
                  Have something worth building?
                </h2>

                <p className="mt-6 max-w-xl text-base leading-7 text-[#9aa4b2]">
                  For projects, opportunities, collaborations, or technical
                  conversations, get in touch.
                </p>

                <div className="mt-9">
                  <a
                    href="mailto:your-email@example.com"
                    className="group inline-flex items-center gap-4 rounded-full bg-[#f5f7fa] px-6 py-3.5 text-sm font-medium text-[#080a0f] transition-all duration-300 hover:bg-white"
                  >
                    Start a conversation

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
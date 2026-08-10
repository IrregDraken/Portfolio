import SectionHeading from './SectionHeading'
import { siteConfig } from '../config/site'

const facts = [
  {
    label: 'Based in',
    value: siteConfig.location,
  },
  {
    label: 'Focus',
    value: 'Software + AI',
  },
  {
    label: 'Currently',
    value: 'Building',
  },
]

function About() {
  return (
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

        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div>
            <p className="max-w-3xl text-xl leading-9 tracking-[-0.025em] text-[#dce1e8] sm:text-2xl sm:leading-10">
              I am a Computer Science developer interested in building
              practical software, AI-powered products, and systems that solve
              real problems.
            </p>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#626c7a]">
              My work sits across application development, backend systems,
              artificial intelligence, and connected hardware. I enjoy
              understanding how the pieces fit together rather than treating
              each technology as an isolated tool.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#626c7a]">
              Right now, the focus is on becoming a stronger engineer by
              building, breaking, debugging, and rebuilding things until the
              underlying concepts actually make sense.
            </p>
          </div>

          <div className="lg:border-l lg:border-white/[0.07] lg:pl-12">
            <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-white/[0.06] pb-6 last:border-0"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#626c7a]">
                    {fact.label}
                  </p>

                  <p className="mt-3 text-sm text-[#f5f7fa]">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-[#4d8dff]/10 bg-[#4d8dff]/[0.035] p-6">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4d8dff] opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4d8dff]" />
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#4d8dff]">
                  {siteConfig.availability.status}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#9aa4b2]">
                {siteConfig.availability.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
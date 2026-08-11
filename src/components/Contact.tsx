import SectionHeading from './SectionHeading'
import { siteConfig } from '../config/site'

function Contact() {
  const hasEmail = Boolean(siteConfig.links.email)
  const hasLinkedIn = Boolean(siteConfig.links.linkedin)

  return (
    <section
      id="contact"
      className="border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          number="04"
          title="Let's build something."
          description="Projects, opportunities, collaborations, or technical conversations."
        />

        <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0a0e0c] px-7 py-14 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          {/* Decorative grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 156, 0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 156, 0.8) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />

          {/* Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#00ff9c]/10 blur-[130px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="reveal max-w-2xl text-2xl font-medium tracking-[-0.035em] text-[#f5f7fa] sm:text-4xl sm:leading-tight">
                Good software starts with a problem worth solving.
              </p>

              <p className="reveal mt-6 max-w-xl text-sm leading-7 text-[#626c7a]" data-reveal-delay="100">
                If you have a project, opportunity, or idea that needs an
                engineer, send a message.
              </p>
            </div>

            <div className="reveal flex flex-col items-start gap-3" data-reveal-delay="180">
              {hasEmail ? (
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="group inline-flex items-center gap-4 rounded-full bg-[#f5f7fa] px-6 py-3.5 text-sm font-medium text-[#080a0f] transition-all duration-300 hover:bg-white"
                >
                  Email me
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              ) : (
                <span className="inline-flex cursor-not-allowed items-center gap-4 rounded-full bg-[#f5f7fa]/30 px-6 py-3.5 text-sm font-medium text-[#080a0f]/60">
                  Email me
                </span>
              )}

              <div className="flex gap-3">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-[#9aa4b2] transition-all duration-300 hover:border-[#00ff9c]/30 hover:text-[#f5f7fa]"
                >
                  GitHub
                  <span>↗</span>
                </a>

                {hasLinkedIn && (
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-[#9aa4b2] transition-all duration-300 hover:border-[#00ff9c]/30 hover:text-[#f5f7fa]"
                  >
                    LinkedIn
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

import SectionHeading from './SectionHeading'
import { siteConfig } from '../config/site'

const socials = [
  {
    key: 'github',
    label: siteConfig.social.github,
    handle: 'IrregDraken',
    url: siteConfig.links.github,
  },
  {
    key: 'linkedin',
    label: siteConfig.social.linkedin,
    handle: 'nnamdi-nwodim',
    url: siteConfig.links.linkedin,
  },
  {
    key: 'x',
    label: siteConfig.social.x,
    handle: '@IrregDrak3n',
    url: siteConfig.links.x,
  },
  {
    key: 'instagram',
    label: siteConfig.social.instagram,
    handle: '@irreg.draken',
    url: siteConfig.links.instagram,
  },
  {
    key: 'youtube',
    label: siteConfig.social.youtube,
    handle: '@irreg.draken',
    url: siteConfig.links.youtube,
  },
]

const hasLinks = socials.some((social) => Boolean(social.url))

function Contact() {
  const hasEmail = Boolean(siteConfig.links.email)

  return (
    <section
      id="contact"
      className="border-t border-white/[0.06] px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          number="04"
          title="Let's build something."
          description="Projects, opportunities, collaborations, or technical conversations."
        />

        <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#080d0a] px-7 py-14 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          {/* Decorative grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(57, 255, 136, 0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(57, 255, 136, 0.8) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />

          {/* Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#39ff88]/10 blur-[130px]" />

          {/* Main call to action */}
          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="reveal max-w-2xl text-2xl font-medium tracking-[-0.035em] text-[#f5f7fa] sm:text-4xl sm:leading-tight">
                Good software starts with a problem worth solving.
              </p>

              <p className="reveal mt-6 max-w-xl text-sm leading-7 text-[#8b9690]" data-reveal-delay="100">
                If you have a project, opportunity, or idea that needs an
                engineer, send a message. The fastest way to reach me is by
                email.
              </p>
            </div>

            <div className="reveal flex flex-col items-start gap-3" data-reveal-delay="180">
              {hasEmail ? (
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="group inline-flex items-center gap-4 rounded-full bg-[#f5f7fa] px-6 py-3.5 text-sm font-medium text-[#080d0a] transition-all duration-300 hover:bg-white"
                >
                  {siteConfig.links.email}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              ) : (
                <span className="inline-flex cursor-not-allowed items-center gap-4 rounded-full bg-[#f5f7fa]/30 px-6 py-3.5 text-sm font-medium text-[#080d0a]/60">
                  Email me
                </span>
              )}
            </div>
          </div>

          {/* Social links */}
          {hasLinks && (
            <div className="relative mt-14 border-t border-white/[0.06] pt-10">
              <p className="reveal font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                Elsewhere
              </p>

              <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-5">
                {socials.map((social, index) =>
                  social.url ? (
                    <a
                      key={social.key}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      data-reveal-delay={String(index * 80)}
                      className="reveal group relative flex items-center justify-between gap-3 bg-[#0d1210] p-4 transition-all duration-300 hover:bg-[#111713]"
                    >
                      <div>
                        <p className="text-sm font-medium tracking-[-0.02em] text-[#f5f7fa] transition-colors duration-300 group-hover:text-[#39ff88]">
                          {social.label}
                        </p>

                        <p className="mt-0.5 truncate font-mono text-[10px] text-[#8b9690] transition-colors duration-300 group-hover:text-[#39ff88]/80">
                          {social.handle}
                        </p>
                      </div>

                      <span className="text-[#8b9690] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#39ff88]">
                        ↗
                      </span>
                    </a>
                  ) : null,
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact

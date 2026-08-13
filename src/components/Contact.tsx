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
      className="snap-section flex min-h-[100svh] scroll-snap-align-start items-center border-t border-white/[0.06] px-6 py-16 sm:py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header row */}
        <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-6 bg-[#39ff88]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#8b9690]">
                Contact
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#39ff88]/60">
                / 04
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-[#f5f7fa] sm:text-5xl lg:text-6xl">
              Let&apos;s build something.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#8b9690]">
            Projects, opportunities, collaborations, or technical
            conversations.
          </p>
        </div>

        {/* Content card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#080d0a] px-7 py-12 sm:px-12 sm:py-14 lg:px-16">
          {/* Subtle green edge glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#39ff88]/10 blur-[130px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="max-w-2xl text-2xl font-medium tracking-[-0.035em] text-[#f5f7fa] sm:text-4xl sm:leading-tight">
                Good software starts with a problem worth solving.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#8b9690]">
                If you have a project, opportunity, or idea that needs an
                engineer, send a message — or find me on the platforms below.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3">
              {hasEmail ? (
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="inline-flex items-center gap-4 rounded-full bg-[#f5f7fa] px-6 py-3.5 text-sm font-medium text-[#080d0a] transition-all duration-300 hover:bg-white"
                >
                  {siteConfig.links.email}
                  <span>↗</span>
                </a>
              ) : (
                <span className="inline-flex cursor-default items-center gap-4 rounded-full bg-[#f5f7fa]/30 px-6 py-3.5 text-sm font-medium text-[#080d0a]/60">
                  Email me
                </span>
              )}
            </div>
          </div>

          {/* Social links */}
          {hasLinks && (
            <div className="relative mt-10 border-t border-white/[0.06] pt-8">
              <p className="reveal font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                Elsewhere
              </p>

              <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-5">
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

import { useState } from 'react'
import {
  Mail,
  MapPin,
  Send,
} from 'lucide-react'
import { MessageCircle, Phone } from './IconMarks'
import {
  GithubMark,
  LinkedinMark,
  InstagramMark,
  YoutubeMark,
  XMark,
} from './BrandIcons'
import { siteConfig } from '../config/site'

const contactInfo = [
  {
    key: 'email',
    icon: Mail,
    label: 'Email',
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
  },
  {
    key: 'whatsapp',
    icon: MessageCircle,
    label: 'WhatsApp',
    value: siteConfig.links.phone,
    href: `https://wa.me/${siteConfig.links.phone.replace(/\s+/g, '')}`,
    external: true,
  },
  {
    key: 'call',
    icon: Phone,
    label: 'Call',
    value: siteConfig.links.phoneSecondary,
    href: `tel:${siteConfig.links.phoneSecondary.replace(/\s+/g, '')}`,
  },
  {
    key: 'location',
    icon: MapPin,
    label: 'Location',
    value: siteConfig.location,
    href: '',
  },
]

const socials = [
  {
    key: 'github',
    label: 'GitHub',
    handle: 'IrregDraken',
    url: siteConfig.links.github,
    icon: GithubMark,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    handle: 'nnamdi-nwodim',
    url: siteConfig.links.linkedin,
    icon: LinkedinMark,
  },
  {
    key: 'x',
    label: 'X',
    handle: '@IrregDrak3n',
    url: siteConfig.links.x,
    icon: XMark,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    handle: '@irreg.draken',
    url: siteConfig.links.instagram,
    icon: InstagramMark,
  },
  {
    key: 'youtube',
    label: 'YouTube',
    handle: '@irreg.draken',
    url: siteConfig.links.youtube,
    icon: YoutubeMark,
  },
]

const hasLinks = socials.some((social) => Boolean(social.url))

function Contact() {
  const hasEmail = Boolean(siteConfig.links.email)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const buildMailto = () => {
    const subject = encodeURIComponent(
      form.name
        ? `Portfolio inquiry from ${form.name}`
        : 'Portfolio inquiry',
    )
    const bodyLines = [form.message]
    if (form.email) {
      bodyLines.push('', `— ${form.name}`, `Reply-to: ${form.email}`)
    }
    const body = encodeURIComponent(bodyLines.filter(Boolean).join('\n'))
    return `mailto:${siteConfig.links.email}?subject=${subject}&body=${body}`
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.href = buildMailto()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section
      id="contact"
      className="snap-section flex min-h-[100svh] scroll-snap-align-start border-t border-white/[0.06] px-6 pt-[92px] pb-8 sm:pt-[108px] sm:pb-10 lg:px-8 lg:pb-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header row */}
        <div className="mb-7 flex flex-col gap-6 lg:mb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
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

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Left: intro + contact channels */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#080d0a] p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#39ff88]/10 blur-[120px]" />

            <div className="relative">
              <p className="text-2xl font-medium tracking-[-0.035em] text-[#f5f7fa] sm:text-[26px] sm:leading-tight">
                Good software starts with a problem worth solving.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#8b9690]">
                If you have a project, opportunity, or idea that needs an
                engineer, reach out — or find me on the platforms below.
              </p>

              {/* Contact info cards */}
              <div className="mt-7 space-y-3">
                {contactInfo.map((info) => (
                  <div
                    key={info.key}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-[#0d1210] px-5 py-4 transition-all duration-300 hover:border-[#39ff88]/25 hover:bg-[#101712]"
                  >
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#39ff88]/20 bg-[#39ff88]/[0.06]">
                      <info.icon
                        className="h-4.5 w-4.5 text-[#39ff88]"
                        strokeWidth={1.75}
                      />
                    </span>

                    {info.href ? (
                      <a
                        href={info.href}
                        className="min-w-0 flex-1"
                        target={info.external ? '_blank' : undefined}
                        rel={
                          info.external ? 'noreferrer' : undefined
                        }
                      >
                        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                          {info.label}
                        </p>
                        <p className="mt-0.5 truncate text-[15px] font-medium text-[#f5f7fa] transition-colors duration-300 group-hover:text-[#39ff88]">
                          {info.value}
                        </p>
                      </a>
                    ) : (
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                          {info.label}
                        </p>
                        <p className="mt-0.5 truncate text-[15px] font-medium text-[#f5f7fa]">
                          {info.value}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Social row */}
              {hasLinks && (
                <div className="relative mt-7 border-t border-white/[0.06] pt-6">
                  <p className="reveal font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                    Elsewhere
                  </p>

                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {socials.map(
                      (social) =>
                        social.url && (
                          <a
                            key={social.key}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            title={`${social.label} — ${social.handle}`}
                            className="reveal group relative flex flex-col items-center gap-2 rounded-2xl border border-white/[0.06] bg-[#0d1210] px-2 py-4 transition-all duration-300 hover:border-[#39ff88]/30 hover:bg-[#101712]"
                          >
                    <social.icon
                      className="h-4.5 w-4.5 text-[#8b9690] transition-colors duration-300 group-hover:text-[#39ff88]"
                    />

                            <span className="truncate font-mono text-[8px] uppercase tracking-[0.2em] text-[#8b9690] transition-colors duration-300 group-hover:text-[#39ff88]/80">
                              {social.label}
                            </span>
                          </a>
                        ),
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: compose message card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#080d0a] p-7 sm:p-9">
            <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#39ff88]/[0.07] blur-[130px]" />

            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-5 bg-[#39ff88]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                  Compose
                </span>

                <span className="font-mono text-[9px] tracking-[0.2em] text-[#39ff88]/50">
                  / MSG
                </span>
              </div>

              <p className="text-xl font-medium tracking-[-0.03em] text-[#f5f7fa] sm:text-2xl">
                Send a message.
              </p>

              <p className="mt-2 text-sm leading-7 text-[#8b9690]">
                Opens your email client with everything pre-filled — or just
                write to{" "}
                {hasEmail ? (
                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="text-[#39ff88] underline-offset-4 hover:underline"
                  >
                    {siteConfig.links.email}
                  </a>
                ) : (
                  'me directly'
                )}{" "}
                anytime.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                      Your name
                    </span>

                    <input
                      type="text"
                      value={form.name}
                      onChange={(event) =>
                        setForm((state) => ({
                          ...state,
                          name: event.target.value,
                        }))
                      }
                      placeholder="Alex Okonkwo"
                      className="mt-2 w-full rounded-xl border border-white/[0.08] bg-[#0d1210] px-4 py-3 text-sm text-[#f5f7fa] outline-none transition-all duration-300 placeholder:text-[#5a6660] focus:border-[#39ff88]/40 focus:ring-1 focus:ring-[#39ff88]/20"
                    />
                  </label>

                  <label className="block">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                      Your email
                    </span>

                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        setForm((state) => ({
                          ...state,
                          email: event.target.value,
                        }))
                      }
                      placeholder="alex@example.com"
                      className="mt-2 w-full rounded-xl border border-white/[0.08] bg-[#0d1210] px-4 py-3 text-sm text-[#f5f7fa] outline-none transition-all duration-300 placeholder:text-[#5a6660] focus:border-[#39ff88]/40 focus:ring-1 focus:ring-[#39ff88]/20"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                    Message
                  </span>

                  <textarea
                    value={form.message}
                    onChange={(event) =>
                      setForm((state) => ({
                        ...state,
                        message: event.target.value,
                      }))
                    }
                    rows={5}
                    placeholder="Tell me about the project, the idea, or the problem..."
                    className="mt-2 w-full resize-none rounded-xl border border-white/[0.08] bg-[#0d1210] px-4 py-3 text-sm leading-6 text-[#f5f7fa] outline-none transition-all duration-300 placeholder:text-[#5a6660] focus:border-[#39ff88]/40 focus:ring-1 focus:ring-[#39ff88]/20"
                  />
                </label>

                <div className="flex items-center gap-4 pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full bg-[#f5f7fa] px-6 py-3.5 text-sm font-medium text-[#080d0a] transition-all duration-300 hover:bg-white hover:shadow-[0_6px_24px_rgba(57,255,136,0.15)]"
                  >
                    <Send className="h-4 w-4" strokeWidth={2} />
                    {sent ? 'Opening your email…' : 'Send message'}
                  </button>

                  {sent && (
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#39ff88]/80">
                      Email client launched — hit send to finish.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

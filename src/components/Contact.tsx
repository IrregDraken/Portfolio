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

/**
 * Delivery is delegated to a server-side form endpoint.
 * VITE_FORMSPREE_ID — a Formspree form id (e.g. "xmwpzqle") whose target
 * mailbox is imleedax7@gmail.com, configured in Vercel environment variables.
 * No mailbox credentials ever reach the browser; Formspree is the
 * recipient-facing relay with its own spam filtering.
 */
function resolveEndpoint(): string | null {
  const id = import.meta.env.VITE_FORMSPREE_ID?.trim()
  if (!id) return null
  return `https://formspree.io/f/${id}`
}

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

type DeliveryStatus = 'idle' | 'submitting' | 'sent' | 'error'

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [status, setStatus] = useState<DeliveryStatus>('idle')
  const [errorNote, setErrorNote] = useState('')
  const [lastSubmittedAt, setLastSubmittedAt] = useState(0)

  const endpoint = resolveEndpoint()
  const canServerDeliver = Boolean(endpoint)

  const setField = (field: keyof FormState, value: string) => {
    setForm((state) => ({ ...state, [field]: value }))
  }

  const buildMailto = () => {
    const subject = encodeURIComponent(
      form.subject || form.name
        ? `Portfolio inquiry${form.name ? ` from ${form.name}` : ''}${form.subject ? ` — ${form.subject}` : ''}`
        : 'Portfolio inquiry',
    )
    const bodyLines = [form.message]
    if (form.email) {
      bodyLines.push('', `— ${form.name}`, `Reply-to: ${form.email}`)
    }
    const body = encodeURIComponent(bodyLines.filter(Boolean).join('\n'))
    return `mailto:${siteConfig.links.formEmail}?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const now = Date.now()
    if (now - lastSubmittedAt < 5000) {
      return
    }

    const nameError = form.name.trim().length < 2
    const emailError = !isValidEmail(form.email)
    const messageError = form.message.trim().length < 5

    if (nameError || emailError || messageError) {
      setErrorNote(
        nameError
          ? 'Please enter your name.'
          : emailError
            ? 'Please enter a valid email address.'
            : 'Please write a message (at least a few words).',
      )
      setStatus('error')
      return
    }

    setLastSubmittedAt(now)
    setStatus('submitting')
    setErrorNote('')

    if (canServerDeliver) {
      try {
        const response = await fetch(endpoint as string, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            _subject: form.subject.trim() || `Portfolio inquiry from ${form.name.trim()}`,
            message: form.message.trim(),
            _replyto: form.email.trim(),
          }),
        })

        if (response.ok) {
          setStatus('sent')
          setForm(INITIAL_FORM)
          return
        }

        setErrorNote('The message could not be delivered. Please email me directly below.')
        setStatus('error')
      } catch {
        setErrorNote('The message could not be delivered. Please email me directly below.')
        setStatus('error')
      }
      return
    }

    // No server endpoint configured: fall back to the local mail client.
    window.location.href = buildMailto()
    setStatus('sent')
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="snap-section flex min-h-[100svh] scroll-snap-align-start border-t border-white/[0.06] px-6 pt-[88px] pb-6 sm:pt-[100px] sm:pb-8 lg:px-8 lg:pb-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header row */}
        <div className="mb-5 flex flex-col gap-5 lg:mb-6 lg:flex-row lg:items-end lg:justify-between">
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

            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-[#f5f7fa] sm:text-4xl lg:text-5xl">
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
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#080d0a] p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#39ff88]/10 blur-[120px]" />

            <div className="relative">
              <p className="text-xl font-medium tracking-[-0.035em] text-[#f5f7fa] sm:text-[22px] sm:leading-tight">
                Good software starts with a problem worth solving.
              </p>

              <p className="mt-3 max-w-xl text-[13px] leading-6 text-[#8b9690]">
                If you have a project, opportunity, or idea that needs an
                engineer, reach out — or find me on the platforms below.
              </p>

              {/* Contact info cards */}
              <div className="mt-5 space-y-2.5">
                {contactInfo.map((info) => (
                  <div
                    key={info.key}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-[#0d1210] px-4 py-3 transition-all duration-300 hover:border-[#39ff88]/25 hover:bg-[#101712]"
                  >
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-[#39ff88]/20 bg-[#39ff88]/[0.06]">
                      <info.icon
                        className="h-4 w-4 text-[#39ff88]"
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
                  <div className="relative mt-5 border-t border-white/[0.06] pt-5">
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
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#080d0a] p-6 sm:p-8">
            <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#39ff88]/[0.07] blur-[130px]" />

            <div className="relative">
              <div className="mb-3 flex items-center gap-3">
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
                Your message lands directly in my inbox at{" "}
                <span className="text-[#39ff88]">
                  {siteConfig.links.formEmail}
                </span>{" "}
                — no email client needed.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-5 space-y-3"
                noValidate={status === 'error'}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                      Your name
                    </span>

                    <input
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(event) =>
                        setField('name', event.target.value)
                      }
                      placeholder="Alex Okonkwo"
                      className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-[#0d1210] px-4 py-2.5 text-sm text-[#f5f7fa] outline-none transition-all duration-300 placeholder:text-[#5a6660] focus:border-[#39ff88]/40 focus:ring-1 focus:ring-[#39ff88]/20"
                    />
                  </label>

                  <label className="block">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                      Your email
                    </span>

                    <input
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(event) =>
                        setField('email', event.target.value)
                      }
                      placeholder="alex@example.com"
                      className="mt-2 w-full rounded-xl border border-white/[0.08] bg-[#0d1210] px-4 py-2.5 text-sm text-[#f5f7fa] outline-none transition-all duration-300 placeholder:text-[#5a6660] focus:border-[#39ff88]/40 focus:ring-1 focus:ring-[#39ff88]/20"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                    Subject
                  </span>

                  <input
                    type="text"
                    value={form.subject}
                    onChange={(event) =>
                      setField('subject', event.target.value)
                    }
                    placeholder="Project, role, or collaboration"
                    className="mt-2 w-full rounded-xl border border-white/[0.08] bg-[#0d1210] px-4 py-2.5 text-sm text-[#f5f7fa] outline-none transition-all duration-300 placeholder:text-[#5a6660] focus:border-[#39ff88]/40 focus:ring-1 focus:ring-[#39ff88]/20"
                  />
                </label>

                <label className="block">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                    Message
                  </span>

                  <textarea
                    required
                    value={form.message}
                    onChange={(event) =>
                      setField('message', event.target.value)
                    }
                    rows={4}
                    placeholder="Tell me about the project, the idea, or the problem..."
                    className="mt-2 w-full resize-none rounded-xl border border-white/[0.08] bg-[#0d1210] px-4 py-2.5 text-sm leading-6 text-[#f5f7fa] outline-none transition-all duration-300 placeholder:text-[#5a6660] focus:border-[#39ff88]/40 focus:ring-1 focus:ring-[#39ff88]/20"
                  />
                </label>

                {status === 'error' && errorNote && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-[13px] text-red-300"
                  >
                    {errorNote}
                  </p>
                )}

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    aria-disabled={status === 'submitting'}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#39ff88] px-8 py-4 text-sm font-semibold tracking-wide text-[#080d0a] shadow-[0_8px_32px_rgba(57,255,136,0.18)] transition-all duration-300 hover:bg-[#5effa0] hover:shadow-[0_10px_40px_rgba(57,255,136,0.3)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#39ff88] sm:w-auto"
                  >
                    {status === 'submitting' ? (
                      <span className="inline-flex h-4 w-4 items-center justify-center">
                        <span className="h-3 w-3 animate-spin rounded-full border-2 border-[#080d0a]/25 border-t-[#080d0a]" />
                      </span>
                    ) : (
                      <Send className="h-4 w-4" strokeWidth={2} />
                    )}
                    {status === 'submitting'
                      ? 'Sending…'
                      : status === 'sent'
                        ? 'Message sent'
                        : 'Send message'}
                  </button>

                  {status === 'sent' && (
                    <span
                      role="status"
                      className="mt-3 block font-mono text-[10px] tracking-[0.2em] text-[#39ff88]/80 sm:mt-0 sm:inline-block sm:ml-4"
                    >
                      {canServerDeliver
                        ? 'Delivered to my inbox — I will reply soon.'
                        : 'Opening your email — hit send to finish.'}
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

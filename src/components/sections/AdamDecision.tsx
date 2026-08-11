import { adamCaseStudy } from '../../data/adam'

function AdamDecisions() {
  return (
    <section className="border-t border-white/[0.06] px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-5 bg-[#39ff88]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
              04 / Engineering Decisions
            </span>
          </div>

          <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-[#f5f7fa] sm:text-5xl">
            The interesting part is why it was built this way.
          </h2>
        </div>

        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {adamCaseStudy.decisions.map((decision, index) => (
            <article
              key={decision.title}
              className="grid gap-6 py-8 sm:grid-cols-[80px_0.8fr_1.2fr] sm:items-start"
            >
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#39ff88]">
                0{index + 1}
              </span>

              <h3 className="text-base font-medium tracking-[-0.02em] text-[#f5f7fa]">
                {decision.title}
              </h3>

              <p className="text-sm leading-7 text-[#8b9690]">
                {decision.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdamDecisions
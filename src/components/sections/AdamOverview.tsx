import { adamCaseStudy } from '../../data/adam'

function AdamOverview() {
  return (
    <section className="border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-5 bg-[#39ff88]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#626c7a]">
              01 / Overview
            </span>
          </div>

          <h2 className="max-w-md text-3xl font-semibold tracking-[-0.05em] text-[#f5f7fa] sm:text-4xl">
            From physical event to actionable alert.
          </h2>
        </div>

        <div className="space-y-10">
          <div>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.25em] text-[#39ff88]">
              The Problem
            </p>

            <p className="max-w-2xl text-base leading-8 text-[#9aa4b2]">
              {adamCaseStudy.problem}
            </p>
          </div>

          <div>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.25em] text-[#39ff88]">
              The Solution
            </p>

            <p className="max-w-2xl text-base leading-8 text-[#9aa4b2]">
              {adamCaseStudy.solution}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdamOverview
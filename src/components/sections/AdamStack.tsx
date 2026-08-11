import { adamCaseStudy } from '../../data/adam'

function AdamStack() {
  return (
    <section className="border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-5 bg-[#00ff9c]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#626c7a]">
              03 / Technology
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[#f5f7fa] sm:text-4xl">
            The stack behind it.
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-[#626c7a]">
            Each technology has a job in the system. The stack is shown as
            evidence of implementation, not decoration.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {adamCaseStudy.technologies.map((technology, index) => (
            <div
              key={technology}
              className="group rounded-xl border border-white/[0.07] bg-[#0d1210] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff9c]/30 hover:shadow-[0_10px_34px_rgba(0,0,0,0.35),0_0_22px_rgba(0,255,156,0.08)]"
            >
              <span className="font-mono text-[8px] text-[#00ff9c]">
                {String(index + 1).padStart(2, '0')}
              </span>

              <p className="mt-8 text-sm font-medium text-[#f5f7fa]">
                {technology}
              </p>

              <div className="mt-4 h-px w-5 bg-white/[0.1] transition-all duration-300 group-hover:w-10 group-hover:bg-[#00ff9c]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdamStack
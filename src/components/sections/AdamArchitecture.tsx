import { adamCaseStudy } from '../../data/adam'

function AdamArchitecture() {
  return (
    <section className="border-t border-white/[0.06] px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-5 bg-[#00ff9c]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#626c7a]">
                02 / Architecture
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[#f5f7fa] sm:text-5xl">
              How the system fits together.
            </h2>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#626c7a]">
            Event → Process → Persist → Notify
          </span>
        </div>

        <div className="relative">
          <div className="absolute left-[7%] right-[7%] top-1/2 hidden h-px bg-white/[0.08] lg:block" />

          <div className="grid gap-4 lg:grid-cols-4">
            {adamCaseStudy.architecture.map((layer, index) => (
              <div key={layer.name} className="relative">
                <div className="relative z-10 h-full rounded-2xl border border-white/[0.07] bg-[#0d1210] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff9c]/30 hover:shadow-[0_10px_34px_rgba(0,0,0,0.35),0_0_22px_rgba(0,255,156,0.08)]">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-[#00ff9c]">
                      0{index + 1}
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#00ff9c]" />
                  </div>

                  <p className="text-lg font-medium tracking-[-0.02em] text-[#f5f7fa]">
                    {layer.name}
                  </p>

                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-[#626c7a]">
                    {layer.technology}
                  </p>

                  <p className="mt-6 text-sm leading-7 text-[#626c7a]">
                    {layer.description}
                  </p>
                </div>

                {index < adamCaseStudy.architecture.length - 1 && (
                  <div className="absolute right-[-10px] top-1/2 z-20 hidden -translate-y-1/2 lg:block">
                    <span className="text-xs text-[#00ff9c]">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdamArchitecture
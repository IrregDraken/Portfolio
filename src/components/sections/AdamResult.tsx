import { adamCaseStudy } from '../../data/adam'

function AdamResult() {
  return (
    <section className="border-t border-white/[0.06] px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-5 bg-[#39ff88]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8b9690]">
                05 / Result
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[#f5f7fa] sm:text-5xl">
              What came out of it.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#8b9690]">
              {adamCaseStudy.result}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {adamCaseStudy.links.github && (
                <a
                  href={adamCaseStudy.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#f5f7fa] px-5 py-3 text-xs font-medium text-[#080d0a] transition-colors hover:bg-white"
                >
                  View source
                  <span>↗</span>
                </a>
              )}

              {adamCaseStudy.links.live && (
                <a
                  href={adamCaseStudy.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-xs text-[#8b9690] transition-colors hover:border-white/20 hover:text-[#f5f7fa]"
                >
                  Live system
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdamResult
interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  number?: string
}

function SectionHeading({
  eyebrow,
  title,
  description,
  number,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-6 bg-[#39ff88]" />

          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#626c7a]">
            {eyebrow}
          </span>

          {number && (
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#39ff88]/60">
              / {number}
            </span>
          )}
        </div>

        <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-[#f5f7fa] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>

      {description && (
        <p className="max-w-md text-sm leading-7 text-[#9aa4b2] md:pb-1">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading

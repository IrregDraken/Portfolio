type ProjectVisualProps = {
  name: string
  category: string
  accent?: string
}

function ProjectVisual({
  name,
  category,
  accent = '#4d8dff',
}: ProjectVisualProps) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.07] bg-[#090c12]">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(${accent}18 1px, transparent 1px),
            linear-gradient(90deg, ${accent}18 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{ backgroundColor: `${accent}12` }}
      />

      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-full max-w-md rounded-xl border border-white/[0.08] bg-[#0d1118]/90 p-5 shadow-2xl backdrop-blur-xl">
          <div className="mb-5 flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#626c7a]">
                System
              </p>

              <p className="mt-1 text-sm font-medium text-[#f5f7fa]">
                {name}
              </p>
            </div>

            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: accent }}
            />
          </div>

          <div className="space-y-3">
            {[
              ['DEVICE', 'ESP32'],
              ['BACKEND', 'Flask'],
              ['DATABASE', 'SQLite'],
              ['ALERTS', 'Telegram'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-white/[0.015] px-3 py-2.5"
              >
                <span className="font-mono text-[8px] tracking-[0.2em] text-[#626c7a]">
                  {label}
                </span>

                <span className="text-xs text-[#9aa4b2]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 font-mono text-[8px] uppercase tracking-[0.25em] text-[#626c7a]">
        {category}
      </div>
    </div>
  )
}

export default ProjectVisual
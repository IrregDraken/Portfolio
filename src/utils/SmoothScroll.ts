export function smoothScrollTo(id: string) {
  const target = document.getElementById(id)

  if (!target) return

  const start = window.scrollY
  const targetPosition =
    target.getBoundingClientRect().top + window.scrollY - 72

  const distance = targetPosition - start
  const duration = Math.min(
    1200,
    Math.max(650, Math.abs(distance) * 0.8),
  )

  let startTime: number | null = null

  const easeInOut = (t: number) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const animate = (currentTime: number) => {
    if (startTime === null) {
      startTime = currentTime
    }

    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeInOut(progress)

    window.scrollTo(
      0,
      start + distance * easedProgress,
    )

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}
import { useEffect } from 'react'

/**
 * Adds staggered fade-up reveals to every element with the `reveal` class
 * when it enters the viewport. Observers are disconnected on unmount.
 */
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      '.reveal',
    )

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue

          const element = entry.target as HTMLElement
          const delay =
            element.dataset.revealDelay
              ? Number(element.dataset.revealDelay)
              : 0

          element.style.transitionDelay = `${delay}ms`
          element.classList.add('reveal--visible')

          observer.unobserve(entry.target)
        }
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.01,
      },
    )

    for (const target of targets) {
      const rect = target.getBoundingClientRect()
      if (
        rect.top >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.bottom > 0
      ) {
        target.classList.add('reveal--visible')
      } else {
        observer.observe(target)
      }
    }

    return () => observer.disconnect()
  }, [])
}

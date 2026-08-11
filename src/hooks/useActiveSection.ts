import { useEffect, useState } from 'react'

/**
 * Tracks the id of the section currently in view for the navbar's
 * active state. Returns the id of the closest section above the
 * scroll position.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const visibleSections = new Set<string>()

    const update = () => {
      let closest = ''

      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) continue

        const rect = element.getBoundingClientRect()

        if (rect.top <= 160 && rect.bottom >= 120) {
          visibleSections.add(id)
        } else {
          visibleSections.delete(id)
        }

        if (rect.top <= 160) {
          closest = id
        }
      }

      setActiveId(closest)
    }

    update()

    const observer = new IntersectionObserver(
      update,
      { rootMargin: '-15% 0px -70% 0px' },
    )

    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }

    return () => observer.disconnect()
  }, [ids])

  return activeId
}

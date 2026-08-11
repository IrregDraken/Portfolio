import { useEffect, useState } from 'react'

export type TypingEffectState = {
  text: string
  isTyping: boolean
}

/**
 * Types a list of phrases one character at a time, pauses when a phrase
 * completes, deletes it one character at a time, and moves on to the next.
 *
 * Guarantees:
 * - no interval leaks (single request-safe timeout)
 * - resets cleanly when the phrase list or speed changes
 * - skips all animation when prefers-reduced-motion is enabled
 */
export function useTypingEffect(
  phrases: readonly string[],
  options: {
    typeSpeed?: number
    deleteSpeed?: number
    pauseDelay?: number
  } = {},
): TypingEffectState {
  const {
    typeSpeed = 48,
    deleteSpeed = 28,
    pauseDelay = 1600,
  } = options

  const isReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)')
      .matches

  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (phrases.length === 0) return

    // Fully visible at rest for users who prefer reduced motion.
    if (isReducedMotion) {
      setText(phrases[0])
      setIsTyping(false)
      return
    }

    let mounted = true
    let timeoutId = 0

    let phraseIndex = 0
    let currentText = ''
    let deleting = false

    const scheduleNext = (delay: number) => {
      timeoutId = window.setTimeout(step, delay)
    }

    const commit = (next: string) => {
      currentText = next
      setText(next)
    }

    const step = () => {
      if (!mounted) return

      const phrase = phrases[phraseIndex]

      if (!deleting) {
        const nextText = phrase.slice(0, currentText.length + 1)
        commit(nextText)

        if (nextText === phrase) {
          deleting = true
          scheduleNext(pauseDelay)
        } else {
          scheduleNext(typeSpeed)
        }
      } else {
        const nextText = phrase.slice(0, currentText.length - 1)
        commit(nextText)

        if (nextText.length === 0) {
          deleting = false
          phraseIndex = (phraseIndex + 1) % phrases.length
          scheduleNext(typeSpeed)
        } else {
          scheduleNext(deleteSpeed)
        }
      }
    }

    scheduleNext(typeSpeed)

    return () => {
      mounted = false
      window.clearTimeout(timeoutId)
    }
  }, [phrases, typeSpeed, deleteSpeed, pauseDelay, isReducedMotion])

  return { text, isTyping }
}

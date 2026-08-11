import { useEffect, useRef, useState } from 'react'

export type TypingEffectState = {
  text: string
  phase: 'typing' | 'paused' | 'fading-out'
}

/**
 * Types a list of phrases one character at a time, holds the complete
 * phrase, fades it out, and types the next phrase.
 *
 * Behavior:
 * - ALWAYS animates: intentionally ignores prefers-reduced-motion so the
 *   hero typing line never reads as static (user requirement).
 * - smooth fade transition between phrases (CSS opacity transition)
 * - single chained setTimeout (no interval leaks)
 * - resets cleanly when the phrase list or speeds change
 */
export function useTypingEffect(
  phrases: readonly string[],
  options: {
    typeSpeed?: number
    deleteSpeed?: number
    pauseDelay?: number
    fadeDelay?: number
  } = {},
): TypingEffectState {
  const {
    typeSpeed = 70,
    deleteSpeed = 30,
    pauseDelay = 2200,
    fadeDelay = 450,
  } = options

  const [text, setText] = useState('')
  const [phase, setPhase] = useState<TypingEffectState['phase']>('typing')

  // Keep latest speeds/options accessible without restarting the effect.
  const optionsRef = useRef({ typeSpeed, deleteSpeed, pauseDelay, fadeDelay })
  optionsRef.current = { typeSpeed, deleteSpeed, pauseDelay, fadeDelay }

  useEffect(() => {
    if (phrases.length === 0) return

    let mounted = true
    let timeoutId = 0

    let phraseIndex = 0
    let currentText = ''
    // Machine states: 'type' | 'hold' | 'untype'
    let mode: 'type' | 'hold' | 'untype' = 'type'

    const scheduleNext = (delay: number, next: () => void) => {
      timeoutId = window.setTimeout(() => {
        if (!mounted) return
        next()
      }, delay)
    }

    const commit = (next: string) => {
      currentText = next
      setText(next)
    }

    const hold = () => {
      if (mode !== 'hold') {
        mode = 'hold'
        setPhase('paused')
      }
      scheduleNext(optionsRef.current.pauseDelay, () => {
        if (!mounted) return
        mode = 'untype'
        setPhase('fading-out')
        scheduleNext(optionsRef.current.fadeDelay, untype)
      })
    }

    const typeNext = () => {
      mode = 'type'
      setPhase('typing')
      const phrase = phrases[phraseIndex]
      const nextText = phrase.slice(0, currentText.length + 1)
      commit(nextText)
      if (nextText === phrase) {
        hold()
      } else {
        scheduleNext(optionsRef.current.typeSpeed, typeNext)
      }
    }

    const untype = () => {
      mode = 'untype'
      const phrase = phrases[phraseIndex]
      const nextText = phrase.slice(0, currentText.length - 1)
      commit(nextText)
      if (nextText.length === 0) {
        phraseIndex = (phraseIndex + 1) % phrases.length
        scheduleNext(optionsRef.current.deleteSpeed, typeNext)
      } else {
        scheduleNext(optionsRef.current.deleteSpeed, untype)
      }
    }

    typeNext()

    return () => {
      mounted = false
      window.clearTimeout(timeoutId)
    }
  }, [phrases])

  return { text, phase }
}

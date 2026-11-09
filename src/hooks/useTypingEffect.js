import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

const TYPING_SPEED = 70
const DELETING_SPEED = 35
const PAUSE_DURATION = 1600

export function useTypingEffect(words) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [state, setState] = useState({
    wordIndex: 0,
    text: '',
    phase: 'typing',
  })

  useEffect(() => {
    if (prefersReducedMotion || words.length === 0) {
      return undefined
    }

    const currentWord = words[state.wordIndex % words.length]
    const delay =
      state.phase === 'typing'
        ? TYPING_SPEED
        : state.phase === 'deleting'
          ? DELETING_SPEED
          : PAUSE_DURATION

    const timer = window.setTimeout(() => {
      if (state.phase === 'typing') {
        if (state.text.length < currentWord.length) {
          setState((previous) => ({
            ...previous,
            text: currentWord.slice(0, previous.text.length + 1),
          }))
        } else {
          setState((previous) => ({ ...previous, phase: 'pausing' }))
        }
        return
      }

      if (state.phase === 'pausing') {
        setState((previous) => ({ ...previous, phase: 'deleting' }))
        return
      }

      if (state.text.length > 0) {
        setState((previous) => ({
          ...previous,
          text: currentWord.slice(0, previous.text.length - 1),
        }))
        return
      }

      setState((previous) => ({
        wordIndex: (previous.wordIndex + 1) % words.length,
        text: '',
        phase: 'typing',
      }))
    }, delay)

    return () => window.clearTimeout(timer)
  }, [prefersReducedMotion, state, words])

  if (prefersReducedMotion || words.length === 0) {
    return words[0] ?? ''
  }

  return state.text
}

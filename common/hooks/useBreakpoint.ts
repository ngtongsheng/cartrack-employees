import { useState, useEffect, useCallback } from 'react'
import useThrottle from './useThrottle'

export type InteractionType = 'touch' | 'mouse' | ''

export type Breakpoint =
  | 'mobile'
  | 'tablet'
  | 'desktop'
  | 'widescreen'
  | 'fullhd'
  | ''

const getInteractionType = (): InteractionType => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue('--interaction')
    .trim() as InteractionType
}

const getBreakpoint = (): Breakpoint => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue('--breakpoint')
    .trim() as Breakpoint
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('')
  const [interactionType, setInteractionType] = useState<InteractionType>('')

  const handleResize = useCallback(() => {
    setBreakpoint(getBreakpoint())
    setInteractionType(getInteractionType())
  }, [])

  const throttledHandleResize = useThrottle(handleResize, 1000)

  useEffect(() => {
    window.addEventListener('resize', throttledHandleResize, {
      passive: true
    })

    throttledHandleResize()

    return () => window.removeEventListener('resize', throttledHandleResize)
  }, [throttledHandleResize])

  return { breakpoint, interactionType }
}

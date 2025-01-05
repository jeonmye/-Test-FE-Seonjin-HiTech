'use client'

import { useRef, useEffect, useCallback } from 'react'

const useZoomInEffect = (
  duration = 1,
  delay = 0,
  initialScale = 0.8,
  trigger = 'scroll'
) => {
  const element = useRef()

  const applyZoomIn = useCallback(() => {
    const { current } = element
    if (current) {
      current.style.transitionProperty = 'transform'
      current.style.transitionDuration = `${duration}s`
      current.style.transitionTimingFunction = 'ease-out'
      current.style.transitionDelay = `${delay}s`
      current.style.transform = 'scale(1.2)'
    }
  }, [duration, delay])

  const handleIntersect = useCallback(
    ([entry]) => {
      if (entry.isIntersecting) {
        applyZoomIn()
      }
    },
    [applyZoomIn]
  )

  useEffect(() => {
    if (trigger === 'scroll') {
      const observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.1
      })
      const { current } = element

      if (current) observer.observe(current)

      return () => observer.disconnect()
    }
  }, [handleIntersect, trigger])

  const handleMouseEnter = () => {
    if (trigger === 'hover') applyZoomIn()
  }

  const handleMouseLeave = () => {
    const { current } = element
    if (trigger === 'hover' && current) {
      current.style.transform = `scale(${initialScale})`
    }
  }

  return {
    ref: element,
    style: {
      opacity: 1,
      transform: `scale(${initialScale})`
    },
    ...(trigger === 'hover' && {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    })
  }
}

export default useZoomInEffect

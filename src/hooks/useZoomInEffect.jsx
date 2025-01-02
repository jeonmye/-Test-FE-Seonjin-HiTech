'use client'

import { useRef, useEffect, useCallback } from 'react'

const useZoomInEffect = (duration = 1, delay = 0, initialScale = 0.8) => {
  const element = useRef()

  const handleIntersect = useCallback(
    ([entry]) => {
      const { current } = element
      if (entry.isIntersecting && current) {
        current.style.transitionProperty = 'transform' // or 'all'
        current.style.transitionDuration = `${duration}s`
        current.style.transitionTimingFunction = 'ease-out'
        current.style.transitionDelay = `${delay}s`
        current.style.transform = 'scale(1.2)'
      }
    },
    [duration, delay]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1
    })
    const { current } = element

    if (current) observer.observe(current)

    return () => observer.disconnect()
  }, [handleIntersect])

  return {
    ref: element,
    style: {
      opacity: 1,
      transform: `scale(${initialScale})`
    }
  }
}

export default useZoomInEffect

'use client'
import { useRef, useEffect, useCallback } from 'react'

const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {
  const dom = useRef(null)

  const handleDirection = name => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 30%, 0)'
      case 'down':
        return 'translate3d(0, -50%, 0)'
      case 'left':
        return 'translate3d(50%, 0, 0)'
      case 'right':
        return 'translate3d(-50%, 0, 0)'
      default:
        return 'translate3d(0, 0, 0)'
    }
  }

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom
      if (entry.isIntersecting && current) {
        current.style.transitionProperty = 'all'
        current.style.transitionDuration = `${duration}s`
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.4, 1)'
        current.style.transitionDelay = `${delay}s`
        current.style.opacity = 1
        current.style.transform = 'translate3d(0, 0, 0)'
      }
    },
    [delay, duration]
  )

  useEffect(() => {
    let observer
    const { current } = dom

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.1 })
      observer.observe(current)
    }

    return () => observer && observer.disconnect()
  }, [handleScroll])

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction)
    }
  }
}

export default useScrollFadeIn

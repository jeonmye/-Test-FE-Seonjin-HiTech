'use client'

import { useEffect, useState } from 'react'

function useViewport() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isDesktop, setDesktop] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    setIsMobile(window.innerWidth <= 768 || window.outerWidth <= 768)
    setDesktop(window.innerWidth <= 1024 || window.outerWidth <= 1024)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize()
      setIsLoaded(true)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    width,
    height,
    isMobile,
    isDesktop,
    isLoaded
  }
}

export default useViewport

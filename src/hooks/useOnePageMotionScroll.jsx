'use client'

import { useEffect, useState } from 'react'

export const useOnePageMotionScroll = containerRef => {
  const [page, setPage] = useState(0) 
  const [totalPages, setTotalPages] = useState(0) 
  const [isThrottling, setIsThrottling] = useState(false) 

  useEffect(() => {
    const pageElements = containerRef.current?.children
    if (pageElements) {
      setTotalPages(pageElements.length)
    }

    const handleWheel = e => {
      if (isThrottling) return

      setIsThrottling(true)

      if (e.deltaY > 0) {
        setPage(prevPage => Math.min(prevPage + 1, totalPages - 1))
      } else {
        setPage(prevPage => Math.max(prevPage - 1, 0))
      }

      setTimeout(() => {
        setIsThrottling(false)
      }, 500)
    }

    const scrollToPage = () => {
      window.scrollTo({
        top: page * window.innerHeight,
        behavior: 'smooth'
      })
    }

    scrollToPage()

    // 휠 이벤트 등록
    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [page, totalPages, isThrottling, containerRef])

  return { page, totalPages } 
}

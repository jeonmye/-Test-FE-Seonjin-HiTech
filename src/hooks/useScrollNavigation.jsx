'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'

const useScrollNavigation = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleScrollNavigation = (path, scrollId, navRef) => {
    if (pathname === path) {
      // 같은 페이지 내에서 스크롤 이동
      scrollToElement(scrollId, navRef)
    } else {
      // 다른 페이지로 이동 후 스크롤
      sessionStorage.setItem('scrollId', scrollId)
      router.push(path)
    }
  }

  const scrollToElement = (scrollId, navRef) => {
    if (!scrollId) return

    const element = document.getElementById(scrollId)
    const navHeight = navRef?.current?.offsetHeight || 0 // 네비게이션 높이 고려
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  // 페이지 로드 후 스크롤 처리
  useEffect(() => {
    const scrollId = sessionStorage.getItem('scrollId')
    if (scrollId) {
      scrollToElement(scrollId)
      sessionStorage.removeItem('scrollId') // 한 번 사용 후 제거
    }
  }, [pathname])

  return { handleScrollNavigation }
}

export default useScrollNavigation

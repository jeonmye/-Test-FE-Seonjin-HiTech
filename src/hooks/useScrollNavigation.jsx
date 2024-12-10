'use client'

import { useRouter, usePathname } from 'next/navigation'

const useScrollNavigation = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleScrollNavigation = (path, id, navRef) => {
    if (pathname === path) {
      // 같은 페이지에서 스크롤 이동
      scrollToElement(id, navRef)
    } else {
      // 다른 페이지로 이동할 경우
      sessionStorage.setItem('scrollId', id)
      router.push(path)
    }
  }

  const scrollToElement = (id, navRef) => {
    const element = document.getElementById(id)
    if (element) {
      const navHeight = navRef?.current?.offsetHeight || 0 // 네비게이션 높이 동적 계산
      const topOffset =
        element.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top: topOffset, behavior: 'smooth' })
    }
  }

  return { handleScrollNavigation }
}

export default useScrollNavigation

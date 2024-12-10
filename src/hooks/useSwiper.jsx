import { useRef, useState, useEffect } from 'react'

export const useSwiper = () => {
  const swiperRef = useRef(null) // Swiper 인스턴스 저장
  const [slideCount, setSlideCount] = useState(0) // 슬라이드 개수 상태

  const goToSlide = index => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index)
      // 특정 슬라이드로 이동
    }
  }

  useEffect(() => {
    if (swiperRef.current) {
      setSlideCount(swiperRef.current.slides.length) // 슬라이드 개수 설정
    }
  }, [swiperRef.current])

  return { swiperRef, slideCount, goToSlide }
}

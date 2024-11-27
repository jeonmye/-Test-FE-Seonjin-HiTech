'use client'

import { useRef, useState } from 'react'
import { useOnePageMotionScroll } from '@/hooks/useOnePageMotionScroll'
import { useSwiper } from '@/hooks/useSwiper' // Custom Swiper Hook
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function Home() {
  const containerRef = useRef(null)
  const { swiperRef, goToSlide } = useSwiper() // Swiper Hook 사용
  const [activeIndex, setActiveIndex] = useState(0) // 활성 슬라이드 인덱스
  const randomImages = [
    'https://picsum.photos/1920/1080?random=1',
    'https://picsum.photos/1920/1080?random=2',
    'https://picsum.photos/1920/1080?random=3'
  ] // 랜덤 이미지 URL 리스트

  // Custom hook for page motion
  useOnePageMotionScroll(containerRef)

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-col transition-all duration-500">
      {/* Swiper Component */}
      <div className="relative flex min-h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false // Continue autoplay after user interaction
          }}
          loop={true}
          className="h-screen w-full"
          onSwiper={swiper => {
            swiperRef.current = swiper // Swiper 인스턴스 저장
          }}
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)} // 활성 슬라이드 변경
        >
          {/* Slides */}
          {randomImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative flex h-full items-center justify-center transition-transform duration-[4000ms] ${
                  activeIndex === index ? 'scale-110' : 'scale-100'
                }`}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-auto object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Slide Number Controls */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 transform space-x-4">
        {Array.from({ length: randomImages.length }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-600">
            {index + 1}
          </button>
        ))}
      </div>
      {/* Additional Pages */}
      <div className="flex min-h-screen w-full items-center justify-center bg-orange-200">
        <h1 className="text-4xl font-bold">Page 2</h1>
      </div>
      <div className="flex min-h-screen w-full items-center justify-center bg-green-200">
        <h1 className="text-4xl font-bold">Page 3</h1>
      </div>
      <div className="flex min-h-screen w-full items-center justify-center bg-blue-200">
        <h1 className="text-4xl font-bold">Page 4</h1>
      </div>
    </div>
  )
}

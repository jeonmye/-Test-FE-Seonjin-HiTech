'use client'

import { useRef, useState } from 'react'
import { useOnePageMotionScroll } from '@/hooks/useOnePageMotionScroll'
import { useSwiper } from '@/hooks/useSwiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { MAIN_BANNER_CONTENT } from '@/constants/index'

export default function Home() {
  const containerRef = useRef(null)
  const { swiperRef, goToSlide } = useSwiper()
  const [activeIndex, setActiveIndex] = useState(0)

  useOnePageMotionScroll(containerRef)

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-col transition-all duration-500">
      {/* Swiper Component */}
      <div className="flex min-h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          loop={true}
          className="h-screen w-full"
          onSwiper={swiper => {
            swiperRef.current = swiper // Swiper 인스턴스 저장
          }}
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}>
          {/* Slides */}
          {MAIN_BANNER_CONTENT.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative flex h-full items-center justify-center transition-transform duration-[4000ms] ${
                  activeIndex === index ? 'scale-110' : 'scale-100'
                }`}>
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-auto object-cover"
                />
                {/* Title and Subtitle */}
                <div
                  className={`absolute z-10 flex flex-col items-center text-center transition-all duration-[4000ms] ease-in-out ${
                    activeIndex === index
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-40 opacity-0'
                  }`}>
                  <span className="text-3xl text-white">{item.subTitle}</span>
                  <span className="mt-2 text-7xl font-bold text-white">
                    {item.title}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Slide Number Controls */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 transform space-x-4">
        {Array.from({ length: MAIN_BANNER_CONTENT.length }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-600">
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

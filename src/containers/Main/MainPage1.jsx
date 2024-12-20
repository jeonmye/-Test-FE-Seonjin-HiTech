import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useSwiper } from '@/hooks/useSwiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { MAIN_BANNER_CONTENT } from '@/constants/index'

const MainPage1 = () => {
  const { swiperRef, goToSlide } = useSwiper()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handlePause = () => {
    if (swiperRef.current) {
      if (isPaused) {
        swiperRef.current.autoplay.start() // 자동 슬라이드 재개
      } else {
        swiperRef.current.autoplay.stop() // 자동 슬라이드 일시정지
      }
      setIsPaused(!isPaused) // 상태 업데이트
    }
  }

  useEffect(() => {
    setActiveIndex(0)
  }, [])

  return (
    <>
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
            <SwiperSlide key={item.alt}>
              <div
                className={`relative flex h-full w-full items-center justify-center transition-transform duration-[4000ms] ${
                  activeIndex === index ? 'scale-110' : 'scale-100'
                }`}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-auto object-cover"
                  layout="fill"
                  priority={true}
                />

                {/* Title and Subtitle */}
                <div
                  className={`absolute z-10 flex flex-col items-center text-center transition-all duration-[3500ms] ease-in-out ${
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
      <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 transform gap-4">
        {/* Slide Number Controls */}
        {Array.from({ length: MAIN_BANNER_CONTENT.length }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-600 ${activeIndex === index ? 'bg-red-600' : ''}`}>
            {index + 1}
          </button>
        ))}

        {/* Pause/Play Button */}
        <button
          onClick={handlePause}
          className="rounded bg-gray-800 px-6 py-3 text-white hover:bg-gray-600">
          {isPaused ? 'Play' : 'Pause'}
        </button>
      </div>
    </>
  )
}

export default MainPage1

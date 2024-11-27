'use client'

import { useRef } from 'react'
import { useOnePageMotionScroll } from '@/hooks/useOnePageMotionScroll'
import MainPage1 from '@/containers/Main/MainPage1'
import MainPage2 from '@/containers/Main/MainPage2'
import MainPage3 from '@/containers/Main/MainPage3'
import MainPage4 from '@/containers/Main/MainPage4'

export default function Home() {
  const containerRef = useRef(null)

  const { page, totalPages } = useOnePageMotionScroll(containerRef)

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-col transition-all duration-500">
      <MainPage1 />
      <MainPage2 page={page} />
      <MainPage3 page={page} />
      <MainPage4 page={page} />
    </div>
  )
}

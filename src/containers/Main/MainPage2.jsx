'use client'

import Image from 'next/image'

const MainPage2 = ({ page }) => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <Image
        src="/images/mainBanner/main_02.png"
        alt="Background"
        className="z-0 h-full w-auto object-cover"
        priority
        fill
      />
      <div
        className={`absolute z-10 flex flex-col items-center text-center transition-all duration-[3500ms] ease-in-out ${
          page === 1 ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'
        }`}>
        <div className="md:w-96">
          <Image
            src="/images/mainBanner/main_02_item_01.png"
            alt="배전반"
            width={400}
            height={400}
            className="z-1"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default MainPage2

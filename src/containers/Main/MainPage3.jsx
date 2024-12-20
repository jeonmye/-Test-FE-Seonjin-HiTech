import Image from 'next/image'

const MainPage3 = ({ page }) => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <Image
        src="/images/mainBanner/main_03.png"
        alt="Background"
        layout="fill"
        className="z-0 h-full w-auto object-cover"
        priority
      />
      <div
        className={`absolute z-10 flex flex-col items-center text-center transition-all duration-[3500ms] ease-in-out ${
          page === 2 ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'
        }`}>
        <span className="text-3xl text-white">page3</span>
        <span className="mt-2 text-7xl font-bold text-white">Page3</span>
      </div>
    </div>
  )
}

export default MainPage3

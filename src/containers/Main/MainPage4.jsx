import Image from 'next/image'

const MainPage4 = ({ page }) => {
  return (
    <div className="0 relative flex min-h-screen w-full items-center justify-center">
      <Image
        src="/images/mainBanner/main_04.png"
        alt="Background"
        className="z-0 h-full w-auto object-cover"
        priority
        fill
      />
      <div
        className={`absolute z-10 flex flex-col items-center text-center transition-all duration-[3500ms] ease-in-out ${
          page === 3 ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'
        }`}>
        <span className="text-3xl text-white">page4</span>
        <span className="mt-2 text-7xl font-bold text-white">Page4</span>
      </div>
    </div>
  )
}

export default MainPage4

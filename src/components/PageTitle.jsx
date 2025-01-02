import Image from 'next/image'
import useZoomInEffect from '@/hooks/useZoomInEffect'
import useScrollFadeIn from '@/hooks/useScrollFadeIn'

const PageTitle = ({ bg, title, textSizeClassName }) => {
  const zoomInIcon1 = useZoomInEffect(5, 0, 1)
  const fadeInUp1 = useScrollFadeIn('up', 1, 0.2)

  return (
    <div
      id="vision"
      className="relative mb-8 flex h-[420px] w-screen items-center justify-center overflow-hidden md:mb-48">
      <Image
        {...zoomInIcon1}
        src={bg}
        alt={`${bg}`}
        className="h-auto w-full object-cover"
        fill
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <span
        {...fadeInUp1}
        className={`absolute ${textSizeClassName} text-white`}>
        {title}
      </span>{' '}
    </div>
  )
}

export default PageTitle

import FadeInSection from '@/components/FadeInSection'
import Image from 'next/image'
import useScrollFadeIn from '@/hooks/useScrollFadeIn'
import useViewport from '@/hooks/useViewport'
import Logo from '@/components/Logo/Logo'

import about_02 from '../../../public/images/about/about_02.png'
import about_item_01 from '../../../public/images/about/about_item_01.png'
import about_item_02 from '../../../public/images/about/about_item_02.png'
import about_item_03 from '../../../public/images/about/about_item_03.png'

const Vision = () => {
  const { isMobile, isDesktop } = useViewport()
  const fadeInLeft1 = useScrollFadeIn('left', 1.5, 0.4)
  const fadeInLeft2 = useScrollFadeIn('left', 1.5, 0.8)
  const fadeInLeft3 = useScrollFadeIn('left', 1.5, 1.2)

  const aboutdescriptionStyle = isMobile ? 'text-bodyS' : 'static'

  const aboutImageStyle = isDesktop ? 'w-auto' : ' '

  const aboutLeftSectionStyle = isDesktop
    ? isMobile
      ? 'bg-about02 p-16'
      : 'max-w-[300px]'
    : ' flex max-w-[450px] flex-col items-start'

  return (
    <div className="relative mb-64 md:mx-8 md:flex md:flex-row md:gap-8 lg:gap-16">
      <div className="absolute inset-0 m-8 bg-white opacity-50 md:hidden"></div>
      <div className={`${aboutLeftSectionStyle}`}>
        <FadeInSection delay={0.2}>
          <Logo size="xxxl" />
        </FadeInSection>
        <div className="flex flex-col gap-6">
          <FadeInSection delay={0.4}>
            <div
              className={`${aboutdescriptionStyle} flex-wrap break-keep py-2.5 text-start text-bodyL text-gray500`}>
              선진하이텍은 2008년 저항기 제조업체로 출발하여 수년간의 기술
              연구개발 및 경험 축적을 바탕으로 국내 최고의 저항기와 수배전반,
              자동제어반, 전기공사를 직접 제조 설치하는 기업으로 국가기간산업
              발전에 기여해 왔으며, 친환경 비즈니스를 선도하고 우수한 기술력과
              품질을 바탕으로 고객으로부터 신뢰받는 기업으로 성장 발전하고
              있습니다.
            </div>
          </FadeInSection>
          <FadeInSection delay={0.6}>
            <div className="grid grid-cols-3 gap-7 bg-sky-400 p-9 text-bodyS text-white md:text-bodyM">
              <div
                {...fadeInLeft1}
                className="flex flex-col items-center justify-center gap-5">
                <Image
                  src={about_item_01}
                  alt="about_item_01"
                  width={60}
                />
                <span>저항기</span>
              </div>
              <div
                {...fadeInLeft2}
                className="flex flex-col items-center justify-center gap-5">
                <Image
                  src={about_item_02}
                  alt="about_item_02"
                  width={60}
                />
                <span>배전반</span>
              </div>
              <div
                {...fadeInLeft3}
                className="flex flex-col items-center justify-center gap-5">
                <Image
                  src={about_item_03}
                  alt="about_item_03"
                  width={60}
                />
                <span>전력품질개선</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>{' '}
      {!isMobile && (
        <FadeInSection
          delay={0.6}
          className={` ${aboutImageStyle} flex flex-col items-start overflow-hidden`}>
          <Image
            src={about_02}
            alt="선진하이텍"
            className="h-full w-auto object-cover"
            priority={true}
          />{' '}
        </FadeInSection>
      )}
    </div>
  )
}

export default Vision

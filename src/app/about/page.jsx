'use client'

import Logo from '@/components/Logo/Logo'
import useViewport from '@/hooks/useViewport'
import Image from 'next/image'
import about_02 from '../../../public/images/about/about_02.png'
import about_item_01 from '../../../public/images/about/about_item_01.png'
import about_item_02 from '../../../public/images/about/about_item_02.png'
import about_item_03 from '../../../public/images/about/about_item_03.png'
import companyHistory from '../../../public/data/historyData.json'
import GoogleMap from '@/components/GoogleMap/GoogleMap'
import GoogleMapWrapper from '@/components/GoogleMap/GoogleMap'
import { Status, Wrapper } from '@googlemaps/react-wrapper'
import FadeInSection from '@/components/FadeInSection'

export default function About() {
  const { isMobile, isDesktop } = useViewport()

  const render = status => {
    switch (status) {
      case Status.LOADING:
        return <>로딩중...</>
      case Status.FAILURE:
        return <>에러 발생</>
      case Status.SUCCESS:
        return <GoogleMap />
    }
  }

  const aboutdescriptionStyle = isMobile ? 'text-bodyS' : 'static'

  const aboutImageStyle = isDesktop ? ' min-w-[350px] ' : ' min-w-[450px] '

  const aboutLeftSectionStyle = isDesktop
    ? isMobile
      ? 'bg-about02 p-16'
      : ''
    : ' flex max-w-[450px] flex-col items-start'

  const reverseData = [...companyHistory].reverse()

  return (
    <div className="flex flex-col items-center gap-32">
      <div
        id="vision"
        className="bg-about01 relative flex h-80 w-screen items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
        <span className="text-headXL absolute font-bold text-white">About</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-32 lg:mx-24">
        {/* 회사소개 */}
        <div className="relative md:mx-8 md:flex md:flex-row md:gap-8 lg:gap-16">
          <div className="absolute inset-0 m-8 bg-white opacity-50 md:hidden"></div>
          <div className={`${aboutLeftSectionStyle}`}>
            <FadeInSection delay={0.2}>
              <Logo size="xxxl" />
            </FadeInSection>
            <div className="flex flex-col gap-6">
              <FadeInSection delay={0.4}>
                <div
                  className={`${aboutdescriptionStyle} text-bodyL flex-wrap break-keep py-2.5 text-start text-gray500`}>
                  선진하이텍은 2008년 저항기 제조업체로 출발하여 수년간의 기술
                  연구개발 및 경험 축적을 바탕으로 국내 최고의 저항기와
                  수배전반, 자동제어반, 전기공사를 직접 제조 설치하는 기업으로
                  국가기간산업 발전에 기여해 왔으며, 친환경 비즈니스를 선도하고
                  우수한 기술력과 품질을 바탕으로 고객으로부터 신뢰받는 기업으로
                  성장 발전하고 있습니다.
                </div>
              </FadeInSection>
              <FadeInSection delay={0.6}>
                <div className="text-bodyS md:text-bodyM grid grid-cols-3 gap-7 bg-sky-400 p-9 text-white">
                  <div className="flex flex-col items-center justify-center gap-5">
                    <Image
                      src={about_item_01}
                      alt="about_item_01"
                      width={60}
                    />
                    <span>저항기</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-5">
                    <Image
                      src={about_item_02}
                      alt="about_item_02"
                      width={60}
                    />
                    <span>배전반</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-5">
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
          </div>

          {!isMobile && (
            <div
              className={` ${aboutImageStyle} flex flex-col items-start overflow-hidden`}>
              <Image
                src={about_02}
                alt="선진하이텍"
                className="h-full w-auto object-cover"
                priority={true}
              />
            </div>
          )}
        </div>

        {/* 회사연혁 */}
        <div
          id="history"
          className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-start px-6">
            <FadeInSection delay={0.2}>
              <div className="mb-4 text-3xl font-extrabold">
                선진하이텍이 걸어온 길을 소개합니다
              </div>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <div className="text-l mb-6 font-semibold">
                고객으로부터 믿을 수 있는 글로벌 전문기업으로 성장해
                나가겠습니다
              </div>
            </FadeInSection>
          </div>
          <FadeInSection delay={0.2}>
            <div className="flex">
              <div className="relative flex flex-col items-center bg-white px-6">
                {reverseData.map((items, index) => (
                  <div
                    key={items.id}
                    className="relative flex w-full max-w-4xl items-start gap-4">
                    {/* Left Side - Year */}
                    <div className="flex flex-none justify-end pr-4">
                      <div className="text-right text-xl font-bold">
                        {items.year}
                      </div>
                    </div>
                    {/* Center Dot with Line */}
                    <div className="relative h-full flex-shrink-0">
                      {/* Vertical Line */}
                      <div
                        className={`absolute left-[50%] top-0 h-full w-px bg-gray-300 ${
                          index === reverseData.length - 1 ? 'hidden' : ''
                        }`}></div>
                      {/* Dot */}
                      <div className="relative h-full">
                        <div className="relative z-10 mt-1 h-4 w-4 rounded-full bg-blue-600"></div>
                      </div>
                    </div>
                    {/* Right Side - Month and Description */}
                    <div className="flex flex-grow flex-col pb-5 pl-4">
                      {items.content.map(item => (
                        <div
                          key={item.id}
                          className="flex items-center gap-2 text-left">
                          <div className="text-lg font-semibold">
                            {item.month.toString().length === 2
                              ? item.month
                              : '0' + item.month}
                          </div>
                          <div className="text-sm text-gray-600">
                            {item.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
      {/* 찾아오는 길 */}
      <div
        id="contact"
        className="flex w-full flex-col items-center justify-center">
        <div className="flex h-48 w-full items-center justify-center bg-red-500 text-[60px]">
          <span className="">찾아오는 길</span>
        </div>
        <div className="">
          <GoogleMapWrapper size={isMobile ? 's' : 'l'} />
        </div>
      </div>
    </div>
  )
}

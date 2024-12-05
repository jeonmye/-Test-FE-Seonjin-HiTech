'use client'

import Logo from '@/components/Logo/Logo'
import useViewport from '@/hooks/useViewport'
import Image from 'next/image'
import sampleImage from '../../../public/images/sampleImage.jpg'
import companyHistory from '../../../public/data/historyData.json'
import GoogleMap from '@/components/GoogleMap/GoogleMap'
import GoogleMapWrapper from '@/components/GoogleMap/GoogleMap'
import { Status, Wrapper } from '@googlemaps/react-wrapper'

export default function About() {
  const { isMobile } = useViewport()

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

  const aboutdescriptionStyle = isMobile
    ? 'absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform z-10 bg-white/70'
    : 'static'

  const aboutImageStyle = isMobile ? '' : 'static h-full'

  const reverseData = [...companyHistory].reverse()
  console.log(reverseData, 'reverseData')
  return (
    <div className="flex flex-col items-center gap-5">
      <div
        id="vision"
        className="flex h-48 w-full items-center justify-center bg-red-500 text-[60px]">
        <span className="">회사 소개</span>
      </div>
      <div className="flex max-w-screen-xl flex-col items-center justify-center gap-32">
        <div className="relative flex w-full flex-col content-between gap-12 md:flex-row">
          <div className="flex flex-col items-center">
            <Logo size="xxl" />
            <div
              className={`${aboutdescriptionStyle} py-2.5 text-center text-caption1 text-black md:w-80 md:shrink`}>
              선진하이텍은 2008년 저항기 제조업체로 출발하여 수년간의 기술
              연구개발 및 경험 축적을 바탕으로 국내 최고의 저항기와 수배전반,
              자동제어반, 전기공사를 직접 제조 설치하는 기업으로 국가기간산업
              발전에 기여해 왔으며, 친환경 비즈니스를 선도하고 우수한 기술력과
              품질을 바탕으로 고객으로부터 신뢰받는 기업으로 성장 발전하고
              있습니다.
            </div>
          </div>
          <div
            className={`relative h-full w-full md:h-96 md:w-80 md:flex-none md:overflow-hidden ${aboutImageStyle}`}>
            <Image
              src={sampleImage}
              alt="선진하이텍"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div
          id="history"
          className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-start px-6">
            <div className="mb-4 text-3xl font-extrabold">
              선진하이텍이 걸어온 길을 소개합니다
            </div>
            <div className="text-l mb-6 font-semibold">
              고객으로부터 믿을 수 있는 글로벌 전문기업으로 성장해 나가겠습니다
            </div>
          </div>
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
        </div>
      </div>
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

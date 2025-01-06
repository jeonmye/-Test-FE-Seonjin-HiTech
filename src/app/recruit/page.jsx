'use client'
import Logo from '@/components/Logo/Logo'
import Image from 'next/image'
import useZoomInEffect from '@/hooks/useZoomInEffect'
import useViewport from '@/hooks/useViewport'
import { BiSolidRightArrow } from 'react-icons/bi'
import { TiPlus } from 'react-icons/ti'

export default function Recruit() {
  const { isMobile } = useViewport()
  const zoomInEffect1 = useZoomInEffect(1, 0, 1, 'scroll')
  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-8 md:px-16 lg:px-20">
      <div className="my-24 flex items-center justify-center break-keep text-center text-title-extra-bold">
        선진인, 창의적인 사고력으로 기술력을 만들어갑니다.
      </div>
      <div className="mb-20 flex h-24">
        <div className="flex items-center pr-10">
          <Logo size={`${isMobile ? 'm' : 'l'}`} />
        </div>
        <div className="flex h-full items-center border-l-[1px] border-gray-300 pl-10 text-bodyS text-gray300">
          Leading the future
        </div>
      </div>

      <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
        <Image
          src="/images/recruit/com_3.png"
          alt="recruit"
          className="h-full w-full object-cover"
          layout="fill"
        />
        <div className="absolute inset-0 bg-gray600 opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white md:flex-row md:gap-20">
          <p className="text-title-extra-bold text-sky-400 md:text-headXL-bold">
            CREATIVE THINKING
          </p>

          <p className="text-title-extra-bold md:text-headXL-bold">
            MAKES TECHNOLOGY
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-20">
        {/* 기간 섹션 */}
        <section>
          <div className="flex items-center gap-2">
            <span className="text-sky-400">
              <TiPlus size={44} />
            </span>
            <h2 className="text-headM-bold mr-5">기간</h2>
            <p className="text-bodyL">상시채용</p>
          </div>
        </section>

        {/* 모집부문 섹션 */}
        <section>
          <div className="flex items-center gap-2">
            <span className="text-sky-400">
              <TiPlus size={44} />
            </span>
            <h2 className="text-headM-bold my-16 mr-5">모집부문</h2>
          </div>
          <div className="text-gray700 mx-auto grid max-w-[360px] gap-6 sm:grid-cols-1 md:max-w-none md:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hiddin flex h-[300px] flex-col items-center text-center">
              <Image
                src="/images/recruit/com_4.png"
                alt="글로벌 세일즈"
                className="h-full w-auto object-cover"
                priority={true}
                width={300} // 수정
                height={300} // 수정
              />
              <p className="mt-2 text-lg font-semibold">글로벌 세일즈</p>
            </div>
            <div className="overflow-hiddin flex h-[300px] flex-col items-center text-center">
              <Image
                src="/images/recruit/com_5.png"
                alt="연구소"
                className="h-full w-auto object-cover"
                priority={true}
                width={300} // 수정
                height={300} // 수정
              />
              <p className="mt-2 text-lg font-semibold">연구소</p>
            </div>
            <div className="flex h-[300px] flex-col items-center overflow-hidden text-center">
              <Image
                src="/images/recruit/com_6.png"
                alt="생산팀"
                className="h-full w-auto object-cover"
                priority={true}
                width={300} // 수정
                height={300} // 수정
              />
              <p className="mt-2 text-lg font-semibold">생산팀</p>
            </div>
            <div className="flex h-[300px] flex-col items-center overflow-hidden text-center">
              <Image
                src="/images/recruit/com_7.png"
                alt="경영지원"
                className="h-full w-auto object-cover"
                priority={true}
                width={300} // 수정
                height={300} // 수정
              />
              <p className="mt-2 text-lg font-semibold">경영지원</p>
            </div>
          </div>
        </section>

        {/* 채용정보 섹션 */}
        <section className="mt-12">
          <div className="my-16 flex items-center gap-2">
            <span className="text-sky-400">
              <TiPlus size={44} />
            </span>
            <h2 className="text-headM-bold mr-5">채용정보</h2>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 md:gap-0">
            {/* Step 1 */}
            <div className="flex h-[220px] w-full items-center bg-gray-50 px-4 py-8 md:w-[40%]">
              <Image
                src="/images/recruit/com_item_4.png"
                alt="지원서 접수"
                width={100}
                height={100}
              />
              <div className="ml-6 mr-4">
                <h3 className="text-lg font-semibold">지원서 접수</h3>
                <p className="mt-2 text-sm text-gray-600">
                  제시된 안내와 채용공고에 따라 지원서를 작성하여
                  <br />
                  지원서 접수기간 내에 이메일로 제출합니다.
                  <br />
                  (sjhitech@naver.com)
                </p>
              </div>
            </div>
            {/* 화살표 */}
            <div className="mx-0 hidden w-[8%] items-center justify-center md:flex">
              <BiSolidRightArrow
                className="text-sky-400"
                size={36}
              />
            </div>
            {/* Step 2 */}
            <div className="flex h-[220px] w-full items-center bg-gray-50 px-4 py-8 md:w-[40%]">
              <Image
                src="/images/recruit/com_item_5.png"
                alt="서류전형"
                width={100}
                height={100}
              />
              <div className="ml-6 mr-4">
                <h3 className="text-lg font-semibold">서류전형</h3>
                <p className="mt-2 text-sm text-gray-600">
                  서류전형을 통해 지원자 중에서 회사가 필요한 분야의 대상을
                  검토합니다.
                  <br />
                  입사지원서 기재 내용이 허위일 경우 합격을 취소할 수 있습니다.
                </p>
              </div>
            </div>{' '}
            <div className="hidden w-[10%] items-center justify-center md:flex">
              <BiSolidRightArrow
                className="text-sky-400"
                size={36}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 md:gap-0">
            {' '}
            <div className="hidden w-[10%] items-center justify-center md:flex">
              <BiSolidRightArrow
                className="text-sky-400"
                size={36}
              />
            </div>
            {/* Step 3 */}
            <div className="flex h-[220px] w-full items-center bg-gray-50 px-4 py-8 md:w-[40%]">
              <Image
                src="/images/recruit/com_item_6.png"
                alt="면접전형"
                width={100}
                height={100}
              />
              <div className="ml-6 mr-4">
                <h3 className="text-lg font-semibold">면접전형</h3>
                <p className="mt-2 text-sm text-gray-600">
                  면접을 통해 실무 면접과 기술 면접을 진행하며, 최종 합격 여부를
                  결정합니다.
                </p>
              </div>
            </div>
            {/* 화살표 */}
            <div className="hidden w-[10%] items-center justify-center md:flex">
              <BiSolidRightArrow
                className="text-sky-400"
                size={36}
              />
            </div>
            {/* Step 4 */}
            <div className="flex h-[220px] w-full items-center bg-gray-50 px-4 py-8 md:w-[40%]">
              <Image
                src="/images/recruit/com_item_7.png"
                alt="합격자 발표"
                width={100}
                height={100}
              />
              <div className="ml-6 mr-4">
                <h3 className="text-lg font-semibold">합격자 발표</h3>
                <p className="mt-2 text-sm text-gray-600">
                  합격자의 경우 최종 합격 통보 및 입사 관련 안내를 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 복리후생 섹션 */}
        <section>
          <div className="my-16 flex items-center gap-2">
            <span className="text-sky-400">
              <TiPlus size={44} />
            </span>
            <h2 className="text-headM-bold mr-5">복리후생</h2>
          </div>
          <p className="mt-2 text-lg">내용을 추가하세요.</p>
        </section>
      </div>
    </div>
  )
}

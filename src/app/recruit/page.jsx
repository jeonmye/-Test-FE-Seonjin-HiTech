'use client'
import Logo from '@/components/Logo/Logo'
import Image from 'next/image'
import useZoomInEffect from '@/hooks/useZoomInEffect'
import useViewport from '@/hooks/useViewport'
import useScrollFadeIn from '@/hooks/useScrollFadeIn'
import { BiSolidRightArrow } from 'react-icons/bi'
import { TiPlus } from 'react-icons/ti'

export default function Recruit() {
  const { isMobile } = useViewport()
  const zoomInEffect1 = useZoomInEffect(1, 0, 1, 'scroll')
  const fadeInUp1 = useScrollFadeIn('up', 1.5, 0.5)
  const fadeInUp2 = useScrollFadeIn('up', 1.5, 0.5)
  const fadeInUp3 = useScrollFadeIn('up', 1.5, 0.5)
  const fadeInUp4 = useScrollFadeIn('up', 1.5, 0.5)
  const fadeInUp5 = useScrollFadeIn('up', 1.5, 0.5)
  const fadeInUp6 = useScrollFadeIn('up', 1.5, 0.5)
  const fadeInUp7 = useScrollFadeIn('up', 1.5, 0.5)
  const fadeInUp8 = useScrollFadeIn('up', 1.5, 0.6)
  const fadeInUp9 = useScrollFadeIn('up', 1.5, 0.7)
  const fadeInUp10 = useScrollFadeIn('up', 1.5, 0.8)
  const fadeInUp11 = useScrollFadeIn('up', 1.5, 0.5)
  const fadeInUp12 = useScrollFadeIn('up', 1.5, 0.6)
  const fadeInUp13 = useScrollFadeIn('up', 1.5, 0.7)
  const fadeInUp14 = useScrollFadeIn('up', 1.5, 0.8)
  const fadeInUp15 = useScrollFadeIn('up', 1.5, 0.5)
  const fadeInLeft1 = useScrollFadeIn('left', 1.5, 0.5)
  const fadeInLeft2 = useScrollFadeIn('left', 1.5, 0.7)
  const fadeInLeft3 = useScrollFadeIn('left', 1.5, 0.9)
  const fadeInLeft4 = useScrollFadeIn('left', 1.5, 1.1)
  const fadeInLeft5 = useScrollFadeIn('left', 1.5, 1.3)
  const fadeInLeft6 = useScrollFadeIn('left', 1.5, 0.5)
  const fadeInRight1 = useScrollFadeIn('right', 1.5, 0.5)
  const fadeInRight2 = useScrollFadeIn('right', 1.5, 0.5)

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-8 md:px-16 lg:px-20">
      <div
        {...fadeInUp1}
        className="my-24 flex items-center justify-center break-keep text-center text-title-extra-bold">
        선진인, 창의적인 사고력으로 기술력을 만들어갑니다.
      </div>
      <div
        {...fadeInUp2}
        className="mb-20 flex h-24">
        <div className="flex items-center pr-10">
          <Logo size={`${isMobile ? 'm' : 'l'}`} />
        </div>
        <div className="flex h-full items-center border-l-[1px] border-gray-300 pl-10 text-bodyS text-gray300">
          Leading the future
        </div>
      </div>

      <div
        {...fadeInUp3}
        className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
        <Image
          src="/images/recruit/com_3.png"
          alt="recruit"
          className="h-full w-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gray600 opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white md:flex-row md:gap-20">
          <p
            {...fadeInRight1}
            className="text-title-extra-bold text-sky-400 md:text-headXL-bold">
            CREATIVE THINKING
          </p>

          <p
            {...fadeInLeft1}
            className="text-title-extra-bold md:text-headXL-bold">
            MAKES TECHNOLOGY
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-20">
        {/* 기간 섹션 */}
        <section {...fadeInUp4}>
          <div className="flex items-center gap-2">
            <span className="text-sky-400">
              <TiPlus size={44} />
            </span>
            <h2 className="text-headM-bold mr-5">기간</h2>
            <p className="text-bodyXL">상시채용</p>
          </div>
        </section>

        {/* 모집부문 섹션 */}
        <section>
          <div
            {...fadeInUp5}
            className="flex items-center gap-2">
            <span className="text-sky-400">
              <TiPlus size={44} />
            </span>
            <h2 className="text-headM-bold my-16 mr-5">모집부문</h2>
          </div>
          <div className="text-gray700 mx-auto grid max-w-[360px] gap-6 sm:grid-cols-1 md:max-w-none md:grid-cols-2 lg:grid-cols-4">
            <div
              {...fadeInLeft2}
              className="overflow-hiddin flex h-[300px] flex-col items-center text-center">
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
            <div
              {...fadeInLeft3}
              className="overflow-hiddin flex h-[300px] flex-col items-center text-center">
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
            <div
              {...fadeInLeft4}
              className="flex h-[300px] flex-col items-center overflow-hidden text-center">
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
            <div
              {...fadeInLeft5}
              className="flex h-[300px] flex-col items-center overflow-hidden text-center">
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
          <div
            {...fadeInUp6}
            className="my-16 flex items-center gap-2">
            <span className="text-sky-400">
              <TiPlus size={44} />
            </span>
            <h2 className="text-headM-bold mr-5">채용정보</h2>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 md:gap-0">
            {/* Step 1 */}
            <div
              {...fadeInUp7}
              className="flex h-[220px] w-full items-center bg-gray-50 px-4 py-8 md:w-[40%]">
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
            <div
              {...fadeInUp8}
              className="mx-0 hidden w-[8%] items-center justify-center md:flex">
              <BiSolidRightArrow
                className="text-sky-400"
                size={36}
              />
            </div>
            {/* Step 2 */}
            <div
              {...fadeInUp9}
              className="flex h-[220px] w-full items-center bg-gray-50 px-4 py-8 md:w-[40%]">
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
            <div
              {...fadeInUp10}
              className="hidden w-[10%] items-center justify-center md:flex">
              <BiSolidRightArrow
                className="text-sky-400"
                size={36}
              />
            </div>
          </div>

          <div
            {...fadeInUp11}
            className="mt-8 flex flex-wrap items-center justify-between gap-4 md:gap-0">
            <div className="hidden w-[10%] items-center justify-center md:flex">
              <BiSolidRightArrow
                className="text-sky-400"
                size={36}
              />
            </div>
            {/* Step 3 */}
            <div
              {...fadeInUp12}
              className="flex h-[220px] w-full items-center bg-gray-50 px-4 py-8 md:w-[40%]">
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
            <div
              {...fadeInUp13}
              className="hidden w-[10%] items-center justify-center md:flex">
              <BiSolidRightArrow
                className="text-sky-400"
                size={36}
              />
            </div>
            {/* Step 4 */}
            <div
              {...fadeInUp14}
              className="flex h-[220px] w-full items-center bg-gray-50 px-4 py-8 md:w-[40%]">
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
          <div
            {...fadeInUp15}
            className="my-16 flex items-center gap-2">
            <span className="text-sky-400">
              <TiPlus size={44} />
            </span>
            <h2 className="text-headM-bold mr-5">복리후생</h2>
          </div>
          <div className="flex justify-center">
            <div
              {...fadeInRight2}
              className="flex max-w-[160px] flex-col items-center gap-10 overflow-hidden text-center md:max-w-[200px]">
              <div className="flex h-[160px] overflow-hidden md:h-[200px]">
                <Image
                  src="/images/recruit/com_item_8.png"
                  alt="보험제도"
                  className="h-full w-auto object-cover"
                  priority={true}
                  width={300} // 수정
                  height={300} // 수정</div>
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="text-bodyM-extra-bold">보험제도</div>
                <div className="text-bodyXS text-gray300">
                  4대보험(국민연금, 건강보험, 고용보험, 산재보험) 직원 상해보험
                  가입
                </div>
              </div>
            </div>
            <div className="flex gap-10 md:flex md:w-20 md:flex-col">
              <div className="h-[50%] border-b-[1px] border-gray-300"></div>
              <div className="h-[50%]"></div>
            </div>
            <div
              {...fadeInLeft6}
              className="flex max-w-[160px] flex-col items-center gap-10 overflow-hidden text-center md:max-w-[200px]">
              <div className="flex h-[160px] overflow-hidden md:h-[200px]">
                <Image
                  src="/images/recruit/com_item_9.png"
                  alt="기타 복리제도"
                  width={180}
                  height={180}
                />{' '}
              </div>
              <div className="flex flex-col items-center">
                <div className="text-bodyM-extra-bold">기타 복리제도</div>
                <div className="text-bodyXS text-gray300">
                  조식/석식 지원 : 지정식당 이용 다양한 포상제도
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import companyHistory from '../../../public/data/historyData.json'

const History = () => {
  const reverseData = [...companyHistory].reverse()
  const [visibleSection, setVisibleSection] = useState('현재 ~ 2021년')
  const sectionsRef = useRef([])
  const titles = ['현재 ~ 2021년', '2020년 ~ 2011년', '2010년 ~ 이전']

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const { id } = entry.target.dataset

          if (entry.isIntersecting && visibleSection !== id) {
            setVisibleSection(id)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '-10% 0px -80% 0px'
      }
    )
    const validSections = sectionsRef.current.filter(Boolean)
    validSections.forEach(section => observer.observe(section))

    return () => {
      validSections.forEach(section => observer.unobserve(section))
    }
  }, [visibleSection])

  const activeIndex = titles.indexOf(visibleSection)

  return (
    <div
      id="history"
      className="mx-auto flex w-full flex-col items-center justify-center px-10">
      {/* 상단 설명 */}
      <div className="my-10 flex w-full flex-col items-start">
        <div className="mb-4 text-3xl font-extrabold">
          선진하이텍이 걸어온 길을 소개합니다
        </div>
        <div className="text-l mb-6 font-semibold">
          고객으로부터 믿을 수 있는 글로벌 전문기업으로 성장해 나가겠습니다
        </div>
      </div>

      <div className="relative z-10 flex w-full justify-between">
        {/* 왼쪽 고정 네비게이션 */}
        <div className="sticky top-80 mb-24 mr-10 mt-24 flex h-full flex-col">
          <div className="h-40 w-64 overflow-hidden">
            <ul
              className="transition-transform duration-500 ease-out"
              style={{
                transform: `translateY(-${activeIndex * 12}%)`
              }}>
              {titles.map((title, index) => (
                <li
                  key={index}
                  className="text-head3XL-bold flex flex-col gap-8">
                  {titles.map((line, idx) => (
                    <span
                      key={idx}
                      className="mb-5 block">
                      {line}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-32 flex flex-col gap-4 text-title-extra-bold text-gray400">
            <div
              className={`${visibleSection === '현재 ~ 2021년' ? 'text-sky-500' : ''}`}>
              현재 ~ 2021년
            </div>
            <div
              className={`${visibleSection === '2020년 ~ 2011년' ? 'text-sky-500' : ''}`}>
              2020년 ~ 2011년
            </div>
            <div
              className={`${visibleSection === '2010년 ~ 이전' ? 'text-sky-500' : ''}`}>
              2010년 ~ 이전
            </div>
          </div>
        </div>

        {/* 오른쪽 타임라인 */}
        <div className="flex flex-col">
          {reverseData.map(item => (
            <div
              key={item.id}
              data-id={
                item.year >= 2021
                  ? '현재 ~ 2021년'
                  : item.year >= 2011
                    ? '2020년 ~ 2011년'
                    : '2010년 ~ 이전'
              }
              ref={el => (sectionsRef.current[item.id] = el)}
              className="flex border-b-[1px] border-gray100 py-14">
              <div className="text-title-extra-bold md:mr-20 lg:mr-32">
                {item.year}
              </div>
              <div className="text-title-thin flex flex-col gap-8">
                {item.content.map(contentItem => (
                  <div
                    key={contentItem.id}
                    className="flex gap-4">
                    <div>{contentItem.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default History

import useScrollFadeIn from '@/hooks/useScrollFadeIn'
import companyHistory from '../../../public/data/historyData.json'

const History = () => {
  const reverseData = [...companyHistory].reverse()

  const fadeInUp2 = useScrollFadeIn('up', 1, 0.2)
  const fadeInUp3 = useScrollFadeIn('up', 1, 0.5)
  const fadeInUp4 = useScrollFadeIn('up', 1, 0.5)
  return (
    <div
      id="history"
      className="mx-auto flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-start px-6">
        <div
          {...fadeInUp2}
          className="mb-4 text-3xl font-extrabold">
          선진하이텍이 걸어온 길을 소개합니다
        </div>

        <div
          {...fadeInUp3}
          className="text-l mb-6 font-semibold">
          고객으로부터 믿을 수 있는 글로벌 전문기업으로 성장해 나가겠습니다
        </div>
      </div>

      <div className="flex">
        <div
          className="relative flex flex-col items-center bg-white px-6"
          {...fadeInUp4}>
          {reverseData.map((items, index) => (
            <div
              key={items.id}
              className="relative flex w-full max-w-4xl items-start gap-4">
              {/* Left Side - Year */}
              <div className="flex flex-none justify-end pr-4">
                <div className="text-right text-xl font-bold">{items.year}</div>
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
                  <div className="relative z-10 mt-1 h-4 w-4 rounded-full bg-sky-400"></div>
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
  )
}

export default History

import Image from 'next/image'
import useScrollFadeIn from '@/hooks/useScrollFadeIn'
import useViewport from '@/hooks/useViewport'

const CoreCompetence = () => {
  const fadeInLeft5 = useScrollFadeIn('left', 1.5, 0.2)
  const fadeInLeft6 = useScrollFadeIn('left', 1.5, 0.4)
  const fadeInLeft7 = useScrollFadeIn('left', 1.5, 0.6)
  const fadeInLeft8 = useScrollFadeIn('left', 1.5, 0.8)
  const fadeInLeft9 = useScrollFadeIn('left', 1.5, 1.0)
  const fadeInLeft10 = useScrollFadeIn('left', 1.5, 1.2)
  const fadeInUp5 = useScrollFadeIn('up', 1, 0.2)
  const fadeInUp6 = useScrollFadeIn('up', 1, 0.5)

  const CORE_COMPETENCE_ITEMS = [
    {
      id: 1,
      title: '제품기획',
      desc: '고객 Needs 최대 반영',
      src: '/images/about/about_item_04.png',
      fadeIn: fadeInLeft5
    },
    {
      id: 2,
      title: '설계',
      desc: '전문 경력 엔지니어 다수 보유',
      src: '/images/about/about_item_05.png',
      fadeIn: fadeInLeft6
    },
    {
      id: 3,
      title: '제조, 설치',
      desc: '신뢰도 및 안정성 고려',
      src: '/images/about/about_item_06.png',
      fadeIn: fadeInLeft7
    },
    {
      id: 4,
      title: '검증 및 테스트',
      desc: '자체 안전 점검 시스템',
      src: '/images/about/about_item_07.png',
      fadeIn: fadeInLeft8
    },
    {
      id: 5,
      title: '품질관리',
      desc: '안정적인 양산 대응',
      src: '/images/about/about_item_08.png',
      fadeIn: fadeInLeft9
    },
    {
      id: 6,
      title: '판매 및 기술지원',
      desc: '신속한 고객 대응',
      src: '/images/about/about_item_09.png',
      fadeIn: fadeInLeft10
    }
  ]

  return (
    <section
      id="history"
      className="relative h-full w-full bg-about03 bg-cover bg-center py-32 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto w-full px-4 text-center">
        {/* 제목 및 설명 */}
        <div className="mb-20">
          <h2
            {...fadeInUp5}
            className="mb-16 text-headXL-bold font-bold">
            Core Competence
          </h2>
          <p
            {...fadeInUp6}
            className="text-lg leading-relaxed">
            고객 중심 제품 기획 및 설계, 급속한 산업변화에 따른 신제품 개발
            <br />
            자체 기술력을 통한 맞춤형 제품 즉시 제조 공급 가능
            <br />
            직접 생산 및 운영으로 신속한 고객 대응 가능 (영업/기술)
          </p>
        </div>

        {/* 아이콘 섹션 */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {CORE_COMPETENCE_ITEMS.map(item => (
            <div
              key={item.id}
              {...item.fadeIn}
              className="flex flex-col items-center text-center">
              <Image
                src={item.src}
                alt={item.title}
                height={100} // 고정된 높이
                width={100} // 대략적인 너비 제공
                style={{
                  objectFit: 'contain',
                  width: 'auto',
                  height: '105px'
                }}
              />
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreCompetence

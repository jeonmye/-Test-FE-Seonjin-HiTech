import useScrollFadeIn from '@/hooks/useScrollFadeIn'
import Image from 'next/image'

// import GoogleMap from '@/components/GoogleMap/GoogleMap'
// import GoogleMapWrapper from '@/components/GoogleMap/GoogleMap'
// import { Status, Wrapper } from '@googlemaps/react-wrapper'

const ContactUs = () => {
  const fadeInUp7 = useScrollFadeIn('up', 2, 0.2)
  const fadeInUp8 = useScrollFadeIn('up', 1, 0.4)
  const fadeInLeft11 = useScrollFadeIn('left', 1.5, 0.6)
  const fadeInLeft12 = useScrollFadeIn('left', 1.5, 0.8)
  const fadeInLeft13 = useScrollFadeIn('left', 1.5, 1.0)
  const fadeInLeft14 = useScrollFadeIn('left', 1.5, 1.2)

  // const render = status => {
  //   switch (status) {
  //     case Status.LOADING:
  //       return <>로딩중...</>
  //     case Status.FAILURE:
  //       return <>에러 발생</>
  //     case Status.SUCCESS:
  //       return <GoogleMap />
  //   }
  // }

  return (
    <section className="relative h-full w-full bg-about04 bg-cover bg-center py-32 text-white">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="relative mx-8 flex justify-center sm:flex-row sm:items-stretch">
        <div className="flex w-full max-w-[1280px] flex-col items-center">
          <span
            {...fadeInUp7}
            className="mb-16 text-headXL-bold">
            Contact Us
          </span>
          {/* <GoogleMapWrapper size="l" /> */}
          <div
            className="w-full"
            {...fadeInUp8}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30283.079545806664!2d126.8740930837853!3d37.07852902196938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b3fc016487b0b%3A0xc8fb067d1bc7f1a4!2z7ISg7KeE7ZWY7J207YWN!5e0!3m2!1sko!2skr!4v1735780845534!5m2!1sko!2skr"
              width="100%"
              height="450px"
              style={{ border: 0, marginBottom: 50 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 md:px-32">
            <div
              {...fadeInLeft11}
              className="flex items-start gap-4">
              <Image
                src="/images/about/about_item_last1.png"
                alt="대표 번호"
                width={25}
                height={25}
              />
              <div className="flex flex-col">
                <span className="text-subTitle-bold">도로명 주소</span>
                <span className="text-bodyM">
                  경기도 화성시 향남읍 발안공단로 4길 13
                </span>
              </div>
            </div>
            <div
              {...fadeInLeft12}
              className="flex items-start gap-4">
              <Image
                src="/images/about/about_item_last2.png"
                alt="대표 번호"
                width={30}
                height={30}
              />
              <div className="flex flex-col">
                <span className="text-subTitle-bold">대표 번호</span>
                <span className="text-bodyM">+82-31-8059-1387</span>
              </div>
            </div>
            <div
              {...fadeInLeft13}
              className="flex items-start gap-4">
              <Image
                src="/images/about/about_item_last3.png"
                alt="팩스 번호"
                width={30}
                height={30}
              />
              <div className="flex flex-col">
                <span className="text-subTitle-bold">팩스 번호</span>
                <span className="text-bodyM">+82-31-8059-1397</span>
              </div>
            </div>
            <div
              {...fadeInLeft14}
              className="flex items-start gap-4">
              <Image
                src="/images/about/about_item_last4.png"
                alt="이메일"
                width={30}
                height={30}
              />
              <div className="flex flex-col">
                <span className="text-subTitle-bold">이메일</span>
                <span className="text-bodyM">sjhtech@naver.com</span>
                <span className="text-bodyM">sjhtech@seonjinhitech.co.kr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs

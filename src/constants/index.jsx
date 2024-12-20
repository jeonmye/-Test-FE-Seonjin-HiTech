import main_01_01 from '../../public/images/mainBanner/main_01_01.png'
import main_01_02 from '../../public/images/mainBanner/main_01_02.png'
import main_01_03 from '../../public/images/mainBanner/main_01_03.png'

export const NAV_LIST = [
  {
    label: '회사소개',
    path: '/about',
    submenu: [
      { label: '회사 소개', path: '/about', scrollId: 'vision' },
      { label: '회사 연혁', path: '/about', scrollId: 'history' },
      { label: '찾아오시는 길', path: '/about', scrollId: 'contact' }
    ]
  },
  {
    label: '제품',
    path: '/product',
    submenu: [
      { label: '저항기', path: '/product/a' },
      { label: '배전반', path: '/product/b' },
      { label: '전력품질개선', path: '/product/b' }
    ]
  },
  { label: '공지사항', path: '/notice' },
  { label: '인재채용', path: '/recruit' },
  {
    label: '번역',
    path: null,
    submenu: [
      { label: 'ENG', language: 'en' },
      { label: '日本語', language: 'zh' },
      { label: '中國語', language: 'ja' }
    ]
  },
  {
    label: '브로셔 다운로드',
    path: null
  }
]

export const MAIN_BANNER_CONTENT = [
  {
    image: main_01_01,
    alt: '배너1',
    title: 'title1',
    subTitle: 'subTitle1'
  },
  {
    image: main_01_02,
    alt: '배너2',
    title: 'title2',
    subTitle: 'subTitle2'
  },
  {
    image: main_01_03,
    alt: '배너3',
    title: 'title3',
    subTitle: 'subTitle3'
  }
]

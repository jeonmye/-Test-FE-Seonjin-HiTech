import '@/styles/globals.css'
import PageTitle from '@/components/PageTitle'
import noticeTitleImg from '../../../public/images/notice/notice_01.jpg'

export default function NoticeLayout({ children }) {
  return <DefaultLayout>{children}</DefaultLayout>
}

const DefaultLayout = ({ children }) => (
  <div className="w-full">
    <PageTitle
      title="공지사항"
      textSizeClassName={'text-head2XL-bold'}
      bg={noticeTitleImg}
    />
    {children}
  </div>
)

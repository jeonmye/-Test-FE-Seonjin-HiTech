import '@/styles/globals.css'
import PageTitle from '@/components/PageTitle'
import recruitTitleImg from '../../../public/images/recruit/com_2.png'

export default function RecruitLayout({ children }) {
  return <DefaultLayout>{children}</DefaultLayout>
}

const DefaultLayout = ({ children }) => (
  <div className="w-full">
    {' '}
    <PageTitle
      title="인재채용"
      textSizeClassName="text-head2XL-bold"
      bg={recruitTitleImg}
    />
    {children}
  </div>
)

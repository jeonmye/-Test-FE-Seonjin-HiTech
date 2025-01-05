import '@/styles/globals.css'
import PageTitle from '@/components/PageTitle'
import resistorTitleImg from '../../../public/images/product/저항기/resistor_02.jpg'

export default function ProductLayout({ children }) {
  return <DefaultLayout>{children}</DefaultLayout>
}

const DefaultLayout = ({ children }) => (
  <div className="w-full">
    <PageTitle
      title="저항기"
      textSizeClassName="text-head2XL-bold"
      bg={resistorTitleImg}
    />
    {children}
  </div>
)

'use client'

import '@/styles/globals.css'
import SubNav from '@/components/SubNav'
import mockData from '../../../../public/data/productDetailData'
import { usePathname } from 'next/navigation'

export default function ProductDetailLayout({ children }) {
  return <DefaultLayout>{children}</DefaultLayout>
}

const DefaultLayout = ({ children }) => {
  const navList = mockData[0].resistorList
  const pathname = usePathname()
  return (
    <div className="w-full">
      <SubNav
        navList={navList}
        pathname={pathname}
      />

      {children}
    </div>
  )
}

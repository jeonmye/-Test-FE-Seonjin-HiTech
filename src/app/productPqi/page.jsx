'use client'
import PageTitle from '@/components/PageTitle'
import { PORODUCT_SUB_NAV_LIST } from '@/constants'
import { usePathname } from 'next/navigation'
import SubNav from '@/components/SubNav'

import qpiTitleImg from '../../../public/images/product/전력품질개선/pqi_01.jpg'

export default function Product() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col">
      <PageTitle
        title="전력품질개선"
        textSizeClassName={'text-head2XL-bold'}
        bg={qpiTitleImg}
      />
      <SubNav
        navList={PORODUCT_SUB_NAV_LIST}
        pathname={pathname}
      />
    </div>
  )
}

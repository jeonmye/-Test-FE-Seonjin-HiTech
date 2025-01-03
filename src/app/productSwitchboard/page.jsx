'use client'
import PageTitle from '@/components/PageTitle'
import switcboardhTitleImg from '../../../public/images/product/배전반/switchboard_01.png'
import { PORODUCT_SUB_NAV_LIST } from '@/constants'
import { usePathname } from 'next/navigation'
import SubNav from '@/components/SubNav'

export default function Product() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title="배전반"
        textSizeClassName={'text-head2XL-bold'}
        bg={switcboardhTitleImg}
      />
      <SubNav
        navList={PORODUCT_SUB_NAV_LIST}
        pathname={pathname}
      />
    </div>
  )
}

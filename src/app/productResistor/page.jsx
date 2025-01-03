'use client'

import PageTitle from '@/components/PageTitle'
import { PORODUCT_SUB_NAV_LIST } from '@/constants'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import SubNav from '@/components/SubNav'
import resistorTitleImg from '../../../public/images/product/저항기/resistor_02.jpg'
import mockData from '../../../public/data/productListData(저항기)'

export default function ProductResistor() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col">
      <div>
        <PageTitle
          title="저항기"
          textSizeClassName="text-head2XL-bold"
          bg={resistorTitleImg}
        />
        <SubNav
          navList={PORODUCT_SUB_NAV_LIST}
          pathname={pathname}
        />
      </div>
      <div className="mx-auto mt-32 grid w-full max-w-[1280px] grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
        {mockData.map(data => (
          <Card
            key={data.id}
            item={data}
          />
        ))}
      </div>
    </div>
  )
}

const Card = ({ item }) => {
  return (
    <div className="group flex flex-col overflow-hidden bg-white">
      <div className="relative w-full overflow-hidden pb-[100%]">
        <Image
          src={item.thumbnail}
          alt={item.title}
          className="absolute left-0 top-0 h-full w-full object-contain"
          layout="fill"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
          {item.title}
        </h3>
      </div>
    </div>
  )
}

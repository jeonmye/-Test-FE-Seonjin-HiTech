'use client'

import { PORODUCT_SUB_NAV_LIST } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import SubNav from '@/components/SubNav'
import useZoomInEffect from '@/hooks/useZoomInEffect'

import mockData from '../../../public/data/productListData(저항기)'

export default function ProductResistor() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="flex flex-col">
      <div>
        <SubNav
          navList={PORODUCT_SUB_NAV_LIST}
          pathname={pathname}
        />
      </div>
      <div className="mx-auto mt-32 grid w-full max-w-[1280px] grid-cols-1 gap-20 px-20 md:grid-cols-2 lg:grid-cols-3">
        {mockData.map(data => (
          <Card
            key={data.id}
            onClick={() => router.push(`/${data.id}`)}
            item={data}
            pathname={pathname}
          />
        ))}
      </div>
    </div>
  )
}

const Card = ({ item, pathname }) => {
  const zoomInIcon = useZoomInEffect(1.5, 0, 1, 'hover')
  return (
    <Link href={`${pathname}/${item.id}`}>
      <div
        {...zoomInIcon}
        className="group flex cursor-pointer flex-col overflow-hidden bg-white">
        <div className="relative w-full overflow-hidden pb-[100%]">
          <Image
            src={item.thumbnail}
            alt={item.title}
            className="absolute left-0 top-0 h-full w-full object-contain"
            layout="fill"
          />
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-title-extra-bold text-gray500 group-hover:text-sky-500">
            {item.title}
          </h3>
        </div>
      </div>
    </Link>
  )
}

'use client'

import React from 'react'
import useScrollNavigation from '@/hooks/useScrollNavigation'
import Link from 'next/link'
import { AiOutlineGlobal } from 'react-icons/ai'

const NavItem = ({ item, navRef }) => {
  const { handleScrollNavigation } = useScrollNavigation()

  if (item.submenu && item.label !== '번역') {
    return (
      <div className="group relative">
        <Link href={item.path || '#'}>{item.label}</Link>
        <div className="absolute left-0 top-full hidden w-40 bg-white shadow-md group-hover:block">
          {item.submenu.map(submenuItem => (
            <div
              key={submenuItem.label}
              onClick={() =>
                handleScrollNavigation(
                  submenuItem.path,
                  submenuItem.scrollId,
                  navRef
                )
              }
              className="block cursor-pointer px-4 py-2 font-normal text-gray600 hover:bg-gray-200">
              {submenuItem.label}
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (item.label === '브로셔 다운로드') {
    return (
      <a
        href="http://seonjinhitech.co.kr/wp-content/themes/master/pdf/SEONJIN%20Hi-Tech%20Brochure_KR.pdf"
        download>
        {item.label}
      </a>
    )
  }

  if (item.label === '번역') {
    return (
      <div className="group relative">
        <div className="flex cursor-pointer items-center">
          <AiOutlineGlobal
            size="20"
            className="text-gray400"
          />
        </div>
        <div className="absolute left-0 top-full hidden w-40 bg-white shadow-md group-hover:block">
          {item.submenu.map(submenuItem => (
            <div
              key={submenuItem.label}
              onClick={() =>
                alert(`번역을 ${submenuItem.language}로 실행합니다.`)
              }
              className="block cursor-pointer px-4 py-2 font-normal text-gray-600 hover:bg-gray-200">
              {submenuItem.label}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <span
      onClick={() => handleScrollNavigation(item.path, null, navRef)}
      className="cursor-pointer">
      {item.label}
    </span>
  )
}

export default NavItem

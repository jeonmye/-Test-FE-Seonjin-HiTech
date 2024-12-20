'use client'

import React, { useRef } from 'react'
import { NAV_LIST } from '@/constants'
import Logo from '@/components/Logo/Logo'
import NavItem from './NavItem'
import useViewport from '@/hooks/useViewport'

const Nav = () => {
  const navRef = useRef(null)
  const { isMobile } = useViewport()

  return (
    <div
      ref={navRef}
      className="h-15 sticky left-0 top-0 z-50 w-full bg-white px-5 py-3">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between">
        <Logo
          size="l"
          link
        />

        {/* 기본 Nav: 768px 이상에서만 표시 */}

        <nav className="hidden items-center gap-10 font-semibold text-gray600 sm:flex">
          {NAV_LIST.map(item => (
            <NavItem
              key={item.label}
              item={item}
              navRef={navRef}
            />
          ))}
        </nav>

        {/* 모바일 Nav: 768px 이하에서 표시 */}
        <button className="flex flex-col gap-1 sm:hidden">
          <span className="h-1 w-6 bg-gray-600"></span>
          <span className="h-1 w-6 bg-gray-600"></span>
          <span className="h-1 w-6 bg-gray-600"></span>
        </button>
      </div>
    </div>
  )
}

export default Nav

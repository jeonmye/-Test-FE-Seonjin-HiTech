'use client'

import React, { useRef } from 'react'
import { NAV_LIST } from '@/constants'
import Logo from '@/components/Logo/Logo'
import NavItem from './NavItem'

const Nav = () => {
  const navRef = useRef(null)

  return (
    <div
      ref={navRef}
      className="h-15 sticky left-0 top-0 z-50 flex w-full items-center justify-between bg-white px-5 py-3">
      <Logo
        size="m"
        link
      />
      <nav className="flex items-center gap-10">
        {NAV_LIST.map(item => (
          <NavItem
            key={item.label}
            item={item}
            navRef={navRef}
          />
        ))}
      </nav>
    </div>
  )
}

export default Nav

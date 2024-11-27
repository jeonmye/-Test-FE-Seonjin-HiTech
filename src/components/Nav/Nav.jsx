import React from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo/Logo'
import { NAV_LIST } from '@/constants'

const Nav = () => {
  return (
    <div className="h-15 fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white px-5 py-3">
      <Logo
        size={'m'}
        link={true}
      />
      <nav className="flex gap-10">
        {NAV_LIST.map(items => (
          <Link
            key={items.label}
            href={`${items.path}`}
            className="">
            {items.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Nav

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/images/logo.png'

const Nav = () => {
  return (
    <>
      <Image
        src={logo}
        alt="로고"
        width={500}
        height={500}></Image>
      <div className="flex gap-5">
        {NAV_LIST.map(items => (
          <Link
            key={items.label}
            href={`${items.path}`}
            className="">
            {items.label}
          </Link>
        ))}
      </div>
    </>
  )
}

export default Nav

const NAV_LIST = [
  { label: '회사소개', path: '/about' },
  { label: '제품', path: '/product' },
  { label: '공지사항', path: '/notice' },
  { label: '인재채용', path: '/recuit' }
]

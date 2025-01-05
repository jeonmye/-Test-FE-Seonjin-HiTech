'use client'

import React, { useRef, useState, useEffect } from 'react'
import { NAV_LIST } from '@/constants'
import Logo from '@/components/Logo/Logo'
import useScrollNavigation from '@/hooks/useScrollNavigation'
import { AiOutlineGlobal, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef(null)
  const pathname = usePathname() // 현재 경로 가져오기
  const { handleScrollNavigation } = useScrollNavigation()

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)
  const router = useRouter()
  // 경로 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    closeMobileMenu()
  }, [pathname]) // 경로 변경 시 실행

  return (
    <div className="h-15 sticky left-0 top-0 z-50 w-full bg-white px-5 py-3 shadow">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between">
        <Logo
          size="l"
          link
        />

        {/* Desktop Nav */}
        <nav className="hidden cursor-pointer items-center gap-10 font-semibold text-gray600 md:flex">
          {NAV_LIST.map(item => (
            <DesktopNavItem
              key={item.label}
              item={item}
              navRef={navRef}
              handleScrollNavigation={handleScrollNavigation}
            />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu">
          {isMobileMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0'
        }`}>
        <div className="relative flex h-full flex-col p-8">
          <button
            onClick={closeMobileMenu}
            className="absolute right-6 top-6 text-white"
            aria-label="Close navigation menu">
            <AiOutlineClose size={24} />
          </button>
          <div className="mt-12 flex flex-col items-center gap-6">
            {NAV_LIST.map(item => (
              <MobileNavItem
                key={item.label}
                item={item}
                closeMobileMenu={closeMobileMenu}
                handleScrollNavigation={handleScrollNavigation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
const DesktopNavItem = ({ item, navRef, handleScrollNavigation }) => {
  const pathname = usePathname()
  const isActive = pathname === item.path

  if (item.submenu && item.label !== '번역') {
    return (
      <div className="group relative">
        <div
          onClick={() => handleScrollNavigation(item.path, null, navRef)}
          className={isActive ? 'text-sky-500' : ''}>
          {item.label}
        </div>
        <div className="absolute left-0 top-full hidden w-40 bg-white shadow-md group-hover:block">
          {item.submenu.map(submenuItem => (
            <span
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
            </span>
          ))}
        </div>
      </div>
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
              className="block cursor-pointer px-4 py-2 font-normal text-gray600 hover:bg-gray-200">
              {submenuItem.label}
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <Link
      href={item.path || '#'}
      className={isActive ? 'text-sky-500' : ''}>
      {item.label}
    </Link>
  )
}

const MobileNavItem = ({ item, closeMobileMenu, handleScrollNavigation }) => {
  const pathname = usePathname()
  const isActive = pathname === item.path

  if (item.label === '번역') {
    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-2">
          {item.submenu.map(submenuItem => (
            <div
              key={submenuItem.label}
              onClick={() => {
                alert(`번역을 ${submenuItem.language}로 실행합니다.`)
                closeMobileMenu()
              }}
              className="cursor-pointer text-white hover:text-sky-500">
              {submenuItem.label}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <span
      onClick={() => {
        closeMobileMenu()
        handleScrollNavigation(item.path, item.scrollId, null)
      }}
      className={`text-white hover:text-sky-500 ${isActive ? 'font-bold' : ''}`}>
      {item.label}
    </span>
  )
}

export default Nav

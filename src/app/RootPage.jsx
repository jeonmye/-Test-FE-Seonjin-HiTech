'use client'

import React, { useEffect } from 'react'
import Nav from '../components/Nav/Nav'
import AdminNav from '../components/AdminNav/AdminNav'
import Footer from '@/components/Footer/Footer'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function RootPage({ children }) {
  const pathname = usePathname()
  const _isSignedIn = localStorage.getItem('token')
  const router = useRouter()

  const isAdminPage =
    pathname.startsWith('/admin') && !pathname.startsWith('/admin//sign-in')

  useEffect(() => {
    if (isAdminPage && !_isSignedIn) {
      router.push('/admin/sign-in')
    }

    // pathname을 listening 해서 sign-in 여부를 확인함
    // TODO 추후 next/navigation의 기능을 활용하여 route 전에 처리할 수 있는지 확인해보면 좋을 듯
  }, [isAdminPage, _isSignedIn, pathname])

  return isAdminPage ? (
    <div className="overflow-x-clip">
      <div className="flex h-screen flex-row">
        <AdminNav />
        <div className="flex min-h-screen flex-grow flex-col pt-10">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div className="overflow-x-clip">
      <Nav />
      <div className="flex min-h-screen flex-grow flex-col">{children}</div>
      <Footer />
    </div>
  )
}

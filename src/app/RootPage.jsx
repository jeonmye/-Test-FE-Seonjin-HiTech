import React, { useEffect } from 'react'
import Nav from '../components/Nav/Nav'
import AdminNav from '../components/AdminNav/AdminNav'
import Footer from '@/components/Footer/Footer'
import { usePathname } from 'next/navigation'
import { useRecoilValue } from 'recoil'
import { isSignedIn } from '@/state/globalState'
import { useRouter } from 'next/navigation'

export default function RootPage({ children }) {
  const pathname = usePathname()
  const _isSignedIn = useRecoilValue(isSignedIn)
  const router = useRouter()

  const isAdminPage =
    pathname.startsWith('/admin') && !pathname.startsWith('/admin//sign-in')

  useEffect(() => {
    if (isAdminPage && !_isSignedIn) {
      router.push('/admin/sign-in')
    }
  }, [isAdminPage, _isSignedIn])

  return isAdminPage ? (
    <div className="overflow-x-clip">
      <div className="flex h-screen flex-row">
        <AdminNav />
        <div className="flex min-h-screen flex-grow flex-col">{children}</div>
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

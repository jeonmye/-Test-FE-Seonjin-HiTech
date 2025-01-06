'use client'

import '../styles/globals.css'
import Providers from '@/components/Provider'
import { RecoilRoot } from 'recoil'
import RootPage from './RootPage'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-full">
        <RecoilRoot>
          <Providers>
            <RootPage>{children}</RootPage>
          </Providers>
        </RecoilRoot>
      </body>
    </html>
  )
}

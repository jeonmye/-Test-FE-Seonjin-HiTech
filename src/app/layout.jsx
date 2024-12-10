import '../styles/globals.css'
import Nav from '../components/Nav/Nav'
import Providers from '@/components/Provider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-full">
        <div className="overflow-x-clip">
          <Providers>
            <Nav />
            <div className="flex min-h-screen flex-grow flex-col">
              {children}
            </div>
            <footer className="flex h-16 bg-gray300">Footer</footer>
          </Providers>
        </div>
      </body>
    </html>
  )
}

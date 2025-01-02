import '../styles/globals.css'
import Nav from '../components/Nav/Nav'
import Providers from '@/components/Provider'
import Footer from '@/components/Footer/Footer'

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
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  )
}

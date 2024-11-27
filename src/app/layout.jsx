import '../styles/globals.css'
import Nav from '../components/Nav/Nav'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-full">
        <div className="overflow-x-clip">
          <Nav />
          <div className="flex flex-grow flex-col">{children}</div>
          <footer className="flex h-16 bg-gray300">Footer</footer>
        </div>
      </body>
    </html>
  )
}

import '../styles/globals.css'
import Nav from '../components/Nav/Nav'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className="flex min-h-screen flex-col">{children}</div>
        <footer className="flex h-16 bg-gray300">Footer</footer>
      </body>
    </html>
  )
}

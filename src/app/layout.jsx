export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <nav className="flex flex-col items-center row-start-2 gap-8 sm:items-start">
          네브바
        </nav>
        <main>{children}</main>
        <footer className="flex flex-wrap items-center justify-center row-start-3 gap-6">
          푸터
        </footer>

      </body>
    </html>
  )
}

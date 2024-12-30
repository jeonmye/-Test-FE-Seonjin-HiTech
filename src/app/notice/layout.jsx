import '@/styles/globals.css'

export default function NoticeLayout({ children }) {
  return <DefaultLayout>{children}</DefaultLayout>
}

const DefaultLayout = ({ children }) => (
  <div className="w-full">
    {' '}
    <div
      id="vision"
      className="bg-about01 relative flex h-80 w-screen items-center justify-center bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
      <span className="text-headXL absolute font-bold text-white">Notice</span>
    </div>
    {children}
  </div>
)

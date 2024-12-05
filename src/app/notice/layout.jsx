import '@/styles/globals.css'

export default function NoticeLayout({ children }) {
  return <DefaultLayout>{children}</DefaultLayout>
}

const DefaultLayout = ({ children }) => <div className="w-full">{children}</div>

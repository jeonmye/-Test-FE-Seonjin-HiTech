import '@/styles/globals.css'

export default function ProductLayout({ children }) {
  return <DefaultLayout>{children}</DefaultLayout>
}

const DefaultLayout = ({ children }) => <div className="w-full">{children}</div>

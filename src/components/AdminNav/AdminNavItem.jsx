import { usePathname, useRouter } from 'next/navigation'

const AdminNavItem = ({ title, path }) => {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <div
      className={`cursor-pointer px-4 py-3 text-center ${
        pathname == path ? 'bg-sky-950 text-white' : 'bg-transparent text-white'
      }`}
      onClick={() => {
        router.push(path)
      }}>
      {title}
    </div>
  )
}

export default AdminNavItem

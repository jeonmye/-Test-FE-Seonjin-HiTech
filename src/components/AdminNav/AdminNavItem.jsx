import { useRouter } from 'next/navigation'

const AdminNavItem = ({ title, path }) => {
  const router = useRouter()
  return (
    <div
      className="flex cursor-pointer flex-col items-center justify-center py-4 text-white"
      onClick={() => {
        router.push(path)
      }}>
      {title}
    </div>
  )
}

export default AdminNavItem

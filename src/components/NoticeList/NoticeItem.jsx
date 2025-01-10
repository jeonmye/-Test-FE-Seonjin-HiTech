import Link from 'next/link'

const BoardItem = ({ post, index }) => {
  return (
    <Link
      href={`/notice/${post.id}`}
      key={post.id}>
      <div className="grid cursor-pointer grid-cols-12 border-b border-gray-300 text-center hover:bg-gray-100">
        <div className="col-span-1 py-2">{index + 1}</div>
        <div className="col-span-6 py-2">{post.title}</div>
        <div className="col-span-2 py-2">{post.author}</div>
        <div className="col-span-2 py-2">{post.date}</div>
        <div className="col-span-1 py-2">{post.view}</div>
      </div>
    </Link>
  )
}

export default BoardItem

import NoticeItem from './NoticeItem'

const NoticeList = ({ posts }) => {
  return (
    <div>
      <div className="grid grid-cols-12 border-b border-t border-gray-300 text-center font-bold">
        <div className="col-span-1 py-2">번호</div>
        <div className="col-span-6 py-2">제목</div>
        <div className="col-span-2 py-2">글쓴이</div>
        <div className="col-span-2 py-2">날짜</div>
        <div className="col-span-1 py-2">조회 수</div>
      </div>
      {posts.map((post, index) => (
        <NoticeItem
          post={post}
          index={index}
        />
      ))}
    </div>
  )
}

export default NoticeList

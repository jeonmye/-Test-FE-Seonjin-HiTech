'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function NoticeDetail() {
  const { id } = useParams() // 동적 경로에서 id 가져오기
  const [post, setPost] = useState(null)

  useEffect(() => {
    // 로컬스토리지에서 게시글 데이터 가져오기
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || []
    const foundPost = storedPosts.find(post => post.id === parseInt(id))
    setPost(foundPost)
  }, [id])

  if (!post) {
    return <div className="p-4 text-center">게시글을 찾을 수 없습니다.</div>
  }

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
      <div className="mb-4 text-gray-600">
        <span>글쓴이: {post.author}</span> | <span>날짜: {post.date}</span> |{' '}
        <span>조회 수: {post.view}</span>
      </div>
      <div
        className="mb-6"
        dangerouslySetInnerHTML={{ __html: post.content }}></div>

      {/* 첨부파일 다운로드 */}
      {post.fileName && (
        <div className="mb-6">
          <h3 className="mb-2 text-xl font-bold">첨부파일</h3>
          <a
            href={`/uploads/${post.fileName}`} // 업로드된 파일의 경로
            download={post.fileName} // 다운로드 속성 추가
            className="text-blue-500 hover:underline">
            {post.fileName}
          </a>
        </div>
      )}

      <button
        onClick={() => history.back()}
        className="rounded bg-gray-500 px-4 py-2 text-white">
        목록으로
      </button>
    </div>
  )
}

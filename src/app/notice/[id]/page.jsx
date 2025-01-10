'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import boardDetailData from '../../../../public/data/boardDetailData'

export default function NoticeDetail() {
  const { id } = useParams() // 동적 경로에서 id 가져오기
  const [post] = useState(boardDetailData[0])

  if (!post) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          게시글을 찾을 수 없습니다.
        </h2>
        <p className="mt-2 text-gray-600">
          해당 게시물이 삭제되었거나 존재하지 않습니다.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-title-bold font-bold text-gray-800">
          {post.title}
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-gray-600">
          <span>
            <strong>글쓴이:</strong> 관리자
          </span>
          <span>
            <strong>날짜:</strong> {post.date}
          </span>
          <span>
            <strong>조회 수:</strong> {post.view}
          </span>
        </div>
      </div>

      <div
        className="prose prose-lg mb-8 max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: post.content }}></div>

      {post.file && (
        <div className="mb-8 rounded bg-gray-100 px-4 py-3 shadow">
          <div className="mb-2 text-bodyM font-bold text-gray-700">
            첨부파일
          </div>
          <a
            href={`/uploads/${post.file}`}
            download={post.file}
            className="text-blue-600 hover:underline">
            {post.file}
          </a>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={() => history.back()}
          className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
          목록으로
        </button>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css'

export default function WriteNotice() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()

    // 기존 데이터 가져오기
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || []
    const newPost = {
      id: storedPosts.length + 1,
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      author: '관리자',
      view: 0
    }

    // 데이터 추가 및 저장
    const updatedPosts = [...storedPosts, newPost]
    localStorage.setItem('posts', JSON.stringify(updatedPosts))

    // 목록 페이지로 이동
    router.push('/notice')
  }

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-6 text-3xl font-bold">글쓰기</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">제목</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
            required
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">내용</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            className="mb-4 h-48"
            theme="snow"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white">
          저장
        </button>
      </form>
    </div>
  )
}

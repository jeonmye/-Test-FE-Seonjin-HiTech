'use client'

import { useState, useRef, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { imageHandler } from '../../utils/ReactQuillImageHandler'

// React Quill New 동적 로드
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css'

// 커스텀 툴바
const CustomToolbar = () => (
  <div
    id="custom-toolbar"
    className="flex justify-between">
    <div>
      <select
        className="ql-font"
        defaultValue="">
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
        <option
          value=""
          defaultValue="">
          Sans-Serif
        </option>
      </select>
      <select
        className="ql-size"
        defaultValue="">
        <option value="small">Small</option>
        <option
          value=""
          defaultValue="">
          Normal
        </option>
        <option value="large">Large</option>
        <option value="huge">Huge</option>
      </select>
    </div>
    <div>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline"></button>
      <button className="ql-strike"></button>
      <select className="ql-color"></select>
      <select className="ql-background"></select>
      <button className="ql-image"></button>
    </div>
  </div>
)

export default function WriteNotice() {
  const quillRef = useRef(null)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState(null) // 첨부파일 상태
  const router = useRouter()

  // 파일 선택 처리
  const handleFileChange = e => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
  }

  // 글 저장 처리
  const handleSubmit = e => {
    e.preventDefault()

    // 기존 데이터 가져오기
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || []
    const newPost = {
      id: storedPosts.length + 1,
      title,
      content,
      fileName: file ? file.name : null, // 파일 이름 저장
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

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: '#custom-toolbar', // 커스텀 툴바 ID 연결
        handlers: {
          image: imageHandler(quillRef)
        }
      }
    }
  }, [quillRef])

  const formats = [
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'link',
    'image'
  ]

  return (
    <div className="mx-auto mt-20 max-w-4xl px-3">
      <h1 className="mb-6 text-3xl font-bold">공지사항 작성</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 md:w-[752px]">
        {/* 제목 입력 */}
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
        {/* 내용 입력 */}
        <div>
          <label className="mb-2 block text-sm font-medium">내용</label>
          {/* 커스텀 툴바 */}
          <CustomToolbar />
          <ReactQuill
            ref={quillRef}
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            theme="snow"
            className="mb-4 h-48"
          />
        </div>
        {/* 파일 첨부 */}
        <div>
          <label className="mb-2 block text-sm font-medium">첨부파일</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full rounded border border-gray-300 p-2"
          />
          {file && (
            <div className="mt-2 text-sm text-gray-600">
              선택된 파일: {file.name}
            </div>
          )}
        </div>
        {/* 저장 버튼 */}
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white">
          저장
        </button>
      </form>
    </div>
  )
}

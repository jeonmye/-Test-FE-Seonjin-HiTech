'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function BoardList() {
  const [posts, setPosts] = useState([])

  // 로컬스토리지 초기화
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || []
    if (storedPosts.length === 0) {
      const initialPosts = [
        {
          id: 1,
          title: '선진하이텍 공지사항',
          content: '내용입니다',
          date: '2024-11-26',
          author: '관리자',
          view: 74
        },
        {
          id: 2,
          title: '선진하이텍 공지사항2',
          content: '내용입니다',
          date: '2024-11-26',
          author: '관리자',
          view: 74
        }
      ]
      localStorage.setItem('posts', JSON.stringify(initialPosts))
      setPosts(initialPosts)
    } else {
      setPosts(storedPosts)
    }
  }, [])

  return (
    <div className="mx-auto mt-10 flex max-w-4xl flex-col justify-center p-4">
      {/* 상단 헤더 */}
      <div className="mb-4 flex items-center justify-between">
        <span>총 {posts.length}건</span>
        <Link
          href="/write"
          className="rounded bg-blue-500 px-4 py-2 text-white">
          글쓰기
        </Link>
      </div>
      {/* 게시판 헤더 */}
      <div className="grid grid-cols-12 border-b border-t border-gray-300 text-center font-bold">
        <div className="col-span-1 py-2">번호</div>
        <div className="col-span-6 py-2">제목</div>
        <div className="col-span-2 py-2">글쓴이</div>
        <div className="col-span-2 py-2">날짜</div>
        <div className="col-span-1 py-2">조회 수</div>
      </div>
      {/* 게시판 목록 */}
      {posts.map((post, index) => (
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
      ))}
    </div>
  )
}

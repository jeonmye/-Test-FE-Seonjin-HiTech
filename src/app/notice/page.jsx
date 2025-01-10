'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import NoticeList from '@/components/NoticeList/NoticeList'
import initialPosts from '../../../public/data/boardListData'

export default function Notice() {
  const [posts, setPosts] = useState(initialPosts)

  // 로컬스토리지 초기화
  // useEffect(() => {
  //   const storedPosts = JSON.parse(localStorage.getItem('posts')) || []
  //   if (storedPosts.length === 0) {
  //     localStorage.setItem('posts', JSON.stringify(initialPosts))
  //     setPosts(initialPosts)
  //   } else {
  //     setPosts(storedPosts)
  //   }
  // }, [])

  return (
    <div className="mx-auto mt-10 flex max-w-4xl flex-col justify-center p-4">
      <div className="mb-4 flex items-center justify-between">
        <span>총 {posts.length}건</span>
      </div>
      <NoticeList posts={posts} />
    </div>
  )
}

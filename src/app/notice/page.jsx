'use client'

import { useGetNoticeDetailService } from '@/hooks/queries/noticeService'

export default function Notice() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex h-48 items-center justify-center bg-yellow-500 text-[60px]">
        공지사항
      </div>
    </div>
  )
}

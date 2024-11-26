import { QueryClient, useMutation } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import {
  postNoticeWriteApi,
  updateNoticeApi,
  deleteNoticeApi
} from '@/api/notice'

export const usePostNoticeWriteService = () => {
  const router = useRouter()

  return useMutation({
    nutationFn: ({ title, file, content }) =>
      postNoticeWriteApi({ title, file, content }),
    onSucess: data => {
      QueryClient.invalidateQueries({ queryKey: ['notice'] })
      const { noticeId } = data
      router.push(`/notice/${noticeId}`)
      alert('글이 작성되었습니다')
    }
  })
}

export const useUpdateNoticeService = ({ noticeId }) => {
  const router = useRouter()
  return useMutation({
    mutationFn: ({ noticeId, title, content, file }) =>
      updateNoticeApi({ noticeId, title, content, file }),
    onSucess: data => {
      QueryClient.invalidateQueries({ queryKey: ['notice'] })
      const { noticeId } = data
      router.push(`/notice/${noticeId}`)
      alert('글이 수정되었습니다')
    }
  })
}

export const useDeleteNoticeService = ({ noticeId }) => {
  return useMutation({
    nutationFn: ({ noticeId }) => {
      deleteNoticeApi({ noticeId })
    },
    onSucess: () => {
      QueryClient.invalidateQueries({ queryKey: ['notice'] })
      alert('글이 삭제되었습니다')
    }
  })
}

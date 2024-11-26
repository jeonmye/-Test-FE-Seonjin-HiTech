import { useQuery } from '@tanstack/react-query'
import { getNoticeListApi, getNoticeDetailApi } from '@/api/notice'

//공지사항 전체 조회
export const useGetNoticeListService = () => {
  return useQuery({
    queryKey: ['notice'],
    queryFn: () => getNoticeListApi()
  })
}

//공지사항 글 상세조회
export const useGetNoticeDetailService = ({ noticeId }) => {
  return useQuery({
    queryKey: ['notice'],
    queryFn: () => getNoticeDetailApi({ noticeId })
  })
}

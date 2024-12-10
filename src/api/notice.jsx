import apiInstance from '@/api/api'

//공지사항 전체 조회
export const getNoticeListApi = async () => {
  await apiInstance.get('/board').then(res => res.data)
}

//공지사항 글 상세조회
export const getNoticeDetailApi = async () =>
  await apiInstance.get(`/board/${12}`).then(res => res.data)

//공지사항 글 작성
export const postNoticeWriteApi = async ({ title, file, content }) =>
  await apiInstance.push('/notice', { title, file, content })

//공지사항 글 수정
export const updateNoticeApi = async ({ noticeId, title, content, file }) =>
  await apiInstance.push(`/notice/${noticeId}`, {
    noticeId,
    title,
    content,
    file
  })

//공지사항 글 삭제
export const deleteNoticeApi = async ({ noticeId }) =>
  await apiInstance.delete(`/notice/${noticeId}`)

import { QueryClient, useMutation } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import {
  postProductWriteApi,
  updateProductApi,
  deleteProductApi
} from '@/api/product'

//상품 글 작성
export const usePostProductWriteApi = () => {
  const router = useRouter()

  return useMutation({
    nutationFn: ({ title, content }) => postProductWriteApi({ title, content }),
    onSucess: data => {
      QueryClient.invalidateQueries({ queryKey: ['product'] })
      const { productId } = data
      router.push(`/product/${productId}`)
      alert('글이 작성되었습니다')
    }
  })
}

//상품 글 수정
export const useUpdateProductApi = ({ productId }) => {
  const router = useRouter()

  return useMutation({
    mutationFn: ({ productId, title, content }) =>
      updateProductApi({ productId, title, content }),
    onSucess: data => {
      QueryClient.invalidateQueries({ queryKey: ['product'] })
      const { productId } = data
      router.push(`/product/${productId}`)
      alert('글이 수정되었습니다')
    }
  })
}

//상품 글 삭제
export const useDeleteNoticeService = ({ productId }) => {
  return useMutation({
    nutationFn: ({ productId }) => {
      deleteProductApi({ productId })
    },
    onSucess: () => {
      QueryClient.invalidateQueries({ queryKey: ['product'] })
      alert('글이 삭제되었습니다')
    }
  })
}

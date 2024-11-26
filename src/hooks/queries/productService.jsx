import { useQuery } from '@tanstack/react-query'
import { getProductListApi, getProductDetailApi } from '@/api/product'

//카테고리 별 상품 전체 조회
export const useGetProductListService = () => {
  return useQuery({
    queryKey: ['product'],
    queryFn: () => getProductListApi()
  })
}

//상품 글 상세조회
export const useGetProductDetailService = ({ productId }) => {
  return useQuery({
    queryKey: ['product'],
    queryFn: () => getProductDetailApi({ productId })
  })
}

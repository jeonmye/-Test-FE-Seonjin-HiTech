import apiInstance from '@/api/api'

//카테고리별 상품 전체 조회
export const getCategoryProductListApi = async () =>
  await apiInstance.get('/product').then(res => res.data)

//상품 글 상세조회
export const getProductDetailApi = async ({ productId }) =>
  await apiInstance.get(`/product/${productId}`).then(res => res.data)

//상품 글 작성
export const postProductWriteApi = async ({ title, content }) =>
  await apiInstance.push('/product', { title, content })

//상품 글 수정
export const updateProductApi = async ({ productId, title, content }) =>
  await apiInstance.put(`/product/${productId}`, {
    productId,
    title,
    content
  })

//상품 글 삭제
export const deleteProductApi = async ({ productId }) =>
  await apiInstance.delete(`/product/${productId}`)

import apiInstance from '@/api/api'

export const postSignInApi = async ({ id, password }) =>
  await apiInstance.post(`/open/sign-in`, { id, password })

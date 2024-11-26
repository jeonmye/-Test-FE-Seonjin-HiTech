import { API_BASE_URL } from '../constants/api'
import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: `${API_BASE_URL}/`,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true // 서버와 클라이언트가 다른 도메인일 경우 필수
})

apiInstance.interceptors.request.use(
  config => {
    //요청을 보내기 전에 수행할 로직
    return config
  },
  error => {
    //요청 에러가 발생했을 때 수행할 로직
    console.error('Request Error:', error)
    return Promise.reject(error)
  }
)

apiInstance.interceptors.response.use(
  response => {
    //응답에 대한 로직
    return response
  },
  async error => {
    //응답 에러가 발생했을 때 수행할 로직
    console.error('Response Error:', error)
    return Promise.reject(error)
  }
)

export default apiInstance

import { QueryClient, useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { postSignInApi } from '@/api/auth'

export const usePostSignInService = () => {
  const queryClient = new QueryClient()
  const router = useRouter()
  const mutation = useMutation({
    mutationKey: ['user'],
    mutationFn: ({ id, password }) => postSignInApi({ id, password }),
    onSuccess: res => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      localStorage.setItem('token', res.data)
      alert('로그인 되었습니다.')
      router.push('/admin')
    },
    onError: error => {
      console.error('로그인 실패:', error)
      alert('로그인에 실패했습니다. 다시 시도해주세요.')
    }
  })
  return mutation
}

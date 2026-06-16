import { useMutation } from '@tanstack/react-query'
import { $mainApi } from '../api/axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

export const useLoginMutation = (onClose) => {
  const navigate = useNavigate()
  const setAuth = useAuth((state) => state.setAuth)

  return useMutation({
    mutationFn: async (payload) => {
      const response = await $mainApi.post('/auth/sign-in', payload)
      return response.data
    },
    onSuccess: (responseData) => {
      setAuth(true)
      onClose?.()
      localStorage.setItem('accessToken', responseData.accessToken)
      navigate('/')
    },
    //доработать onError
  })
}

export const useRegisterMutation = () => {
  const navigate = useNavigate()
  const setAuth = useAuth((state) => state.setAuth)

  return useMutation({
    mutationFn: async (payload) => {
      const response = await $mainApi.post('/auth/sign-up', payload)
      return response.data
    },
    onSuccess: (responseData) => {
      setAuth(true)
      localStorage.setItem('accessToken', responseData.accessToken)
      navigate('/')
    },
    //доработать onError
  })
}

export const useLogoutMutation = () => {
  const clear = useAuth((state) => state.clear)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: async () => {
      await $mainApi.post('/auth/logout')
    },
    onSuccess: () => {
      clear()
      navigate('/')
    },
  })
}

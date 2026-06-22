import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { $authApi } from '../api/axios'
import toast from 'react-hot-toast'

export const useCreateOrderMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (orderData) => {
      const response = await $authApi.post('/orders', orderData)

      await $authApi.delete('/cart')
      return response
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] })
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      queryClient.invalidateQueries({ queryKey: ['products'] })
      toast.success('Order placed successfully')
    },
    onError: (error) => {
      if (error.response?.status === 401) {
        toast('Please sign in or register')
      } else {
        toast.error('Failed to place order')
      }
    },
  })
}

export const useOrdersQuery = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const { data } = await $authApi.get('/orders')
      return data
    },
  })
}

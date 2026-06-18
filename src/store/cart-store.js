import { useMutation, useQueryClient } from '@tanstack/react-query'
import { $authApi } from '../api/axios'

export const useCartButtonMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ productId, isInCart }) => {
      if (isInCart) {
        return await $authApi.delete(`/cart/${productId}`)
      }

      return await $authApi.post('/cart', { productId, quantity: 1 })
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },

    onError: (error) => {
      if (error.response?.status === 401) {
        toast('Please sign in or register')
      }
    },
  })
}

export const useQuantityMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ productId, quantity }) => {
      return await $authApi.patch(`/cart/${productId}`, {
        quantity: Number(quantity),
      })
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })
}

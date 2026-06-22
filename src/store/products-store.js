import { useQuery } from '@tanstack/react-query'
import { $authApi } from '../api/axios'

export const useProductsQuery = (params = {}) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: async () => {
      const { data } = await $authApi.get('/products', { params })
      return data
    },
  })
}

export const useFavoritesQuery = () => {
  return useQuery({
    queryKey: ['favorites'],
    queryFn: async () => {
      const { data } = await $authApi.get('/favorites')
      return data
    },
  })
}

export const useBasketQuery = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const { data } = await $authApi.get('/cart')
      return data
    },
  })
}

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await $authApi.get('/categories')
      return data
    },
  })
}

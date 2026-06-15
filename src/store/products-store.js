import { useQuery } from "@tanstack/react-query"
import { $mainApi, $authApi } from "../api/axios"

export const useProductsQuery = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const { data } = await $authApi.get('/products')
            return data 
        }
    })
}

export const useFavoritesQuery = () => {
    return useQuery({
        queryKey: ["favorites"],
        queryFn: async () => {
            const { data } = await $authApi.get('/favorites')
            return data 
        }
    })
}


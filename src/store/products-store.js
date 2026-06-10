import { useQuery } from "@tanstack/react-query"
import { $mainApi } from "../api/axios"

export const useProductsQuery = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const { data } = await $mainApi.get('/products')
            return data 
        }
    })
}

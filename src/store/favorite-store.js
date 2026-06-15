import { useMutation, useQueryClient } from "@tanstack/react-query"
import { $authApi } from "../api/axios"


export const useFavoriteToggleMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({ productId, isFavorite }) => {
            if (isFavorite) {
                return await $authApi.delete(`/favorites/${productId}`)
            }

            return await $authApi.post('/favorites', {productId})
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] })
            queryClient.invalidateQueries({ queryKey: ["favorites"] })
        },

        onError: (error) => {
            if (error.response?.status === 401) {
                alert("Пожалуйста, войдите в систему или зарегистрируйтесь")
            }
        }
    })
}
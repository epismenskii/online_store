import { useEffect, useState } from 'react'
import { create } from 'zustand'
import { $authApi } from '../api/axios'

export const useAuth = create((set) => {
  return {
    isAuth: false,
    user: null,

    setAuth: (bool) => set({ isAuth: bool }),
    setUser: (user) => set({ user }),
    clear: () => set({ isAuth: false, user: null }),
  }
})

export const useCheckAuth = () => {
  const [loading, setLoading] = useState(false)

  const setAuth = useAuth((state) => state.setAuth)
  const setUser = useAuth((state) => state.setUser)
  const clear = useAuth((state) => state.clear)

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('accessToken')
      if (!token) {
        clear()
        return
      }

      setLoading(true)
      try {
        const response = await $authApi.get('/auth/profile')
        setAuth(true)
        setUser(response.data.data)
      } catch {
        clear()
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])
  return { loading }
}

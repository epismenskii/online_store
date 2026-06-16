import { create } from 'zustand'

export const useAuth = create((set) => {
  return {
    isAuth: false,
    user: null,

    setAuth: (bool) => set({ isAuth: bool }),
    setUser: (user) => set({ user }),
    clear: () => set({ isAuth: false, user: null }),
  }
})

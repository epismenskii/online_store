import { Outlet } from 'react-router-dom'
import Header from '../components/header/header'
import { useEffect } from 'react'
import { $authApi } from '../api/axios'
import { useAuth } from '../hooks/use-auth'

function Layout() {
  const setAuth = useAuth((state) => state.setAuth)
  const setUser = useAuth((state) => state.setUser)
  const clear = useAuth((state) => state.clear)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await $authApi.get('/auth/profile')
        setAuth(true)
        setUser(response.data.data)
      } catch {
        clear
      }
    }

    checkAuth()
  }, [])

  //вынести в отдельный компонент

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout

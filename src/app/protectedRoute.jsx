import { Outlet } from 'react-router-dom'
import { UnauthorizedUser } from '../components/unauthorizedUser/unauthorizedUser'
import { useAuth } from '../hooks/use-auth'

export const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth((state) => state.isAuth)

  if (!isAuth) return <UnauthorizedUser />
  return <Outlet />
}

import { Outlet } from 'react-router-dom'
import Header from '../components/header/header'
import { useCheckAuth } from '../hooks/use-auth'

function Layout() {
  const { loading } = useCheckAuth()

  if (loading) {
    return <div>LOADING...</div>
  }

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout

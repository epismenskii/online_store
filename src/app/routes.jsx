import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/home/home'
import { Basket } from '../pages/basket/basket'
import { Favorites } from '../pages/favorites/favorites'
import { Orders } from '../pages/orders/orders'
import Layout from './Layout'
import Providers from './providers'
import Error404 from '../pages/error404/error404'
import { ProtectedRoute } from './protectedRoute'

const routes = createBrowserRouter([
  {
    element: (
      <Providers>
        <Layout />
      </Providers>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '*', element: <Error404 /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: '/favorites', element: <Favorites /> },
          { path: '/basket', element: <Basket /> },
          { path: '/orders', element: <Orders /> },
        ],
      },
    ],
  },
])

export default routes

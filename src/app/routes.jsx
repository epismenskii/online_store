import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Basket } from "../pages/basket/basket";
import { Favorites } from "../pages/favorites/favorites";
import { Orders } from "../pages/orders/orders";
import { Auth } from "../pages/auth/auth";
import Layout from "./Layout";
import Providers from "./providers";
import Error404 from "../pages/error404/error404";

const routes = createBrowserRouter([
    {
        element: (
            <Providers>
                <Layout />
            </Providers>
        ),
        children: [
            { path: "/", element: <Home />},
            { path: "/basket", element: <Basket />},
            { path: "/favorites", element: <Favorites />},
            { path: "/orders", element: <Orders />},
            { path: "/auth", element: <Auth />},
            { path: "*", element: <Error404 />},
        ]
    }
])

export default routes
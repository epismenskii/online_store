import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Basket } from "../pages/basket/basket";
import { Favorites } from "../pages/favorites/favorites";
import { Orders } from "../pages/orders/orders";
import { Auth } from "../pages/auth/auth";
import Layout from "./Layout";
import Providers from "./providers";

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
            { path: "*", element: <Home />},
        ]
    }
])

export default routes
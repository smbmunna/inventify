import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";

import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import CreateShop from "../Pages/CreateShop/CreateShop";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path: '/registration',
                element: <Registration/>
            }, 
            {
                path: 'createShop',
                element: <CreateShop/>
            }
        ]
    }
]);

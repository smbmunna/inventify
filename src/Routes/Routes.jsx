import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";

import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import CreateShop from "../Pages/CreateShop/CreateShop";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import SalesCollection from "../Pages/Dashboard/SalesCollection/SalesCollection";
import PrivateRoutes from "./PrivateRoutes";
import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts";


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
    },
    {
        path:'/dashboard',
        element: <Dashboard/>,
        children: [
            {
                path:'addproduct',
                element: <PrivateRoutes><AddProduct/></PrivateRoutes>
            },
            {
                path: 'allProducts',
                element: <PrivateRoutes> <AllProducts/></PrivateRoutes>
            },
            {
                path: 'salesCollection',
                element: <SalesCollection/>
            }, 
        ]
    }
]);

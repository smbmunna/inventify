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
import UpdateProduct from "../Pages/Dashboard/UpdateProduct/UpdateProduct";
import Checkout from "../Pages/Dashboard/Checkout/Checkout";
import Subscription from "../Pages/Dashboard/Subscription/Subscription";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Invoice from "../Pages/Dashboard/Payment/Invoice";
import SalesSummary from "../Pages/Dashboard/SalesSummary/SalesSummary";
import ManageShop from "../Pages/Dashboard/ManageShop/ManageShop";
import SalesOverview from "../Pages/Dashboard/SalesOverview/SalesOverview";
import ProductMangement from "../Pages/Dashboard/ProductManagement/ProductMangement";
import AdminRoutes from "./AdminRoutes";
import ShopDetails from "../Pages/Dashboard/ShopDetails/ShopDetails";
import NotAuthorized from "../Pages/NotAuthorized/NotAuthorized";
import Demo from "../Pages/Demo/Demo";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";



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
                path:'/demo',
                element:<Demo/>
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
                path: '/notAuthorized',
                element: <NotAuthorized/>
            }, 
            {
                path: 'createShop',
                element: <PrivateRoutes><CreateShop/></PrivateRoutes>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoutes><Dashboard/></PrivateRoutes>,
        // errorElement: <PrivateRoutes><NotAuthorized/></PrivateRoutes>,
        children: [
            {
                path:'/dashboard',
                element: <DashboardHome/>
            },
            {
                path: 'productManagement',
                element: <PrivateRoutes><ProductMangement/></PrivateRoutes>
            },
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
                element: <PrivateRoutes><SalesCollection/></PrivateRoutes>
            }, 
            {
                path: 'updateProduct/:id',
                element:<PrivateRoutes> <UpdateProduct/></PrivateRoutes>,
                loader: ({params})=>fetch(`https://inventify-server.vercel.app/product/${params.id}`)
            },
            {
                path:'checkout',
                element: <PrivateRoutes><Checkout/></PrivateRoutes>
            },
            {
                path:'subscription',
                element: <PrivateRoutes><Subscription/></PrivateRoutes>
            },
            {
                path:'payment/:amount/:limit',
                element: <PrivateRoutes><Payment/></PrivateRoutes>
            },
            {
                path: 'invoice',
                element: <PrivateRoutes><Invoice/></PrivateRoutes>
            },
            {
                path: 'salesSummary',
                element: <PrivateRoutes><SalesSummary/></PrivateRoutes>
            }, 
            {
                path:'manageShop', 
                element: <AdminRoutes><ManageShop/></AdminRoutes>
            },
            {
                path:'salesOverview', 
                element: <AdminRoutes><SalesOverview/></AdminRoutes>
            },
            {
                path:'products/shop/:shopId',
                element: <AdminRoutes><ShopDetails/></AdminRoutes>
            }
            
        ]
    }
]);

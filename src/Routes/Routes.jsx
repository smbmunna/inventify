import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
]);

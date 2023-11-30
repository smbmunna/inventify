import { Helmet } from "react-helmet-async";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useShopUser from "../../hooks/useShopUser";
import useShop from "../../hooks/useShop";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [usersShop] = useShopUser();
    const [shops]= useShop();
    console.log(isAdmin);
    const links = <>
        <li><NavLink to='/'>Homepage</NavLink></li>
        <div className="divider font-bold">Products</div>
        <li><NavLink to='/dashboard/productManagement'>Product Management</NavLink></li>
        <li><NavLink to='/dashboard/addProduct' >Add Product</NavLink></li>
        <li><NavLink to='/dashboard/allProducts'>All Products</NavLink></li>
        <div className="divider font-bold">Sales</div>
        <li><NavLink to='/dashboard/salesCollection'>Sales Collection</NavLink></li>
        <li><NavLink to='/dashboard/checkout'>Check Out</NavLink></li>
        <li><NavLink to='/dashboard/salesSummary'>Sales Summary</NavLink></li>
        <div className="divider font-bold">Subscription</div>
        <li><NavLink to='/dashboard/subscription'>Subscription Packages</NavLink></li>
        {
            isAdmin &&
            <>
                <div className="divider font-bold">Admin</div>
                <li><NavLink to='/dashboard/ManageShop'>Manage Shop</NavLink></li>
                <li><NavLink to='/dashboard/salesOverview'>Sale-Summary</NavLink></li>
                <div className="divider font-bold">Registered Shops</div>
                
            </>
        }
    </>
    return (
        <div className="gap-10 ">
            <Helmet>
                <title>Inventify | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  text-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Sidebar</label>

                    {/* Dashboard content */}
                    <div className="pl-8 ">
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 min-h-full bg-[#6f42c1] text-lg text-gray-200 ">
                        <div className="flex gap-4 w-full bg-gray-500 py-2 items-center mb-4">
                            <img className="w-16" src={usersShop?.shopLogoUrl} alt="" />
                            <h3 className="font-semibold">{usersShop?.shopName}</h3>
                        </div>
                        <div className="flex items-center gap-4">


                        </div>
                        <h2 className="font-bold text-3xl text-center">Welcome!</h2>
                        <div className="flex flex-col w-full">
                            <div className="divider"></div>
                        </div>
                        {/* Sidebar content here */}
                        {
                            links
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
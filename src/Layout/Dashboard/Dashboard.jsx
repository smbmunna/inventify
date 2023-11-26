import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const links = <>
        <li><NavLink to='/dashboard/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/dashboard/salesCollection'>Sales Collection</NavLink></li>
        <li><NavLink to='/dashboard/allProducts'>All Products</NavLink></li>
        <li><NavLink to='/dashboard/checkout'>Check Out</NavLink></li>
    </>
    return (
        <div className="gap-10 ">
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
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
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
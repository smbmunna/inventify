import { Link } from "react-router-dom";


const Navbar = () => {
    const links =
        <>
            <Link className="btn mx-2" to='/login'>Login</Link>
            <Link className="btn mx-2" to='/registration'>Registration</Link>
            <Link className="btn mx-2" to='/createShop'>Create Shop</Link>
            
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <img className="w-16"
                        src="https://i.ibb.co/hVL2zBm/Healthy-food-logo-template-Organic-food-vector-design-Fork-spoon-and-leaves-logotype.png" alt="" />

                    <Link to='/' className="text-xl font-bold">Fresh Bites</Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
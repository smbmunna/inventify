import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useShopUser from "../../hooks/useShopUser";


const Navbar = () => {
    const { user, logoutUser } = useAuth();
    const [usersShop, isLoading] = useShopUser();
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    } 
    

    const handleLogout = () => {
        logoutUser()
            .then(() => console.log('user logged out'))
            .catch(error => { console.log(error.message) })
    }
    const links =
        <>
            <Link className="btn mx-2" to='/'>Home</Link>
            {
                !user?.email && <>
                    <Link className="btn mx-2" to='/login'>Login</Link>
                    <Link className="btn mx-2" to='/registration'>Registration</Link>
                </>
            }
            
            <Link className="btn mx-2" to='/'>Watch Demo</Link>
            {
                usersShop ?
                    <Link className="btn mx-2" to='/dashboard'>Dashboard</Link>
                :
                <Link className="btn mx-2" to='/createShop'>Create Shop</Link>
            }

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
                        src="https://i.ibb.co/SmqxgJq/Black-White-Modern-Online-Shop-Logo.png" alt="" />

                    <Link to='/' className="text-xl font-bold">Inventify</Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {user &&
                        <>
                            <img className="w-10 mr-2" src={user?.photoURL} alt="" />
                            <span className="mr-2  text-black">{user?.displayName}</span>
                            <Link onClick={handleLogout} className="btn bg-[#78bc16] text-black border-none rounded-none">Logout</Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import { Link } from "react-router-dom";


const NotAuthorized = () => {
    return (
        <div className="h-screen flex items-center justify-center text-center text-black]">
        <div className="">
            <h1 className="text-5xl font-bold mb-10">Error 401!</h1>
            <h1 className="text-3xl font-bold">Opps! Unauthorized Access</h1>
            <Link className="btn bg-[#6f42c1]  rounded-none text-white mt-10" to='/'>Home</Link>
        </div>
    </div>
    );
};

export default NotAuthorized;
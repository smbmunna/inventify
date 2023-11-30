import { Link } from "react-router-dom";
import useShop from "../../../hooks/useShop";


const ManageShop = () => {
    const [shops, isLoading] = useShop();
    const handleSendNotice=()=>{
        console.log('send mail')
    }
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    return (
        <div>
            <h2 className="text-4xl font-bold text-[#6f42c1] my-8 ">Manage Shop: Total: {shops.length} Shops</h2>
            <div className="h-screen">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-lg">
                            <tr>
                                <th> Serial.</th>
                                <th>Shop Name</th>
                                <th>shop Logo</th>
                                <th>Product Limit</th>
                                <th>Shop Description</th>
                                <th></th>
                                <th>Send Notice</th>
                            </tr>
                        </thead>
                        <tbody className="text-lg">
                            {
                                shops.map((shop, index) => <tr key={shop._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {shop.shopName}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={shop.shopLogoUrl} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {shop.productLimit}
                                    </td>
                                    <td>
                                        {shop.shopInfo}
                                    </td>
                                    <td>
                                       <Link to={`/dashboard/products/shop/${shop._id}`} className="btn btn-xs text-white rounded-none bg-[#6f42c1]">Product List</Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleSendNotice()} className="btn btn-warning btn-xs rounded-none">Send Notice</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageShop;
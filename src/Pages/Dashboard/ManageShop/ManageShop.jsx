import { Link } from "react-router-dom";
import useShop from "../../../hooks/useShop";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";

const ManageShop = () => {
    const [shops, isLoading] = useShop();


    const handleSendNotice=(shop)=>{
        const templateParams = {
            to_email: shop?.ownerEmail,
            subject: 'Promotional Email for Shop Owner',
            body: 'Hi this a promotional email for your shop offer.',
          };

          emailjs.send(
            'service_8z2fi7m',
            'template_xczwbz6',
            templateParams,
            'tMb2U4XqyPnnM1EZ2'
          )
          .then(response => {
            if(response?.status){
                Swal.fire({
                    title: "Email Sent!",
                    text: "Your Notice is sent through mail Successfully!",
                    icon: "success"
                  });
            }
          })
          .catch(error => {
            console.error('Error sending email', error);
          });
    }

    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    return (
        <div>
            <h2 className="text-4xl font-bold text-[#6f42c1] my-8 ">Manage Shop: Total: {shops.length} Shops</h2>
            <div className="h-vh">
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
                                        <button onClick={() => handleSendNotice(shop)} className="btn btn-warning btn-xs rounded-none">Send Notice</button>
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
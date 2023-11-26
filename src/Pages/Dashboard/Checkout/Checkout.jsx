import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCart from "../../../hooks/useCart";


const Checkout = () => {
    const [cart, isLoading, refetch] = useCart();
    const axiosPublic = useAxiosPublic();
    //console.log(cart);
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    //get current date and time
    const getCurrentDate = () => {
        const currentDate = new Date();
        const currentDateString = currentDate.toLocaleDateString();
        return currentDateString;
    }
    const getCurrenttime = () => {
        const currentDate = new Date();
        const currentTimeString = currentDate.toLocaleTimeString();
        return currentTimeString;
    }

    const handleGetPaid = async (product) => {
        const productInfo = {
            ...product,
            addDate: getCurrentDate(),
            addTime: getCurrenttime()
        }
        await axiosPublic.post(`/sales`, productInfo)
            .then(res => {
                if (res.data.insertedId) {
                    //increase sale count of this product
                    axiosPublic.put(`/product/update/${product._id}`, { saleCount: parseInt(product.saleCount)+parseInt(product.productQty) })
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Product added to sales collection.",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                            //increase sale count of this product
                            axiosPublic.put(`/product/update/${product._id}`, {productQty: parseInt(product.productQty) - parseInt(product.productQty)})
                        })

                }
            })
            refetch();
    }

    return (
        <div className="text-3xl font-bold">
            <h2>Checkout Product {cart.length}</h2>
            <div className="h-screen">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th> Serial.</th>
                                <th> Product Id:</th>
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Discount</th>
                                <th>Selling Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((product, index) => <tr key={product._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>{product._id}</td>
                                    <td>
                                        {product.productName}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {product.productQty}
                                    </td>
                                    <td>
                                        {product.discount}
                                    </td>
                                    <td>
                                        {product.sellingPrice}
                                    </td>
                                    <th>
                                        <button onClick={() => handleGetPaid(product)} className="btn btn-warning btn-xs">Get Paid</button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
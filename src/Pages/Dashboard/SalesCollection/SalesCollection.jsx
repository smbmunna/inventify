import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const SalesCollection = () => {
    const [products] = useProducts();
    const axiosPublic = useAxiosPublic();
    // add to cart
    const handleAddToCart = product => {
        //console.log(product);
        axiosPublic.post('/carts', product)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product added to Cart!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    //navigate('/dashboard/allProducts');
                }
            })
    }
    return (
        <div className="h-screen">
            <Helmet>
                <title>Dashboard | Sales Collection</title>
            </Helmet>
            <h2 className="text-3xl font-bold">Sales Collection Total Products: {products.length}</h2>
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
                            products.map((product, index) => <tr key={product._id}>
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
                                    <button onClick={() => handleAddToCart(product)} className="btn btn-warning btn-xs">Add for Checkout</button>
                                    <Link to='/dashboard/checkout'>
                                        <button className="btn btn-warning btn-xs">Proceed to checkout</button>
                                    </Link>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default SalesCollection;
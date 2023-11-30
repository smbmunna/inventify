
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AllProducts = () => {
    const [products, isLoading, refetch] = useProducts();
    const axiosPublic = useAxiosPublic();
    const handleDeleteProduct = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/product/delete/${id}`)
                    .then(res => {
                        if (res.data.deletedCount == 1) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Product Deleted!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch();
                        }
                    })
            }
        });

    }
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }


    return (
        <div>
            <Helmet>
                <title>Dashboard | All Products</title>
            </Helmet>
            <h2 className="text-4xl font-bold text-[#6f42c1] my-8">Total Products:{products.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-xl">
                        <tr>
                            <th>
                                <label>
                                    Serial.
                                </label>
                            </th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Sale Count</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg">
                        {
                            products.map((product, index) => <tr key={product._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.productImageLink} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {product.productName}
                                </td>
                                <td>
                                    {product.productQty}
                                </td>
                                <td>
                                    {product.saleCount}
                                </td>
                                <th>
                                    <Link to={`/dashboard/updateProduct/${product._id}`}>
                                        <button className="btn text-white rounded-none bg-[#6f42c1] btn-xs">Update</button>
                                    </Link>
                                    <button onClick={() => handleDeleteProduct(product._id)} className="btn text-white rounded-none bg-red-600 btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllProducts;
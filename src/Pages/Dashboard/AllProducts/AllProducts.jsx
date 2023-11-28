
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
            <h2 className="text-3xl font-bold">List of all products:{products.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
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
                    <tbody>
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
                                        <button className="btn btn-ghost btn-xs">Update</button>
                                    </Link>
                                    <button onClick={() => handleDeleteProduct(product._id)} className="btn btn-ghost btn-xs">Delete</button>
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
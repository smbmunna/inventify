import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Search from "./Search";


const SalesCollection = () => {
    const [products,isLoading, refetch] = useProducts();
    const axiosPublic = useAxiosPublic();

    

    //for search 
    const [searchResults, setSearchResults] = useState(products);
    const handleSearch = results => {
        setSearchResults(results);
    }

    // console.log(products);
    // add to cart
    const handleAddToCart = product => {
        const productData = {
            ...product,
            status: 'checkout'
        }

        axiosPublic.post('/carts', productData)
            .then(res => {
                if (res.data.insertedId) {
                    

                    //update status in sales collection
                    axiosPublic.put(`/product/update/${product._id}`, { status: 'checkout' })
                    refetch();                    
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
            <h2 className="text-4xl font-bold text-[#6f42c1] my-8">Sales Collection</h2>
            <Search data={products} onSearch={handleSearch} />

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-lg">
                        <tr>
                            <th> Serial.</th>
                            <th> Product Id:</th>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Discount</th>
                            <th>Selling Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            searchResults.map((product, index) => <tr key={product._id}>
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
                                                <img src={product.productImageLink} alt="Avatar Tailwind CSS Component" />
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
                                    {product.sellingPrice.toFixed(2)}
                                </td>
                                <td>{product?.status}</td>
                                <td>
                                    {
                                        <button onClick={() => handleAddToCart(product)}
                                            disabled={product?.status === 'checkout' || product?.status === 'sold'}
                                            className="btn text-white rounded-none bg-[#6f42c1] btn-xs">Add for Checkout</button>
                                    }
                                    {product.status !== 'sold' ? (
                                        <Link to="/dashboard/checkout">
                                            <button className="btn text-white rounded-none bg-[#6f42c1] btn-xs my-2">Proceed to checkout</button>
                                        </Link>
                                    ) : (
                                        <button className="btn text-white rounded-none bg-[#6f42c1] btn-xs my-2" disabled>
                                            Proceed to checkout
                                        </button>
                                    )}
                                </td>
                                
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default SalesCollection;

import useProducts from "../../../hooks/useProducts";


const AllProducts = () => {
    const [products, isLoading] = useProducts();
    console.log(products);
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    return (
        <div>
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
                            products.map((product, index)=><tr key={product._id}>
                                <th>
                                    {index+1}
                                </th>
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
                                   {product.productName}
                                </td>
                                <td>
                                {product.productQty}
                                </td>
                                <td>
                                {product.saleCount}
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const ShopDetails = () => {
    const { shopId } = useParams();
    const [products, setProducts] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get(`/shop/product/${shopId}`)
            .then(res => {
                setProducts(res.data);

            })
    }, [shopId])

    //console.log(products)
    return (
        <div>
            <h1 className="text-4xl font-bold text-[#6f42c1] my-8 ">Total Products:{products.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-lg">
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
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ShopDetails;
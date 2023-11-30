import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";


const ProductMangement = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2 className="text-4xl font-bold text-[#6f42c1] my-8">Product Management</h2>
            {
                products.length > 0 ?
                    <div className="grid grid-cols-2 justify-between items-center">
                        <div>


                            <p className="text-xl font-semibold join-item">Total <span className="text-xl text-pink-700 font-extrabold">{products.length}</span> products added.</p>

                        </div>
                        <div className="indicator">
                            <Link to='/dashboard/addProduct'>
                                <button className="btn text-white rounded-none bg-[#6f42c1] join-item">Add a Product</button>
                            </Link>
                        </div>
                    </div> :
                    <div >
                        <p className="text-lg my-4  join-item">Total <span className="text-xl text-pink-700 font-bold">{products.length}</span> products added.</p>
                        <Link to='/dashboard/addProduct'>
                            <button className="btn text-white rounded-none bg-[#6f42c1] join-item">Add a Product</button>
                        </Link>
                    </div>



            }
        </div>
    );
};

export default ProductMangement;
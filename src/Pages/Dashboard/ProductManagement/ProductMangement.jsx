import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";


const ProductMangement = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2 className="text-2xl font-semibold my-8">Product Management</h2>
            {
                products.length > 0 ?
                    <div className="grid grid-cols-2 justify-between items-center">
                        <div>


                            <p className="text-lg  join-item">Total <span className="text-xl text-pink-700 font-bold">{products.length}</span> products added.</p>

                        </div>
                        <div className="indicator">
                            <Link to='/dashboard/addProduct'>
                                <button className="btn join-item">Add a Product</button>
                            </Link>
                        </div>
                    </div> :
                    <div >
                        <p className="text-lg my-4  join-item">Total <span className="text-xl text-pink-700 font-bold">{products.length}</span> products added.</p>
                        <button className="btn join-item">Add a Product</button>
                    </div>



            }
        </div>
    );
};

export default ProductMangement;
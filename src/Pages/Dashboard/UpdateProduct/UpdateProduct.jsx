import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product= useLoaderData();
    //console.log(product);    
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const navigate= useNavigate();
    //------------------For image hosting-------------------------
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = async (data) => {
        const imageFile = { image: data.productImage[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imageLink = res.data.data.display_url;
        axiosPublic.put(`/product/update/${product._id}`, data)
        //update image
        axiosPublic.put(`/product/update/${product._id}`, {productImageLink: imageLink})
        .then(res=>{
            console.log(res.data);
           if(res.data.acknowledged){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product info updated!",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/allProducts');
           }
        })
    }
    return (
        <div>
            <h2 className="text-3xl font-bold">Update Product: {product.productName}</h2>
            <form className="mx-auto w-3/4" onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input
                    type="text"
                    defaultValue={product.productName}
                    placeholder="Product Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("productName", { required: true })}
                />
                {errors.productName && <span className="text-red-500 mx-2">Product Name is required</span>}


                <label className="label">
                    <span className="label-text">Product Image</span>
                </label>
                <input
                    type="file"
                    defaultValue=""
                    placeholder="Product Image"
                    className="file-input file-input-bordered w-full max-w-xs"
                    {...register("productImage", { required: true })}
                />
                {errors.productImage && <span className="text-red-500 mx-2">Product Image is required</span>}


                <label className="label">
                    <span className="label-text">Product Quantity</span>
                </label>
                <input
                    type="number"
                    defaultValue={product.productQty}
                    placeholder="Product Quantity"
                    className="input input-bordered w-full max-w-xs"
                    {...register("productQty", { required: true })}
                />
                {errors.productQty && <span className="text-red-500 mx-2">Product Quantity is required</span>}

                <label className="label">
                    <span className="label-text">Product Description</span>
                </label>
                <textarea
                    type="text"
                    defaultValue={product.productDescription}
                    placeholder="Product Description"
                    className="textarea textarea-bordered w-full max-w-xs"
                    {...register("productDescription", { required: true })}
                />
                {errors.productDescription && <span className="text-red-500 mx-2">Product Description is required</span>}

                <label className="label">
                    <span className="label-text">Product Location</span>
                </label>
                <input
                    type="text"
                    defaultValue={product.productLocation}
                    placeholder="Product Location"
                    className="input input-bordered w-full max-w-xs"
                    {...register("productLocation", { required: true })}
                />
                {errors.productLocation && <span className="text-red-500 mx-2">Product Location is required</span>}


                <label className="label">
                    <span className="label-text">Production Cost / Buying Price</span>
                </label>
                <input
                    type="number"
                    defaultValue={product.costPrice}
                    placeholder="Production Cost / Buying Price"
                    className="input input-bordered w-full max-w-xs"
                    {...register("costPrice", { required: true })}
                />
                {errors.costPrice && <span className="text-red-500 mx-2">Cost Price is required</span>}


                <label className="label">
                    <span className="label-text">Profit Margin</span>
                </label>
                <input
                    type="text"
                    defaultValue={product.profitMargin}
                    placeholder="Profit Margin"
                    className="input input-bordered w-full max-w-xs"
                    {...register("profitMargin", { required: true })}
                />
                {errors.profitMargin && <span className="text-red-500 mx-2">Profit Margin is required</span>}

                <label className="label">
                    <span className="label-text">Discount %</span>
                </label>
                <input
                    type="number"
                    defaultValue={product.discount}
                    placeholder="Discount %"
                    className="input input-bordered w-full max-w-xs"
                    {...register("discount", { required: true })}
                />
                {errors.discount && <span className="text-red-500 mx-2">Disount % is required</span>}




                <br />
                <input className="btn bg-[#78bc16] w-40 my-4" type="submit" value="Update Product" />
            </form>
        </div>
    );
};

export default UpdateProduct;
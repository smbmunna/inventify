import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const navigate = useNavigate();
    //console.log(user);
    //------------------For image hosting-------------------------
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    //------------------Form submission-------------------------
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const getCurrentDate = () => {
        let currentDate = new Date().toJSON().slice(0, 10);
        let parts = currentDate.split("-");
        let formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
        return formattedDate;
    }


    const onSubmit = async  (data) => {
        // const imageFile = data.productImage[0];
        // console.log(imageFile);
        // const res= await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });
        //console.log(res.data);
        //return
        axiosPublic.get(`/shops/${user.email}`)
            .then(res => {
                const productInfo = {
                    ...data,
                    shopId: res.data._id,
                    shopName: res.data.shopName,
                    userEmail: res.data.ownerEmail,
                    sellingPrice: data.costPrice + (7.5 * data.costPrice / 100) + (data.profitMargin * data.costPrice / 100),
                    productAddDate: getCurrentDate(),
                    saleCount: 0,
                }
                axiosPublic.post('/products', productInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Product added successfully!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/dashboard/allProducts');
                        }
                    })

            });


    }




    return (
        <div className="h-screen">
            <h2 className="text-3xl font-bold">Add Product</h2>
            <form className="mx-auto w-3/4" onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input
                    type="text"
                    defaultValue=""
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
                    defaultValue=""
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
                    defaultValue=""
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
                    defaultValue=""
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
                    defaultValue=""
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
                    defaultValue=""
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
                    defaultValue=""
                    placeholder="Discount %"
                    className="input input-bordered w-full max-w-xs"
                    {...register("discount", { required: true })}
                />
                {errors.discount && <span className="text-red-500 mx-2">Disount % is required</span>}




                <br />
                <input className="btn bg-[#78bc16] w-40 my-4" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const CreateShop = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    //console.log(user);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        //check if he has created a shop already
        axiosPublic.get(`/shops/${user.email}`)
        .then(res=>{
            if(res.data){
                return Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "You can create only One Shop!",
                  });
            }else{
                axiosPublic.post('/shops', data)
                    .then(res => {
                        if (res.data.insertedId) {
                            //send user info and shop info to server to update user collection 
                            const userInfo = {
                                email: user?.email,
                                role: "manager",
                                shopId: res.data.insertedId,
                                shopInfo: data
                            }
                            axiosPublic.put('/users', userInfo)
                                .then(res => {
                                    console.log('user info updated: ', res.data);
                                })
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Shop Created successfully!",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
        
                    })

            }
        })
        
    }

    return (
        <div className="grid">
            <Helmet>
                <title>Inventify | Create Shop</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center my-8">Create Shop</h2>
            <form className="mx-auto w-3/4" onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-text">Shop Name</span>
                </label>
                <input
                    type="text"
                    defaultValue=""
                    placeholder="Shop Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("shopName", { required: true })}
                />
                {errors.shopName && <span className="text-red-500 mx-2">Shop Name is required</span>}


                <label className="label">
                    <span className="label-text">Shop Logo</span>
                </label>
                <input
                    type="text"
                    defaultValue=""
                    placeholder="Shop Logo"
                    className="input input-bordered w-full max-w-xs"
                    {...register("shopLogo", { required: true })}
                />
                {errors.shopLogo && <span className="text-red-500 mx-2">Shop Logo is required</span>}


                <label className="label">
                    <span className="label-text">Shop Description</span>
                </label>
                <textarea
                    type="text"
                    defaultValue=""
                    placeholder="Shop Description"
                    className="textarea textarea-bordered w-full max-w-xs"
                    {...register("shopInfo", { required: true })}
                />
                {errors.shopInfo && <span className="text-red-500 mx-2">Shop Info is required</span>}

                <label className="label">
                    <span className="label-text">Shop Location</span>
                </label>
                <input
                    type="text"
                    defaultValue=""
                    placeholder="Shop Location"
                    className="input input-bordered w-full max-w-xs"
                    {...register("shopLocation", { required: true })}
                />
                {errors.shopLocation && <span className="text-red-500 mx-2">Shop Location is required</span>}


                <label className="label">
                    <span className="label-text">Onwer Email</span>
                </label>
                <input
                    type="email"
                    disabled
                    defaultValue={user?.email}
                    placeholder="Owner Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("ownerEmail", { required: true })}
                />
                {errors.ownerEmail && <span className="text-red-500 mx-2">Owner Email is required</span>}


                <label className="label">
                    <span className="label-text">Owner Name</span>
                </label>
                <input
                    type="text"
                    disabled
                    defaultValue={user?.displayName}
                    placeholder="Owner Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("ownerName", { required: true })}
                />
                {errors.ownerName && <span className="text-red-500 mx-2">Owner Name is required</span>}

                <input
                    type="hidden"
                    defaultValue="3"
                    className="input input-bordered w-full max-w-xs"
                    {...register("productLimit", { required: true })}
                />

                <br />
                <input className="btn bg-[#78bc16] w-20 my-4" type="submit" />
            </form>
        </div>
    );
};

export default CreateShop;
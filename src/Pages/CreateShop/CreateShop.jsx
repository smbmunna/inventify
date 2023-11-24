import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const CreateShop = () => {
    const axiosPublic= useAxiosPublic();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        //console.log(data);
        axiosPublic.post('/shops', data)
        .then(res=>{
            console.log(res);
        })
    }

    return (
        <div className="grid">
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
                    {...register("shop_name", { required: true })}
                />
                {errors.shop_name && <span className="text-red-500 mx-2">Shop Name is required</span>}


                <label className="label">
                    <span className="label-text">Shop Logo</span>
                </label>
                <input
                    type="text"
                    defaultValue=""
                    placeholder="Shop Logo"
                    className="input input-bordered w-full max-w-xs"
                    {...register("shop_logo", { required: true })}
                />
                {errors.shop_logo && <span className="text-red-500 mx-2">Shop Logo is required</span>}


                <label className="label">
                    <span className="label-text">Shop Description</span>
                </label>
                <textarea
                    type="text"
                    defaultValue=""
                    placeholder="Shop Description"
                    className="textarea textarea-bordered w-full max-w-xs"
                    {...register("shop_info", { required: true })}
                />
                {errors.shop_info && <span className="text-red-500 mx-2">Shop Info is required</span>}

                <label className="label">
                    <span className="label-text">Shop Location</span>
                </label>
                <input
                    type="text"
                    defaultValue=""
                    placeholder="Shop Location"
                    className="input input-bordered w-full max-w-xs"
                    {...register("shop_location", { required: true })}
                />
                {errors.shop_location && <span className="text-red-500 mx-2">Shop Location is required</span>}


                <label className="label">
                    <span className="label-text">Onwer Email</span>
                </label>
                <input
                    type="email"
                    defaultValue=""
                    placeholder="Owner Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("owner_email", { required: true })}
                />
                {errors.owner_email && <span className="text-red-500 mx-2">Owner Email is required</span>}


                <label className="label">
                    <span className="label-text">Owner Name</span>
                </label>
                <input
                    type="text"
                    defaultValue=""
                    placeholder="Owner Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("owner_name", { required: true })}
                />
                {errors.owner_name && <span className="text-red-500 mx-2">Owner Name is required</span>}


                <br />
                <input className="btn bg-[#78bc16] w-20 my-4" type="submit" />
            </form>
        </div>
    );
};

export default CreateShop;
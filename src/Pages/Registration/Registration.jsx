import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";



const Registration = () => {
    const { setUser, user, createUser, updateUser } = useAuth();
    const [regError, setRegError] = useState('');
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();

    const handleRegistration =  async event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        //const photo = form.photo.value;
        const photo = form.photo.files[0];

        //------------------For image hosting-------------------------
        const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
        const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

        //Resetting Reg error 
        setRegError('');

        if (password.length < 6) {
            setRegError('Password Must Have more than 6 characters.')
            return
        }
        if (!/^(?=.*[A-Z]).+$/.test(password)) {
            setRegError('Password Must Have at least one Upper Case Letter');
            return;
        }
        if ((!/^.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-].*$/.test(password))) {
            setRegError('Password must contain at least one Special Character');
            return;
        }
        // console.log(photo);
        // return

        const formData = new FormData();
        formData.append('image', photo);

         // Upload photo to imgbb
         const response = await axiosPublic.post(image_hosting_api, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        const imageUrl = response.data.data.url;

        createUser(email, password)
            .then(result => {
                if (result.user.email) {
                    const userInfo = {
                        name: name,
                        email: email,
                        profileImage: imageUrl
                    }
                    //upload photo                    

                    updateUser(name, imageUrl )
                        .then(() => {
                            //create user on our database also
                            axiosPublic.post('/users', userInfo)
                                .then(res => {
                                    if(res.data.insertedId){
                                        Swal.fire({
                                            position: "top-end",
                                            icon: "success",
                                            title: "Registration Successful!",
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                    }
                                })

                            setUser(result.user);
                            navigate('/login');
                        })
                        .catch(error => {
                            console.log(error.message);
                        })
                }
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div>
            <Helmet>
                <title>Inventify | Registration</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <h2 className='text-2xl font-semibold text-black-700 text-center'>Register</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo </span>
                                </label>
                                {/* <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required /> */}
                                <input type="file" name='photo' placeholder="Profile Image" className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='/login'>Already have Account? <span className='font-bold  text-[#78bc16] '>Login</span></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white rounded-none bg-[#78bc16]  mt-4 ">Register</button>
                            </div>
                            <p className='text-red-500 text-center font-bold'>
                                {regError}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
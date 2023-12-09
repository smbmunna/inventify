import { Link, useLocation, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useShopUser from '../../hooks/useShopUser';




const Login = () => {
    const { user, loginUser, googleLogin } = useAuth();
    const [loginError, setLoginError] = useState('');
    const axiosPublic = useAxiosPublic();
    //Redirect user to desired path

    const navigate = useNavigate();


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setLoginError('');

       loginUser(email, password)
            .then(res => {
                axiosPublic.get(`/shops/${email}`)
                    .then(res => {
                        if(res.data?.shopInfo){
                            navigate('/dashboard');
                        }else{
                            navigate('/createShop');
                        }
                    }
                    
                    )

                console.log('Login success: ', res.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successful!",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch(err => {
                setLoginError(err.message);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log('google login success: ', res.user.displayName);
                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email,
                }
                axiosPublic.post('/users', userInfo)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successful!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message)
            })
    }



    return (
        <div>
            <Helmet>
                <title>Inventify | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h2 className='text-2xl font-semibold text-Black-700 text-center'>Login</h2>
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
                                    <Link to='/registration'>New to This Site? <span className='font-bold  text-[#78bc16] '>Register</span></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white rounded-none bg-[#6f42c1]  mt-4 ">Login</button>
                            </div>
                            <div>
                                <button
                                    onClick={handleGoogleLogin}
                                    className="btn text-white rounded-none bg-[#6f42c1] mt-4 w-full ">
                                    <FcGoogle className="text-3xl" />  Google Login
                                </button>
                            </div>
                            <p className='text-red-500 text-center font-bold'>
                                {loginError}
                            </p>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
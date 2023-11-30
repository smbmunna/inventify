import { BsFillBuildingsFill, BsEnvelope } from 'react-icons/bs';

const GetInTouch = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-16  bg-[#6f42c1] text-white py-4 '>
            <h1 className="text-3xl font-bold  text-center my-4 md:mb-4">Fix a Demo</h1>
            <div className='md:grid md:grid-cols-3 items-center'>
                <div className='md:col-span-1' data-aos="flip-left" data-aos-duration="1000" >
                    <div className="bg-transparent pb-10 h-full  items-center pl-10">
                        <div className="flex items-center pt-10 mb-10 ">                            
                            <h3 className="text-6xl font-bold">Inventify</h3>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <BsFillBuildingsFill />
                            <p className='text-lg'>Sector 04, Uttara, Dhaka 1230</p>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <BsEnvelope />
                            <p  className='text-lg'>support@example.com</p>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-2' data-aos="flip-right" data-aos-duration="1000" >
                    <form className="card-body ">
                        <h1 className=' text-xl font-bold'>Write to Us</h1>
                        <div className="form-control">
                            <input type="email" placeholder="Your Email" className="input input-bordered  rounded-none  text-black " required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Your message" className="input input-bordered rounded-none text-black " required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primarybtn  bg-[#2c2c2c91] text-xl text-white dark:border-none rounded-none">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
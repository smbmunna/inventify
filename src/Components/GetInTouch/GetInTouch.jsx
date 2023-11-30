import { BsFillBuildingsFill, BsEnvelope } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaMobileAlt } from 'react-icons/fa';

const GetInTouch = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-16 bg-[#AEFFF1] py-4 '>
            <h1 className="text-3xl font-bold text-gray-700 text-center my-4 md:mb-4">Fix a Demo</h1>
            <div className='md:grid md:grid-cols-3 items-center'>
                <div className='md:col-span-1' data-aos="flip-left" data-aos-duration="1000" >
                    <div className="bg-transparent pb-10 h-full text-gray-700 items-center pl-10">
                        <div className="flex items-center pt-10 mb-10  text-gray-700">
                            <HiOutlineLocationMarker className="text-3xl mr-3" />
                            <h3 className="text-3xl font-bold">Inventify</h3>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <BsFillBuildingsFill />
                            <p>Sector 04, Uttara, Dhaka 1230</p>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <FaMobileAlt />
                            <p>+777 577 88 88 +999 999 99 96</p>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <BsEnvelope />
                            <p>support@example.com</p>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-2' data-aos="flip-right" data-aos-duration="1000" >
                    <form className="card-body ">
                        <h1 className='text-gray-700 text-xl font-bold'>Write to Us</h1>
                        <div className="form-control">
                            <input type="email" placeholder="Your Email" className="input input-bordered  rounded-none  text-black bg-[#e6e4e4b0]" required />
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
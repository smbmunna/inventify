import { Helmet } from 'react-helmet-async';
import { AiOutlineCheckCircle } from 'react-icons/ai';



const Packages = () => {
    return (
        <div className=" max-w-screen-xl mx-auto my-8">
            <div className="text-center mb-20">
                <h1 className="text-3xl font-bold mb-4">Be a member!</h1>
                <p className="">Thanks for having faith on us. You can upgrade your membership by choosing one from the followings</p>
            </div>
            <div className="lg:grid grid-cols-3 gap-8">
                {/* card 01 */}
                <div className='lg:w-3/4' data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="py-10 bg-violet-600 text-white pl-4">
                        <h2 className="text-4xl font-semibold">Starter</h2>
                        <hr className='w-1/2' />
                        <h2 className="text-5xl mt-10">49 <span className="text-2xl">$</span></h2>
                        <p className="text-xl">/Person</p>
                    </div>
                    <div className='pl-4 bg-gray-900 py-4'>
                        <div className='flex items-center gap-2 my-4'>
                            <AiOutlineCheckCircle /><p>1 Comfortable Seats</p>
                        </div>
                        <div className='flex items-center gap-2 my-4'>
                            <AiOutlineCheckCircle /><p>Free Lunch and Coffee</p>
                        </div>
                        <div className='flex items-center gap-2 my-4'>
                            <AiOutlineCheckCircle /><p>Certificate</p>
                        </div>
                        <div className='flex items-center gap-2 my-4'>
                            <AiOutlineCheckCircle /><p>Easy Access</p>
                        </div>
                        <button className='btn btn-primary'>Upgrade Membership</button>
                    </div>
                </div>
                {/* card 01 */}
                <div className='lg:w-3/4' data-aos="zoom-in-down" data-aos-duration="1000">
                    <div className="py-10 bg-violet-600 text-white pl-4 ">
                        <h2 className="text-4xl font-semibold">Standard</h2>
                        <hr className='w-1/2' />
                        <h2 className="text-5xl mt-10">80 <span className="text-2xl">$</span></h2>
                        <p className="text-xl">/Person</p>
                    </div>
                    <div className='pl-4 bg-gray-900 py-4'>
                        <div className='flex items-center gap-2 my-4'>
                            <AiOutlineCheckCircle /><p>1 Comfortable Seats</p>
                        </div>
                        <div className='flex items-center gap-2 my-4'>
                            <AiOutlineCheckCircle /><p>Free Lunch and Coffee</p>
                        </div>
                        <div className='flex items-center gap-2 my-4'>
                            <AiOutlineCheckCircle /><p>Certificate</p>
                        </div>
                        <div className='flex items-center gap-2 my-4'>
                            <AiOutlineCheckCircle /><p>Easy Access</p>
                        </div>
                        <button className='btn btn-primary'>Upgrade Membership</button>
                    </div>
                </div>
                {/* card 01 */}
                <div className='lg:w-3/4' data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="py-10 bg-violet-600 text-white pl-4 ">
                        <h2 className="text-4xl font-semibold">Platinum</h2>
                        <hr className='w-1/2' />
                        <h2 className="text-5xl mt-10">150 <span className="text-2xl">$</span></h2>
                        <p className="text-xl">/Person</p>
                    </div>
                    <div className='pl-4 bg-gray-900 py-4'>
                        <div className='flex items-center gap-2 my-4'>
                            <AiOutlineCheckCircle /><p>1 Comfortable Seats</p>
                        </div>
                        <div className='flex items-center gap-2 my-4'>
                            <AiOutlineCheckCircle /><p>Free Lunch and Coffee</p>
                        </div>
                        <div className='flex items-center gap-2 my-4'>
                            <AiOutlineCheckCircle /><p>Certificate</p>
                        </div>
                        <div className='flex items-center gap-2 my-4'>
                            <AiOutlineCheckCircle /><p>Easy Access</p>
                        </div>
                        <button className='btn btn-primary'>Upgrade Membership</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Packages;
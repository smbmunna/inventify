import { Link } from "react-router-dom";


const Subscription = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-[#6f42c1] my-8'>Choose from the following Subscription Plans</h1>
            <div className='lg:grid grid-cols-3 gap-8 my-8'>
                {/* card 01 */}
                <div className='lg:w-3/4' >
                    <div className="py-10 bg-violet-600 text-white pl-4 ">
                        <h2 className="text-4xl font-semibold">Standard</h2>
                        <hr className='w-full' />
                        <h2 className="text-5xl mt-10 font-bold">10 <span className="text-2xl">$</span></h2>
                    </div>
                    <div className='pl-4 bg-gray-900 py-4 text-white'>
                        <div className='flex items-center gap-2 my-4'>
                            <p className='font-semibold text-2xl'>Product Limit</p>

                            <p className='text-3xl font-bold'>200</p>
                        </div>
                        <Link to={`/dashboard/payment/10/200`} >
                            <button className='btn text-white rounded-none bg-[#6f42c1]'>Subscribe</button>
                        </Link>
                    </div>
                </div>

                {/* card 02 */}
                <div className='lg:w-3/4' >
                    <div className="py-10 bg-violet-600 text-white pl-4 ">
                        <h2 className="text-4xl font-semibold">Gold</h2>
                        <hr className='w-full' />
                        <h2 className="text-5xl mt-10 font-bold">20 <span className="text-2xl">$</span></h2>
                    </div>
                    <div className='pl-4 bg-gray-900 py-4 text-white'>
                        <div className='flex items-center gap-2 my-4'>
                            <p className='font-semibold text-2xl'>Product Limit</p>

                            <p className='text-3xl font-bold'>450</p>
                        </div>
                        <Link to={`/dashboard/payment/20/450`}>
                            <button className='btn text-white rounded-none bg-[#6f42c1]'>Subscribe</button>
                        </Link>
                    </div>
                </div>

                {/* card 03 */}
                <div className='lg:w-3/4'>
                    <div className="py-10 bg-violet-600 text-white pl-4 ">
                        <h2 className="text-4xl font-semibold">Platinum</h2>
                        <hr className='w-full' />
                        <h2 className="text-5xl mt-10 font-bold">50 <span className="text-2xl">$</span></h2>
                    </div>
                    <div className='pl-4 bg-gray-900 py-4 text-white'>
                        <div className='flex items-center gap-2 my-4'>
                            <p className='font-semibold text-2xl'>Product Limit</p>

                            <p className='text-3xl font-bold'>1500</p>
                        </div>
                        <Link to={`/dashboard/payment/50/1500`}>
                            <button className='btn text-white rounded-none bg-[#6f42c1]'>Subscribe</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
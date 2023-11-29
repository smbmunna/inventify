
const Packages = () => {
    return (
        <div className=" max-w-screen-xl mx-auto my-8">
            <div className="text-center mb-2">
                <h1 className="text-3xl font-bold">Be a member!</h1>
                <p className="text-lg">Get the most out of our Inventory Management System. </p>
            </div>
            <div className="lg:grid lg:grid-cols-3 grid-cols-1 gap-8 lg:w-full w-3/4 mx-auto">
                {/* card 01 */}
                <div className='lg:w-3/4 my-8' data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="py-10 bg-[#666666] text-white pl-4">
                        <h2 className="text-4xl font-semibold  text-center">Standard</h2>
                        <hr className='w-full my-4' />
                        <h2 className="text-5xl mt-10 text-center font-bold">10 <span className="text-2xl">$</span></h2>
                    </div>
                    <div className='pl-4 bg-[#AEFFF1] py-4'>
                        <div className='flex items-center gap-2 my-4'>
                        <div className='flex mx-auto items-center'>
                                <p className='font-semibold'>Product Limit: <span className='font-bold text-2xl'>200</span></p>
                            </div>
                        </div>
                        <div className='grid'>
                            <button className='btn bg-[#666666] rounded-sm text-white mx-auto'>Upgrade Membership</button>
                        </div>
                    </div>
                </div>
                {/* card 01 */}
                <div className='lg:w-3/4 my-8' data-aos="zoom-in-down" data-aos-duration="1000">
                    <div className="py-10 bg-[#666666] text-white pl-4">
                        <h2 className="text-4xl font-semibold text-center">Gold</h2>
                        <hr className='w-full my-4' />
                        <h2 className="text-5xl mt-10 text-center font-bold">20 <span className="text-2xl">$</span></h2>
                    </div>
                    <div className='pl-4 bg-[#AEFFF1] py-4'>
                        <div className='flex items-center gap-2 my-4'>
                            <div className='flex mx-auto items-center'>
                                <p className='font-semibold'>Product Limit: <span className='font-bold text-2xl'>450</span></p>
                            </div>
                        </div>
                        <div className='grid'>
                            <button className='btn bg-[#666666] rounded-sm text-white mx-auto'>Upgrade Membership</button>
                        </div>
                    </div>
                </div>
                {/* card 01 */}
                <div className='lg:w-3/4 my-8' data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="py-10 bg-[#666666] text-white pl-4">
                        <h2 className="text-4xl font-semibold text-center">Platinum</h2>
                        <hr className='w-full my-4' />
                        <h2 className="text-5xl mt-10  text-center font-bold">50 <span className="text-2xl">$</span></h2>
                    </div>
                    <div className='pl-4 bg-[#AEFFF1] py-4'>
                        <div className='flex items-center gap-2 my-4'>
                        <div className='flex mx-auto items-center'>
                                <p className='font-semibold'>Product Limit: <span className='font-bold text-2xl'>1500</span></p>
                            </div>
                        </div>
                        <div className='grid'>
                            <button className='btn bg-[#666666] rounded-sm text-white mx-auto'>Upgrade Membership</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Packages;


const Speciality = () => {
    return (
        <div className="md:my-20">
            <h1 className="text-3xl font-bold text-black text-center my-8 md:mb-10">Featured Product</h1>
            <div className="lg:grid lg:grid-cols-4  lg:items-center lg:gap-10">
                <div className="lg:col-span-2 mx-4 text-center md:text-left mb-4 md:mb-0 md:mx-0">
                    <h1 className="font-bold text-5xl text-gray-700 mb-20 text-center md:text-left">iPhone 15 Pro Max</h1>
                    <p className="text-xl font-semibold text-gray-700 mb-10">Enjoy upto <span className="text-5xl">10%</span> off !! on Pre-order!</p>
                    <p className="text-gray-700 font-semibold text-lg">You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly.
                       </p>
                </div>
                <div  className="lg:col-span-2 mx-8 lg:mx-0">
                    <img src="https://i.ibb.co/yqsV5Ts/Screenshot-2023-10-20-171338.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Speciality;
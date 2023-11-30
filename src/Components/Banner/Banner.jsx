const Banner = () => {
    return (
        <div className="hero h-[450px]" style={{ backgroundImage: 'url(https://i.ibb.co/5n33q2k/cova-software-Sdlsfst-OQZM-unsplash-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-75"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-3xl md:text-6xl font-bold text-white">Inventify</h1>
                    <p className="mb-5 text-xl md:text-3xl font-bold text-white">MultiStore Inventory Management System</p>
                    <p className="mb-5 text-lg md:text-2xl font-semibold text-white">Keep track of inventory levels in real time to avoid overstocking or stockouts.</p>                    
                </div>
            </div>
        </div>
    );
};

export default Banner;
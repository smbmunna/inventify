import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Speciality = () => {

    
    useEffect(() => {
        AOS.init();
      }, [])
    

    return (
        <div className="max-w-screen-xl mx-auto ">
            <div className="lg:grid lg:grid-cols-4  lg:items-center lg:gap-10">
                <div data-aos="fade-right"  data-aos-duration="1000" className="lg:col-span-2 mx-4 text-center md:text-left mb-4 md:mb-0 md:mx-0">
                    <h1 className="font-bold text-4xl text-gray-700 mb-8 text-center md:text-left">Elevate your Store Management to the next level!</h1>
                    <p className="text-xl font-semibold text-gray-700 mb-10">Enjoy upto <span className="text-5xl">20%</span> off !! on Premium Plans!</p>
                    <p className="text-gray-700 font-semibold text-lg">You can choose a payment option that works for you. Just pay with your credit card and get set up quickly.
                       </p>
                </div>
                <div data-aos="fade-left"  data-aos-duration="1000"  className="lg:col-span-2 mx-8 lg:mx-0 w-3/4">
                    <img src="https://i.ibb.co/8c9K6QW/imager-10-1586-700.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Speciality;
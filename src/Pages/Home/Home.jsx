import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import OurLocation from "../../Components/OurLocation/OurLocation";
import Packages from "../../Components/Packages/Packages";
import Speciality from "../../Components/Speciality/Speciality";
import Testimonials from "../../Components/Testimonials/Testimonials";
import WhyUs from "../../Components/Packages/WhyUs/WhyUs";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Inventify | Home Page</title>
            </Helmet>
            <Banner/>
            <WhyUs/>
            <Speciality/>
            <Packages/>            
            <OurLocation/>
            <Testimonials/>
        </div>
    );
};

export default Home;
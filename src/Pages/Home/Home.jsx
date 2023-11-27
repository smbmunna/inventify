import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Inventify | Home Page</title>
            </Helmet>
            <Banner/>
        </div>
    );
};

export default Home;
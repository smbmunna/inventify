import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Inventify | Home Page</title>
            </Helmet>
            <h2>This is home</h2>
        </div>
    );
};

export default Home;
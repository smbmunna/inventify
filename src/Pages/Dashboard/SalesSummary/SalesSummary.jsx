import SalesCount from "../Components/SalesCount/SalesCount";
import SalesHistory from "../Components/SalesHistory/SalesHistory";


const SalesSummary = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold my-16">Sales Summary</h2>
            <SalesCount/>
            <SalesHistory/>
        </div>
    );
};

export default SalesSummary;
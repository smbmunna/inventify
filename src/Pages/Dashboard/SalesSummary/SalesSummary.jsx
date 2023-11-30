import SalesCount from "../Components/SalesCount/SalesCount";
import SalesHistory from "../Components/SalesHistory/SalesHistory";


const SalesSummary = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-[#6f42c1] my-16">Sales Summary</h2>
            <SalesCount/>
            <SalesHistory/>
        </div>
    );
};

export default SalesSummary;
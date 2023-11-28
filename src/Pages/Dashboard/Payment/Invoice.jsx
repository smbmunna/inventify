import {jsPDF} from "jspdf";
import useSales from "../../../hooks/useSales";

const Invoice = () => {
    const [salesCollection]= useSales();
    console.log(salesCollection)
    
    return (
        <div>
            <h1 className="text-2xl">Sales Generated Invoice</h1>

        </div>
    );
};

export default Invoice;
import useSales from "../../../../hooks/useSales";
import { useState } from "react";

const SalesHistory = () => {
    const [salesCollection, isLoading] = useSales();

    //for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;


    //sorting by add date
    const sortedSalesCollection = [salesCollection].sort((a, b) => {
        const dateA = new Date(a.addDate);
        const dateB = new Date(b.addDate);
        return dateA - dateB
    });
    //console.log(sortedSalesCollection)  
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = salesCollection.slice(indexOfFirstItem, indexOfLastItem);

    // Function to change the current page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    return (
        <div>
            <h2 className="text-4xl font-bold text-[#6f42c1] my-8 ">Sales History (Sold Products)</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-lg">
                        <tr>
                            <th> Serial.</th>
                            <th>Product Name</th>
                            <th>Selling Date</th>
                            <th>Profit</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg">
                        {
                            currentItems.map((product, index) => <tr key={parseInt(product._id)}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>{product.productName}</td>
                                <td>
                                    {product.addDate}
                                </td>
                                <td>
                                    {(product.sellingPrice - product.costPrice).toFixed(2)}
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

            {/* Pagination controls */}
            <div>
                {Array.from({ length: Math.ceil(salesCollection.length / itemsPerPage) }).map((_, index) => (
                    <button className="btn btn-warning btn-xs mx-2" key={index} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SalesHistory;
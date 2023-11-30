import useSales from "../../../../hooks/useSales";


const SalesHistory = () => {
    const [salesCollection, isLoading] = useSales();
    
    //sorting by add date
    const sortedSalesCollection = [salesCollection].sort((a, b) => {
        const dateA = new Date(a.addDate);
        const dateB =new Date(b.addDate);
        return dateA - dateB
      });
    //console.log(sortedSalesCollection)  
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }   
    return (
        <div>
            <h2 className="text-4xl font-bold text-[#6f42c1] my-8 ">Sales History</h2>
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
                            sortedSalesCollection[0].map((product, index) => <tr key={parseInt(product._id)}>
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
        </div>
    );
};

export default SalesHistory;
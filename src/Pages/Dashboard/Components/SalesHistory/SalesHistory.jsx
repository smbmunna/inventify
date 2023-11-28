import useSales from "../../../../hooks/useSales";


const SalesHistory = () => {
    const [salesCollection, isLoading] = useSales();
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }   
    
    return (
        <div>
            <h2 className="text-3xl font-bold my-8">Sales History: {salesCollection.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> Serial.</th>                            
                            <th>Product Name</th>
                            <th>Selling Date</th>
                            <th>Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            salesCollection.map((product, index) => <tr key={product._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>{product.productName}</td>
                                <td>
                                    {product.addDate}
                                </td>
                                <td>
                                   {product.sellingPrice - product.costPrice}
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
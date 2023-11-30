import useSales from "../../../../hooks/useSales";


const SalesCount = () => {
    const [salesCollection, isLoading] = useSales();
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }   
    const totalSales= salesCollection.reduce((total, item)=> total + parseFloat(item.sellingPrice),0);
    const totalInvest= salesCollection.reduce((total, item)=> total + parseFloat(item.costPrice),0)
    const totalProfit= totalSales - totalInvest;
    return (
        <div className="stats shadow">
            <div className="stat">
                <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div className="stat-title text-xl font-bold ">Total Sales</div>
                <div className="stat-value text-primary">{totalSales}</div>
                
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="stat-title text-xl font-bold ">Total Invest</div>
                <div className="stat-value text-primary">{totalInvest}</div>                
            </div>

            <div className="stat">
                <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div className="stat-title text-xl font-bold ">Total Profit</div>
                <div className="stat-value text-primary">{totalProfit.toFixed(2)}</div>                
            </div>

        </div>
    );
};

export default SalesCount;
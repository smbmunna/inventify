
import useAdminInfo from "../../../../hooks/useAdminInfo";
import useSysAdminStat from "../../../../hooks/useSysAdminStat";

const SysAdminSalesStat = () => {
    //get sysadmin stats
    const [stats, isLoading]= useSysAdminStat();
    //get admin income
    const [adminInfo]= useAdminInfo();    
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    //console.log(adminInfo);

    
    
    return (
        <div className="my-10">
            <div className="stats shadow">
            <div className="stat">
                <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div className="stat-title font-bold text-2xl">Total Income</div>
                <div className="stat-value text-primary">{adminInfo?.income}</div>
                
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="stat-title font-bold text-2xl">Total Product</div>
                <div className="stat-value text-secondary">{stats[0]}</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div className="stat-title font-bold text-2xl">Total Sales</div>
                <div className="stat-value text-primary">{stats[1]}</div>
            </div>

        </div>
        </div>
    );
};

export default SysAdminSalesStat;
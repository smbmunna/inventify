import { useState } from "react";
import useUsers from "../../../hooks/useUsers";
import SysAdminSalesStat from "../Components/SysAdminSalesStat/SysAdminSalesStat";



const SalesOverview = () => {
    
    
    //for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; 


    const [users, isLoading] = useUsers();
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    // Function to change the current page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    
    return (
        <div>
            <h2 className="text-4xl font-bold text-[#6f42c1] my-8 ">Sales Overview (For Admin Only!) </h2>

            <SysAdminSalesStat />

            <h2 className="text-4xl font-bold text-[#6f42c1] my-8 ">Users Information :{users.length} Users </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-lg">
                        <tr>
                            <th> Serial.</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg">
                        {
                            currentItems.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>{user.name}</td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {
                                        user?.role ? user?.role : <p className="font-semibold text-orange-600">Doesn't Own a Shop</p>
                                    }
                                </td>
                                <td>
                                    {
                                        !user?.role &&
                                        <button className="btn btn-warning btn-xs">Send Promotional Email</button>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

            {/* Pagination controls */}
            <div>
                {Array.from({ length: Math.ceil(users.length / itemsPerPage) }).map((_, index) => (
                    <button className="btn btn-warning btn-xs mx-2" key={index} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default SalesOverview;
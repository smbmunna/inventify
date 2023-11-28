import useUsers from "../../../hooks/useUsers";
import SysAdminSalesStat from "../Components/SysAdminSalesStat/SysAdminSalesStat";


const SalesOverview = () => {
    const [users, isLoading] = useUsers();
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    //console.log(users);
    return (
        <div>
            <h2 className="text-3xl font-bold">Sales Overview </h2>

            <SysAdminSalesStat />

            <h2 className="text-3xl font-bold">Users Information :{users.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> Serial.</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
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

        </div>
    );
};

export default SalesOverview;
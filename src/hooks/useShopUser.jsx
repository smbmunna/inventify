import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useShopUser = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    // if (!user) {
    //     // Handle the case where user is not available
    //     return <span className="loading loading-bars loading-lg"></span>
    // }
    
    const { data: usersShop, isLoading, isPending } = useQuery({
        queryKey: ['shops', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/shops/${user.email}`)
            return res.data;
        }
    })
    return [usersShop, isLoading, isPending];
};

export default useShopUser;
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useShopUser = () => {
    const {user}= useAuth();
    const axiosPublic= useAxiosPublic();
    const {data: usersShop, isLoading}= useQuery({
        queryKey: ['shops'] ,
        queryFn: async ()=>{
            const res= await axiosPublic.get(`/shops/${user.email}`)
            return res.data;  
        }
    })
    return [usersShop, isLoading];
};

export default useShopUser;
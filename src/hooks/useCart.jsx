import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useCart = () => {
    const {user}= useAuth();
    const axiosPublic= useAxiosPublic();
    const {data: cart, isLoading}= useQuery({
        queryKey: ['carts'] ,
        queryFn: async ()=>{
            const res= await axiosPublic.get(`/carts/${user.email}`)
            return res.data;  
        }
    })
    return [cart, isLoading];
};

export default useCart;
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useShop = () => {
    const axiosPublic= useAxiosPublic();
    const {data: shops, isLoading}= useQuery({
        queryKey: ['shops'] ,
        queryFn: async ()=>{
            const res= await axiosPublic.get('/shops')
            return res.data;  
        }
    })
    return [shops, isLoading];
    
};

export default useShop;
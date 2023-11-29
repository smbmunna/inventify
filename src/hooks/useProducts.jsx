import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';
import useAuth from '../hooks/useAuth';

const useProducts = () => {
    const axiosPublic= useAxiosPublic();
    const {user}= useAuth();
    const {data: products=[], isLoading, refetch}= useQuery({
        queryKey: ['products', user?.email], 
        queryFn: async ()=>{
            const res= await axiosPublic.get(`/products/${user.email}`);
            return res.data;             
        }
    })
    return [products, isLoading, refetch]    
};

export default useProducts;
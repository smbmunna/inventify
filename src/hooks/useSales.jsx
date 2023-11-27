
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';

const useSales = () => {
    const {user}= useAuth();
    const axiosPublic= useAxiosPublic();

    const {data: salesCollection}= useQuery({
        queryKey: ['sales'] ,
        queryFn: async ()=>{
            const res= await axiosPublic.get(`/sales/${user.email}`)
            return res.data;  
        }
    })

    return ([salesCollection])
};

export default useSales;
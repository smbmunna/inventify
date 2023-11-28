import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useSysAdminStat = () => {
    const axiosPublic= useAxiosPublic();
    const { data: stats , isLoading} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosPublic.get('/admin-stats');
            return res.data;
        }
    })
    return [stats, isLoading]
};

export default useSysAdminStat;
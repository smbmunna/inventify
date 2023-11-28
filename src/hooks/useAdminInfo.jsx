import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAdminInfo = () => {
    const axiosPublic = useAxiosPublic();
    const { data: adminInfo, isLoading } = useQuery({
        queryKey: ['adminInfo'],
        queryFn: async () => {
            const res = await axiosPublic.get('/adminInfo')
            return res.data;
        }
    })

    return ([adminInfo, isLoading])
};

export default useAdminInfo;
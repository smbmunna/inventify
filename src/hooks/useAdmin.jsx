import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useAdmin = () => {
    const {user}= useAuth();
    const axiosPublic= useAxiosPublic();
    //check if admin
    const{data: isAdmin, isPending:isAdminLoading}= useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async ()=>{
            const res= await axiosPublic.get(`/checkAdmin/${user.email}`);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;
import { createContext, useState } from "react";

export const AuthContext= createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser]= useState('Mahmud');



    const userInfo={
        user,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
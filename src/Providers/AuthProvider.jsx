import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading]= useState(true);

    //observe user 
    useEffect(()=>{
        const unsubscirbe =  onAuthStateChanged(auth, currentUser=>{          
              
            setUser(currentUser);
            if(currentUser){                          
                console.log(currentUser);
                setLoading(false);
           }else{
                console.log('No user logged in')
            }
        })
        return ()=>unsubscirbe();
        
    },[])

    //create new user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //update user info
    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    

    //Login user
    const loginUser= (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logout user
    const logoutUser=()=>{
        return signOut(auth);
    }

    const userInfo = {
        user,
        createUser,
        updateUser,
        setUser,
        loginUser,
        logoutUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
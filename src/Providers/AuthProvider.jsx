import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('Mahmud');
    const [loading, setLoading]= useState(true);

    //observe user 
    useEffect(()=>{
        const unsubscirbe =  onAuthStateChanged(auth, currentUser=>{          
              
            setUser(currentUser);
            setLoading(false);
            if(currentUser){                
                
                setLoading(false);
                console.log(currentUser);
                
           }else{
                console.log('No user logged in')
            }
        })
        return ()=>{
            unsubscirbe();
        };
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

    const userInfo = {
        user,
        createUser,
        updateUser,
        setUser,
        loginUser,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
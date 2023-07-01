import { useState, useEffect, useContext, createContext} from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {auth} from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
   const [user, setUser] = useState({});
   
    const googleSignIn =() => {
        const provider = new GoogleAuthProvider();
        try {
            signInWithPopup(auth, provider)   
        } catch (error) {
            <h1>Error encountered</h1>
        }
    };

    const logOut  =() => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            //console.log('User', currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    
    return (
        <AuthContext.Provider value={{googleSignIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth =() => {
    return useContext(AuthContext);
}
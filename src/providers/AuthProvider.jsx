import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

//authentication
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
const auth = getAuth(app);
const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
   //registering a user
   const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
   }
   //singIn or login a user
   const singIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
   }

   //observer auth state change
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        console.log('auth sate change',currentUser);
        setUser(currentUser);
        setLoading(false)
    })

    return () =>{
        unsubscribe()
    } 
    
   },[])


   //sign out 
   const logOut = ()=>{
        return signOut(auth);
   }


    const authInfo = {
        user,
        createUser,
        singIn,
        logOut,
        loading
    }

    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>        
       
    );
};

export default AuthProvider;
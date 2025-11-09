import React, { createContext, useEffect, useState } from 'react';
import auth from '../Auth/Auth.init';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";




export const MyContext = createContext(null);
//email register
const emailRegister = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
//email login
const emailLogin = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}   
//google login
const googleProvider = new GoogleAuthProvider();
const googleLogin = () =>{
    return signInWithPopup(auth,googleProvider);
}
//pass reset
const passReset = (email)=>{
    return sendPasswordResetEmail(auth,email);
}
const ContextProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const contextData = {
    
        emailRegister,
        user,
        setUser,
        googleLogin,
        emailLogin,
        passReset
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        
    });
    return () => unsubscribe();
    },[])
    return (
        <MyContext value={contextData}>
            {children}
        </MyContext>
    );
};

export default ContextProvider;
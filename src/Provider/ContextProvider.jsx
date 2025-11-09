import React, { createContext, useEffect, useState } from 'react';
import auth from '../Auth/Auth.init';
import {  createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const MyContext = createContext(null);
const emailRegister = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
const ContextProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const contextData = {
    
        emailRegister,
        user,
        setUser
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
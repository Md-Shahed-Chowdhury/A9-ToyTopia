import React, { createContext } from 'react';
import auth from '../Auth/Auth.init';
import {  createUserWithEmailAndPassword } from "firebase/auth";

export const MyContext = createContext(null);
const emailRegister = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
const ContextProvider = ({children}) => {
    const contextData = {
        emailRegister,
    }
    return (
        <MyContext value={contextData}>
            {children}
        </MyContext>
    );
};

export default ContextProvider;
import React, { createContext } from 'react';

export const MyContext = createContext(null);
const ContextProvider = ({children}) => {
    const contextData = {
        
    }
    return (
        <MyContext value={contextData}>
            {children}
        </MyContext>
    );
};

export default ContextProvider;
import React from 'react';
import { createContext, useEffect, useState } from 'react';
import productsData from '../Json/Products';
export const Context = createContext()

const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState(productsData)
    useEffect(() => {
        setProducts(productsData)
        // console.log(productsData)
    }, [])
    return (<Context.Provider value={products}>
        {children}
    </Context.Provider>

    )
};

export default ContextProvider;
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../api/getProductapi'

export const ProductContextData = createContext()

const ProductContext = ({ children }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
       const fetchProducts = async ()=>{
        const data = await getData();
        setProducts(data)
       }
       fetchProducts()
    }, [])

    return (
        <ProductContextData.Provider value={products}>
            <div>{children}</div>
        </ProductContextData.Provider>
    )
}

export default ProductContext
import axios from "axios";
import { children, createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({children}) =>{
    const [data, setData] = useState()


     //fetching all product from api
     const fetchAllProducts = async () => {
        try {
             const res = await axios.get('https://fakestoreapiserver.reactbd.org/api/products')
             console.log(res)
             const productsData = res.data.products
             setData(productsData)
        } catch (error) {
            console.log(error);
        }
     }
    return <DataContext.Provider value={{data,setData,fetchAllProducts}}>
        {children}
    </DataContext.Provider>
}
import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null)

export const CartProvider = ({children}) => {
    const [cartItem, setCartItem] = useState([])
    //product from productCard.jsx
    const addToCart = (product)=>{
        setCartItem([...cartItem,product])
        //console.log(cartItem)
    }
    return <CartContext.Provider value={{cartItem, setCartItem,addToCart}}>
        {children}
    </CartContext.Provider>

}
export const usecart = ()=> useContext(CartContext) 
import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null)

export const CartProvider = ({children}) => {
    const [cartItem, setCartItem] = useState([])
    // receved product from productCard.jsx
    const addToCart = (product)=>{
        const itemInCart = cartItem.find((item)=> item._id === product._id)
        if(itemInCart){
            //Increase quantity if already in court
            const updatedCart = cartItem.map((item)=>
            item._id === product._id ? {...item, quantity: item.quantity + 1} : item)
            setCartItem(updatedCart)
        } else {
            //Add new item with quantity
             setCartItem([...cartItem,{...product, quantity: 1}])
        }
       
        //console.log(cartItem)
    }

    const updateQuantity = ( cartItem, productId, action) => {
        setCartItem(cartItem.map(item => {
            if(item._id === productId){
                let newUnit = item.quantity;
                if(action === "increase"){
                    newUnit= newUnit+1
                } else if (action ==="decrease"){
                    newUnit = newUnit - 1
                }
                return newUnit > 0 ? {...item, quantity: newUnit} : null
            }
            return item;
        }).filter(item => item != null ) // remove item quantuty 0
        )
    }
    return <CartContext.Provider value={{ cartItem, setCartItem, addToCart, updateQuantity }}>
        {children}
    </CartContext.Provider>

}
export const usecart = ()=> useContext(CartContext) 
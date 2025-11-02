import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import { usecart } from '../context/CartContext';

//distructure from products.jsx
const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const {addToCart,cartItem} = usecart()

  console.log(cartItem)

    
  return (
    <div className='border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-98  hover:shadow-2xl hover:p-10 transition-all p-6 h-max'>

      <img src={product.image}
       alt="" 
       className='bg-gray-200 rounded-md'
       onClick={()=>navigate(`/products/${product._id}`)}/>
      <h1 className='line-clamp-2 p-5 font-semibold  text-neutral-700 text-lg'> {product.title} </h1>
      <p className='my-2 text-lg text-gray-800 font-bold'> ${product.price} </p>
      <button onClick={()=>addToCart(product)} 
      className='bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-1 items-center justify-center font-semibold'>
      <IoCartOutline className='w-6 h-6' />  Add to Cart </button>
      
    </div>
  )
}

export default ProductCard
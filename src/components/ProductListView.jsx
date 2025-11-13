import React from 'react'
import { useNavigate } from 'react-router'
import { usecart } from '../context/CartContext'

//Distructure from categoryProduct.jsx
const ProductListView = ({product}) => {
    const navigate = useNavigate()

    //distructure from CartContext.jsx
    const {addToCart} = usecart()

  return (
    <div className='space-y-4 mt-2 rounded-md '>
        <div className='bg-gray-100 flex gap-7 items-center p-2  rounded-md cursor-pointer '>   
             <img  onClick={()=>navigate(`/products/${product._id}`)} src={product.image} alt='' className='md:h-60 md:w-60 h-25 w-25'/>
             <div className='space-y-3'>
             <h1 className='font-bold md:text-xl text-lg line-clamp-3 hover:text-red-400 md:w-full  '>{product.title}</h1>
             <p className='font-semibold  items-center md:text-lg text-sm '> <span className='md:text-4xl text-3xl'> ${product.price} </span> </p>
             <p className='text-sm'> FREE Delivery <span className='font-semibold'> Fri, 18 Apr </span>  <br/> Or Fastest Delivery <span className='font-bold'>Tomorrow,31 March</span> </p>
             <button onClick={()=>addToCart(product)} className='bg-red-500 text-white px-3 py-1 rounded-md'> Add Cart </button>
          </div>
        </div>  
    </div>
  )
}

export default ProductListView
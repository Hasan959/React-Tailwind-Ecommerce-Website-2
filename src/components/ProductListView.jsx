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
        <div className='bg-gray-100 flex gap-7 items-center p-2 rounded-md cursor-pointer'>   
             <img  onClick={()=>navigate(`/products/${product._id}`)} src={product.image} alt='' className='h-50 w-50'/>
             <div className='space-y-3'>
             <h2 className='font-bold text-xl line-clamp-3 hover:text-red-400 '>{product.title}</h2>
             <p className='font-semibold  items-center text-lg'> <span> ${product.price} </span> </p>
             <p> FREE Delivery <span className='font-semibold'> Fri, 18 Apr </span>  <br/> Or Fastest Delivery <span className='font-bold'> Tomorrow,31 Dec</span> </p>
             <button onClick={()=>addToCart(product)} className='bg-red-500 text-white px-3 py-1 rounded-md'> Add to Cart </button>
          </div>
        </div>  
    </div>
  )
}

export default ProductListView
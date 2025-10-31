import React from 'react'
import { useNavigate } from 'react-router'

const Breadcrums = ({title}) => {
    const navigate = useNavigate()
  return (
    <div>
        <h1 className='text-xl text-gray-700 font-semibold'> <span className='cursor-pointer' onClick={()=>navigate('/')} > Home </span> 
         /<span className='cursor-pointer'onClick={()=>navigate('/products')}> Products </span> / <span> {title} </span> </h1>
    </div>
  )
}

export default Breadcrums
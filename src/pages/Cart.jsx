import React from 'react'
import { usecart } from '../context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa'
import { LuNotebookText } from 'react-icons/lu'
//cart section
const Cart = () => {
  const {cartItem} = usecart()
  console.log(cartItem)
  return (
    <div  className='mt-10 max-w-6xl mx-auto mb-5 '>
      {
        cartItem.length > 0 ? <div> 
          <h1 className='font-bold text-2xl'> My cart({cartItem.length})</h1>
          <div>
            <div className='mt-10'>
              {
                cartItem.map((item,index)=>{
                  return <div key={index} className='bg-gray-100 p-5 rounded-md flex items-center justify-between mt-3 w-full'>
                    <div className='flex items-center gap-4'>
                      <img src={item.image} alt={item.title} className='w-30 h-30 rounded-md' />
                      <div>
                      <h1 className='w-[300px] line-clamp-2 ' > {item.title} </h1>
                      <p className='text-red-500 font-semibold text-lg'> ${item.price} </p>
                      </div>
                    </div>

                    <div className='bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl'>
                      <button className='cursor-pointer'>-</button>
                      <span> 1 </span>
                      <button className='cursor-pointer'>+</button>
                    </div>

                   <span className=' hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl'>
                      <FaRegTrashAlt className='text-red-500 text-2xl cursor-pointer ' />
                  </span>
                  </div>
                })
              }
            </div>
            <div className='grid grid-cols-2 gap-20'>
              <div className='bg-gray-100 rounded-md p-7 mt-4 space-y-2 '>

                  <h1 className='text-gray-800 font-bold text-xl'> Delivery Info </h1>
                  <div className='flex flex-col space-y-1'>
                    <label htmlFor=""> Full Name </label>
                    <input type="text" placeholder='Enter Your name' className='p-2 rounded-md'/>
                  </div>

                  <div className='flex flex-col space-y-1'>
                    <label htmlFor=""> Address </label>
                    <input type="text" placeholder='Enter Your Address' className='p-2 rounded-md'/>
                  </div>

                  <div className='flex w-full gap-5'>
                    <div className='flex flex-col space-y-1 w-full'>
                       <label htmlFor=""> State </label>
                       <input type="text" placeholder='Enter Your State' className='p-2 rounded-md w-full'/>
                    </div>
                    <div className='flex flex-col space-y-1 w-full'>
                      <label htmlFor=""> Postcode </label>
                      <input type="text" placeholder='Enter Your Postcode' className='p-2 rounded-md w-full' />
                    </div>
                  </div>

                   <div className='flex w-full gap-5'>
                    <div className='flex flex-col space-y-1 w-full'>
                       <label htmlFor=""> Country </label>
                       <input type="text" placeholder='Enter Your Country' className='p-2 rounded-md w-full'/>
                    </div>
                    <div className='flex flex-col space-y-1 w-full'>
                      <label htmlFor=""> Phone No </label>
                      <input type="text" placeholder='Enter Your Number' className='p-2 rounded-md w-full' />
                    </div>
                  </div>

                  <button className='bg-red-500 text-white px-3 py-1 rounded-md mt-3 cursor-pointer'> Submit </button>
                  <div  className='flex items-center justify-center w-full'>
                  -------OR-------
                  </div>
                  <div className='flex justify-center'>
                  <button  className='bg-red-500 text-white px-3 py-2 rounded-md'> Delect Location </button>
                 </div>
            </div>

                <div className='bg-white border border-gray-100 shadow-xl rounded-xl p-14 mt-4 space-y-2 h-max '>
                   <h1 className='text-gray-800 font-bold text-xl'> Bill Details </h1>
                   <div className='flex justify-between items-center '>
                    <h1> <span> <LuNotebookText/> </span> Items Total </h1>
                   </div>
               </div>
                
            </div>
            
        </div>
          </div> : <div> cart is Empty </div>
          
      }
    </div>
  )
}

export default Cart
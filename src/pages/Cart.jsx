import React from 'react'
import { usecart } from '../context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa'
import { LuNotebookText } from 'react-icons/lu'
import { MdDeliveryDining } from 'react-icons/md'
import { GiShoppingBag } from 'react-icons/gi'
import { useUser } from '@clerk/clerk-react'
import emptyCart from "../assets/empty-cart.png"

//cart section
const Cart = ({location, getlocation}) => {
  const {cartItem, updateQuantity,deleteItem } = usecart()
  //console.log(cartItem)
  const {user} = useUser()
  console.log(user)
  const totalPrice = cartItem.reduce((total, item)=> total + item.price, 0)
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
                      <button onClick={()=>updateQuantity(cartItem, item._id,"decrease")} className='cursor-pointer'> - </button>
                      <span> {item.quantity} </span>
                      <button onClick={()=>updateQuantity( cartItem, item._id,"increase")} className='cursor-pointer'> + </button>
                    </div>

                   <span onClick={()=> deleteItem(item._id)} className=' hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl'>
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
                    <input type="text" placeholder='Enter Your name' className='p-2 rounded-md' value={user.fullName} readOnly/>
                  </div>

                  <div className='flex flex-col space-y-1'>
                    <label htmlFor=""> Address </label>
                    <input type="text" placeholder='Enter Your Address' className='p-2 rounded-md' value={location.country} readOnly/>
                  </div>

                  <div className='flex w-full gap-5'>
                    <div className='flex flex-col space-y-1 w-full'>
                       <label htmlFor=""> State </label>
                       <input type="text" placeholder='Enter Your State' className='p-2 rounded-md w-full' value={location.state} />
                    </div>
                    <div className='flex flex-col space-y-1 w-full'>
                      <label htmlFor=""> District </label>
                      <input type="text" placeholder='Enter Your District' className='p-2 rounded-md w-full' value={location.state_district} />
                    </div>
                  </div>

                   <div className='flex w-full gap-5'>
                    <div className='flex flex-col space-y-1 w-full'>
                       <label htmlFor=""> Upazela </label>
                       <input type="text" placeholder='Enter Your Upozela' className='p-2 rounded-md w-full' value={location?.county} />
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
                  <button onClick={getlocation} className='bg-red-500 text-white px-3 py-2 rounded-md'> Delect Location </button>
                 </div>
            </div>

              <div className='bg-white border border-gray-100 shadow-xl rounded-xl p-14 mt-4 space-y-2    h-max'> 
                   <h1 className='text-gray-800 font-bold text-xl'> Bill Details </h1>

                   <div className='flex justify-between items-center'>
                    <h1 className='flex gap-1 items-center text-gray-700'> <span> <LuNotebookText/> </span> Items Total </h1>
                    <p> ${totalPrice} </p>
                   </div>

                   <div className='flex justify-between items-center'>
                     <h1 className='flex gap-1 items-center text-gray-700'> <span> <MdDeliveryDining/> </span> Delivery Charge </h1>
                     <p className='text-red-500 font-semibold'> <span className='text-gray-600 line-through'> $25 </span> FREE  </p>   
                   </div>

                   <div className='flex justify-between items-center'>
                     <h1 className='flex gap-1 items-center text-gray-700'> <span> <GiShoppingBag/> </span> Handing Charge </h1>
                     <p className='text-red-500 font-semibold'> $5  </p>   
                   </div>

                   <hr className='text-gray-200'/>

                   <div className='flex justify-between items-center'>
                    <h1 className='font-semibold text-lg'> Grand Total </h1>
                    <p> ${totalPrice + 5} </p>
                   </div>

                   <div>
                    <h1 className='font-semibold text-gray-700 mb-3 mt-7'> Apply Promo Code </h1>
                    <div className='flex gap-3'>
                      <input type="text" placeholder='Enter code' className='p-2 rounded-md w-full'/>
                      <button className='bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md'> Apply </button>
                    </div>
                   </div>

                   <button className='bg-red-500 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3'> Proceed to Checkout </button>


               </div>
                
            </div>
            
        </div>
          </div> : <div className='flex flex-col gap-3 justify-center items-center  h-[600px] '> 
            <h1 className='text-red-500/80 font-bold text-5xl text-muted '> Oh no! Your cart is Empty </h1> 
            <img src={emptyCart} alt="" className='w-[400px]' />
            <button> Continue Shopping </button>
            </div>
          
      }
    </div>
  )
}

export default Cart
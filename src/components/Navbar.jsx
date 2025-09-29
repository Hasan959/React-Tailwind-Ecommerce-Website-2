import { MapPin } from 'lucide-react'
import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  const location = false
  return (
    <div className=' bg-white py-3 shadow-2xl'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          {/* logo section */}
          <div className='flex gap-7 items-center'>
            <Link to={'/'}> <h1 className='font-bold text-3xl'> <span className='text-red-500 font-serif'>N</span>ahar Shop</h1> </Link>
            <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
              <MapPin className='text-red-500' />
              <span className='font-semibold'>{location ? <div></div>:"Add Address" } </span>
              <FaCaretDown/>

            </div>
          </div>
          {/* menu section */}
          <nav>
            <ul className='flex gap-7 items-center text-xl font-semibold'>
              <NavLink to={'/'} className={({isActive})=> `${isActive ? "border-b-3 transition-all border-red-500":"text-black"} cursor-pointer`} ><li>Home</li> </NavLink>
              <NavLink to={'/products'} className={({isActive})=>`${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Products</li></NavLink>
              <NavLink to={'/about'} className={({isActive})=> `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>About</li></NavLink>
              <NavLink to={'/contact'} className={({isActive})=> `${isActive ? "border-b-3 transition-all border-red-500" : "text-black" } cursor-pointer`}><li>Contact</li></NavLink>
            </ul>
          </nav>
          <Link to={'/cart'}>
            <IoCartOutline className='h-7 w-7'/>
            <span className='bg-red-500 px-2 rounded-full absolute' >0</span>
          </Link>
        </div>
    </div>
  )
}

export default Navbar
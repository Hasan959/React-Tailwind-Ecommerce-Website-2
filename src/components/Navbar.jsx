import { MapPin } from 'lucide-react'
import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { Link } from 'react-router'

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
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Navbar
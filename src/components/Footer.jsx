import { Link } from 'react-router'
import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-200 py-10'>
        <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between' >

          {/* info */}
          <div className='mb-6 md:mb-0'>
            <Link to='/'>
            <h1 className='text-red-500 text-2xl font-bold'> Nahar Garments </h1>
               <p className='mt-2 text-sm'> Powering Your World with the Best in Fashion </p>
               <p className='mt-2 text-sm'> Nahar Garmets,Biharkol Bajar,Bagatipara,Natore </p>
               <p className='text-sm'> Emial:hasanmahmud.biddut@gmail.com </p>
               <p className='text-sm'> Phone:01755327835 </p>
            </Link>
          </div>
            

             {/* customer service link  */}
            <div className='mb-6 md:mb-0'>
              <h3 className='text-xl font-semibold'> customer Service </h3>
              <ul className='mt-2 text-sm space-y-2'>
                <li> Contact Us </li>
                <li> Shipping & Returns </li>
                <li> FAQs </li>
                <li> Order Tracking </li>
                <li> Size Guide </li>
              </ul>
            </div>

            {/* social media links */}
            <div className='mb-6 md:mb-0'>
              <h3 className='text-xl font-semibold'> Follw Us </h3>
              <div className='flex space-x-4 mt-2'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitterSquare/>
                <FaPinterest/>
              </div>
            </div>

            {/* newsletter subscription */}
            <div>
              <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
              <p className='mt-2 text-sm'> Subscribe to get special offers, free giveaways, and more </p>
              <form action="">
                <input 
                type="email"
                placeholder='your email address'
                className='w-full p-2 rounded-1-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500'
                />
                <button type='submit' className='bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700' > Subscribe </button>

              </form>
            </div> 

            {/* bottom section    */}
            <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
              <p>&copy;{new Date().getFullYear()} <span className='text-red-500'> Nahar </span> All right reserved </p>
            </div>
        </div>

    </footer>
  )
}

export default Footer
import React from 'react'
import Carousel from '../components/Carousel'
import MidBanner from '../components/MidBanner'
import Features from '../components/Features'
//Home page for components routes
const Home = () => {
  return (
    <div className=' min-h-screen w-full  overflow-x-hidden'>
       <Carousel/>
       <MidBanner/>
       <Features/>
    </div>
  )
}

export default Home

import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import FilterSection from '../components/FilterSection'
import Loading from "../assets/Loading4.webm"
import ProductCard from '../components/ProductCard'




const Products = () => {
  const {data, fetchAllProducts } = getData()
  useEffect(()=>{
    fetchAllProducts()
  },[])
  
  

  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10'>
        {
          data?.length > 0 ? (
            <div className='flex gap-8'>
              <FilterSection/>

              <div className='grid grid-cols-3 gap-5 mt-10'>
                {
                  data?.map((product,index)=> {
                    return <ProductCard key={index} product={product} />
                    
                  })

                }
              </div>

            </div>
          ) : (
            <div className='flex items-center justify-center h-[500px] '>
              <video muted autoPlay loop >
                <source src={Loading} type='video/webm'/>
              </video>

            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products

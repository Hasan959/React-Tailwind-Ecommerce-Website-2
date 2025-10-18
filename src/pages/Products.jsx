import React from 'react'
import { getData } from '../context/DataContext'


const Products = () => {
  const{data} = getData()

  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10'>
        {
          data?.length
        }
      </div>
    </div>
  )
}

export default Products
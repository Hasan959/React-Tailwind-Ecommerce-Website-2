import React from 'react'
import { getData } from '../context/DataContext'
//category,brand & price range section data set
const FilterSection = ({search, setSearch, category, setCategory, brand, setBrand, priceRange, setPriceRange }) => {
  const { categoryOnlyData,brandOnlyData} = getData()
  return (
    <div className='bg-gray-100 mt-10 p-4 rounded-md h-max '>
        <input type="text" placeholder='search..' className='bg-white p-2 rounded-md border-gray-400 border-2' />

        {/* category section data set */}
        <h1 className='mt-5 font-semibold text-xl' > Category </h1>
        <div className='flex flex-col gap-2 mt-3'>
          {
            categoryOnlyData?.map((item,index)=> {
              return <div key={index} className='flex gap-2 '>
                <input type="checkbox" />
                <button className='cursor-pointer uppercase ' > {item} </button>
              </div>
            } )
          }
        </div>

        {/* brand only data */}
        <h1 className='mt-5 font-semibold text-xl mb-3' > Brand </h1>
        <select name="" id="" className='bg-white w-full p-2 border-gray-200  rounded-md '>
          
            {
            brandOnlyData?.map((item,index)=>{
              return <option key={index}value={item} > {item.toUpperCase()} </option>
            })
            }
        </select>

        {/* price range */}
        <h1 className='mt-5 font-semibold text-xl mb-3'> Price Range </h1>
        <div>
          <label htmlFor=""> Price Range: $0 - $500 </label>
          <input type="range" name='' id='' />
        </div>
        <button className='bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer'> Reset Filters </button>


    </div>
  )
}

export default FilterSection
import React from 'react'
import { getData } from '../context/DataContext'
//search,category,brand & price range section data set
const FilterSection = ({search, setSearch, category,setCategory, brand, setBrand, priceRange, setPriceRange,handleCategoryChange, handleBrandChange }) => {
  const { categoryOnlyData,brandOnlyData} = getData()
  return (
    <div className='bg-gray-100 mt-10 p-4 rounded-md h-max '>
        <input type="text" placeholder='search..'
        value={search}
        onChange={(e)=>setSearch(e.target.value)  }
         className='bg-white p-2 rounded-md border-gray-400 border-2' />


        {/* category section data set */}
        <h1 className='mt-5 font-semibold text-xl' > Category </h1>
        <div className='flex flex-col gap-2 mt-3'>
          {
            categoryOnlyData?.map((item, index)=> {
              return <div key={index} className='flex gap-2 '>      
                <input type="checkbox" name={item} checked={category === item} value={item} onChange={handleCategoryChange}  />
                {/* category all item button(all,women,men,kids) */}
                <button className='cursor-pointer uppercase'> {item} </button>
              </div>
            } )
          }
        </div>

        {/* brand only data */}
        <h1 className='mt-5 font-semibold text-xl mb-3' > Brand </h1>
        <select name="" id="" className='bg-white w-full p-2 border-gray-200  rounded-md' value={brand} onChange={handleBrandChange} >
          
            {
            brandOnlyData?.map((item, index)=>{
              return <option key={index} value={item} > {item.toUpperCase()} </option>
            })
            }
        </select>

        {/* price range */}
        <h1 className='mt-5 font-semibold text-xl mb-3'> Price Range </h1>
        <div>
          <label htmlFor=""> Price Range: ${priceRange[0]} - ${priceRange[1]} </label>
          <input type="range" name='' id='' value={priceRange[1]} onChange={(e)=>setPriceRange([priceRange[0],Number(e.target.value )])}/>
          
        </div>
        
        <button className='bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer' > Reset Filters </button>


    </div>
    
  )
}

export default FilterSection
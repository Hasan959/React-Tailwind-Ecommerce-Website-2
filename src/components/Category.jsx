import React, { useEffect } from 'react'
import {  getData } from '../context/DataContext'
//useContext use from DataContext.jsx
//category.jsx show in carousel.jsx component
const Category = () => {
    const {data, fetchAllProducts} = getData()

    const getUniqueCategory = (data, property) => {
      let newVa1 = data?.map((curElem) =>{
        return curElem[property]
      })
      newVa1 = [...new Set(newVa1)]
      return newVa1
    }

    const categoryOnlyData = getUniqueCategory(data,"category")
    console.log(categoryOnlyData);

    useEffect(()=>{
      fetchAllProducts()
    },[])
    
  return (
    <div className='bg-[#101829]'>
      <div className='max-w-7xl mx-auto flex items-center justify-center py-7 px-4'>

        {
          categoryOnlyData.map((item, index)=>{
            return <div key={index} >
              <button>  {item} </button>
            </div>
          })
        }

      </div>
    </div>
  )
}

export default Category
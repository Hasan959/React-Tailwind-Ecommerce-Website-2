import React from 'react'
import {  getData } from '../context/DataContext'
//useContext
const Category = () => {
    const {data} = getData()

    const getUniqueCategory = (data, property) => {
      let newVA1 = data?.map((curElem) =>{
        return curElem[property]
      })
    }
    
  return (
    <div>Category</div>
  )
}

export default Category
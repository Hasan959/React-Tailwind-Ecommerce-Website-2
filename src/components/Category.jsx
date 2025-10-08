import React from 'react'
import {  getData } from '../context/DataContext'
//useContext
const Category = () => {
    const {data} = getData
  return (
    <div>Category</div>
  )
}

export default Category
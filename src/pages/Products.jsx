import React, { useEffect, useState } from 'react'
import { getData } from '../context/DataContext'
import FilterSection from '../components/FilterSection'
import Loading from "../assets/Loading4.webm"
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'




const Products = () => {
  const {data, fetchAllProducts } = getData()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [brand, setBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0,200])
  const [page, setPage] = useState(1)
  
  useEffect(()=>{
    fetchAllProducts()
  },[])

  const handleCategoryChange =(e)=> {
    setCategory(e.target.value)
    //console.log(category)
  }
  const handleBrandChange =(e)=> {
    setBrand(e.target.value)
  }
  const pageHandler = (selectedPage)=> {
    setPage(selectedPage)
  }

  

   const filteredData = data?.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase()) && (category === "All" || item.category === category) &&
    (brand === "All" || item.brand === brand) &&
     item.price >= priceRange[0] && 
     item.price <= priceRange[1])

     const dynamicPage = Math.ceil(filteredData?.length / 6)
  

  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10'>
        {
          data?.length > 0 ? (
            <>
            
            <div className='flex gap-8'>
              <FilterSection search={search} setSearch ={setSearch} category={category} setCategory={setCategory} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange}/>

              <div className='grid grid-cols-3 gap-5 mt-10'>
                {/* all data get from props product={product} */}
                {
                  filteredData?.slice(page * 6 - 6,page *6).map((product, index)=>{
                    return <ProductCard key={index} product={product} />
                  })
                }
              </div>
            </div>
             <Pagination pageHandler={pageHandler}  page={page} dynamicPage={dynamicPage}/>

            </>
            
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

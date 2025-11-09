import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loading from "../assets/Loading4.webm"
import { ChevronLeft } from 'lucide-react'
import ProductListView from '../components/ProductListView'

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

  const getFilterData = async () => {
    try {
      //  products endpoint থেকে ডেটা আনা
      const res = await axios.get(`https://fakestoreapiserver.reactbd.org/api/products`)
      console.log("API Response:", res.data)

      // প্রথমে সব প্রোডাক্ট নাও
      const allProducts = res.data.data

      //  তারপর category দিয়ে ফিল্টার 
      const filtered = allProducts.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      )

      setSearchData(filtered)
    } catch (error) {
      console.error("Error fetching products:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getFilterData()
  }, [category])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <video src={Loading} type="video/webm" autoPlay loop muted />
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
      <button className="bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center">
        <ChevronLeft /> Back
      </button>

      {Array.isArray(searchData) && searchData.length > 0 ? (
        searchData.map((product, index) => (
          <ProductListView key={index} product={product} />
        ))
      ) : (
        <p className="text-center text-gray-500">No products found in this category.</p>
      )}
    </div>
  )
}

export default CategoryProduct




// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'
// import Loading from "../assets/Loading4.webm"
// import { ChevronLeft } from 'lucide-react'
// import ProductListView from '../components/ProductListView'

// const CategoryProduct = () => {
//     const [searchData,setSearchData] = useState([])
//     const params = useParams()
//     const category = params.category
//     console.log(category);

//     const getFilterData = async ()=> {
//         try{
//             const res = await axios.get(`https://fakestoreapiserver.reactbd.org/api/products`)
//             //console.log("API Response:", res.data)
//             const data = res.data.data
//             setSearchData(data)
            

//         }catch(error){
//             console.log(error)
//         }
//     }

//     useEffect(()=>{
//         getFilterData()
//     },[])



//   return (
//     <div>
//          {
//             searchData.length>0?(
//                 <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
//                     <button className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'> <ChevronLeft/> Back </button>
//                     {
//                         searchData.map((product,index) => {
//                             return <ProductListView key={index} product={product}/>
//                         })
//                     }
//                 </div>
//             ):(
//                 <div className='flex items-center justify-center h-[400px]'>
//                     <video src={Loading} type='video/webm' autoPlay loop muted />

//                 </div>
//             )
//          }
//     </div>
//   )
// }

// export default CategoryProduct
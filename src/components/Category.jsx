
import { useNavigate } from 'react-router'
import {  getData } from '../context/DataContext'
//useContext use from DataContext.jsx
//category.jsx show in carousel.jsx component
const Category = () => {
    const { categoryOnlyData} = getData()
    const navigate = useNavigate()

    //women,men, kids button
  return (
    <div className='bg-[#101829]'>
      <div className='max-w-7xl mx-auto flex  gap-4 items-center justify-around  py-7 px-4'>

        {
          categoryOnlyData.map((item, index)=>{
            return <div key={index} >
              <button onClick={()=>navigate(`/category/${item}`)} className='uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded'>{item}</button>
            </div>
          })
        }

      </div>
    </div>
  )
}

export default Category
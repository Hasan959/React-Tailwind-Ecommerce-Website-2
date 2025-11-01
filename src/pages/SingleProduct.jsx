


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../assets/Loading4.webm"
import Breadcrums from "../components/Breadcrums";
import { IoCartOutline } from "react-icons/io5";

const SingleProduct = () => {
  const { id } = useParams(); // URL থেকে id নিচ্ছি
  const [singleProduct, setSingleProduct] = useState(null);
  const [selectedSize, setSelectedSize]= useState(null)

  const getSingleProduct = async () => {
    try {
      const res = await axios.get("https://fakestoreapiserver.reactbd.org/api/products");
      const allProducts = res.data.data// এখানে সব প্রোডাক্ট আছে

      console.log("All products:", allProducts);

      // এখন সেই id অনুযায়ী প্রোডাক্ট খুঁজে বের করি
      const product = allProducts.find((item) => item._id === Number(id));

      console.log("Matched Product:", product); //  এখানে তুমি পুরো details দেখবে
      setSingleProduct(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  },[]);

  // const OriginalPrice = Math.round(singleProduct.price +(singleProduct.price * singleProduct.discount / 100) )

  

  return (
    <>
    {
    singleProduct ? <div className="px-4 pb-4  md:px-0 ">
         <Breadcrums title= {singleProduct.title} />
        <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10 ">
                  {/* product image */}
                 <div className="w-full flex gap-12">
                 <img src={singleProduct.image} alt={singleProduct.title} className="rounded-2xl w-full object-cover " />
                 {/* product details */}
                <div className="flex flex-col gap-6">
                <h1 className=" md:text-3xl font-bold text-gray-800"> {singleProduct.title} </h1>
                <div className="text-gray-700"> {singleProduct.brand?.toUpperCase() }/ <span className="text-red-600">{singleProduct.category?.toUpperCase()}</span> {singleProduct.size.join(",")} 
                </div>
                <p className="text-xl text-red-500 font-bold"> ${singleProduct.price}  </p>
                <p className="text-gray-600"> {singleProduct.description} </p>
                

                {/* quantity selector */}
                <div className="flex items-center gap-4">
                  <label htmlFor="" className="text-sm font-medium text-gray-700 " > Quantity: </label>
                  <input type="number" min={1} value={1} className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>

                <div>
                  <button className=" px-3 flex items-center gap-2 py-2 text-lg bg-red-500 text-white rounded-md  "><IoCartOutline className="w-6 h-6"/>Add to Cart</button>
                </div>
                

               <div className="flex gap-2">
               {singleProduct.size.map((s,index) => (
               < button key={index} onClick={()=>setSelectedSize(s)} className={`px-4 py-2 rounded-md border transition ${selectedSize === s ? "bg-red-700 text-white border-red-500" : "bg-white text-gray-400 hover:bg-red-500"}`}>
               {s}
              </button>
               ))}
              {selectedSize && (
                <p className="mt-3 text-sm text-gray-600">
               Selected size: <span className="text-red-500 font-semibold">{selectedSize}</span>
                </p>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>              
            :
         <div className='flex items-center justify-center h-screen '>
         <video muted autoPlay loop >
        <source src={Loading} type='video/webm'/>
       </video>
        
      </div>
    }
  </>
    
  )
};

export default SingleProduct;







// const SingleProduct = () => {
//   const params =  useParams()
  
//   const [singleProduct, setSingleProduct] = useState(null);
//   console.log(params);

//   const getSingleProduct = async () => {
//     try {
//       const res = await axios.get("https://fakestoreapiserver.reactbd.org/api/products");
//       const product = res.data.product
      
//       setSingleProduct(product);

//     try {
//       const res = await axios.get("https://fakestoreapiserver.reactbd.org/api/products");
//       const product= res.data.product

//       setSingleProduct(product);
//       console.log(res); 
      
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getSingleProduct();
//   }, []);

// product: id: 1, title: "Long sleeve Jacket", brand: "FashionTrend", price: 150, id: 2, title: "Jacket with wollen hat", brand: "CozyWear", price: 65,





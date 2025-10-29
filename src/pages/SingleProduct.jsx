


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../assets/Loading4.webm"
import Breadcrums from "../components/Breadcrums";

const SingleProduct = () => {
  const { id } = useParams(); // URL থেকে id নিচ্ছি
  const [singleProduct, setSingleProduct] = useState(null);

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
  }, []);

  

  return (
    <>
    {
        singleProduct ? <div className="px-4 pb-4 md:px-0">
                        <Breadcrums title= {singleProduct.title} />
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




// <div className="p-6">
//       <h1 className="text-2xl font-bold mb-3">{singleProduct.title}</h1>
//       <img
//         src={singleProduct.image}
//         alt={singleProduct.title}
//         className="w-60 rounded mb-3"
//       />
//       <p className="text-gray-600 mb-2">{singleProduct.description}</p>
//       <p className="font-semibold">Brand: {singleProduct.brand}</p>
//       <p className="font-semibold">Category: {singleProduct.category}</p>
//       <p className="font-semibold">Price: ${singleProduct.price}</p>
//       <p className="font-semibold">Stock: {singleProduct.stock}</p>
//       <p className="font-semibold">Rating: {singleProduct.rating}</p>
//     </div>








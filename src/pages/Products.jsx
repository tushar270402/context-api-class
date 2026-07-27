// import React, { useContext } from 'react'
// import { ProductContextData } from '../context/ProductContext'
// import { Link } from 'react-router-dom';

// const Products = () => {

//     let allProducts = useContext(ProductContextData);
//     return (
//         <div>
//             <h1 className='text-center m-10 font-bold text-4xl'>All Products</h1>
//             <div className='flex flex-wrap gap-2'>

//                 {allProducts.map((elem, idx) =>
//                     <Link to={`/products/${elem.id}`} key={idx} className='h-80 bg-gray-50 p-5 w-50 '>
//                         <img src={elem.image} className='h-50 object-cover w-full ' />
//                         <h1 className='mt-5 text-sm'>{elem.title}</h1>
//                     </Link>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Products

import React, { useContext } from "react";
import { ProductContextData } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const allProducts = useContext(ProductContextData);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-10">
          🛍️ All Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {allProducts.map((elem) => (
            <Link
              to={`/products/${elem.id}`}
              key={elem.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-64 p-5 flex justify-center items-center bg-white">
                <img
                  src={elem.image}
                  alt={elem.title}
                  className="h-full object-contain"
                />
              </div>

              <div className="p-4 border-t">

                <h2 className="font-semibold text-lg line-clamp-2 h-14">
                  {elem.title}
                </h2>

                <p className="text-green-600 font-bold text-xl mt-3">
                  ${elem.price}
                </p>

                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                  View Details
                </button>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Products;
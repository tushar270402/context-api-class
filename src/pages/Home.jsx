// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Home = () => {
//     const navigate = useNavigate()
//   return (
//     <div className='flex flex-col items-center justify-center h-[100vh] '>
//         <h1 className='font-bold text-6xl'>Welcome To Our Shopping Platform</h1>
//         <button onClick={()=> navigate("/products")} className='bg-red-500 p-3 text-white mt-10'>Explore Products</button>
//     </div>
//   )
// }

// export default Home

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-purple-100 flex items-center justify-center">
      <div className="text-center max-w-3xl px-6">

        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-800 leading-tight">
          Welcome to <span className="text-blue-600">ShopEase</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Discover thousands of quality products at unbeatable prices.
          Shop the latest fashion, electronics, jewelry, and much more—all in one place.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <button
            onClick={() => navigate("/products")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
          >
            Explore Products →
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;
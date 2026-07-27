// import React, { useContext } from 'react'
// import { ProductContextData } from '../context/ProductContext'
// import { useParams } from 'react-router-dom'

// const ProductDetails = () => {
//     const allProducts = useContext(ProductContextData)
//     let {id} = useParams()
//     let selectedProduct = allProducts.find((elem)=> Number(id)== elem.id);
//     console.log(selectedProduct)
//     if(!selectedProduct){
//         return <h1>Loading...</h1>
//     }
//   return (
//     <div>
//         <img src={selectedProduct.image} alt="" />
//         <h1>{selectedProduct.title}</h1>
//     </div>
//   )
// }

// export default ProductDetails

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h1 className="text-center mt-10 text-xl">Loading...</h1>;
  }

  if (!product) {
    return <h1 className="text-center mt-10 text-xl">Product not found!</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8 flex gap-10">
      <div className="w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain"
        />
      </div>

      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <p className="text-gray-600">{product.category}</p>

        <p className="text-2xl font-semibold text-green-600">
          ${product.price}
        </p>

        <p>{product.description}</p>

        <p>
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
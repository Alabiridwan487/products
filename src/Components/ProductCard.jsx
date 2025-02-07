// import React from 'react'
// import { Link } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   console.log(product);
//   return (
//     <>
//       <div className='border rounded-lg'>
//       Image: <img src={product.image} alt="" />
//       Category: {product.category}
//       Price: {product.price}
//       <Link to={`${product.id}`}>
//         <button> View More Detail...</button>
//       </Link>
//       </div>
//     </>
//   )
// }

// export default ProductCard

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  console.log(product);

  return (
    <>
    <div className="bg-white shadow-lg rounded-2xl p-4 w-full sm:w-64 md:w-72 lg:w-80 transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="flex justify-center">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-48 w-40 object-contain mb-4 rounded-md"
        />

        </div>
      
      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
        {product.title}
      </h3>
      
      <p className="text-gray-500 text-sm mt-2 capitalize">{product.category}</p>
      
      <p className="text-xl font-bold text-green-600 mt-2">${product.price}</p>


        <Link
          to={`/product/${product.id}`}
          className="mt-3 block text-center bg-slate-700 text-white py-2 rounded hover:bg-slate-600 transition"
        >
          View More Details
        </Link>

      </div>
    </>
  );
};

export default ProductCard;
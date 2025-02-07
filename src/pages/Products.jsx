// import React, { useState, useEffect } from 'react'
// import ProductCard from '../Components/ProductCard';
// import { useNavigate } from 'react-router-dom';

// const Products = () => {
//   const [product, setProduct] = useState([]);
//   const navigate = useNavigate();


//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const data = await fetch("https://fakestoreapi.com/products");
//         const response = await data.json();
//         setProduct(response)
//       } catch (error) {
//         console.log(error.message)


//       }
//     }
//     fetchProduct();
//   }, [])
//   return (
//     <div className='container mx-auto p-6'>

//       <div className='p-6'>
//       <h3>Product</h3>
//       <button onClick={() => { navigate(-1) }}>Go back</button>
//       <br />

//       This is product

//       {
//         product.map((p, index) => {
//           console.log(p);
//           return (
//             <ProductCard key={index} product={p} />
//           )
//         })
//       }
//       </div>

//     </div>
//   )
// }

// export default Products

import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';


const Products = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products?limit=9");
        const response = await data.json();
        setProduct(response)
      } catch (error) {
        console.log(error.message)


      }
    }
    fetchProduct();
  }, [])

  return (
    <div className='mt-12  '>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        {
          product.map((p, index) => {
            console.log(p);
            return (
              <ProductCard key={index} product={p} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Products



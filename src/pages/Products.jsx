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



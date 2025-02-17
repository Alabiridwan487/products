import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';



const Products = () => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')


  const navigate = useNavigate();

  const filteredProduct = (price) => {
    if (!price) {
      setProduct(filterProduct);
    }
    else {
      const result = filterProduct.filter((p) => p.price > price);
      setProduct(result);
    }
  }


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products?limit=9");
        const response = await data.json();
        setProduct(response)
        setFilterProduct(response)
      } catch (error) {
        console.log(error.message)


      }
    }
    fetchProduct();
  }, [])
  const searchedProducts = product.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()) );

  return (
    <div className='container mx-auto p-6'>
      <div>
        <input type="text"
          placeholder='Search products...'
          className='relative left-[500px] bottom-26 px-4  border py-2 rounded-md'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <select
        onChange={(e) => {
          filteredProduct(Number(e.target.value));
        }}

        className='relative left-[1000px] bottom-26' name='' id=''>
        <option value="">---All---</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols- gap-6">

        {
          searchedProducts.map((p, index) => {
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





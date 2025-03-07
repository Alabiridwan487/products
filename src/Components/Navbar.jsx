import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import CartDrop from './CartDrop';

const Navbar = () => {

  const [showCartItem, setShowCartItem] = useState(false)
  const cart = useSelector((state) => state.cart.cartCount);
  console.log(showCartItem);


  return (
    <div className=' flex px-10 items-center space-x-[1150px] bg-slate-800 h-24 text-white'>
      <Link to={'/'}>
        <img src="./kiitechwhite-removebg-preview.png" alt="" />
      </Link>

      <div className="flex justify-center items-center h-screen">
        <div className="flex gap-10 items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setShowCartItem((prev) => !prev)}>
            <FaShoppingCart className="h-6 w-6 text-gray-100" />
            {cart && <span className="text-red-500">{cart}</span>}
          </div>
          {showCartItem && <CartDrop />}


          <Link to={"/login"}>
            <h3 className="text-xl text-gray-200">Login</h3>
          </Link>


          <div className="bg-green-600 px-2 w-20 h-10 text-center flex rounded hover:bg-green-700">
            <Link to={"/sign-up"} className='relative top-2 left-0.5'>Sign Up</Link>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Navbar


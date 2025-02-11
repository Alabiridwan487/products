import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import CartDrop from './CartDrop';
import { BsQuestionOctagon } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar = () => {

  const [showCartItem, setShowCartItem] = useState(false)
  const cart = useSelector((state) => state.cart.cartCount);
  console.log(showCartItem);


  return (
    <div className=' flex px-10 items-center space-x-[1150px] bg-slate-800 h-24 text-white'>
      <Link to={'/'}>
        <img src="./kiitechwhite-removebg-preview.png" alt="" />
      </Link>

      <div className=' flex gap-20'>
        <div className='flex gap-3'>
          <FaShoppingCart onClick={() =>
            setShowCartItem((previous) => !previous)} className='h-6 w-6' />
          {cart}
        </div>
        {showCartItem && <CartDrop />}


        <div className='flex gap-15'>
          <div className='flex gap-2'>
            <BsQuestionOctagon className='text-2xl' />
            <h4>Help</h4>
            <RiArrowDropDownLine />
          </div>
        </div>

      </div>
    </div>

  )
}

export default Navbar


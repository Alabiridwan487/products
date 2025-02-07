import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=' flex  px-10 items-center space-x-[1150px] bg-slate-800 h-24 text-white'>
        <Link to={'/'}>
        <h2 className='text-4xl'>KiiTech</h2>
        </Link>

        <div className=' flex gap-20'>
        <div>
        <FaShoppingCart className='h-6 w-6'/>
        </div>

        <div>
            <button>Users</button>
        </div>
        </div>
    </div>

  )
}

export default Navbar

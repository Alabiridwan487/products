import React from 'react';
import { Home, Settings, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
      <aside className='bg-slate-800 text-white h-screen w-80 p-5 shadow-lg mt-5 rounded-r-lg'>
      <h1 className='text-xl font-bold mb-6 shadow-xl text-amber-300'>Dashboard</h1>

      <nav>
        <ul className='space-y-4'>
          <Link to={'/'} className='flex items-center gap-3 p-2 hover:bg-slate-900 rounded cursor-pointer'>
            <Home size={20} />
            <span>Home</span>
          </Link>

          <Link to={'/product'} className='flex items-center gap-3 p-2 hover:bg-slate-900 rounded cursor-pointer'>
            <ShoppingBag size={20} />
            <span>Products</span>
          </Link>
          
          <li className='flex items-center gap-3 p-2 hover:bg-slate-900 rounded cursor-pointer'>
            <Settings size={20} />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
    </aside>
    </div>
  );
};

export default SideBar;



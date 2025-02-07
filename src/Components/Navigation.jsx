import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';



const Navigation = () => {

  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }
    
    
  return (
    <>
      <div className='flex items-center gap-6 px-8 my-8'>
        <button onClick={() => {navigate(-1)}} className='bg-slate-700 h-12 w-32 text-white rounded-xl'>Previous</button>
        
      </div>
    </>
  )
}

export default Navigation;
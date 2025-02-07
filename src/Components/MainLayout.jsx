import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import SideBar from './SideBar'



const MainLayout = () => {
  return (
    <>
      <div className='flex flex-col'>
        <Navbar/>

        <div className=' flex flex-grow'>
          <SideBar/>


          <div className='flex-grow p-6 '>
            <Navigation/>
            <Outlet/>

          </div>
        </div>
      </div>
    </>
  )
}

export default MainLayout

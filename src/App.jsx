import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import MainLayout from './Components/MainLayout'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Home from './pages/Home'
import CheckOut from './pages/CheckOut'
// import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' exact element={<MainLayout />}>
          <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Products />}/>
              <Route path='product/:id' element={<ProductDetail />} />
              <Route path='checkout' element={<CheckOut />} />
            </Route>
          
        </Routes>
      </Router>
      {/* <Home/>
    <Outlet/> */}

    </>
  )
}

export default App


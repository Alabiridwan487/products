import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import MainLayout from './Components/MainLayout'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Home from './pages/Home'
import CheckOut from './pages/CheckOut'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { useSelector } from 'react-redux'
// import Navbar from './Components/Navbar'

const App = () => {
  const token = useSelector((data) => data.auth);
  return (
    <Router>
      <Routes>
        {!token ? (
          <>
            <Route path='/' element={<Navigate to="/login" />} />
            <Route path='/login' element={<Login />} />
          </>
        ) : (

          <>
            <Route path='/dashboard' element={<MainLayout />}>
              <Route index element={<Home />} />
            </Route>

            <Route path='/' element={<MainLayout />}>
              <Route path='/product' element={<Products />} />
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='checkout' element={<CheckOut />} />
            </Route>


            <Route path='*' element={<Navigate to="/login" />} />
            <Route path='login' element={<Login />} />
            <Route path='sign-up' element={<SignUp />} />

          </>

        )}

      </Routes>
    </Router>

  );
};

export default App;



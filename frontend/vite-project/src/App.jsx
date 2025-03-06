import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Mens from './Mens'
import Womens from './Womens'
import Product from './Product'
import AdminHome from './Admin/AdminHome'
import AdminLogin from './Admin/AdminLogin'
import AdminDashboard from './Admin/AdminDasboard'
import UploadProduct from './Admin/UploadProduct'
import ViewProduct from './ViewProduct'
import Cart from './Cart'
import Checkout from './Checkout'
import Signup from './Regisration'
import Login from './Login'
import CustomerOrders from './Admin/CustomerOrders'
import Kids from './kids'
import Navbar from './Navbar'
import Mobile from './Mobile'
import Contact from './Contact'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Product/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='mens' element={<Mens/>}/>
        <Route path='womens' element={<Womens/>}/>
        <Route path='kids' element={<Kids/>}/>
        <Route path='mobile' element={<Mobile/>}/>
      
        <Route path="viewProduct/:id" element={<ViewProduct />}/>  
        
        </Route>
       
      <Route>
      <Route path="/" element={<Navbar/>}>
      <Route path="product" element={<Product/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path="registration" element={<Signup/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path="login" element={<Login/>}/>
        </Route>
      </Route>

  

  
      <Route path='/admin' element={<AdminHome/>}>
      <Route index element={<AdminLogin/>}/>
      <Route path='adminDashboard' element={<AdminDashboard/>}>
      <Route index element={<UploadProduct/>}/>
      <Route path='uploadproduct' element={<UploadProduct/>}/>
      <Route path="customerOrder" element={<CustomerOrders/>}/>
      </Route>
      </Route>


  
    
    
    
      </Routes>
    
    </BrowserRouter>
    
    
    
    
    
    </>
  )
}

export default App
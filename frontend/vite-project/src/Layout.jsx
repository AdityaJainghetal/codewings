import React from 'react'
import Topmenu from './Topmenu'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Banner from './Banner'


const Layout = () => {
  return (
    <>
    <Topmenu/>
    <Banner/>
    <br />

    <Outlet/>
    <br />
    <br />
    <Footer/>
    
    </>
  )
}

export default Layout
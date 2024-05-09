import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <div>
        <div className='border-b'>
          <Navbar/>
        </div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout
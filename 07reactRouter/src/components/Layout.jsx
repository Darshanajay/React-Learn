import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
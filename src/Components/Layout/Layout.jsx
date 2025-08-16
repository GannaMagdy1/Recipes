import React from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'


const Layout = () => {
  return (
    <>
      <div>
        <SideBar />
        <Outlet></Outlet>
        <Footer />
      </div>
    </>
  )
}

export default Layout
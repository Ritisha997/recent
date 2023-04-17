import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import './index.scss'

const SharedLayout = () => {
  return (
    <>
    <div className='container'>
      <Sidebar/>
      <div>
        <Navbar/>
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
    </>
  )
}

export default SharedLayout

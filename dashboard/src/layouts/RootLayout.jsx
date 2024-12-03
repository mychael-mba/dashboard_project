import React from 'react'
import { SideNav } from '../components/SideNav'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div className='main-page-container'>
      <div className="side-nav-container">
        <SideNav />
      </div>

      <div className='outlet-container'>
        <Outlet />
      </div>
    </div>
  )
}

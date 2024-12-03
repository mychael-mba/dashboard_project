import React from 'react'
import Income from '../routes/Income'
import { Outlet } from 'react-router-dom'

const IncomeLayout = () => {
  return (
    <div className='income-layout container'>
      <div className="top-tab-container">
        <Income/>
      </div>
      
      <div className="bottom-tab-container">
        <Outlet/>
      </div>
    </div>
  )
}

export default IncomeLayout
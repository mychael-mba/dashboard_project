import React from 'react'
import { useNavigate } from 'react-router-dom'

const Income = () => {
  // UseNav for toggling between tabs on the Income page
  const incomeNav = useNavigate()

  return (
    <>
      <div className="tab-container">
        <button onClick={() => incomeNav('fiat')}>Fiat Income</button>
        <button onClick={() => incomeNav('crypto')}>Crypto Income</button>
        <button onClick={() => incomeNav('total')}>Total Income</button>
      </div>
    </>
  )
}

export default Income
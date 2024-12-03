import React from 'react'

export default function HeadingGroup({headerText, amount, unitCurrency}) {
  return (
    <div className="fiat-header-container">
        <div className="fiat-text-header-container">
            <h1>{headerText}</h1>
        </div>

        <div className="fiat-amount-header-container">
          <h1>{amount}</h1>
          <select name="currency" id="">
            <option value="">{unitCurrency}</option>
          </select>
        </div>
    </div>
  )
}

import React from 'react'
import income from '../assets/income.svg'
import expenses from '../assets/expenses.svg'
import sms from '../assets/sms.svg'
import investments from '../assets/investments.svg'
import settings from '../assets/settings.svg'
import { NavLink } from 'react-router-dom'

export const SideNav = () => {
  return (
    <div className="side-bar-container">
      <div className="nav-items-container">
        <NavLink to={'income'}>
          <div className="income-container">
            <div className="icon-container">
              <img src={income} alt="income-icon" />
            </div>
            <div className="text-container">
              <h2>Income</h2>
              <p>Click to view income earned</p>
            </div>
          </div>
        </NavLink>

        <NavLink to={'expenses'}>
          <div className="expenses-container">
            <div className="icon-container">
              <img src={expenses} alt="expenses-icon" />
            </div>
            <div className="text-container">
              <h2>Expenses</h2>
              <p>Click to view expenses</p>
            </div>
          </div>
        </NavLink>
        
        <NavLink to={'sms'}>
          <div className="sms-container">
            <div className="icon-container">
              <img src={sms} alt="sms-icon" />
            </div>
            <div className="text-container">
              <h2>SMS Alerts</h2>
              <p>Click to view financial sms notifications</p>
            </div>
          </div>
        </NavLink>
        
        <NavLink to={'/investments'}>
          <div className="investments-container">
            <div className="icon-container">
              <img src={investments} alt="investments-icon" />
            </div>
            <div className="text-container">
              <h2>Investments</h2>
              <p>Click to view your investments</p>
            </div>
          </div>
        </NavLink>

        <NavLink to={'settings'}>
          <div className="settings-container">
            <div className="icon-container">
              <img src={settings} alt="settings-icon" />
            </div>
            <div className="text-container">
              <h2>Settings</h2>
              <p>Click to change your settings</p>
            </div>
          </div>
        </NavLink>

      </div>
    </div>
  )
}

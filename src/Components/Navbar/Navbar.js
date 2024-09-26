import React from 'react'
import './Navbar.scss'
const Navbar  = ({ onLogout }) => {
  return (
    <div>
         <nav className="navbar">
      <div className="navbar-brand">
        <h1>Flight Finder</h1> {/* Replace this with your logo if you have one */}
      </div>

      <div className="navbar-menu">
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
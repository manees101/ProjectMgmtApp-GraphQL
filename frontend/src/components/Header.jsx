import logo from "../assets/logo.png"
import React from 'react'

const Header = () => {
  return (  
    <nav className="navbar bg-light mb-4 p-0">
        <div className="container">
            <a href="/" className="navbar-brand">
                <div className="d-flex center">
                    <img src={logo} alt="logo" className="mr-2 w-100 h-90"/>
                    <h2>Project Management App</h2>
                </div>
            </a>
        </div>
    </nav>
  )
}

export default Header
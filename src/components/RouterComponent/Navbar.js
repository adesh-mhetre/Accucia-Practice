import React from 'react'
// import { Link } from'react-router-dom'
import { NavLink } from'react-router-dom'

function Navbar() {
    const navLinkStyles= ({isActive}) => {
        return{
            fontWeight: 'bold',
            textDecoration : isActive ? 'none' : 'underline',
        }
    }
  return (
    <nav className="primary-nav">
        <NavLink style={navLinkStyles} to='/'>Home</NavLink>
        <NavLink style={navLinkStyles} to='/about'>About</NavLink>
        <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
    </nav>
  )
}

export default Navbar

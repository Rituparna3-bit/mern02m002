import React from 'react'
import { Link, NavLink } from 'react-router'
function Navbar() {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/service">Service</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="byId/:id">send ID</Link> */}


      <NavLink to="/" style={({isActive})=>({color:isActive?"red":""})}>Home</NavLink>
      <NavLink to="/about" style={({isActive})=>({color:isActive?"red":""})}>About</NavLink>
      <NavLink to="/service" style={({isActive})=>({color:isActive?"red":""})}>Service</NavLink>
      <NavLink to="/contact" style={({isActive})=>({color:isActive?"red":""})}>Contact</NavLink>
      <NavLink to="/login" style={({isActive})=>({color:isActive?"red":""})}>Login</NavLink>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
import logo from './logo-cross373.jpeg'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/">
          <img className="navbar__logo" src={logo} alt="Logo" />
      </Link>
      <Menu />
    </header>
  )


}

export default Navbar

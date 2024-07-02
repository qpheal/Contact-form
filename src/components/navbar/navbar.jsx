import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
   <header className='header'>
        <a href='/' className='logo'>Logo</a>

        <nav className='navbar'>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>services</a>
            <a href='/'>Contact</a>
            <a href='/'>Portfolio</a>
        </nav>
   </header>
  )
}

export default Navbar
import React from 'react'

function Navbar() {
  return (
    <nav className='bg-current'>
      <div>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Gallery</a>
        <a href='#'>Book-Table</a>
      </div>
      <div>
        <img className='nav-logo' src='/logo.svg' alt='logo'/>
      </div>
      <div>
      <a href='#'>Blog</a>
      <a href='#'>Reviews</a>
      <a href='#'>Contact Us</a>
      </div>
    </nav>
  )
}

export default Navbar
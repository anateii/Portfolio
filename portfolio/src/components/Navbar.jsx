import React from 'react'
import "../styles/Navbar/Navbar.css"


const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <a href="about">Who</a>
        <a href="projects">What</a>
        <a href="contact">Work</a>
      </div>
    </div>
  )
}

export default Navbar

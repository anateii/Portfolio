import React from 'react'
import "../styles/Navbar/Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
     <Link to="/home"></Link>
     <div className="bars"></div>
     <div className="nav-menu">
<Link to="" className="activeStyle">Who</Link>
<Link to="" className="activeStyle">What</Link>
<Link to="" className="activeStyle">Work</Link>
     </div>
    </div>
  )
}

export default Navbar

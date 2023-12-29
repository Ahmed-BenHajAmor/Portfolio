import React from 'react'
import './NavBar.css'
import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'
function NavBar() {
  return (
    <header className="nav-bar">
        <nav>
            <NavBarLogo />
            <NavBarLinks />
            
        </nav>
    </header>
  )
}

const NavBarLogo = () =>{
    return (
        <div className="logo">
            <h3>AHMED</h3>
        </div>
    )
}

const NavBarLinks = ()=>{
    return (
        <div className="links">
        <BrowserRouter>
        <ul>
            <li><Link to="#" smooth>Home</Link></li>
            <li><Link to="#about" smooth>About</Link></li>
            <li><Link to="#">Skills</Link></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="#">Project</Link></li>
        </ul>
        </BrowserRouter>
        
    </div>
    )
}
export default NavBar;
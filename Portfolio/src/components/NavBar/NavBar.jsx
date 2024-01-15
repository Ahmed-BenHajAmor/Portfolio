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
        <div className="logo super-dark-color">
            <h3>AHMED</h3>
        </div>
    )
}

const NavBarLinks = ()=>{
    return (
        <div className="links">
        <BrowserRouter>
        <ul>
            <OneLink text={'Home'} linksTo={'#'}/>
            <OneLink text={'About'} linksTo={'#about'}/>
            <OneLink text={'Skills'} linksTo={'#skills'}/>
            <OneLink text={'Qualification'} linksTo={'#qualification'}/>
            <OneLink text={'Projects'} linksTo={'#projects'}/>
            
        </ul>
        </BrowserRouter>
        
    </div>
    )
}

const OneLink = ({text, linksTo})=>{
    return (
        <li><Link to={linksTo} smooth className='normal-dark-color'>{text}</Link></li>
    )
}
export default NavBar;
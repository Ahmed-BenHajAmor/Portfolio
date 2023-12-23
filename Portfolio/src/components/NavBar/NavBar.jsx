import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <section className="nav-bar">
        <nav>
            <div className="logo">
                <h3>AHMED</h3>
            </div>

            <div className="links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Project</a></li>
                </ul>
            </div>
        </nav>
    </section>
  )
}

export default NavBar;
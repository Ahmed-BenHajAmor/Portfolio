import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer id='footer'>
        <FooterAccounts />
        <div className="phone-num"><span>+216-92 568 095</span></div>
        <div className="email"><span>ahmed.benhajamorr@gmail.com</span></div>
    </footer>
  )
}

const FooterAccounts = ()=>{
    return (
      <div className="footer-accounts-container">
          <div className="footer-accounts-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram className='footer-account-icon'/></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin className='footer-account-icon'/></a>
            <a href="https://github.com/Ahmed-BenHajAmor" target="_blank" rel="noopener noreferrer"><FaGithub className='account-icon dark-color'/></a>
          </div>
        </div>
    )
  }

export default Footer
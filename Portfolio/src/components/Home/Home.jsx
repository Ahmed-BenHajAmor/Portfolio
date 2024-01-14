import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HomeText } from './HomeText';
import './Home.css';
import './HomeAccounts.css';
import './HomePhoto.css';

function Home() {
  return (
    
    <section className='home'>
      <HomeAccounts />
      <HomeText />
      <HomeImage />
      
    </section>
  )
}

const HomeAccounts = ()=>{
  return (
    <div className="home-accounts-container">
        <div className="accounts-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram className='account-icon dark-color'/></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin className='account-icon dark-color'/></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub className='account-icon dark-color'/></a>
        </div>
      </div>
  )
}

const HomeImage = ()=>{
  return (
    <div className="home-image">
      <div className="home-photo">
      </div>
    </div>

  )
}
export default Home;
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaArrowDownLong } from "react-icons/fa6";
import './Home.css';
function Home() {
  return (
    
    <section className='home'>
      <div className="home-accounts-container">
        <div className="accounts-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram className='account-icon'/></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin className='account-icon'/></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub className='account-icon'/></a>
        </div>
      </div>

      <div className="home-text-container">
        <div className="home-text">
          <div className="name-post-discription">
            <div className="name"><h1>Ahmed Ben Haj Amor  🖐️</h1></div>
            <div className="post"><p>React Devoloper</p></div>
            <div className="discription">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem quis odio aliquid molestias iure libero qui</p>
            </div>
          </div>

          

          <div className="say-hello">
            <a href="#">
              <div className='say-hello-text'>Say Hello</div>
              <div className="say-hello-icon"><FiSend className='say-hello-icon'/></div>
            </a>
          </div>

          <div className="scroll-down">
            <div className="scroll-down-text"><p>Scroll down</p></div>
            <div className="scroll-down-icon"><FaArrowDownLong /></div>
          </div>
        </div>
      </div>

      <div className="home-image">
        <div className="home-photo">
        </div>
      </div>
    </section>
  )
}

export default Home;
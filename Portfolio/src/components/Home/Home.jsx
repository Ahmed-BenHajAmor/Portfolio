import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import  myPhoto  from "../../assets/my_photo.webp"
import './Home.css';
function Home() {
  return (
    
    <section className='home-accounts-container'>
      <div className="home-accounts">
        <div className="accounts-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>

      <div className="home-text-container">
        <div className="home-text">
          <div className="name-post">
            <div className="name"><h1>Ahmed Ben Haj Amor</h1></div>
            <div className="post"><h4>React Devoloper</h4></div>
          </div>

          <div className="discription">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem quis odio aliquid molestias iure libero qui</p>
          </div>

          <div className="sey-hello">
            <a href="#">
              <div className='sey-hello-text'>Sey Hello</div>
              <div className="sey-hello-icon"><IoIosSend /></div>
            </a>
          </div>
        </div>
      </div>

      <div className="home-imag">
        <div className="home-photo">
        </div>
      </div>
    </section>
  )
}

export default Home;
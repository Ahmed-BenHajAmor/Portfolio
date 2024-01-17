import React from 'react';
import "./About.css";
import { SectionHeader } from '../';
import { AboutContent } from './AboutContent';

function About() {
  return (
    <section className='initial-sec  about' id='about'>
      
      <SectionHeader title='About Me' subTitle='My introduction'/>
      <AboutMainContent />
      
    </section>
  )
}

const AboutMainContent = ()=>{
  return (
    <div className="about-main-content">
      <div className="about-image-container">
        <AboutImage />
      </div>
      <AboutContent />
    </div>
  )
}

const AboutImage =()=>{
  return <div className="about-image"></div>
}




export default About;
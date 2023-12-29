import React from 'react';
import "./About.css";
import { SectionHeader } from '../';
import { AboutContent } from './AboutContent';

function About() {
  return (
    <section className='about' id='about'>
      
      <SectionHeader title='About Me' subTitle='My introduction'/>
      <AboutMainContent />
      
    </section>
  )
}

const AboutMainContent = ()=>{
  return (
    <div className="about-main-content">
        <AboutImage />
        <AboutContent />
      </div>
  )
}

const AboutImage =()=>{
  return <div className="about-image"></div>
}




export default About;
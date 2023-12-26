import React from 'react';
import "./About.css";
import { IoNewspaperOutline } from "react-icons/io5";
import { SectionHeader } from '../';
import AboutCart from './AboutCart';

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

const AboutContent = ()=>{
  return (
    <div className='about-content'>
          <AboutCarts />
          <AboutDiscrition discrition='Lorem ipsum, dolor sit amet consectetur 
          adipisicing elit. Architecto id alias distinctio beatae enim' />
          <DownloadCVBtn />
        </div>
  )
}

const AboutCarts = ()=>{
  return (
    <div className='about-carts'>
      <AboutCart Icon={IoNewspaperOutline} title={"ahmed"} subTitle={"hhh"}/>
    </div>
  )
}


const AboutDiscrition = ({discrition})=>{
  return (
    <div className='about-text'>
      <p>{discrition}</p>
    </div>
  )
  
}

const DownloadCVBtn = ()=>{
  return(
    <div className='download-cv'>
      <button className='download-cv-btn'><p>Download CV</p><IoNewspaperOutline className='paper'/></button>
    </div>
  )
}
export default About;
import React from 'react'
import { IoNewspaperOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { FaPeopleCarry } from "react-icons/fa";

import AboutCart from '../AboutCard/AboutCard';
import './AboutContent.css';

function AboutContent() {
    return (
        <div className='about-content'>
            <div className="about-carts">
              <AboutCards />
            </div>
            
            <AboutDiscrition discrition='Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Architecto id alias distinctio beatae enim' />
            <DownloadCVBtn />
          </div>
      )
}


const AboutCards = ()=>{
return (
    <div className='about-cards'>
        <AboutCart Icon={MdWork} title={"Experience"} subTitle={"0 years"}/>
        <AboutCart Icon={AiFillProject} title={"Completed"} subTitle={"3 Projects"}/>
        <AboutCart Icon={FaPeopleCarry} title={"Organisations"} subTitle={"2 Organisations"}/>
    </div>
)
}


const AboutDiscrition = ({discrition})=>{
return (
    <div className='about-text not-dark-color'>
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
export default AboutContent
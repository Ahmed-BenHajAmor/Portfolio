import React from 'react'
import { IoNewspaperOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { FaPeopleCarry } from "react-icons/fa";
import ahmedBenHajAmorCV from '../../../assets/cv.pdf'
import AboutCart from '../AboutCard/AboutCard';
import './AboutContent.css';
import { aboutme } from './aboutme';

function AboutContent() {
    return (
        <div className='about-content'>
            <div className="about-carts">
              <AboutCards />
            </div>
            
            <AboutDescription description={aboutme.text} />
            <DownloadCVBtn />
          </div>
      )
}


const AboutCards = ()=>{
return (
    <div className='about-cards'>
        <AboutCart Icon={MdWork} title={"Internships"} subTitle={aboutme.experience}/>
        <AboutCart Icon={AiFillProject} title={"Completed"} subTitle={aboutme.projects}/>
        <AboutCart Icon={FaPeopleCarry} title={"organizations"} subTitle={aboutme.organizations}/>
    </div>
)
}


const AboutDescription = ({description})=>{
return (
    <div className='about-text not-dark-color'>
    <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
    </div>
)

}

const DownloadCVBtn = ()=>{
    return(
      <div className='download-cv'>
        <a href={ahmedBenHajAmorCV} download={'ahmedBenHajAmorCV.pdf'} do><button className='download-cv-btn'><p>Download CV</p><IoNewspaperOutline className='paper'/></button></a>
      </div>
    )
  }
export default AboutContent
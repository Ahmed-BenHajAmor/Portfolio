import React from "react"
import './SectionHeader.css'

const AboutHeader = ({title, subTitle})=>{
    return(
      <div className="section-header-container">
          <div className='section-header'>
            <div className="section-title-h super-dark-color"><h1>{title}</h1></div>
            <div className="section-title-p normal-dark-color"><p>{subTitle}</p></div>
          </div>
          
        </div>
    )
  }

  export default AboutHeader;
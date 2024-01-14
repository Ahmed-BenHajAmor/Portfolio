import React from 'react'
import './AboutCard.css'

function AboutCart({Icon, title, subTitle}){
    return (
      <div className='about-cart'>
        <div className="about-icon super-dark-color">
          <Icon />
        </div>
  
        <div className="about-cart-title super-dark-color">
          <p>{title}</p>
        </div>
  
        <div className="about-cart-sub-title not-dark-color">
          <p>{subTitle}</p>
        </div>
      </div>
    )
  }

export default AboutCart
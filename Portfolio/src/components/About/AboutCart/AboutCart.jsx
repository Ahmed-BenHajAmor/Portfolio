import React from 'react'
import './AboutCart.css'

const AboutCart = ({Icon, title, subTitle})=>{
    return (
      <div className='about-cart'>
        <div className="about-icon">
          <Icon />
        </div>
  
        <div className="about-cart-title">
          <p>{title}</p>
        </div>
  
        <div className="about-cart-sub-title">
          <p>{subTitle}</p>
        </div>
      </div>
    )
  }

export default AboutCart
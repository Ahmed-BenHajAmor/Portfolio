import React from 'react'
import './QualificationElement.css'

function QualificationElement({number, title, platform, year}) {
  return (
    <div className="qualification-element">
      {number%2==0 ? 
      <>
        
        <div className="qualification-element-container">
          <div className="qualification-element-title dark-color"><span>{title}</span></div>
          <div className="qualification-element-platform not-dark-color p-font-size"><span>{platform}</span></div>
          <div className="qualification-element-year not-dark-color p-font-size"><span>{year}</span></div>
        </div>
        <div className="qualification-line"><div className='qualification-circle'></div></div>
        <div></div>
      </>
      
      :

      <>
        <div></div>
        <div className="qualification-line"><div className='qualification-circle'></div></div>
        <div className="qualification-element-container">
          <div className="qualification-element-title dark-color"><span>{title}</span></div>
          <div className="qualification-element-platform not-dark-color p-font-size"><span>{platform}</span></div>
          <div className="qualification-element-year not-dark-color p-font-size"><span>{year}</span></div>
        </div>
      
      </>}
    </div>
  )
}

export default QualificationElement
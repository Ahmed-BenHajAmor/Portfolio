import React from 'react'
import QualificationElement from './QualificationElement'
import './Education.css'
import { education } from './Qualification'

function Education() {
  return (
    <div className="education">
      {education.map((el)=> 
      <QualificationElement key={el.number} number={el.number} title={el.title} platform={el.platform} year={el.year}/> 
      )}
    
    </div>
  )
}

export default Education
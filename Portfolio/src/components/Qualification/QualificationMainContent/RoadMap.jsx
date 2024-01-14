import React from 'react'
import QualificationElement from './QualificationElement'
import './RoadMap.css'
import { roadMap } from './Qualification'

function RoadMap() {
  return (
    <div className="roadmap scroll-bar">
      {roadMap.map((el)=> 
      <QualificationElement key={el.number} number={el.number} title={el.title} platform={el.platform} year={el.year}/> 
      )}
    
    </div>
  )
}

export default RoadMap
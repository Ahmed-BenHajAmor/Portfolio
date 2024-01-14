import React from 'react'
import QualificationNavigation from './QualificationNavigation'
import RoadMap from './RoadMap'
import './QualificationMainContent.css'
import Education from './Education'
function QualificationMainContent() {
  return (
    <div className="qualification-main-content">
      <div className="qualification-container">
          <QualificationNavigation />
          <RoadMap />
          <Education />
      </div>
    </div>
  )
}

export default QualificationMainContent
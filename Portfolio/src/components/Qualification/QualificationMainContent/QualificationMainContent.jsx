import React, {useContext} from 'react'
import QualificationNavigation from './QualificationNavigation'
import RoadMap from './RoadMap'
import './QualificationMainContent.css'
import Education from './Education'
import { myContext } from '../../../App'

function QualificationMainContent() {
  const {state} = useContext(myContext)
  return (
    <div className="qualification-main-content">
      <div className="qualification-container">
          <QualificationNavigation />
          {state.edu ? <Education /> : <RoadMap />}
          
          
      </div>
    </div>
  )
}

export default QualificationMainContent
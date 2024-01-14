import React from 'react'
import { MdWork } from "react-icons/md";
import './QualificationNavigation.css'

const QualificationNavigation = ()=>{
  return (
    <div className='qualification-navigation'>
      <QualificationLink />
      <QualificationLink />
    </div>
  )
}

const QualificationLink = ()=>{
  return (
    <div className="qualification-link">
      <div className="Qualification-link-icon super-dark-color"><span><MdWork /></span></div>
      <div className="Qualification-link-title super-dark-color"><span>Education</span></div>
    </div>
  )

}


export default QualificationNavigation
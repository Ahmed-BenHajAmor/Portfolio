import React, {useContext}  from 'react'
import './QualificationNavigation.css'
import { FaGraduationCap } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { myContext } from '../../../App';


const QualificationNavigation = ({edu})=>{
  const value = useContext(myContext)
  return (
    <div className='qualification-navigation'>
      <QualificationLink text={"Education"} Icon={FaGraduationCap} edu={edu}/>
      <QualificationLink text={"Road map"} Icon={IoAnalyticsOutline} edu={!edu}/>
    </div>
  )
}

const QualificationLink = ({text, Icon, edu})=>{
  return (
    <div className={`qualification-link border-bottom ${edu && "border-change"}`}>
      <div className="Qualification-link-icon super-dark-color"><span><Icon size={"25px"}/></span></div>
      <div className="Qualification-link-title super-dark-color"><span>{text}</span></div>
    </div>
  )

}


export default QualificationNavigation
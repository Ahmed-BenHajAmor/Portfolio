import React, {useContext}  from 'react'
import './QualificationNavigation.css'
import { FaGraduationCap } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { myContext } from '../../../App'


const QualificationNavigation = ()=>{
  const {dispatch, state} = useContext(myContext)
  return (
    <div className='qualification-navigation'>
      <QualificationLink onClick={()=> dispatch({type :"CHANGE_EDU", value: true})} text={"Education"} Icon={FaGraduationCap} edu={state.edu}/>
      <QualificationLink onClick={()=> dispatch({type :"CHANGE_EDU", value: false})}  text={"Road map"} Icon={IoAnalyticsOutline} edu={!state.edu}/>
    </div>
  )
}

const QualificationLink = ({onClick, text, Icon, edu})=>{
  return (
    <div onClick={onClick} className={`qualification-link border-bottom ${edu && "border-change"}`}>
      <div className="Qualification-link-icon super-dark-color"><span><Icon size={"25px"}/></span></div>
      <div className="Qualification-link-title super-dark-color"><span>{text}</span></div>
    </div>
  )

}


export default QualificationNavigation
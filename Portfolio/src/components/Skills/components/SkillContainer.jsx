import React from 'react'
import './SkillContainer.css'
import { FaCheckCircle } from "react-icons/fa";

const SkillContainer = ({title, subTitle})=>{
    return (
        <div className="skill-container">
            <div className="skill-icon"><FaCheckCircle /></div>
            <div className="skill-text">
                <div className="skill-title"><h4>{title}</h4></div>
                <div className="skill-sub-title"><p>{subTitle}</p></div>
            </div>
        </div>
    )
}


export default SkillContainer;
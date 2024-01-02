import React from 'react';
import './Skills.css';
import "./SkillContainer.css"
import { SectionHeader } from '../';
import { FaCheckCircle } from "react-icons/fa";


function Skills() {
  return (
    <section className="skills" id='skills'>
        <SectionHeader title={'Skills'} subTitle={'My technical and social level'}/>
        <SkillsMainContent />
    </section>
  )
}

const SkillsMainContent = ()=>{
    const hardSkills = [
        {
            title: 'HTML',
            subTitle: 'Good'
        },
        {
            title: 'HTML',
            subTitle: 'Good'
        },
        {
            title: 'HTML',
            subTitle: 'Good'
        }
    ]
    return (
        <div className='skills-main-content'>
            <div className="hard-skills">
                <HSSkills contentArray={hardSkills}/>
            </div>
        </div>
    )
}
const HSSkills = ({contentArray})=>{
    return (
        <div className='hs-skills'>
            {contentArray.map((skill)=>(
                <SkillContainer {...skill}/>
            ))}
        </div>
    )
}

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

export default Skills
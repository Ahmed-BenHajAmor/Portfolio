import React from 'react';
import './Skills.css';
import { SectionHeader } from '../';

function Skills() {
  return (
    <section className="skills">
        <SectionHeader title={'Skills'} subTitle={'My technical and social level'}/>
        <SkillsMainContent />
    </section>
  )
}

const SkillsMainContent = ()=>{
    const skills = [
        {
            title: 'ahmed',
            subTitle: 'bel'
        }
    ]
    return (
        <div className='skills-main-content'>
            <div className="hard-skills">
                <HSSkills contentArray={skills}/>
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
            <div className="skill-icon"></div>
            <div className="skill-text">
                <div className="skill-title"><h4>{title}</h4></div>
                <div className="skill-sub-"><p>{subTitle}</p></div>
            </div>
        </div>
    )
}

export default Skills
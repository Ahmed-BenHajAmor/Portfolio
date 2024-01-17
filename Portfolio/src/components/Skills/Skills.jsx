import React from 'react';
import './Skills.css';
import { SectionHeader } from '../';
import { HSSkills } from './components';
import { hardSkills } from './skills';
import { softSkills } from './skills';

function Skills() {
  return (
    <section className="initial-sec  skills" id='skills'>
        <SectionHeader title={'Skills'} subTitle={'My technical and social level'}/>
        <SkillsMainContent />
    </section>
  )
}

const SkillsMainContent = ()=>{
    
    return (
        <div className='skills-main-content'>
            <div className="center hard-skills">
                <div>
                    <SkillsTitle title={'Hard skills'}/>
                    <HSSkills contentArray={hardSkills}/>
                </div>
                
            </div>
            <div className="center hard-skills">
                <div>
                    <SkillsTitle title={'Soft skills'}/>
                    <HSSkills contentArray={softSkills}/>
                </div>
                
            </div>
        </div>
    )
}

const SkillsTitle = ({title})=>{
    return (
        <div className='skills-title dark-color'>
            <h4>{title}</h4>
        </div>
    )
}


export default Skills
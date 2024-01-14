import React from 'react'
import './HSSkills.css'
import SkillContainer from './SkillContainer'

const HSSkills = ({contentArray})=>{
    return (
        <div className='hs-skills'>
            {contentArray.map((skill)=>(
                <SkillContainer key={skill.id} {...skill}/>
            ))}
        </div>
    )
}

export default HSSkills
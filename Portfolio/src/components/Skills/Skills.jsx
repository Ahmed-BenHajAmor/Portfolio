/* eslint-disable react/prop-types */
import  { useContext } from 'react';
import './Skills.css';
import { SectionHeader } from '../';
import { HSSkills } from './components';
import { backEndSkills, frontEndSkills, otherSkills } from './skills';
import { softSkills } from './skills';
import { myContext } from '../../App';
import { QualificationLink } from '../Qualification/QualificationMainContent/QualificationNavigation';
import { FaGraduationCap } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
function Skills() {
  return (
    <section className="initial-sec  skills" id='skills'>
        <SectionHeader title={'Skills'} subTitle={'My technical and social level'}/>
        <SkillsMainContent />
    </section>
  )
}

const SkillsMainContent = ()=>{
    const {dispatch, state} = useContext(myContext)
    
    return (
        <div className="width100">
            
            
            
           
            <div className='skills-main-content'>
                <div className="center hard-skills">
                    
                    <div>
                        <SkillsTitle title={'hard-skills'}/>
                        <div style={{marginBottom: "20px"}} className='qualification-navigation'>
                            <QualificationLink onClick={()=> dispatch({type :"CHANGE_HARD_SKILL", value: "Backend"})}  text={"Backend"} Icon={IoAnalyticsOutline} edu={state.hardSkills == "Backend"}/>
                            <QualificationLink onClick={()=> dispatch({type :"CHANGE_HARD_SKILL", value: "Frontend"})} text={"Frontend"} Icon={FaGraduationCap} edu={state.hardSkills == "Frontend"}/>
                            <QualificationLink onClick={()=> dispatch({type :"CHANGE_HARD_SKILL", value: "Others"})}  text={"Others"} Icon={IoAnalyticsOutline} edu={state.hardSkills == "Others"}/>
                        </div>
                        {
                            state.hardSkills == "Backend" ? <HSSkills contentArray={backEndSkills}/> : 
                            state.hardSkills == "Frontend" ?  <HSSkills contentArray={frontEndSkills}/> :
                            <HSSkills contentArray={otherSkills}/>
                        }
                        
                    </div>
                    
                    
                </div>
                <div className="center soft-skills">
                    <div>
                        <SkillsTitle title={'Soft skills'}/>
                        <HSSkills contentArray={softSkills}/>
                    </div>
                    
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
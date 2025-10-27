import React, { useContext } from 'react'
import './ProjectCard.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { myContext } from '../../../App'

function ProjectCard({projectDetails}) {
  const {title, image, githubLink, demoLink} = projectDetails
  const {dispatch} = useContext(myContext)
  return (
    <div className="project-card">
      <div className="project-card-img"><img src={image} alt="img" /></div>
      <div className="project-card-title super-dark-color"><span>{title}</span></div>
      <div className="project-card-footer normal-dark-color p-font-size">
        <div className="project-details"><p target='_blank' onClick={()=>dispatch({type :"OPEN_PROJECT_DETAILS_STATE", value: projectDetails})}><span>details</span><FaRegArrowAltCircleRight /></p></div>
        <div className="project-github"><a href={githubLink} target='_blank'><FaGithub /></a></div>
      </div>
    </div>
  )
}

export default ProjectCard
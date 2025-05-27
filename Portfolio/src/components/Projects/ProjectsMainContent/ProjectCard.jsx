import React from 'react'
import './ProjectCard.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function ProjectCard({title, image, githubLink, demoLink}) {
  return (
    <div className="project-card">
      <div className="project-card-img"><img src={image} alt="img" /></div>
      <div className="project-card-title super-dark-color"><span>{title}</span></div>
      <div className="project-card-footer normal-dark-color p-font-size">
        {demoLink ? <div className="project-demo"><a href={demoLink} target='_blank'><span>demo</span><FaRegArrowAltCircleRight /></a></div> : <p></p>}
        <div className="project-github"><a href={githubLink} target='_blank'><FaGithub /></a></div>
      </div>
    </div>
  )
}

export default ProjectCard
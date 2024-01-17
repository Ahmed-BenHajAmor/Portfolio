import React from 'react'
import './ProjectCard.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function ProjectCard({title, image, github, demo}) {
  return (
    <div className="project-card">
      <div className="project-card-img"><img src={image} alt="img" /></div>
      <div className="project-card-title super-dark-color"><span>{title}</span></div>
      <div className="project-card-footer normal-dark-color p-font-size">
        <div className="project-demo"><a href=""><span>demo</span><FaRegArrowAltCircleRight /></a></div>
        <div className="project-github"><a href=""><FaGithub /></a></div>
      </div>
    </div>
  )
}

export default ProjectCard
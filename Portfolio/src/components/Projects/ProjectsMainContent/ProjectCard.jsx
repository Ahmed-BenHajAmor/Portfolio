import React from 'react'
import './ProjectCard.css'

function ProjectCard({title, image, github, demo}) {
  return (
    <div className="project-card">
      <div className="project-card-img"><img src={image} alt="#" /></div>
      <div className="project-card-title super-dark-color"><span>{title}</span></div>
      <div className="project-card-title normal-dark-color p-font-size">
        hhh
      </div>
    </div>
  )
}

export default ProjectCard
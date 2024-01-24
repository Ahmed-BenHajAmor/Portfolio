import React from 'react'
import ProjectCard from './ProjectCard'
import './ProjectsMainContent.css'
import { projects } from './projects'
function ProjectsMainContent() {
  return (
    <div className="project-main-content">
      <div className="project-main-content-container">
        {projects.map((item, id)=>{
          return(
            <ProjectCard {...item}/>
          )
        })}

      </div>
    </div>
  )
}

export default ProjectsMainContent
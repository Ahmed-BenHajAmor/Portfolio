import React from 'react'
import ProjectCard from './ProjectCard'
import './ProjectsMainContent.css'
import nikeCloneHome from '../../../assets/nike-clone-home.webp'

function ProjectsMainContent() {
  return (
    <div className="project-main-content">
      <div className="project-main-content-container">
        
        <ProjectCard title={'Nike shoes clone'} image={nikeCloneHome}/>
        <ProjectCard title={'Nike shoes clone'} image={nikeCloneHome}/>
        <ProjectCard title={'Nike shoes clone'} image={nikeCloneHome}/>
        <ProjectCard title={'Nike shoes clone'} image={nikeCloneHome}/>
        <ProjectCard title={'Nike shoes clone'} image={nikeCloneHome}/>
        <ProjectCard title={'Nike shoes clone'} image={nikeCloneHome}/>

      </div>
    </div>
  )
}

export default ProjectsMainContent
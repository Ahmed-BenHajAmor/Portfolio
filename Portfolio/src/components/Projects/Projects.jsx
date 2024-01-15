import React from 'react'
import {SectionHeader} from '../SectionHeader'
import ProjectsMainContent from './ProjectsMainContent/ProjectsMainContent'
function Projects() {
  return (
    <section id='projects' className="projects">
      <SectionHeader title={'Projects'} subTitle={'My work'}/>
      <ProjectsMainContent />
    </section>
  )
}

export default Projects
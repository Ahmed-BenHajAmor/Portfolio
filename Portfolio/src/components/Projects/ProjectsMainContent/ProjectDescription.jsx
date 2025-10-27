import React from 'react';
import './ProjectDescription.css';
import { LuArrowUpRight } from "react-icons/lu";
const ProjectDescription = ({ projectData }) => {
  return (
    <div className="project-container">
      <h1 className="project-heading">{projectData.title} {projectData?.demoLink && <a target="_blank" href={projectData.demoLink}><LuArrowUpRight size={30}/></a> }</h1>
      
      <p className="project-paragraph">{projectData.description}</p>

      <h2 className="project-subheading">Project Overview</h2>
      <p className="project-paragraph">{projectData.overview}</p>

      <h2 className="project-subheading">Key Features</h2>
      <ul className="project-list">
        {projectData.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h2 className="project-subheading">Technology Stack</h2>
      <div>
        {projectData.technologies.map((tech, index) => (
          <span key={index} className="project-badge">{tech}</span>
        ))}
      </div>

      <h2 className="project-subheading">Timeline</h2>
      <p className="project-paragraph">
        <strong>Duration:</strong> {projectData.timeline.duration}
        <br />
        <strong>Phases:</strong> {projectData.timeline.phases}
      </p>

      <h2 className="project-subheading">Expected Outcomes</h2>
      <p className="project-paragraph">{projectData.expectedOutcomes}</p>
    </div>
  );
};

const ProjectDescriptionOverlay = ({ projectData, onClose, navbarHeight = 60 }) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="overlay" style={{ top: `${navbarHeight}px` }}>
      <div className="overlay-content-wrapper">
        <button className="overlay-close-button" onClick={onClose}>
          Close
        </button>
        <ProjectDescription projectData={projectData} />
      </div>
    </div>
  );
};

export default ProjectDescriptionOverlay;

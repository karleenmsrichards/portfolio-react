import React, { useState } from 'react';
import "../components/Projects.css";
import { ProjectCard } from './ProjectCard';
import JavascriptProjectsData from '../javascriptProjects.json';
import { ProjectPopup } from './ProjectPopup'; 

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null); 
    const [showPopup, setShowPopup] = useState(false); 

    const handleProjectClick = (project) => {
        setSelectedProject(project); 
        setShowPopup(true); 
    };

    return (
        <div className='home-projects-container' id="projects">
            <div className='home-projects-titles'>
                <h2><span className="subtitle-span">My</span> Projects</h2>
            </div>
            <div className='project-cards'>
                {JavascriptProjectsData.map((project, index) => (
                        <ProjectCard key={index} imagePath={project.image} {...project} handleClick={() => handleProjectClick(project)} />
                    ))
                }
            </div>
            <ProjectPopup showPopup={showPopup} setShowPopup={setShowPopup} project={selectedProject} />
        </div>
    );
};
import React, { useState } from 'react';
import '../components/Projects.css';
import { ProjectCard } from './ProjectCard';
import JavascriptProjectsData from '../javascriptProjects.json';
import PythonProjectsData from '../pythonProjects.json';

export const Projects = () => {
    const [javascriptProjectActive, setJavascriptProjectActive] = useState(true);

    const viewJavascriptProjects = () => {
        setJavascriptProjectActive(true);
    };

    const viewPythonProjects = () => {
        setJavascriptProjectActive(false);
    };
    
    return (
        <div className='home-projects-container' id="projects">
            <div className='home-projects-titles'>
                <h2 className={javascriptProjectActive ? "active" : ""} onClick={viewJavascriptProjects}>Javascript</h2>
                <h2 className={!javascriptProjectActive ? "active" : ""} onClick={viewPythonProjects}>Python</h2>
            </div>
            <div className='project-cards'>
                {javascriptProjectActive 
                    ? JavascriptProjectsData.map((project, index) => (
                        <ProjectCard key={index} imagePath={project.image} {...project} />
                    ))
                    : PythonProjectsData.map((project, index) => (
                        <ProjectCard key={index} imagePath={project.image} {...project} />
                    ))
                }
            </div>
        </div>
    );
};

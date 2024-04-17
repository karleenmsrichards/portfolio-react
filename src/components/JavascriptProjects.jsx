import React from 'react';
import '../components/JavascriptProjects.css';
import { ProjectCard } from '../components/ProjectCard';
import bookMeIcon from '../images/appointment.gif'
import weatherIcon from '../images/weather-icon.gif'
import leetubeIcon from '..//images/video-camera.gif'
import webTvIcon from '..//images/tv.gif'

export const JavaScriptProjects = () => {

  const projectsData = [
    {
        image: bookMeIcon,
        title: 'BookMe',
        description: 'Connecting professional to clients worldwide with Google Calendar integration.',
        technology: 'PERN (Postgres Express React Node), JavaScript, Google OAuth 2.0, Sequelize, Material UI, Google Calendar.',
        skills: 'Agile Framework, Behaviour Driven Development (BDD), Continuos integration',
        githubLink: 'https://github.com/karleenmsrichards/final-project-gp2',
        siteLink: 'https://starter-kit-all6.onrender.com'
      },
    {
        image: weatherIcon,
        title: 'Weather App',
        description:'Provides GPS-based weather updates and city-specific forecasts through a RESTful API integration.',
        technology: 'Custom CSS3, Javascript, React, RESTful API',
        skills: 'Attention to detail, Problem solving, Product Management',
        githubLink: 'https://github.com/karleenmsrichards/weather-app',
        siteLink: 'https://weather-app-karleen.onrender.com'
        },
    {
        image: leetubeIcon,
        title: 'Lee Tube',
        description: 'Enables users to browse and upload videos, implementing regex validation for form fields to ensure URL authenticity',
        technology: 'PERN (Postgres Express React Node), JavaScript, Custom CSS',
        skills: 'Self-motivation, Adaptability, Time Management',
        githubLink: 'https://github.com/karleenmsrichards/Full-Stack-Portfolio-Assessment',
        siteLink: 'https://video-client-side-espj.onrender.com/'
    },
    {
        image: webTvIcon,
        title: 'WebTv',
        description: 'Built with Vanilla JavaScript, showcasing creative design and utilizing TvMaze\'s API for TV show and movie display.',
        technology: 'HTML5, Custom CSS, JavaScript, RESTful API.',
        skills: 'Problem solving, Debugging, Creativity',
        githubLink: 'https://github.com/karleenmsrichards/tv-show-dom-Portfolio',
        siteLink: 'https://video-client-side-espj.onrender.com/'
    },
  ];
  
    return (
        <div className='home-javascript-showcase-container' id="javascript-projects">
            <h2>Javascript</h2>
            <div className='javascript-project-cards'>
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

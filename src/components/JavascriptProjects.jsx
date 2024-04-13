import React from 'react';
import '../components/JavascriptProjects.css';
import { JavascriptProjectCard } from '../components/JavascriptProjectCard';
import bookMeIcon from '../images/appointment.gif'
import weatherIcon from '../images/weather-icon.gif'
import leetubeIcon from '..//images/video-camera.gif'
import webTvIcon from '..//images/tv.gif'

export const JavaScriptProjects = () => {

  const projectsData = [
    {
        image: bookMeIcon,
        title: 'BookMe',
        description: 'Final Technical Group Project at CodeYourFuture, a website that connects experts in various areas of work to customers. Experts subscribe, then adds a user\'s google calendar to their profile to enable appointment bookings. A team of 4 members, implemented BDD and the Agile Framework, Continuous Integration and Sequelize ORM for database operations.',
        technology: 'PERN (Postgres, Express, React, Node), JavaScript, Google OAuth 2.0, Sequelize, Github Actions,  Material UI, Google Calendar.',
        githubLink: 'https://github.com/karleenmsrichards/final-project-gp2',
        siteLink: 'https://starter-kit-all6.onrender.com'
      },
    {
        image: weatherIcon,
        title: 'Weather App',
        description:'Weather App displays the current GPS weather and conditions or search the weather for any city in the world. A restful API used to access weather data. Exciting solution for achieving animated weather icons not provided by weather API.',
        technology: 'Custom CSS3, Javascript, React, RESTful API.',
        githubLink: 'https://github.com/karleenmsrichards/weather-app',
        siteLink: 'https://weather-app-karleen.onrender.com'
        },
    {
        image: leetubeIcon,
        title: 'Lee Tube',
        description: 'Users can view all videos stored in website\'s database. Users can also upload a video and it\'s title using it\'s url only if the yourube video does not already exist in the site\'s database. I utilized regex validation for form fields to check the authenticity of a given url.',
        technology: 'PERN (Postgres, Express, React, Node), JavaScript, Custom CSS',
        githubLink: 'https://github.com/karleenmsrichards/Full-Stack-Portfolio-Assessment',
        siteLink: 'https://video-client-side-espj.onrender.com/'
    },
    {
      image: webTvIcon,
      title: 'WebTv',
      description: 'Developed using Vanilla Javascript. Visible creativity and passion in TV Show website\'s design and layout. Calls to TvMaze\'s RESTful API are made to display shows and movies.',
      technology: 'HTML5, Custom CSS, JavaScript, RESTful API.',
      githubLink: 'https://github.com/karleenmsrichards/tv-show-dom-Portfolio',
      siteLink: 'https://video-client-side-espj.onrender.com/'
    },
  ];
  
    return (
        <div class='home-javascript-showcase-container' id="javascript-projects">
            <h2>Javascript Showcase...</h2>
            <div className='javascript-project-cards'>
                {projectsData.map((project, index) => (
                    <JavascriptProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

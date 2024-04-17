import React from "react";
import "../components/ProjectCard.css";
import bookMeIcon from "../images/appointment.gif";
import weatherIcon from "../images/weather-icon.gif";
import leetubeIcon from "../images/video-camera.gif";
import webTvIcon from "../images/tv.gif";
import recipeIcon from "../images/recipe-icon.gif";

export const ProjectCard = ({ image, title, description, skills, technology, githubLink, siteLink }) => {

  const imageMap = {
    bookMeIcon: bookMeIcon,
    weatherIcon: weatherIcon,
    leetubeIcon: leetubeIcon,
    webTvIcon: webTvIcon,
    recipeIcon: recipeIcon
  };

  return (
    <div className="project-card-container">
      <div className="project-card-text-container">
        <h3>{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-list-container">
          <div>
            <h4>Technology</h4>
            <ul className="project-card-list">
              {technology.split(', ').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Skills</h4>
            <ul className="project-card-list">
              {skills.split(', ').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="project-card-container-links">
          <p><a className="project-card-link" href={githubLink} target="_blank" rel="noopener noreferrer">HOW IT'S BUILT</a></p>
          <p><a className="project-card-link" href={siteLink} target="_blank" rel="noopener noreferrer">SEE DEMO</a></p>
        </div>
      </div>
      <div className="project-card-img-container">
        <img src={imageMap[image]} alt={title} />
      </div>
    </div>
  );
};

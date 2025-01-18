import React, { useState } from "react";
import "../components/ProjectCard.css";
import { ProjectPopup } from "./ProjectPopup";
import bookMeIcon from "../images/appointment-icon.webP";
import weatherIcon from "../images/weather-icon.webP";
import leetubeIcon from "../images/video-icon.webP";
import moodBoostIcon from "../images/moodBoost-icon.png";

export const ProjectCard = ({ image, title, description, skills, technology, githubLink, siteLink }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  const imageMap = {
    moodBoostIcon: moodBoostIcon,
    bookMeIcon: bookMeIcon,
    weatherIcon: weatherIcon,
    leetubeIcon: leetubeIcon
  };

  return (
    <div className="project-card-container">
      <div className="project-card-text-container">
        <div className="project-card-img-container">
          <img src={imageMap[image]} alt={title} />
        </div>
          <p className="project-title">{title}</p>
          <p className="project-card-description">{description}</p>
          <button className="project-card-button" onClick={handlePopup}>Explore →</button>
      </div>
      <ProjectPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        project={{
          title,
          description,
          skills,
          technology,
          githubLink,
          siteLink,
          image
        }}
        imageMap={imageMap}
      />
    </div>
  );
};
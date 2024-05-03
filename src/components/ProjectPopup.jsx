import React from 'react';
import "../components/ProjectPopup.css";

export const ProjectPopup = ({ showPopup, setShowPopup, project, imageMap }) => {
  const { title, description, skills, technology, githubLink, siteLink, image } = project || {};

  return (
    showPopup && (
      <div className="popup-overlay" onClick={() => setShowPopup(false)}>
            <div className="project-popup" onClick={(e) => e.stopPropagation()}>
                <button className="project-popup-close-btn" onClick={() => setShowPopup(false)}>Close</button>
                <div className="project-popup-inner">
                    <div className="project-card-img-container">
                        <img src={imageMap[image]} alt={title} />
                    </div>
                    <p className="project-popup-title">{title}</p>
                    <p className="project-popup-description">{description}</p>
                    <div className="project-popup-list-container">
                        <div>
                            <h4>Technology</h4>
                            <ul className="project-card-list">
                            {technology && technology.split(', ').map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                            </ul>
                        </div>
                        <div>
                            <h4>Skills</h4>
                            <ul className="project-card-list">
                            {skills && skills.split(', ').map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    <div className="project-card-container-links">
                        <p><a className="project-card-link" href={githubLink} target="_blank" rel="noopener noreferrer">Explore Code →</a></p>
                        <p><a className="project-card-link" href={siteLink} target="_blank" rel="noopener noreferrer">See Demo →</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
  );
};

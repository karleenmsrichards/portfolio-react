import React from "react";
import "../components/JavascriptProjectCard.css";

export const JavascriptProjectCard = ({ image, title, description, technology }) => {
  return (
    <div className="javascript-project-card-container">
    <img src={image} />
    <h3>{title}</h3>
    <p>{description}</p>
    <div>
      <h4>Technology</h4>
      <p>{technology}</p>
    </div>
    <div className="javascript-project-card-container-links">
      <p><a className="github-link" href="">Github Repo</a></p>
      <p><a className="site-link" href="">Visit Site</a></p>
    </div>

    </div>
  ) 
};

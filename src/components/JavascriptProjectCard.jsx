import React from "react";
import "../components/JavascriptProjectCard.css";

export const JavascriptProjectCard = ({ image, title, description, features, technology }) => {
  return (
    <div className="javascript-project-card-container">

    <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <h4>Features</h4>
        <ul>
          {features.split(', ').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    <div>
      <h4>Technology</h4>
      <p>{technology}</p>
    </div>
    <div className="javascript-project-card-container-links">
      <p><a className="github-link" href="">Code</a></p>
      <p><a className="site-link" href="">Explore</a></p>
      </div>
      <img src={image} />

    </div>
  ) 
};

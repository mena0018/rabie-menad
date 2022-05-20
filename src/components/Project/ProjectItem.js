import React from "react";
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function ProjectItem({ img, title, description, githubURL, icons }) {
  return (
    <div className="project-item">
      <div className="bloc-img">
        <a target="_blank" rel="noreferrer" href={githubURL}>
          <img src={img} alt="Miniature de projet que j'ai pu réaliser"  loading="lazy"/>
        </a>
      </div>

      <div className="content-project">
        <h2 className="project-title">
          {title}
          <a target="_blank" rel="noreferrer" href={githubURL}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <p> {icons.map((item, index) => <span key={index}>{item}</span>)} </p>
        </h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

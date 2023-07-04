import React, { useState } from "react";
import "./Projects.css";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";

function Projects() {
  const getImageUrls = (id) => {
    const projects = {
      1: [img1, img2, img3, img4, img5, img6, img7, img8],
      2: [img2, img3, img5, img4],
      3: [img1, img7, img6, img8, img3],
    };
    return projects[id] || [];
  };

  const buttons = ["All", "FrontEnd", "BackEnd"];

  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    console.log(selectedButton);
  };

  return (
    <div className="container">
      <div className="project-container">
        <h1 className="project-header">
          My <span>Portfolio</span>
        </h1>
        <div className="button_container">
          <div className="button-list">
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index + 1)}
                className={
                  selectedButton === index + 1 ? "active" : "nav-button"
                }
              >
                {button}
              </button>
            ))}
          </div>
        </div>
        <div className="project-list">
          {getImageUrls(selectedButton).map((imageUrl, index) => (
            <img
              className="project-image"
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
{
  /* <button className={clicked ?'active':"nav-button"} onClick={() => handleButtonClick(1)}>All</button>
        <button className={clicked ?'active':"nav-button"} onClick={() => handleButtonClick(2)}>FrontEnd</button>
        <button className={clicked ?'active':"nav-button"} onClick={() => handleButtonClick(3)}>FullStack</button> */
}

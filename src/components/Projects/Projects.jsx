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
      1: [
        {
          title: img1,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
        {
          title: img2,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
        {
          title: img3,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
        {
          title: img4,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
        {
          title: img5,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
        {
          title: img6,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
        {
          title: img7,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
        {
          title: img8,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
      ],
      2: [
        {
          title: img2,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
        {
          title: img3,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
        {
          title: img5,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
        {
          title: img4,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
      ],
      3: [
        {
          title: img1,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
        {
          title: img7,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
        {
          title: img6,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
        {
          title: img8,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
        {
          title: img3,
          link: "https://github.com/amaankhanak/portfolio_template",
          project_desc: "This is some content",
        },
      ],
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
      <div className="project_container" id="projects">
        <div className="project_heading">
          My <span>Portfolio </span>
        </div>

        <div className="project_main">
          <div className="project_tech">
            <div className="project_buttons">
              {buttons.map((button, idx) => (
                <button className={selectedButton === idx+1 ? "project-button active" : "project-button"} key={idx} onClick={() => handleButtonClick(idx + 1)}>
                  {button}
                </button>
              ))}
            </div>
          </div>

          <div className="project_images">
            {getImageUrls(selectedButton).map((image, idx) => (
              <a href={image["link"]}>
                <div className="project_single_img">
                  <div className="content">
                    <p>{image["project_desc"]}</p>
                  </div>
                  <img key={idx} src={image["title"]} alt="" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

import React from "react";
import "./About.css";
import picture from "./images/picture.png";

function About() {
  return (
    <div className="container" id="about">
      <div className="about_heading">
        About<span> Me</span>
      </div>
      <div className="about_container">
        <div className="about_img">
          <img src={picture} alt="" />
        </div>
        <div className="about_content">
          <div className="about_name">John Doe</div>
          <div className="about_description">Full Stack Developer</div>
          <div className="about_info">
            As a full stack developer in my final year of college, I am a
            versatile and skilled professional with a comprehensive
            understanding of both front-end and back-end development. <br />{" "}
            <br />
            With a strong foundation in web development, I have acquired a
            diverse range of technical abilities and am proficient in various
            programming languages, frameworks, and tools.
          </div>
          <div className="about_summary" id="resume">
            <ul>
              <li>
                <span>From:</span>Texas
              </li>
              <li>
                <span>Lives in:</span>Texas
              </li>
              <li>
                <span>Age:</span>25
              </li>
              <li>
                <span>Gender:</span>Male
              </li>
            </ul>
          </div>
          <a href="sample.pdf" download="Resume.pdf">
            <div className="about_button">
              <button>Download Resume</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

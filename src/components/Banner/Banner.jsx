import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="container" id="banner">
      <div className="banner_container">
        <div className="banner_p">Hi, my name is</div>
        <div className="banner_heading">
          John Doe <br /> I build things for the web
        </div>
        <div className="banner_p">
          I am a web development-focused software engineer. At the moment, I am
          in the last year of my undergraduate studies pursuing a Bachelor's
          degree in Technology with a specialization in computer science.
        </div>
        <button className="banner_button">
          <a href="#contact">Contact Me</a>
        </button>
      </div>
    </div>
  );
}

export default Banner;

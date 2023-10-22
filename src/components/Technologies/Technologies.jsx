import React from "react";
import "./Technologies.css";
import img from "./images/img.png";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";

function Technologies() {
  return (
    <div className="container">
      <div className="tech_heading">
        My<span> Skills</span>
      </div>
      <div className="tech_container" id="services">
        <div className="tech_inner_container">
          <div className="tech_image">
            <img src={img} alt="" />
            <div className="inside_img">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="tech_heading">Designer</div>
          <div className="tech_p">
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </div>
          <div className="tech_p_head">Things I enjoy designing:</div>
          <div className="tech_p">UX, UI, Web, Apps, Logos</div>
          <div className="tech_p_head">Design Tools:</div>
          <div className="tech_list">
            <ul>
              <li>Figma</li>
              <li>Figma</li>
              <li>Figma</li>
              <li>Figma</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <div className="tech_inner_container">
          <div className="tech_image">
            <img src={img} alt="" />
            <div className="inside_img">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="tech_heading">Designer</div>
          <div className="tech_p">
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </div>
          <div className="tech_p_head">Things I enjoy designing:</div>
          <div className="tech_p">UX, UI, Web, Apps, Logos</div>
          <div className="tech_p_head">Design Tools:</div>
          <div className="tech_list">
            <ul>
              <li>Figma</li>
              <li>Figma</li>
              <li>Figma</li>
              <li>Figma</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <div className="tech_inner_container">
          <div className="tech_image">
            <img src={img} alt="" />
            <div className="inside_img">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="tech_heading">Designer</div>
          <div className="tech_p">
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </div>
          <div className="tech_p_head">Things I enjoy designing:</div>
          <div className="tech_p">UX, UI, Web, Apps, Logos</div>
          <div className="tech_p_head">Design Tools:</div>
          <div className="tech_list">
            <ul>
              <li>Figma</li>
              <li>Figma</li>
              <li>Figma</li>
              <li>Figma</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;

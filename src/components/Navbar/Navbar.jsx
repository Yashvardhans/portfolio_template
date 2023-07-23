import { useState } from "react";
import React from "react";
import "./Navbar.css";
import photo from "./images/photo.png";
import {
  FaHome,
  FaFacebook,
  FaUserAlt,
  FaFileAlt,
  FaHandsHelping,
  FaPhoneAlt,
  FaSuitcase,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaBars,
} from "react-icons/fa";

import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(true);

  const handleScreen = () => {
    setMobile(!mobile);
    setOpen(!open);
  };

  return (
    <>
      <div className="navbar_container">
        <div className="navbar_inner">
          <div className="navbar_image">
            <img src={photo} alt="" />
          </div>
          <div className="navbar_name">John Doe</div>
          <div className="navbar_icons">
            <ul>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar_contents">
            <ul>
              <li>
                <div className="navbar_menu_icons">
                  <FaHome />
                </div>
                <a href="#">
                  <div className="navbar_texts">Home</div>
                </a>
              </li>
              <li>
                <div className="navbar_menu_icons">
                  <FaUserAlt />
                </div>
                <a href="#">
                  <div className="navbar_texts">About</div>
                </a>
              </li>
              <li>
                <div className="navbar_menu_icons">
                  <FaFileAlt />
                </div>
                <a href="#">
                  <div className="navbar_texts">Resume</div>
                </a>
              </li>
              <li>
                <div className="navbar_menu_icons">
                  <FaHandsHelping />
                </div>
                <a href="#">
                  <div className="navbar_texts">Services</div>
                </a>
              </li>
              <li>
                <div className="navbar_menu_icons">
                  <FaSuitcase />
                </div>
                <a href="#">
                  <div className="navbar_texts">Portfolio</div>
                </a>
              </li>
              <li>
                <div className="navbar_menu_icons">
                  <FaPhoneAlt />
                </div>
                <a href="#">
                  <div className="navbar_texts">Contact</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={mobile ? "navbar_container active" : "navbar_container"}>
        <div className="navbar_inner">
          <div className="navbar_image">
            <img src={photo} alt="" />
          </div>
          <div className="navbar_name">John Doe</div>
          <div className="navbar_icons">
            <ul>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar_contents">
            <ul>
              <li>
                <div className="navbar_menu_icons">
                  <FaHome />
                </div>
                <a href="#">
                  <div className="navbar_texts">Home</div>
                </a>
              </li>
              <li>
                <div className="navbar_menu_icons">
                  <FaUserAlt />
                </div>
                <a href="#">
                  <div className="navbar_texts">About</div>
                </a>
              </li>
              <li>
                <div className="navbar_menu_icons">
                  <FaFileAlt />
                </div>
                <a href="#">
                  <div className="navbar_texts">Resume</div>
                </a>
              </li>
              <li>
                <div className="navbar_menu_icons">
                  <FaHandsHelping />
                </div>
                <a href="#">
                  <div className="navbar_texts">Services</div>
                </a>
              </li>
              <li>
                <div className="navbar_menu_icons">
                  <FaSuitcase />
                </div>
                <a href="#">
                  <div className="navbar_texts">Portfolio</div>
                </a>
              </li>
              <li>
                <div className="navbar_menu_icons">
                  <FaPhoneAlt />
                </div>
                <a href="#">
                  <div className="navbar_texts">Contact</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <button onClick={handleScreen} className="navbar_hamburger">
        {open ? <FaBars /> : <AiOutlineClose />}
      </button>
    </>
  );
}

export default Navbar;

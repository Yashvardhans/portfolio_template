import React from "react";
import "./Navbar.css";
import photo from "./images/photo.png";
import { FaHome, FaFacebook } from "react-icons/fa";

function Navbar() {
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
                <FaFacebook />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaFacebook />
              </li>
            </ul>
          </div>
          <div className="navbar_contents">
            <ul>
              <li>
                <div className="navbar_icons">
                  <FaHome />
                </div>
                <div className="navbar_texts">Home</div>
              </li>
              <li>
                <div className="navbar_icons">
                  <FaHome />
                </div>
                <div className="navbar_texts">Home</div>
              </li>
              <li>
                <div className="navbar_icons">
                  <FaHome />
                </div>
                <div className="navbar_texts">Home</div>
              </li>
              <li>
                <div className="navbar_icons">
                  <FaHome />
                </div>
                <div className="navbar_texts">Home</div>
              </li>
              <li>
                <div className="navbar_icons">
                  <FaHome />
                </div>
                <div className="navbar_texts">Home</div>
              </li>
              <li>
                <div className="navbar_icons">
                  <FaHome />
                </div>
                <div className="navbar_texts">Home</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar_container_mobile">
        <div className="navbar_inner">
          <div className="navbar_image">
            <img src={photo} alt="" />
          </div>
          <div className="navbar_name">John Doe</div>
          <div className="navbar_icons">
            <ul>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaFacebook />
              </li>
            </ul>
          </div>
          <div className="navbar_contents">
            <ul>
              <li>
                <div className="navbar_icons">
                  <FaHome />
                </div>
                <div className="navbar_texts">Home</div>
              </li>
              <li>
                <div className="navbar_icons">
                  <FaHome />
                </div>
                <div className="navbar_texts">Home</div>
              </li>
              <li>
                <div className="navbar_icons">
                  <FaHome />
                </div>
                <div className="navbar_texts">Home</div>
              </li>
              <li>
                <div className="navbar_icons">
                  <FaHome />
                </div>
                <div className="navbar_texts">Home</div>
              </li>
              <li>
                <div className="navbar_icons">
                  <FaHome />
                </div>
                <div className="navbar_texts">Home</div>
              </li>
              <li>
                <div className="navbar_icons">
                  <FaHome />
                </div>
                <div className="navbar_texts">Home</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

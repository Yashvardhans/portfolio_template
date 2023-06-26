import React from "react";
import "./Contact.css";
import line from "./images/line.png";

function Contact() {
  return (
    <div className="container">
      <div className="contact_form_container">
        <div className="contact_form_heading">
          Drop <span>me a Message </span>
        </div>
        <div className="contact_form_line">
          <img src={line} alt="" />
        </div>
        <div className="contact_form_form">
          <form action="">
            <div className="contact_form_row_1">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
            </div>
            <div className="contact_form_row_2">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="contact_form_row_3">
              <textarea
                name=""
                id=""
                cols="20"
                rows="10"
                placeholder="Your Message"
              />
            </div>
            <div className="contact_form_button">
              <button>Shoot Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

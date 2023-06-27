import React, { useState } from "react";
import "./Contact.css";
import line from "./images/line.png";
import emailjs from "@emailjs/browser";

function Contact() {


  const SendEmail = () => {
    var params = {
      from_name: name,
      email_id: email,
      subject: subject,
      message: message,
    };
    emailjs
      .send("service_a3bcuu9", "template_30xopbl", params, "ClhzPItC-PWU1AtQo")
      .then(function (res) {
        alert("Success!" + res.status);
      });
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

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
              <input
                type="text"
                id="fullname"
                placeholder="Your Name"
                onChange={handleName}
              />
              <input
                type="text"
                id="email_id"
                placeholder="Your Email"
                onChange={handleEmail}
              />
            </div>

            <div className="contact_form_row_2">
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                onChange={handleSubject}
              />
            </div>

            <div className="contact_form_row_3">
              <textarea
                name=""
                id="message"
                cols="20"
                rows="6"
                placeholder="Your Message"
                onChange={handleMessage}
              />
            </div>

            <div className="contact_form_button">
              <button onClick= {SendEmail()} >Shoot Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React ,{useState , useRef} from "react";
import "./Contact.css";
import line from "./images/line.png";
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    
    

    emailjs.sendForm('service_2u152g9', 'template_oenxmlu', form.current, 'gllfUWAiXv0vTvaXM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

   
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
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
        <form onSubmit={handleSubmit} ref={form}>
      <div className="contact_form_row_1">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          name="user_name"
        />
        <input
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="user_email"
        />
      </div>
      <div className="contact_form_row_2">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          name="subject"
        />
      </div>
      <div className="contact_form_row_3">
        <textarea
          cols="20"
          rows="6"
          placeholder="Your Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          name="message"
        />
      </div>
      <div className="contact_form_button">
        <button type="submit">Shoot Message</button>
      </div>
    </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

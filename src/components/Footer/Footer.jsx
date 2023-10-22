import React from "react";
import "./Footer.css";

const Footer = ({ footerClass }) => {
  return (
    <div className={`footer ${footerClass}`}>
      <a href="mailto:yashvardhans016@gmail.com">yourEmail@gmail.com</a>
    </div>
  );
};

export default Footer;

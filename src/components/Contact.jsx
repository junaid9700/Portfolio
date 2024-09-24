import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/junaidsajid0051/?hl=en" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100022210803951" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/junaidsajid/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/junaid9700" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:junaidoffical397@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;

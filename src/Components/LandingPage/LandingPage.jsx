import React from "react";
import "./LandingPage.css";
import description_image from "../../Assets/description.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AboutMe } from "../AboutMe/AboutMe";
import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <>
      <div id="home" className="landingpage">
        <div className="description">
          <span className="myname">My name is</span>
          <span className="name"> Akintola David</span>
          <span className="about">
            I am a web developer and designer with deep expertise in working
            with
            <span className="about_data">
              FIGMA, HTML, CSS, JAVACSRIPT, TAILWIND CSS AND REACT
            </span>
            I help businesses build the peprfect website that would display
            their services and deliver a better design than what my clients had
            originally.
          </span>
          <div className="icon_main_container">
            <div className="icon_container">
              <Link to="https://www.instagram.com/caster__david/">
                <FaInstagram
                  className="decription_icon"
                  style={{ color: "white" }}
                />
              </Link>
            </div>
            <div className="icon_container">
              <Link to="https://github.com/AkintolaDavid">
                {" "}
                <FaGithub
                  className="decription_icon"
                  style={{ color: "white" }}
                />
              </Link>
            </div>
            <div className="icon_container">
              <Link to="https://www.linkedin.com/in/akintola-david-70553b233/">
                {" "}
                <FaLinkedin
                  className="decription_icon"
                  style={{ color: "white" }}
                />
              </Link>
            </div>
          </div>
          <button className="description_button">Download CV</button>
        </div>
        <div>
          <img
            src={description_image}
            alt="description_image"
            className="description_image"
          />
        </div>
      </div>
      <AboutMe />
    </>
  );
};

import React from "react";
import "./MyServices.css";
import figma from "../../Assets/figma.jpg";
import app from "../../Assets/app.webp";
import web from "../../Assets/web.png";
import { Portfolio } from "../Portfolio/Portfolio";
export const MyServices = () => {
  return (
    <>
      <div id="service" className="MyServices_main_container">
        <div className="myservicesTextDiv">
          <span className="myservicesText"> Services</span>
          <div className="myservicesUnderline"></div>
        </div>
        <div className="myservicescontainer">
          <div className="myservice_types">
            <img src={web} className="myservice_types_img" alt="" />
            <h2 className="myservice_types_header">Web Development</h2>
            <span className="myservice_types_text">
              With more than 2 years experience of using React to build
              user-friendly interfaces and interactive features for creating web
              applications
            </span>
          </div>
          <div className="myservice_types">
            {" "}
            <img src={figma} className="myservice_types_img" alt="" />
            <h2 className="myservice_types_header">Figma</h2>
            <span className="myservice_types_text">
              Skilled in creating modern and functional UI/UX designs used in
              the developments website or graphics design purpose using Figma.
            </span>
          </div>
          <div className="myservice_types">
            {" "}
            <img src={app} className="myservice_types_img" alt="" />
            <h2 className="myservice_types_header">App Development</h2>
            <span className="myservice_types_text">
              Building beautiful and performant cross-platform apps with Flutter
              due to it's versertility in using one code for IOS and Andriod.
            </span>
          </div>
        </div>
      </div>
      <Portfolio />
    </>
  );
};

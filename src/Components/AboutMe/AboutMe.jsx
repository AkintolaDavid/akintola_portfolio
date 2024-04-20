import React from "react";
import description_image from "../../Assets/myimage.jpg";
import "./AboutMe.css";
import { MyServices } from "../MyServices/MyServices";
export const AboutMe = () => {
  return (
    <>
      <div id="about-me" className="AboutMe_main_container">
        <div className="aboutMeTextDiv">
          <span className="aboutMeText">About Me</span>
          <div className="aboutmeUnderline"></div>
        </div>
        <div className="aboutMeContainer">
          <div className="aboutMeImage">
            <img
              src={description_image}
              alt="aboutMe_image"
              className="aboutMe_image"
            />
          </div>
          <div className="aboutMeDescription">
            <h1 className="frontend">
              FrontEnd Developer &<br></br> Designer
            </h1>
            <span className="about_david">
              I am a FrontEnd developer with over 2 years experise with React
              with almost 4 years with coding in general, creating designs with
              Figma. I also have knowledge in other fields like App building
              with Flutter, C++ programing with Arduino I am an undergraduate of
              Covenant university studing computer engineering and I am opened
              to learning and gaining new knowledge and insight in new fields
            </span>
          </div>
        </div>
      </div>
      <MyServices />
    </>
  );
};

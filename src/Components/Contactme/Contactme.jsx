import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import "./Contactme.css";
export const Contactme = () => {
  const phoneNumber = "08069709910";
  const handlePhoneClick = () => {
    window.location.href = "tel:" + phoneNumber;
  };
  const email = "akintoladavid66@gmail.com";
  const address = "Opposite Jfo High School, Agbado, Ogun state";

  const handleEmailClick = () => {
    window.location.href = "mailto:" + email;
  };

  const handleLocationClick = () => {
    window.location.href =
      "https://www.google.com/maps/search/" + encodeURIComponent(address);
  };
  return (
    <div id="contact" className="Contactme_main_container">
      <div className="conteactme_TextDiv">
        <span className="conteactme_Text">Contact Me</span>
        <div className="conteactme_Underline"></div>
      </div>
      <div className="contact_container">
        <div className="contactme_details">
          <div className="contactme_phonenumber" onClick={handlePhoneClick}>
            <FaPhoneAlt style={{ marginRight: "15px", fontSize: "25px" }} />{" "}
            {phoneNumber}
          </div>
          <div className="contactme_email" onClick={handleEmailClick}>
            <IoMdMail style={{ marginRight: "15px", fontSize: "25px" }} />{" "}
            {email}
          </div>
          <div className="contactme_address" onClick={handleLocationClick}>
            <FaLocationDot style={{ marginRight: "15px", fontSize: "25px" }} />{" "}
            {address}
          </div>
        </div>
        <div className="contactme_form">
          <input
            type="text"
            className="contactme_form_name"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="contactme_form_email"
            placeholder="Email Address"
          />
          <div className="contact_phone_subject">
            <input
              type="number"
              className="contactme_form_phoneNumber"
              placeholder="Phone Number"
            />
            <input
              type="text"
              className="contactme_form_subject"
              placeholder="Subject"
            />
          </div>
          <textarea
            class="contactme_form_message"
            placeholder="Your Message"
          ></textarea>

          <button className="contactMe_btn">Send</button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar_link">
        <li>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("home").offsetTop,
              })
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("about-me").offsetTop,
              })
            }
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("service").offsetTop,
              })
            }
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("portfolio").offsetTop,
              })
            }
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("contact").offsetTop,
              })
            }
          >
            Contact
          </Link>
        </li>
      </ul>
      <button
        className="navbar_button"
        onClick={() =>
          window.scrollTo({
            top: document.getElementById("contact").offsetTop,
          })
        }
      >
        Hire me
      </button>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import "./Navbar.css";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
  const [isOpen, setIsOpen] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle state on button click
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <nav className="mobile_navbar">
          <div className="mobile_navbar_container">
            <div className="sidemenu_container">
              <CgMenu
                onClick={toggleSidebar}
                style={{ color: "white", fontSize: "30px" }}
              />
            </div>
            <div className="mobile_hire_btn">
              <button
                className="mobile_navbar_button"
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById("contact").offsetTop,
                  })
                }
              >
                Hire me
              </button>
            </div>
          </div>
          <ul className={isOpen ? "visible" : "hidden"} id="menu">
            <li style={{ marginTop: "10px" }}>
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
            <li style={{ marginTop: "10px" }}>
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
            <li style={{ marginTop: "10px" }}>
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

            <li style={{ marginTop: "10px" }}>
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
            <li style={{ marginTop: "10px" }}>
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
        </nav>
      ) : (
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
      )}
    </>
  );
};

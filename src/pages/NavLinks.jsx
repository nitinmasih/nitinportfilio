import React from "react";

import "../styles/navlinks.scss";

import { Link } from "react-router-dom";
const NavLinks = ({ show, setShow, setIsChecked }) => {
  const handlehamburger = () => {
    setShow((prev) => !prev);
    setIsChecked(false);
  };

  return (
    <div
      className="navlinks"
      style={{
                                                                                                                                 marginTop: show === true ? "0" : `-${100}vh`,
        transition: "margin-top 0.2s ease-in-out",
      }}
    >

      <div className="links">
        <div className="home-about">
          <Link to={"/"} onClick={handlehamburger} className="home">
            Home
          </Link>
          <Link to={"/about"} onClick={handlehamburger} className="abouts">
            About
          </Link>
        </div>
        <div className="project-article">
          <Link to={"/project"} onClick={handlehamburger} className="project">
            Projects
          </Link>
          <Link to={"/article"} onClick={handlehamburger} className="article">
            Articles
          </Link>
        </div>
        <div className="office-follow">
          <div className="office">
              <h2>Offices</h2>
            <div className="address">
            <div className="add-one">
              <p>TechHub Plaza, Suite 301 </p>
              <p style={{color:"#ada89f"}}>567 Tech Lane, TechHub Plaza, Suite 301</p>
            </div>
            <div className="add-two">
              <p>Metro Tower, Floor 15</p>
              <p style={{color:"#ada89f"}}>789 Main Street, Metro Tower, Floor 15</p>
            </div>
            </div>
          </div>
          <div className="follow">
            <p>Follow Me</p>
            <div className="follow-icons">
              <Link to={"https://x.com/home"}>
              <img src="images/x.png" alt="" />
              </Link>
              <a href="linkedin.com/in/nitin-masih-908893264/" target="_blank">
              <img src="images/linkedin.png" alt="" />
              </a>
              <Link to={"/"}> <img src="images/instagram.jpeg" alt="" /></Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;

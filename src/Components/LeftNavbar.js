// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.scss";
import Photo from "../Static/dummy_photo.png";
function LeftNavbar() {
  return (
    <div className="left">
      <div className="avtar">
        <img src={Photo} alt="" />
        <h2>Hi, I am Damandeep</h2>
      </div>
      <div className="allLinks">
        <div className="links">
          <Link to={"/"} className="anchor">
            About
          </Link>
        </div>
        <div className="links">
          <Link to={"/skills"} className="anchor">
            Skills
          </Link>
        </div>
        <div className="links">
          <Link to={"/projects"} className="anchor">
            Projects
          </Link>
        </div>
        <div className="links">
          <Link to={"/contact"} className="anchor">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftNavbar;

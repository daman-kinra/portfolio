import React from "react";
import LeftNavbar from "../Components/LeftNavbar";
import "../Styles/Home.scss";
import Download from "../Components/Download";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

function Home() {
  return (
    <main>
      <section className="glass">
        <LeftNavbar />
        <div className="right">
          <Download />
          <div className="heading">
            <h1>About</h1>
          </div>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/daman-kinra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icons">
                <FaLinkedinIn size="1rem" style={{ color: "556052" }} />
                <p>LinkedIn</p>
              </div>
            </a>
            <a
              href="https://github.com/daman-kinra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icons">
                <AiFillGithub size="1rem" style={{ color: "#556052" }} />
                <p>Github</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/xcls00/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icons">
                <AiFillInstagram size="1rem" style={{ color: "#556052" }} />
                <p>Instagram</p>
              </div>
            </a>
          </div>
          <div className="content home">
            <p style={{ fontSize: "15px" }}>
              "I'm passionate and driven to work with Full-Stack technologies
              and UI/UX development. Actively looking for internship
              opportunities in this domain. Have worked extensively on
              technologies like NodeJs, ReactJs, MongoDB etc. Developed
              web-applications for a couple of student startups."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

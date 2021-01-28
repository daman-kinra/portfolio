// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import LeftNavbar from "../Components/LeftNavbar";
import "../Styles/Home.scss";
import Download from "../Components/Download";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

function Home() {
  // eslint-disable-next-line
  const [theme, setTheme] = useState("blue");

  return (
    <main className={theme}>
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
          <div className="content">
            <p style={{ fontSize: "15px" }}>
              "I am an ordinary student with extra ordinary development skills
              and exponential learning curve. Currently pursuing my B.tech
              degree in computer science from Lovely Professional University. I
              am doing my specialization in Full stack development and have done
              many projects in MERN stack. I am always up to switch between the
              technologies and learn new ones. I am expert in Frontend
              development using ReactJs, really enjoy building UIs and
              integrating it with NodeJs in the Backend. Apart from this I am an
              active participator in academic events. I have experience working
              in teams as I had participated in project building hackathons. I
              also secured second position in All India Research Championship,
              organized by Techkriti IIT Kanpur."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

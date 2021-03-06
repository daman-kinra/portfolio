import React, { useContext } from "react";
import LeftNavbar from "../Components/LeftNavbar";
import "../Styles/Home.scss";
import Download from "../Components/Download";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { theme } from "../theme/themeContext";
function Home(props) {
  const { changeTheme } = useContext(theme);
  return (
    <main>
      <section className="glass">
        <LeftNavbar location={props.location} />
        <div className="right homeabout">
          <h1>
            Hi, I am a Frontend Developer, currently working as a Frontend
            developer intern in "DJ interactive solutions".{" "}
          </h1>
          <Download />
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/daman-kinra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icons">
                <FaLinkedinIn
                  size={`${window.innerWidth > 1366 ? "2rem" : "1rem"}`}
                  style={{ color: "556052" }}
                />
                <p>LinkedIn</p>
              </div>
            </a>
            <a
              href="https://github.com/daman-kinra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icons">
                <AiFillGithub
                  size={`${window.innerWidth > 1366 ? "2rem" : "1rem"}`}
                  style={{ color: "#556052" }}
                />
                <p>Github</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/xcls00/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icons">
                <AiFillInstagram
                  size={`${window.innerWidth > 1366 ? "2rem" : "1rem"}`}
                  style={{ color: "#556052" }}
                />
                <p>Instagram</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

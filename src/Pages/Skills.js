// eslint-disable-next-line
import React from "react";
import LeftNavbar from "../Components/LeftNavbar";
import Download from "../Components/Download";
import { FaNode, FaJava } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { ImCss3, ImHtmlFive2 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb, DiSass } from "react-icons/di";
import "../Styles/Skills.scss";

function Skills() {
  return (
    <main>
      <section className="glass">
        <LeftNavbar />
        <div className="right">
          <Download />
          <div className="heading">
            <h1>Skills</h1>
          </div>
          <div className="content skills">
            <div className="icons">
              <SiReact size="5rem" />
              <p> ReactJs</p>
            </div>
            <div className="icons">
              <FaNode size="5rem" />
              <p>NodeJs</p>
            </div>
            <div className="icons">
              <IoLogoJavascript size="5rem" />
              <p>JavaScript</p>
            </div>
            <div className="icons">
              <DiMongodb size="5rem" />
              <p>MongoDB</p>
            </div>
            <div className="icons">
              <ImHtmlFive2 size="5rem" />
              <p>HTML5</p>
            </div>
            <div className="icons">
              <ImCss3 size="5rem" />
              <p>CSS3</p>
            </div>
            <div className="icons sass">
              <DiSass size="5rem" />
              <p>SASS</p>
            </div>
            <div className="icons">
              <FaJava size="6rem" />
              <p>Java</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;

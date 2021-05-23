// eslint-disable-next-line
import React from "react";
import Download from "../Components/Download";
import { Data } from "../Components/ProjectDescription";
import Project from "../Components/Project";
import "../Styles/Projects.scss";
import LeftNavbar from "../Components/LeftNavbar";

function Projects(props) {
  return (
    <main>
      <section className="glass">
        <LeftNavbar location={props.location} />
        <div className="right">
          <Download />
          <div className="content projects">
            {Data.map((item, pos) => {
              return <Project project={item} key={pos} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;

// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import Download from "../Components/Download";
import { Data } from "../Components/ProjectDescription";
import Project from "../Components/Project";
import "../Styles/Projects.scss";

import "../Styles/Home.scss";
import LeftNavbar from "../Components/LeftNavbar";

function Projects() {
  console.log(Data);
  // eslint-disable-next-line
  const [theme, setTheme] = useState("blue");

  return (
    <main className={theme}>
      <section className="glass">
        <LeftNavbar />
        <div className="right">
          <Download />
          <div className="heading">
            <h1>Projects</h1>
          </div>
          <div className="content project">
            {Data.map((project, pos) => {
              console.log(project);
              return <Project key={pos} project={project} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;

// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import LeftNavbar from "../Components/LeftNavbar";
import Download from "../Components/Download";

function Skills() {
  // eslint-disable-next-line
  const [theme, setTheme] = useState("blue");
  return (
    <main className={theme}>
      <section className="glass">
        <LeftNavbar />
        <div className="right">
          <Download />
          <div className="heading">
            <h1>Skills</h1>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;

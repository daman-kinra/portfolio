// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import LeftNavbar from "../Components/LeftNavbar";
import "../Styles/Home.scss";
import Download from "../Components/Download";

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
          <div className="content"></div>
        </div>
      </section>
    </main>
  );
}

export default Home;

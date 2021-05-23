import React from "react";
import LeftNavbar from "../Components/LeftNavbar";

function Error(props) {
  return (
    <main>
      <section className="glass">
        <LeftNavbar location={props.location} />
        <div className="right">
          <div className="heading error">
            <h1>Error</h1>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Error;

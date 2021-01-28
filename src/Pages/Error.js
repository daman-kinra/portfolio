import React from "react";
import LeftNavbar from "../Components/LeftNavbar";

function Error() {
  return (
    <main>
      <section className="glass">
        <LeftNavbar />
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

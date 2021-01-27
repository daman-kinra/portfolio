import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Error from "./Pages/Error";
import Snowfall from "react-snowfall";

function App() {
  useEffect(() => {
    document.title = "Daman-Portfolio";
  }, []);
  return (
    <Router>
      <Snowfall color="white" snowflakeCount={350} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;

import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Error from "./Pages/Error";
import Snowfall from "react-snowfall";
import { theme } from "./theme/themeContext";
import ColorChanger from "./Components/ColorChanger";
function App() {
  const { themeVariable } = useContext(theme);
  useEffect(() => {
    document.body.setAttribute("page-theme", themeVariable);
  }, [themeVariable]);

  return (
    <Router>
      <ColorChanger />
      <Snowfall
        color="white"
        snowflakeCount={window.innerWidth < 600 ? 200 : 350}
      />
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

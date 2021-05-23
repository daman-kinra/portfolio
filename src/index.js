import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";
import { ThemeContext } from "./theme/themeContext";
ReactDom.render(
  <ThemeContext>
    <App />
  </ThemeContext>,
  document.getElementById("root")
);

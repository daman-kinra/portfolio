import React, { useContext } from "react";
import { theme } from "../theme/themeContext";
function ColorChanger() {
  const { changeTheme } = useContext(theme);
  return (
    <div className="color__changer">
      <div
        className="blue__color"
        onClick={() => {
          changeTheme("blue");
        }}
      ></div>
      <div
        className="pink__color"
        onClick={() => {
          changeTheme("pink");
        }}
      ></div>
      <div
        className="brown__color"
        onClick={() => {
          changeTheme("brown");
        }}
      ></div>
      <div
        className="green__color"
        onClick={() => {
          changeTheme("green");
        }}
      ></div>
    </div>
  );
}

export default ColorChanger;

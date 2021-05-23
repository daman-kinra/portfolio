import React, { createContext, useState } from "react";
export const theme = createContext();
export const ThemeContext = (props) => {
  const [themeVariable, setThemeVariable] = useState("blue");
  const changeTheme = (color) => {
    setThemeVariable(color);
  };
  return (
    <theme.Provider value={{ themeVariable, changeTheme }}>
      {props.children}
    </theme.Provider>
  );
};

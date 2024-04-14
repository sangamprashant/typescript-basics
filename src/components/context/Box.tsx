import React from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = React.useContext(ThemeContext);
  return <div>
    <h2 style={{backgroundColor:theme.primary.main, color:theme.primary.text}}>Box theme</h2>
    <h2 style={{backgroundColor:theme.secondary.main, color:theme.primary.text}}>Box theme</h2>
  </div>;
};

export default Box;

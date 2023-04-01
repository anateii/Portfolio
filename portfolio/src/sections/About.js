import React from "react";
import Plant from "../spline/Plant";
import classes from "../styling/About.module.scss";

export const About = () => {
  return (
    <div id="who" className={classes.aboutWrapper}>
      <div></div>
      <div>
        <Plant />
      </div>
    </div>
  );
};

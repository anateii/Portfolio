import React from "react";
import classes from "../styling/Skills.module.scss";
import { FaReact, FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa";
import { SiRedux, SiJavascript, SiFramer, SiNextdotjs } from "react-icons/si";

export const Skills = () => {
  return (
    <div id="who" className={classes.skillsWrapper}>
      <div>
        <SiJavascript className={classes.icon} />
        <FaHtml5 className={classes.icon} />
        <FaCss3Alt className={classes.icon} />
        <FaReact className={classes.icon} />
        <SiRedux className={classes.icon} />
        <SiNextdotjs className={classes.icon} />
        <FaFigma className={classes.icon} />
        <SiFramer className={classes.icon} />
      </div>
    </div>
  );
};

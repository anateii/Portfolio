import React from "react";
import classes from "../styling/Skills.module.scss";
import { FaReact, FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa";
import { SiRedux, SiJavascript, SiFramer, SiNextdotjs } from "react-icons/si";

export const Skills = () => {
  const skills = [
    { logo: <FaReact />, id: 1 },
    { logo: <SiRedux />, id: 2 },
    { logo: <SiNextdotjs />, id: 3 },
    { logo: <FaHtml5 />, id: 4 },
    { logo: <FaCss3Alt />, id: 5 },
    { logo: <SiJavascript />, id: 6 },
    { logo: <FaFigma />, id: 7 },
    { logo: <SiFramer />, id: 8 },
  ];

  return (
    <>
      <div className={classes.skillsWrapper}>
        <div className={classes.skillsWrapper__skills}>
          {skills.map((skill) => (
            <div key={skill.id}>
              <div className={classes.icon}>{skill.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

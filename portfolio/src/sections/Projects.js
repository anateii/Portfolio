import React from "react";
import classes from "../styling/Projects.module.scss";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import picture from "../assets/IntroA1.png";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Space Travel Application",
      live: "https://planets-beyond.vercel.app/",
      code: "https://github.com/anateii/Planets-Beyond-Site",
      pic: picture,
    },
    { id: 2, name: "Music App" },
    { id: 3, name: "Admin App" },
    // { id: 4, name: "Landing Page" },
  ];

  return (
    <div style={{ marginTop: "6em" }}>
      <h1 className={classes.title}>Projects</h1>\
      <div className={classes.projectsWrapper}>
        {projects.map((project) => (
          <div key={project.id} className={classes.projectColumn}>
            <div className={classes.projectColumn__projectAvatar}>
              <img src={project.pic} alt="" style={{ width: "100%" }} />
            </div>
            <h3>{project.name}</h3>

            <div className={classes.projectColumn__logos}>
              <a href={project.live} rel="noreferrer" target="_blank">
                <FaExternalLinkAlt style={{ fontSize: "16px" }} />
              </a>

              <a href={project.code} rel="noreferrer" target="_blank">
                <FaCode />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

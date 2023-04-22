import React from "react";
import classes from "../styling/Projects.module.scss";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Space Travel Application",
      live: "https://planets-beyond.vercel.app/",
    },
    { id: 2, name: "Music App" },
    { id: 3, name: "Admin App" },
    { id: 3, name: "Landing Page" },
  ];

  return (
    <>
      <h1 className={classes.title}>Projects</h1>\
      <div className={classes.projectsWrapper}>
        {projects.map((project) => (
          <div key={project.id} className={classes.projectColumn}>
            <div className={classes.projectColumn__projectAvatar}></div>
            <h3>{project.name}</h3>

            <div className={classes.projectColumn__logos}>
              <a href={project.live} rel="noreferrer" target="_blank">
                <FaExternalLinkAlt style={{ fontSize: "16px" }} />
              </a>

              <FaCode />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

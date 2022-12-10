import React from "react";
import classes from "./Home.module.scss";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <>
      <div className={classes.titleWrapper}>
        <div className={classes.title}>
          <h1>Hi, I am Ana</h1>
          <Typewriter
            options={{
              strings: [
                "React Developer",
                "Sales Funnel Designer",
                "Content Creator",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: "natural",
              pauseFor: 1500,
            }}
          />
          <div className={classes.subtitle}>
            <p>
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement.
            </p>
          </div>
        </div>

        <div className={classes.titleWrapper__secondDiv}></div>{" "}
      </div>
    </>
  );
};

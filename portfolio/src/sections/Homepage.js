import React from "react";
import classes from "../styling/Homepage.module.scss";
import VideoBackground from "../spline/VideoBackground";
import { Button } from "../components/Button";
import { FaEthereum } from "react-icons/fa";

export const Homepage = () => {
  return (
    <div id="home" className={classes.homeWrapper}>
      <div className={classes.homeWrapper__firstContainer}>
        <h3>WELCOME TO MY WORLD</h3>
        <h1>
          Hi, <bold style={{ color: "#3500ff" }}>I'm Ana Matei</bold>
        </h1>
        <h4>
          I’m a FrontEnd Developer specialized in building and designing
          exceptional digital experiences with modern JS libraries like ReactJS.
        </h4>
        <div>
          <Button text="LET'S CHAT" />

          <h5>
            PRESS AND DRAG TO ORBIT <FaEthereum className={classes.icon} />
          </h5>
        </div>
      </div>
      <div className={classes.homeWrapper__secondContainer}>
        <VideoBackground />
      </div>
    </div>
  );
};

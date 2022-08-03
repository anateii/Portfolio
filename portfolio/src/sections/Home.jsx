import React from "react";
import classes from "./Home.module.scss";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

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
                "IG Content Creator",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: "natural",
              pauseFor: 1500,
            }}
          />
          <Link to="/">
            <img
              src="/assets/logo.png"
              alt=""
              className={classes.header__content__logo}
            />
          </Link>
        </div>
        <div className={classes.titleWrapper__secondDiv}>Hello</div>{" "}
      </div>
    </>
  );
};

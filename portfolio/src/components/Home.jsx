import React from "react";
import classes from '../styles/Home.module.scss'
import VideoBackground from '../spline/VideoBackground'


export const Home = () => {



  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h3>Hi, my name is </h3>
          <h2 className={classes.name}>Ana Matei.</h2>
          <h1>I create great web experiences.</h1>
          <p>I’m a FrontEnd Developer specialized in building and designing
            exceptional digital experiences with modern JS libraries like ReactJS.</p>
          <button onClick={() => window.location.href = "mailto:anamateidev@gmail.com"}>LET'S CHAT!</button>
        </div>
        <VideoBackground className={classes.video} />
      </div>
    </>

  );
};


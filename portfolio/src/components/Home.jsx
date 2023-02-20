import React from "react";
import classes from '../styles/Home.module.scss'

export const Home = () => {


  return (
    <div className={classes.container}>
      <h3>Hi, my name is </h3>
      <h2>Ana Matei.</h2>
      <h1>I create great web experiences.</h1>
      <p>I’m a FrontEnd Developer specialized in building and designing
        exceptional digital experiences with modern JS libraries like ReactJS.</p>
      <button>Let's chat!</button>
    </div>
  );
};


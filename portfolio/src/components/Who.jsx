import React from "react";
import classes from '../styles/Who.module.scss'

export const Who = () => {
  return (
    <div className={classes.about}>
      <h2 className={classes.about__title}> Who is Ana?</h2>
      <div id="who" className={classes.about__container}>
        <div>Hello</div>
        <div>Ana</div>
      </div>
    </div>
  );
};

import React from "react";
import classes from '../styles/Who.module.scss'

export const Who = () => {
  return (
    <>
      <div className={classes.about}>
        <h2 className={classes.title}> About me</h2>
        <div id="who" className={classes.container}>
          <div>
            <p>Hello! My name is Ana and I enjoy creating things that live on the internet.
              My interest in web development started back in 2020 when I decided to dive deep into Digital Marketing, more specifically
              into creating <bold style={{ fontWeight: '800', color: '#64ffda' }}> sales funnels</bold> for Italian Business Coaches.
              Turns out using tools like Clickfunnels and GoHighLevel taught me a lot about HTML & CSS!
            </p>
            <p>Fast-forward to today, and I’ve had the privilege of working as a Sales Funnel Designer, Appointment Setter, Copywriter, and finally
              as a FrontEnd Developer.
              My main focus is building accessible, inclusive products and digital experiences through the combination of the technologies I used for the past year:
            </p>
            <ul className={classes.skillsList}>
              <li>JavaScript(ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>ReactJS</li>
              <li>Redux</li>
              <li>Git & GitHub</li>


              <li>Figma</li>

            </ul>
          </div>
          <div className={classes.imgWrapper}>

            <div className={classes.imgWrapper__wrapper}>

            </div>


            <img src="/assets/anapicx.png" alt="" /></div>
        </div>
      </div></>
  );
};

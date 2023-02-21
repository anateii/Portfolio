import React from "react";
import classes from '../styles/Who.module.scss'


export const Who = () => {

  const myStyle = {
    backgroundImage: 'url(/assets/myPicture.png)',
    backgroundSize: '300px',
  }

  return (
    <>
      <div id="who">
        <div className={classes.container}>
          <h2 className={classes.container__title}>About me</h2>
          <div className={classes.container__about}>
            <div className={classes.container__about__intro}>
              <p>Hello! My name is Ana and I enjoy creating things that live on the internet.
                My interest in web development started back in 2020 when I decided to dive deep into
                <span style={{ fontWeight: '800', color: '#fff' }}> Digital Marketing,</span> more specifically
                into creating <span style={{ fontWeight: '800', color: '#fff' }}>sales funnels</span> for Italian Business Coaches.
                Turns out using tools like Clickfunnels and GoHighLevel taught me a lot about HTML & CSS!
              </p>
              <p>Fast-forward to today, and I’ve had the privilege of working as a Sales Funnel Designer, Appointment Setter, Copywriter, and finally
                as a FrontEnd Developer.
                My main focus is building accessible, inclusive products and digital experiences through the combination of the technologies I used for the past year:
              </p>
              <ul className={classes.skillsList}>
                <li>JavaScript(ES6+)</li>
                <li>Material UI</li>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>Git & GitHub</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className={classes.container__about__imgWrapper}>
              <div className={classes.firstBox}
                style={myStyle}></div>
              <div className={classes.secondBox}></div>
            </div>



          </div>

        </div>
      </div></>
  );
};

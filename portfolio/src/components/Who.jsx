import React, { useEffect } from "react";
import classes from '../styles/Who.module.scss'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const titleVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 }, },
  hidden: { opacity: 0, x: -100 }
};

const paragraphVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 }, },
  hidden: { opacity: 0, x: -100 }
}

const imgVariants = {
  visible: { opacity: 1, transition: { duration: 1, delay: 1.5 }, },
  hidden: { opacity: 0, }
}

export const Who = () => {

  const controls = useAnimation();

  const [ref, inView] = useInView();



  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const myStyle = {
    backgroundImage: 'url(/assets/myPicture.png)',
    backgroundSize: '300px',
  }

  return (


    <div id="who">
      <div className={classes.container}>
        <motion.div
          ref={ref}
          animate={controls}
          variants={titleVariants}
          initial="hidden"
        >
          <h2 className={classes.container__title}>About me</h2>
        </motion.div >
        <div className={classes.container__about}>
          <motion.div
            ref={ref}
            animate={controls}
            variants={paragraphVariants}
            initial="hidden">
            <div className={classes.container__about__intro}>
              <p>Hello! My name is Ana and I enjoy creating things that live on the internet.
                My interest in web development started back in 2020 when I decided to dive deep into
                <span style={{ fontWeight: '800', color: '#b4007e' }}> Digital Marketing,</span> more specifically
                into creating <span style={{ fontWeight: '800', color: '#b4007e' }}>sales funnels</span> for Italian Business Coaches.
                Turns out using tools like Clickfunnels and GoHighLevel taught me a lot about HTML & CSS!
              </p>
              <p>Fast-forward to today, I’ve had the privilege of working as a Sales Funnel Designer, Appointment Setter, Copywriter, and finally
                as a FrontEnd Developer.
                My main focus is building accessible, inclusive products and digital experiences through the combination of the technologies I used for the past year:
              </p>
              <ul className={classes.skillsList}>
                <li>JavaScript (ES6+)</li>
                <li>Material UI</li>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>Git & GitHub</li>
                <li>Figma</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            variants={imgVariants}
            initial="hidden"
          >
            <div className={classes.container__about__imgWrapper}>
              <div className={classes.firstBox} style={myStyle}></div>
            </div>
          </motion.div>



        </div>

      </div>
    </div>

  );
};

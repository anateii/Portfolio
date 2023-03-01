import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from 'react'
import classes from '../styles/Work.module.scss'
import { FaCode } from "react-icons/fa"
import data from "../utils/projects.json"


export const Work = () => {

  const titleVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 }, },
    hidden: { opacity: 0, x: -100 }
  };

  const controls = useAnimation();

  const [ref, inView] = useInView();




  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id="work" className={classes.container}>
      <motion.div
        ref={ref}
        animate={controls}
        variants={titleVariants}
        initial="hidden"
      >
        <h2 className={classes.container__title}>Projects</h2>

      </motion.div>

      <div className={classes.boxWrapper}>
        {
          data.map((project) => (
            <div key={project.id}>
              <FaCode className={classes.icon} />
              <h2>{project.title}</h2>
              <h6>{project.body}</h6>

              <span>{project.skills}</span>

            </div>

          ))
        }
      </div>
    </div>
  )
}

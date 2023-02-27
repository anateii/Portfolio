import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from 'react'
import classes from '../styles/Work.module.scss'
import data from "../utils/projects.json"
import { FaGithub } from "react-icons/fa"
import { GoLinkExternal } from "react-icons/go"

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
        <div>Box 1</div>
        <div>Box 2</div>
        <div>Box 3</div>
        <div>Box 4</div>
      </div>
    </div>
  )
}

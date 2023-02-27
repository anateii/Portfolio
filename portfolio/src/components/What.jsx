import React, { useEffect, useState } from "react";
import classes from '../styles/What.module.scss'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/tabs.scss"
import data from "../utils/data.json"


export const What = () => {

  const titleVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 }, },
    hidden: { opacity: 0, x: -100 }
  };

  const bodyVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 }, },
    hidden: { opacity: 0, x: -100 }
  };

  const controls = useAnimation();

  const [ref, inView] = useInView();



  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [activeTab, setActiveTab] = useState(1);


  return (
    <div id="what" className={classes.container}>
      <motion.div
        ref={ref}
        animate={controls}
        variants={titleVariants}
        initial="hidden"
      >
        <h2 className={classes.container__title}>Where I've worked</h2></motion.div>
      <motion.div ref={ref}
        animate={controls}
        variants={bodyVariants}
        initial="hidden">
        <div className="tabs-container">
          <div className="tabs-header">
            <div
              className={`tab ${activeTab === 1 ? "active" : ""}`}
              onClick={() => setActiveTab(1)}
            >
              Mooney
            </div>
            <div
              className={`tab ${activeTab === 2 ? "active" : ""}`}
              onClick={() => setActiveTab(2)}
            >
              Premium Expert
            </div>
            <div
              className={`tab ${activeTab === 3 ? "active" : ""}`}
              onClick={() => setActiveTab(3)}
            >
              Freelancer
            </div>
          </div>
          <div className="tabs-content">
            {data.map((element) => (
              <div
                key={element.id}
                className={`tab-item ${activeTab === element.id ? "active" : ""}`}>
                <h3>
                  <span>{element.title}</span>
                  {element.id === 1 || element.id === 2 ? (
                    <>
                      <span>@</span>
                      <a href={element.link}>{element.job}</a>
                    </>) : ('')}
                </h3>
                <p>{element.time}</p>
                <ul>
                  {element.body.split("\n").map((string, index) => (
                    <li key={index} className="list">{string}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div></motion.div>
    </div >)
};

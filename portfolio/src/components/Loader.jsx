import * as React from "react";
import { motion } from "framer-motion";
import '../styles/loader.scss'



export const Loader = () => (
    <div className="container">
        <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                <motion.g>
                    <motion.rect
                        initial={{ pathLength: 0, stroke: '#b4007e' }}
                        animate={{ pathLength: 1, stroke: '#7109a5' }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            repeatDelay: 2
                        }}
                        x="4.5"
                        y="4.5"
                        width="5"
                        height="5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"

                    ></motion.rect>
                </motion.g>
            </svg>
        </div>
    </div>
);
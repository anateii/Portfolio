import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import classes from "../styles/Header.module.scss";
import { HashLink } from "react-router-hash-link"
import { useAnimation, motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 300,
    height: 300,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const { scrollYProgress } = useScroll()


  const headerVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 }, },
    hidden: { opacity: 0, x: -100, }
  };

  const controls = useAnimation();

  const [ref, inView] = useInView();



  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return (

    <header className={classes.header}>
      <motion.div ref={ref}
        animate={controls}
        variants={headerVariants}
        initial="hidden" >


        <div className={classes.header__content}>

          <div className={classes.header__content__logo}>
            <FaGithub onClick={() => window.open('https://github.com/anateii', '_blank')} className={classes.logo1} />
            < FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/ana-matei/', '_blank')} className={classes.logo2} />
            < FaInstagram onClick={() => window.open('https://www.instagram.com/hercodingpill/', '_blank')} className={classes.logo3} />
          </div>

          <nav
            className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : classes.isMenuMobile
              }`}
          >
            <ul>
              <li>
                {menuOpen && size.width < 768 ? (<HashLink to="/#who" smooth onClick={menuToggleHandler}>
                  <span>01. </span>
                  <span>About</span>
                </HashLink>) : (<HashLink to="/#who" smooth>
                  <span>01. </span>
                  <span>About</span>
                </HashLink>)}

              </li>
              <li>
                {menuOpen && size.width < 768 ? (<HashLink to="/#what" smooth onClick={menuToggleHandler}>
                  <span>02. </span>
                  <span>Experience</span>
                </HashLink>) : (<HashLink to="/#what" smooth>
                  <span>02. </span>
                  <span>Experience</span>
                </HashLink>)}

              </li>
              <li>
                {menuOpen && size.width < 768 ? (<HashLink to="/#work" smooth onClick={menuToggleHandler}>
                  <span>03. </span>
                  <span>Projects</span>
                </HashLink>) : (<HashLink to="/#work" smooth>
                  <span>03. </span>
                  <span>Projects</span>
                </HashLink>)}
              </li>
            </ul>
            <a
              href="/assets/Ana Matei - CV.pdf"
              download="CV"
              target="_blank"
              rel="noreferrer"
            >
              <button>RESUME</button>
            </a>
          </nav>
          <div className={classes.header__content__toggle}>
            {!menuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        </div>

      </motion.div>
      <motion.div className={classes.progressBar} style={{ scaleX: scrollYProgress }} />
    </header>
  );
};

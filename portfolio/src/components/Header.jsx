import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "../styles/Header.module.scss";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link"

export const Header = () => {
  const history = useNavigate();
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

  const ctaClickHandler = () => {
    menuToggleHandler();
    history.push("/page-cta");
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes.header__content}>
          <div></div>
          <nav
            className={`${classes.header__content__nav} ${menuOpen && size.width < 1024 ? classes.isMenu : classes.isMenuMobile
              }`}
          >
            <ul>
              <li>
                <HashLink to="/#who" smooth onClick={menuToggleHandler}>
                  <span>01. </span>
                  Who
                </HashLink>
              </li>
              <li>
                <HashLink to="/#what" smooth onClick={menuToggleHandler}>
                  <span>02. </span>
                  What
                </HashLink>
              </li>
              <li>
                <HashLink to="/#work" smooth onClick={menuToggleHandler}>
                  <span>03. </span>
                  Work
                </HashLink>
              </li>
            </ul>
            <a
              href="/assets/Ana Matei - CV.pdf"
              download="CV"
              target="_blank"
              rel="noreferrer"
            >
              <button onClick={ctaClickHandler}>Resume</button>
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
      </header>
    </>
  );
};

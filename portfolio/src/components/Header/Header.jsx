import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";

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
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div></div>
        <nav
          className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : ""
            }`}
        >
          <ul>
            <li>
              <Link to="/who" onClick={menuToggleHandler}>
                <span>01. </span>
                Who
              </Link>
            </li>
            <li>
              <Link to="/what" onClick={menuToggleHandler}>
                <span>02. </span>
                What
              </Link>
            </li>
            <li>
              <Link to="/work" onClick={menuToggleHandler}>
                <span>03. </span>
                Work
              </Link>
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
  );
};

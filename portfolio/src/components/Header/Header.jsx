import React from 'react'
import classes from  "./Header.module.scss"
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineClose} from 'react-icons/ai'

export const Header = () => {
  return (
    
    <header className={classes.header}>
    <div className={classes.header__content}>
      <h2>logo</h2>
      </div>
      <nav className={classes.header__content__nav}>
      <ul>
        <li>Who</li>
        <li>What</li>
        <li>Work</li>
      </ul>
      </nav>
      <div className={classes.header__content__toggle}></div>
      </header>
    
  )
}


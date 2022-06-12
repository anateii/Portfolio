import React from 'react'
import classes from  "./Header.module.scss"

export const Header = () => {
  return (
    
    <header className={classes.header}>
    <div className={classes.header_content}>
      <h2>logo</h2>
      </div>
      <nav className={classes.header_content_nav}>
      <ul>
        <li>Who</li>
        <li>What</li>
        <li>Work</li>
      </ul>
      </nav>
      </header>
    
  )
}


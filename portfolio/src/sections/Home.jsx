import React from 'react'
import classes from './Home.module.scss'
import Typewriter from 'typewriter-effect'



export const Home = () => {
  return (
    
    <>
    <div className={classes.title}>
        <h1>Hi, I am Ana</h1>
        
    </div>
    <Typewriter
        onInit={(typewriter)=>{
        typewriter.typeString('React Developer').start() 
        }} />
        </>
  )
}

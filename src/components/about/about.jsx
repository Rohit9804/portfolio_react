import React from 'react';
import "./about.css";


const About = () => {
  return (
    <div className='about' id = "about">
      <div className="about__photo">
     <h1 className='h1tag'>ABOUT ME</h1>
     <img className='imgzoro' src= "https://i.redd.it/i5eqdtk854s21.jpg" alt = "pic"/>
     </div>
     <div className="about__section">
      <h2 >I am <span className='highlight'>Rohit Singh</span>, a developer from Delhi, India.
       <br></br>
       I study at <span className='highlight'>Maharaja Agrasen Institute Of Technology</span>
       <br></br>
       I have good experience in developing <span className='highlight'> Web Apps</span>.
      </h2>
      <h3>check my work here</h3>
      <a href="https://github.com/rohit-sama" rel="noreferrer" target="_blank">
      <button  className="social">github</button>
  
      </a>
     </div>
    </div>
  )
}

export default About

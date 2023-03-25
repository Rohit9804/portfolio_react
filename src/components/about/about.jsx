import React from 'react';
import "./about.css";


const About = () => {
  return (
    <div className='about' id = "about">
      <div className="about__photo">
     <h1 className='h1tag'>ABOUT ME</h1>
     <img className='imgzoro' src= "https://i.pinimg.com/originals/f3/43/68/f34368a931299ac106b7c1f6c3484627.jpg" alt = "pic"/>
     </div>
     <div className="about__section">
      <h2>I am <span className='highlight'>Rohit Singh</span>, a front-end developer from Delhi, India.
       <br></br>
       I study at <span className='highlight'>Maharaja Agrasen Institute Of Technology</span>
       <br></br>
       I have good experience in developing <span className='highlight'>front-end websites</span>.
      </h2>
      <h3>check my work here</h3>
      <a href="https://github.com/Rohit9804" rel="noreferrer" target="_blank">
      <button className="social">github</button>
      </a>
     </div>
    </div>
  )
}

export default About
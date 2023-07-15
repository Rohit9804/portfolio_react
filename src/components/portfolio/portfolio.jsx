import React from 'react';
import "./portfolio.css"


const Portfolio = () => {
  return (
    <div className="portfolio" id ="portfolio">
      <h1 className='exp'>What am i doing?</h1>
      <div className="experiences">

        <div className="unofficial">
          
        <div className="clg">
          <h4> ~ Present (july - august) 2023 </h4>
          <h2 className='colorchange'>Deep Learning</h2>
          <h3 className='degree' >currently exploring ML.</h3>
          </div>

        <div className="clg">
          <h4> ~ (june) 2023 </h4>
          <h2 className='colorchange'>Android (Flutter)</h2>
          <h3 className='degree' >Learned Flutter from Angela yu's course.</h3>
          </div>

        <div className="clg">
          <h4> ~ (MAY) 2023 </h4>
          <h2 className='colorchange'>BACKEND + FRONTEND</h2>
          <h3 className='degree' >learned while building projects</h3>
          </div>

        <div className="clg">
          <h4> ~ 2023 (MARCH - APRIL) </h4>
          <h2 className='colorchange'>React.js Developer</h2>
          <h3 className='degree' >Learned react.js from free resources on youtube</h3>
          </div>

        <div className="clg">
          <h4> ~ january(2023) - March(2023) </h4>
          <h2 className='colorchange'>Front-End Developer</h2>
          <h3 className='degree'>learned Front-end Development from Scrimba and free resources on youtube</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
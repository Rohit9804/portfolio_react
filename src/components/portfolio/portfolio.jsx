import React from 'react';
import "./portfolio.css"


const Portfolio = () => {
  return (
    <div className="portfolio" ID ="portfolio">
      <h1 className='exp'>EXPERIENCES</h1>
      <div className="experiences">
        <div className="official">
          
          <div className="clg">
          <h4> ~ present (2022-2026)</h4>
          <h2 >College Btech Degree</h2>
          <h3 className='degree'>Currently studying in Maharaja Agrasen Institte of Technology</h3>
          </div>

          <div className="school">
          <h4>  ~ 2020-2022 </h4>
          <h2 >Highschool (11th-12th)</h2>   
          <h3 className='degree'>Studied in a Sarvodya Vidhyalaya, Civil lines, Delhi</h3>       
          </div>

          <div className="school">
          <h4>  ~ 2010-2020 </h4>
          <h2 > School </h2>   
          <h3 className='degree'>Studied in Rosary Sr. Sec. School, Delhi</h3>       
          </div>

          </div>
        <div className="unofficial">


        <div className="clg">
          <h4> ~ present (MARCH - 2023) </h4>
          <h2>React.js Developer</h2>
          <h3 className='degree' >Learned react.js from free resources on youtube</h3>
          </div>

        <div className="clg">
          <h4> ~ january(2023) - March(2023) </h4>
          <h2>Front-End Developer</h2>
          <h3>learned Front-end Development from Scrimba and free resources on youtube</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
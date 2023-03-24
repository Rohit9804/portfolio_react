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
          <h3 className='degree'>currently studying in Maharaja Agrasen Institte of Technology</h3>
          </div>

          <div className="school">
          <h4>  ~ 2020-2022 </h4>
          <h2 >Highschool (11th-12th)</h2>   
          <h3 className='degree'>studied in a sarvodya vidhyalaya, civil lines, Delhi</h3>       
          </div>

          <div className="school">
          <h4>  ~ 2010-2020 </h4>
          <h2 >School (11th-12th)</h2>   
          <h3 className='degree'>studied in Rosary Sr. Sec. School, delhi</h3>       
          </div>

          </div>
        <div className="unofficial">


        <div className="clg">
          <h4> ~ present (2022 - 2023) </h4>
          <h2>React.js Developer</h2>
          <h3 className='degree' >learned react.js from free resources on youtube</h3>
          </div>

        <div className="clg">
          <h4> ~ december (2022) - february(2023) </h4>
          <h2>Front-End Developer</h2>
          <h3>learned Front-end Development from Scrimba and free resources on youtube</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
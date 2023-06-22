import React from 'react';
import "./portfolio.css"


const Portfolio = () => {
  return (
    <div className="portfolio" id ="portfolio">
      <h1 className='exp'>EXPERIENCES</h1>
      <div className="experiences">
        <div className="official">
          
          <div className="clg">
          <h4> ~ present (2022-2026)</h4>
          <h2 className='colorchange' >College Btech Degree</h2>
          <h3 className='degree'>Currently studying in Maharaja Agrasen Institte of Technology</h3>
          </div>

          <div className="school">
          <h4>  ~ 2020-2022 </h4>
          <h2 className='colorchange' >Highschool (11th-12th)</h2>   
          <h3 className='degree'>Studied in a Sarvodya Vidhyalaya, Civil lines, Delhi</h3>       
          </div>

          <div className="school">
          <h4>  ~ 2010-2020 </h4>
          <h2 className='colorchange' > School </h2>   
          <h3 className='degree'>Studied in Rosary Sr. Sec. School, Delhi</h3>       
          </div>

          </div>
        <div className="unofficial">

        <div className="clg">
          <h4> ~ Present (june - july) 2023 </h4>
          <h2 className='colorchange'>Android (Flutter)</h2>
          <h3 className='degree' >Learned Flutter from Angela yu's cource.</h3>
          </div>

        <div className="clg">
          <h4> ~ (MAY) 2023 </h4>
          <h2 className='colorchange'>BACKEND + FRONTEND</h2>
          <h3 className='degree' >self-Projects learning</h3>
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
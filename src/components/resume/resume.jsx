import React from 'react';
import "./resume.css"


const Resume = () => {
  return (
    <div className="resume" id ="resume">
      <h1 className='someprojectstext'> Here are some of my Projects</h1>
      <h5 className='response'>(--click to see them properly--)</h5>
      <div className="projects">

      <div className="project5">
          <h2>OTAKUPLACE</h2>
          <p className='para' >A Place where weebs can visit when they are finding places to travel (MERN STACK)</p>
          <a href="https://github.com/rohit-sama/OtakuPlace" className="github5__" rel="noreferrer" target="_blank">
            <button className="project5__link">github</button>
          </a>
        </div>
        
        <div className="project1">
          <h2>Movie-app</h2>
          <p className='para'>This is a basic movie app where you can search your favourite movies (React.js)</p>
          <a href="https://github.com/rohit-sama/movie-app_react" className="github__" rel="noreferrer" target="_blank">
            <button className="project1__link">github</button>
          </a>
        </div>

        <div className="project2 pro">
          <h2>Portfolio</h2>
          <p className='para'>This is the portfolio you are seeing which i made using react.js</p>
          <a href="https://github.com/rohit-sama/portfolio_react" className="github2__" rel="noreferrer" target="_blank">
            <button className="project2__link">github</button>
          </a>
        </div>

        <div className="project3 pro">
          <h2>TO-DO APP</h2>
          <p className='para' >This is a ONLY TODO app you will ever need, made with nodejs and MongoDB </p>
          <a href="https://github.com/rohit-sama/backend_project_todo" className="github3__" rel="noreferrer" target="_blank">
            <button className="project3__link">github</button>
          </a>
        </div>

        <div className="project4 pro">
          <h2>Cards-Game</h2>
          <p className='para' >This is a ONLINE game made with pure js and css</p>
          <a href="https://github.com/rohit-sama/roleplay_game" className="github4__" rel="noreferrer" target="_blank">
            <button className="project4__link">github</button>
          </a>
        </div>

        

        <div className="project6 pro">
          <h2>chrome-extension</h2>
          <p className='para' >This is a chrome extension which lets you bookmark your current tab and save things </p>
          <a href="https://github.com/rohit-sama/chrome-extension" className="github__" rel="noreferrer" target="_blank">
            <button className="project1__link">github</button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Resume

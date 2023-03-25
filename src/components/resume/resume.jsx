import React from 'react';
import "./resume.css"


const Resume = () => {
  return (
    <div className="resume" id ="resume">
      <h1 className='someprojectstext'> These are some of my Projects</h1>
      <h5 className='response'>(--click to see them properly--)</h5>
      <div className="projects">

        <div className="project1">
          <h2>Movie-app</h2>
          <p className='para'>This is a basic movie app where you can search your favourite movis</p>
          <a href="https://github.com/Rohit9804/movie-app_react" className="github__" rel="noreferrer" target="_blank">
            <button className="project1__link">github</button>
          </a>
        </div>

        <div className="project2 pro">
          <h2>Portfolio</h2>
          <p className='para'>This is a basic portfolio which i made using react.js</p>
          <a href="https://github.com/Rohit9804/portfolio_react" className="github2__" rel="noreferrer" target="_blank">
            <button className="project2__link">github</button>
          </a>
        </div>

        <div className="project3 pro">
          <h2>Restaurant-app</h2>
          <p className='para' >This is a basic food app where you can order your fav food</p>
          <a href="https://github.com/Rohit9804/restaurant-ordering-app" className="github3__" rel="noreferrer" target="_blank">
            <button className="project3__link">github</button>
          </a>
        </div>

        <div className="project4 pro">
          <h2>Cards-Game</h2>
          <p className='para' >This is a basic CARD game app</p>
          <a href="https://github.com/Rohit9804/war-game-api" className="github4__" rel="noreferrer" target="_blank">
            <button className="project4__link">github</button>
          </a>
        </div>

        <div className="project5">
          <h2>game-wizards</h2>
          <p className='para' >this is a basic game for gamers made with vanila js and pure css</p>
          <a href="https://github.com/Rohit9804/bluejack-game" className="github5__" rel="noreferrer" target="_blank">
            <button className="project5__link">github</button>
          </a>
        </div>

        <div className="project6 pro">
          <h2>chrome-extension</h2>
          <p className='para' >this is a chrome extension which lets you bookmark your current tab and save things </p>
          <a href="https://github.com/Rohit9804/chrome-extension" className="github__" rel="noreferrer" target="_blank">
            <button className="project1__link">github</button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Resume
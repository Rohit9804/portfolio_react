import React from 'react';
import "./resume.css"


const Resume = () => {
  return (
    <div className="resume" id ="resume">
      <h1> These are some of my Projects</h1>
      <div className="projects">

        <div className="project1">
          <h2>movie-app</h2>
          <p>this is a basic movie app</p>
          <a href="https://github.com/Rohit9804/movie-app_react" className="github__" rel="noreferrer" target="_blank">
            <button className="project1__link">github</button>
          </a>
        </div>

        <div className="project2 pro">
          <h2>portfolio</h2>
          <p>this is a basic portfolio app</p>
          <a href="https://github.com/Rohit9804/portfolio_react" className="github2__" rel="noreferrer" target="_blank">
            <button className="project2__link">github</button>
          </a>
        </div>

        <div className="project3 pro">
          <h2>Restaurant-app</h2>
          <p>this is a basic food app</p>
          <a href="https://github.com/Rohit9804/restaurant-ordering-app" className="github3__" rel="noreferrer" target="_blank">
            <button className="project3__link">github</button>
          </a>
        </div>

        <div className="project4 pro">
          <h2>cards-game</h2>
          <p>this is a basic game app</p>
          <a href="https://github.com/Rohit9804/war-game-api" className="github4__" rel="noreferrer" target="_blank">
            <button className="project4__link">github</button>
          </a>
        </div>

        <div className="project5">
          <h2>game-wizards</h2>
          <p>this is a basic game for gamers</p>
          <a href="https://github.com/Rohit9804/bluejack-game" className="github5__" rel="noreferrer" target="_blank">
            <button className="project5__link">github</button>
          </a>
        </div>

        <div className="project6 pro">
          <h2>chrome-extension</h2>
          <p>this is a basic movie app</p>
          <a href="https://github.com/Rohit9804/chrome-extension" className="github__" rel="noreferrer" target="_blank">
            <button className="project1__link">github</button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Resume
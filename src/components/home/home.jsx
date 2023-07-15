import React from "react";
import "./home.css";
import Headersocial from "./headersocial";

const Home = () => {


  return (
    <>
      <div className="homepage" id="home">
        <div className="start">
        <i className="fa-solid fa-arrow-left"></i>
        <h3 className="infoMore">
          click the links in the left section for more INFORMATION.
        </h3>
        </div>
        <img src="https://pbs.twimg.com/profile_images/1656320302379593728/_An0HOdn_400x400.jpg" alt="ok" className="home__page" />
        <h1 className="hello">ROHIT SINGH</h1>
        <span className="education">I Develop Web and Mobile Apps</span>
        <Headersocial /> 
         <a href="mailto:rohit9804singh@gmail.com"  className="contactme">contact me</a>       
      </div>
    </>
    
  );
};
export default Home;
